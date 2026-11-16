"use server";

import { prisma } from "@/lib/prisma";
import { userSchema, UserFormData } from "@/lib/schemas/user";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export async function createUser(data: UserFormData) {
  try {
    // Validasi ulang di server (jaga-jaga jika ada yang bypass frontend)
    const validatedData = userSchema.parse(data);

    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return { success: false, error: "Email sudah terdaftar!" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Simpan ke Database
    await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
        role: "MANAGER", // Default role
      },
    });

    // Refresh halaman utama agar data baru langsung muncul
    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: "Terjadi kesalahan pada server." };
  }
}
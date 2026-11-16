"use server";

import { prisma } from "@/lib/prisma";
import { userAdminSchema, UserAdminFormData } from "@/lib/schemas/userAdmin";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/session";

// Fungsi bantuan untuk cek apakah yang akses adalah ADMIN
async function checkAdmin() {
  const session = await getSession();
  if (session?.role !== "ADMIN") {
    throw new Error("Akses ditolak. Hanya Admin yang bisa melakukan ini.");
  }
}

export async function createUserAdmin(data: UserAdminFormData) {
  try {
    await checkAdmin();
    const validatedData = userAdminSchema.parse(data);

    if (!validatedData.password || validatedData.password.length < 6) {
      return { success: false, error: "Password wajib diisi minimal 6 karakter untuk user baru." };
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });
    if (existingUser) return { success: false, error: "Email sudah terdaftar." };

    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
        role: validatedData.role,
      },
    });

    revalidatePath("/admin/users");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Gagal membuat user." };
  }
}

export async function updateUserAdmin(id: string, data: UserAdminFormData) {
  try {
    await checkAdmin();
    const validatedData = userAdminSchema.parse(data);

    const updateData: any = {
      name: validatedData.name,
      email: validatedData.email,
      role: validatedData.role,
    };

    // Jika password diisi, berarti admin ingin mereset password
    if (validatedData.password && validatedData.password.length > 0) {
      if (validatedData.password.length < 6) {
        return { success: false, error: "Password baru minimal 6 karakter." };
      }
      updateData.password = await bcrypt.hash(validatedData.password, 10);
    }

    await prisma.user.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/users");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Gagal memperbarui user." };
  }
}

export async function deleteUserAdmin(id: string) {
  try {
    await checkAdmin();
    
    // Cegah admin menghapus akunnya sendiri
    const session = await getSession();
    const userToDelete = await prisma.user.findUnique({ where: { id } });
    
    if (userToDelete?.email === session?.email) {
      return { success: false, error: "Anda tidak bisa menghapus akun Anda sendiri." };
    }

    await prisma.user.delete({ where: { id } });
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message || "Gagal menghapus user." };
  }
}
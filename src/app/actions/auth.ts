"use server";

import { prisma } from "@/lib/prisma";
import { encrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email dan password wajib diisi!" };
  }

  // Cari user di database
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return { error: "Email atau password salah!" };
  }

  // Cek password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return { error: "Email atau password salah!" };
  }

  // Buat Session
  const session = await encrypt({ userId: user.id, role: user.role });
  
  // Simpan di Cookie (HttpOnly = tidak bisa diakses Javascript, sangat aman)
  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 hari
    path: "/",
  });

  redirect("/admin");
}

export async function logoutAction() {
    (await cookies()).delete("session");
    redirect("/login");
}
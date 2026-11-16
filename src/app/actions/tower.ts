"use server";

import { prisma } from "@/lib/prisma";
import { towerSchema, TowerFormData } from "@/lib/schemas/tower";
import { revalidatePath } from "next/cache";

export async function createTower(data: TowerFormData) {
  try {
    const validatedData = towerSchema.parse(data);

    await prisma.tower.create({
      data: {
        name: validatedData.name,
        slug: validatedData.slug,
      },
    });

    revalidatePath("/admin/towers");
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error(error);
    // Menangani error jika slug sudah ada di database
    if (error.code === 'P2002') {
      return { success: false, error: "Slug sudah digunakan. Gunakan nama lain." };
    }
    return { success: false, error: "Gagal menambahkan tower." };
  }
}

export async function updateTower(id: string, data: TowerFormData) {
  try {
    const validatedData = towerSchema.parse(data);

    await prisma.tower.update({
      where: { id },
      data: {
        name: validatedData.name,
        slug: validatedData.slug,
      },
    });

    revalidatePath("/admin/towers");
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error(error);
    if (error.code === 'P2002') {
      return { success: false, error: "Slug sudah digunakan oleh tower lain." };
    }
    return { success: false, error: "Gagal memperbarui tower." };
  }
}

export async function deleteTower(id: string) {
  try {
    // Prisma akan menolak hapus jika masih ada Zone di dalamnya
    await prisma.tower.delete({ where: { id } });
    revalidatePath("/admin/towers");
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error(error);
    if (error.code === 'P2003') {
      return { success: false, error: "Tidak bisa menghapus Tower. Hapus semua Zona di dalamnya terlebih dahulu!" };
    }
    return { success: false, error: "Gagal menghapus tower." };
  }
}
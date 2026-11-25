"use server";

import { prisma } from "@/lib/prisma";
import { zoneSchema, ZoneFormData } from "@/lib/schemas/zone";
import { revalidatePath } from "next/cache";

export async function createZone(data: ZoneFormData) {
  try {
    const validatedData = zoneSchema.parse(data);
    const { image, ...zoneData } = validatedData;

    await prisma.zone.create({
      data: {
        ...zoneData,
        towerId: zoneData.towerId as string,
        // Simpan galeri gambar (jika ada)
        images: {
          create: image?.map((url) => ({ imageUrl: url })) || [],
        },
      },
    });

    revalidatePath("/admin/zones");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal menambahkan zona baru." };
  }
}

export async function updateZone(id: string, data: ZoneFormData) {
  try {
    const validatedData = zoneSchema.parse(data);
    const { image, ...zoneData } = validatedData;

    await prisma.zone.update({
      where: { id },
      data: {
        ...zoneData,
        // Hapus gambar lama, lalu buat yang baru (metode paling mudah untuk update galeri)
        images: {
          deleteMany: {},
          create: image?.map((url) => ({ imageUrl: url })) || [],
        },
      },
    });

    revalidatePath("/admin/zones");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal memperbarui data zona." };
  }
}

export async function deleteZone(id: string) {
  // ... (biarkan fungsi deleteZone yang sudah ada)
}
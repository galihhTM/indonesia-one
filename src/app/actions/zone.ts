"use server";

import { prisma } from "@/lib/prisma";
import { zoneSchema, ZoneFormData } from "@/lib/schemas/zone";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateZone(id: string, data: ZoneFormData) {
  try {
    const validatedData = zoneSchema.parse(data);

    await prisma.zone.update({
      where: { id },
      data: {
        categoryName: validatedData.categoryName,
        floorsRange: validatedData.floorsRange,
        points: validatedData.points,
        imageUrl: validatedData.imageUrl,
      },
    });

    revalidatePath("/admin/zones");
    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error("Error update zone:", error);
    return { success: false, error: "Gagal menyimpan data zona." };
  }
}

export async function createZone(data: ZoneFormData) {
  try {
    const validatedData = zoneSchema.parse(data);

    await prisma.zone.create({
      data: {
        towerId: validatedData.towerId,
        categoryName: validatedData.categoryName,
        floorsRange: validatedData.floorsRange,
        points: validatedData.points,
        imageUrl: validatedData.imageUrl,
      },
    });

    revalidatePath("/admin/zones");
    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error("Error create zone:", error);
    return { success: false, error: "Gagal menambahkan zona baru." };
  }
}

export async function deleteZone(id: string) {
  try {
    await prisma.zone.delete({ where: { id } });
    revalidatePath("/admin/zones");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal menghapus zona." };
  }
}
"use server";

import { prisma } from "@/lib/prisma";
import { unitTypeSchema, UnitTypeFormData } from "@/lib/schemas/unitType";
import { revalidatePath } from "next/cache";

export async function createUnitType(
  facilityId: string, 
  data: UnitTypeFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const validatedData = unitTypeSchema.parse(data);

    await prisma.unitType.create({
      data: {
        facilityId,
        ...validatedData,
      },
    });

    revalidatePath(`/admin/facilities/${facilityId}/units`);
    revalidatePath("/admin/units");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal menambahkan tipe unit." };
  }
}

export async function updateUnitTypeImages(id: string, images: string[]) {
  try {
    await prisma.unitType.update({
      where: { id },
      data: { images },
    });

    revalidatePath(`/admin/units/${id}/images`);
    revalidatePath(`/admin/facilities/${id}/units`); // Refresh halaman list
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal memperbarui gambar unit." };
  }
}

export async function updateUnitType(id: string, facilityId: string, data: UnitTypeFormData) {
  try {
    const validatedData = unitTypeSchema.parse(data);

    await prisma.unitType.update({
      where: { id },
      data: {
        name: validatedData.name,
        category: validatedData.category,
        totalUnits: validatedData.totalUnits,
        areaSGA: validatedData.areaSGA,
        description: validatedData.description,
        images: validatedData.images, 
      },
    });

    revalidatePath(`/admin/facilities/${facilityId}/units`);
    revalidatePath(`/admin/units`);
    revalidatePath("/");
    
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal memperbarui tipe unit." };
  }
}

export async function deleteUnitType(id: string, facilityId: string) {
  try {
    await prisma.unitType.delete({ where: { id } });
    revalidatePath(`/admin/facilities/${facilityId}/units`);
    revalidatePath("/admin/units");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Gagal menghapus tipe unit." };
  }
}
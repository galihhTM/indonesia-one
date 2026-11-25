"use server";

import { prisma } from "@/lib/prisma";
import { facilitySchema, FacilityFormData } from "@/lib/schemas/facility";
import { revalidatePath } from "next/cache";

export async function createFacility(zoneId: string, data: FacilityFormData) {
  try {
    const validatedData = facilitySchema.parse(data);

    await prisma.facility.create({
      data: {
        zoneId: zoneId,
        title: validatedData.title,
        category: validatedData.category,
        description: validatedData.description,
      },
    });

    revalidatePath(`/admin/zones/${zoneId}/facilities`);
    revalidatePath("/"); // Agar frontend langsung terupdate
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal menambahkan fasilitas." };
  }
}

export async function deleteFacility(id: string, zoneId: string) {
  try {
    await prisma.facility.delete({ where: { id } });
    
    revalidatePath(`/admin/zones/${zoneId}/facilities`);
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal menghapus fasilitas." };
  }
}

export async function addFacilityImage(facilityId: string, imageUrl: string, isPrimary: boolean = false) {
  try {
    // Jika gambar baru di-set primary, matikan primary gambar lain
    if (isPrimary) {
      await prisma.facilityImage.updateMany({
        where: { facilityId },
        data: { isPrimary: false }
      });
    }

    await prisma.facilityImage.create({
      data: {
        facilityId,
        imageUrl,
        isPrimary,
      }
    });

    revalidatePath(`/admin/facilities/${facilityId}/images`);
    revalidatePath(`/facilities/${facilityId}`);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal menambahkan gambar." };
  }
}

export async function updateFacility(id: string, data: FacilityFormData) {
  try {
    const validatedData = facilitySchema.parse(data);

    await prisma.facility.update({
      where: { id },
      data: {
        title: validatedData.title,
        category: validatedData.category,
        description: validatedData.description,
      },
    });

    revalidatePath("/admin/zones");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Gagal memperbarui fasilitas." };
  }
}

export async function deleteFacilityImage(id: string, facilityId: string) {
  try {
    await prisma.facilityImage.delete({ where: { id } });
    revalidatePath(`/admin/facilities/${facilityId}/images`);
    revalidatePath(`/facilities/${facilityId}`);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Gagal menghapus gambar." };
  }
}
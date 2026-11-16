import { z } from "zod";

export const facilitySchema = z.object({
    title: z.string().min(3, "Nama fasilitas minimal 3 karakter"),
    category: z.string().min(3, "Kategori wajib diisi (cth: Wellness, Residential)"),
    description: z.string().optional(),
});

export type FacilityFormData = z.infer<typeof facilitySchema>;
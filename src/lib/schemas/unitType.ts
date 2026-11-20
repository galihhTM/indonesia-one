import { z } from "zod";

export const unitTypeSchema = z.object({
  name: z.string().min(2, "Nama unit minimal 2 karakter"),
  category: z.string().min(2, "Kategori wajib diisi"),
  totalUnits: z.coerce.number().optional(),
  areaSGA: z.coerce.number().optional(),
  description: z.string().optional(),
  imageUrl: z.string().min(1, "Gambar wajib diunggah"),
});

export type UnitTypeFormData = z.infer<typeof unitTypeSchema>;
import { z } from "zod";

export const unitTypeSchema = z.object({
  name: z.string().min(2, "Nama unit minimal 2 karakter"),
  category: z.string().min(2, "Kategori wajib diisi"),
  totalUnits: z.preprocess((val) => val === "" ? undefined : Number(val), z.number().optional()),
  areaSGA: z.preprocess((val) => val === "" ? undefined : Number(val), z.number().optional()),
  description: z.string().optional(),
  images: z.array(z.string()).min(1, "Minimal 1 gambar harus diunggah"), 
});

export type UnitTypeFormData = z.infer<typeof unitTypeSchema>;
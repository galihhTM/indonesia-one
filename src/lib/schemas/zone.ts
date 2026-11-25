import { z } from "zod";

export const zoneSchema = z.object({
  towerId: z.string().min(1, "Tower wajib dipilih").optional(),
  categoryName: z.string().min(3, "Nama zona minimal 3 karakter"),
  floorsRange: z.string().min(3, "Lantai minimal 3 karakter"),
  points: z.string().min(1, "Kode SVG Path wajib diisi"),
  imageUrl: z.string().min(1, "URL Gambar wajib diisi"),
  image: z.array(z.string()).optional(), ///ini yang baru di tambahain
});

export type ZoneFormData = z.infer<typeof zoneSchema>;
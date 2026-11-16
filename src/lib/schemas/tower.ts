import { z } from "zod";

export const towerSchema = z.object({
  name: z.string().min(3, "Nama tower minimal 3 karakter"),
  slug: z.string().min(3, "Slug minimal 3 karakter").regex(/^[a-z0-9-]+$/, "Slug hanya boleh berisi huruf kecil, angka, dan tanda minus (-)"),
});

export type TowerFormData = z.infer<typeof towerSchema>;
import { z } from "zod";

export const userAdminSchema = z.object({
    name: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.string().email("Format email tidak valid"),
    password: z.string().optional(), // Opsional saat edit, wajib saat create (divalidasi di action)
    role: z.enum(["ADMIN", "MANAGER"]),
});

export type UserAdminFormData = z.infer<typeof userAdminSchema>;
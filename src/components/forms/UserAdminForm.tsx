"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userAdminSchema, UserAdminFormData } from "@/lib/schemas/userAdmin";
import { createUserAdmin, updateUserAdmin } from "@/app/actions/userAdmin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Save, ArrowLeft, Key, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function UserAdminForm({ initialData }: { initialData?: any }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const isEditing = !!initialData;

    const [ showPassword, setShowPassword ] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserAdminFormData>({
        resolver: zodResolver(userAdminSchema),
        defaultValues: {
        name: initialData?.name || "",
        email: initialData?.email || "",
        role: initialData?.role || "MANAGER",
        password: "",
        },
    });

    const onSubmit = async (data: UserAdminFormData) => {
        setIsLoading(true);
        try {
        const result = isEditing 
            ? await updateUserAdmin(initialData.id, data)
            : await createUserAdmin(data);
        
        if (result.success) {
            toast.success(isEditing ? "User diperbarui!" : "User berhasil ditambahkan!");
            router.push("/admin/users");
            router.refresh();
        } else {
            toast.error(result.error);
        }
        } catch (error) {
        toast.error("Terjadi kesalahan sistem.");
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6 max-w-2xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input 
                {...register("name")} 
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800" 
                placeholder="Nama Lengkap" 
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
                {...register("email")} 
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800" 
                placeholder="nama@indonesia1.id" 
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <Key className="w-4 h-4 text-blue-500"/>
                    {isEditing ? "Reset Password (Opsional)" : "Password"}
                </label>

                <div className="relative">
                    <input 
                    {...register("password")} 
                    type={showPassword ? "text" : "password"}
                    className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800" 
                    placeholder={isEditing ? "Biarkan kosong jika tidak diubah" : "Minimal 6 karakter"} 
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                    {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                    ) : (
                        <Eye className="w-5 h-5" />
                    )}
                    </button>
                </div>

                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select 
                {...register("role")} 
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 bg-white"
            >
                <option value="MANAGER">MANAGER (Hanya bisa kelola konten)</option>
                <option value="ADMIN">ADMIN (Akses penuh)</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}
            </div>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <button 
            type="submit" 
            disabled={isLoading}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
            <Save className="w-4 h-4" />
            {isLoading ? "Menyimpan..." : "Simpan User"}
            </button>
            
            <Link href="/admin/users" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2.5">
            <ArrowLeft className="w-4 h-4" /> Batal
            </Link>
        </div>
        </form>
    );
}
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, UserFormData } from "@/lib/schemas/user";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import { createUser } from "@/app/actions/user"; 

export default function UserForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserFormData) => {
    setIsLoading(true);

    const result = await createUser(data);

    if (result.success) {
      alert("User berhasil ditambahkan!");
      reset();
    } else {
      alert(result.error);
    }

    setIsLoading(false);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6 bg-gray-800 rounded-xl border border-gray-700 w-full max-w-md">
      <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <UserPlus className="w-5 h-5 text-blue-400" />
        Tambah User Baru
      </h2>

      <div>
        <input {...register("name")} placeholder="Nama Lengkap" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500" />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <input {...register("email")} placeholder="Email" type="email" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500" />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <input {...register("password")} placeholder="Password" type="password" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500" />
        {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold transition-colors disabled:opacity-50">
        {isLoading ? "Menyimpan..." : "Simpan User"}
      </button>
    </form>
  );
}
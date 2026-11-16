"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { facilitySchema, FacilityFormData } from "@/lib/schemas/facility";
import { createFacility } from "@/app/actions/facility";
import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export default function FacilityForm({ zoneId }: { zoneId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FacilityFormData>({
    resolver: zodResolver(facilitySchema),
  });

  const onSubmit = async (data: FacilityFormData) => {
    setIsLoading(true);
    const result = await createFacility(zoneId, data);
    
    if (result.success) {
      reset(); // Kosongkan form
      toast.success("Fasilitas berhasil ditambahkan!");
    } else {
      toast.error(result.error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 space-y-4">
      <h3 className="font-semibold text-gray-800">Tambah Fasilitas Baru</h3>
      
      <div>
        <label className="block text-sm text-gray-600 mb-1">Nama Fasilitas</label>
        <input 
          {...register("title")} 
          placeholder="Contoh: Diamond Residence" 
          className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b2f2a] focus:outline-none text-sm text-gray-800" 
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Kategori</label>
        <input 
          {...register("category")} 
          placeholder="Contoh: Wellness, Residential, F&B" 
          className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b2f2a] focus:outline-none text-sm text-gray-800" 
        />
        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Deskripsi (Opsional)</label>
        <textarea 
          {...register("description")} 
          rows={2}
          placeholder="Penjelasan singkat..." 
          className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b2f2a] focus:outline-none text-sm text-gray-800" 
        />
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="flex items-center justify-center gap-2 w-full bg-[#3b2f2a] text-white px-4 py-2.5 rounded-lg hover:bg-[#3b2f2a]/80 transition text-sm font-medium disabled:opacity-50"
      >
        <Plus className="w-4 h-4" /> {isLoading ? "Menambahkan..." : "Tambah Fasilitas"}
      </button>
    </form>
  );
}
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { facilitySchema, FacilityFormData } from "@/lib/schemas/facility";
import { updateFacility } from "@/app/actions/facility";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function FacilityEditForm({ initialData }: { initialData: any }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FacilityFormData>({
    resolver: zodResolver(facilitySchema),
    defaultValues: {
      title: initialData.title,
      category: initialData.category,
      description: initialData.description || "",
    },
  });

  const onSubmit = async (data: FacilityFormData) => {
    setIsLoading(true);
    const result = await updateFacility(initialData.id, data);
    
    if (result.success) {
      toast.success("Fasilitas berhasil diperbarui!");
      router.push(`/admin/zones/${initialData.zoneId}/facilities`);
      router.refresh();
    } else {
      toast.error(result.error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4 max-w-2xl mx-auto">
      <h3 className="font-bold text-gray-800 text-lg border-b pb-2 mb-4">Edit Fasilitas</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Fasilitas</label>
        <input 
          {...register("title")} 
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800" 
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
        <input 
          {...register("category")} 
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800" 
        />
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi (Opsional)</label>
        <textarea 
          {...register("description")} 
          rows={4}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800" 
        />
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        <button 
          type="submit" 
          disabled={isLoading}
          className="flex items-center gap-2 bg-[#3b2f2a] text-white px-6 py-2.5 rounded-lg hover:bg-black transition disabled:opacity-50 font-medium"
        >
          <Save className="w-4 h-4" /> {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
        
        <Link 
          href={`/admin/zones/${initialData.zoneId}/facilities`} 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2.5"
        >
          <ArrowLeft className="w-4 h-4" /> Batal
        </Link>
      </div>
    </form>
  );
}
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { towerSchema, TowerFormData } from "@/lib/schemas/tower";
import { createTower, updateTower } from "@/app/actions/tower";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Save, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function TowerForm({ initialData }: { initialData?: any }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!initialData;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TowerFormData>({
    resolver: zodResolver(towerSchema),
    defaultValues: {
      name: initialData?.name || "",
      slug: initialData?.slug || "",
    },
  });

  // Auto-generate slug
  const watchName = watch("name");
  useEffect(() => {
    if (!isEditing && watchName) {
      const generatedSlug = watchName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setValue("slug", generatedSlug, { shouldValidate: true });
    }
  }, [watchName, setValue, isEditing]);

  const onSubmit = async (data: TowerFormData) => {
    setIsLoading(true);
    try {
      const result = isEditing 
        ? await updateTower(initialData.id, data)
        : await createTower(data);
      
      if (result.success) {
        toast.success(isEditing ? "Tower diperbarui!" : "Tower ditambahkan!");
        router.push("/admin/towers");
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
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Tower</label>
        <input 
          {...register("name")} 
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b2f2a] focus:outline-none text-gray-800" 
          placeholder="Contoh: South Tower" 
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Slug (Untuk URL)</label>
        <input 
          {...register("slug")} 
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b2f2a] focus:outline-none text-gray-800 bg-gray-50" 
          placeholder="south-tower" 
        />
        {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        <button 
          type="submit" 
          disabled={isLoading}
          className="flex items-center gap-2 bg-[#3b2f2a]/80 text-white px-6 py-2.5 rounded-lg hover:bg-[#3b2f2a] transition disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {isLoading ? "Menyimpan..." : "Simpan"}
        </button>
        
        <Link href="/admin/towers" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2.5">
          <ArrowLeft className="w-4 h-4" /> Batal
        </Link>
      </div>
    </form>
  );
}
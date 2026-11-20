"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { unitTypeSchema, UnitTypeFormData } from "@/lib/schemas/unitType";
import { createUnitType } from "@/app/actions/unitType";
import { useState } from "react";
import { UploadCloud, CheckCircle2, Plus } from "lucide-react";
import Image from "next/image";
import { useUploadThing } from "@/lib/uploadthing";
import { toast } from "sonner";

type UnitTypeFormInput = z.input<typeof unitTypeSchema>;

export default function UnitTypeForm({ facilityId }: { facilityId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // Menggunakan route "zoneImage" yang sudah kita buat sebelumnya
  const { startUpload, isUploading } = useUploadThing("zoneImage");

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<
    UnitTypeFormInput,
    unknown,
    UnitTypeFormData
  >({
    resolver: zodResolver(unitTypeSchema),
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setImagePreview(URL.createObjectURL(file));
    const res = await startUpload([file]);
    
    if (res && res[0]) {
      setValue("imageUrl", res[0].ufsUrl, { shouldValidate: true });
      toast.success("Gambar berhasil diunggah!");
    }
  };

  const onSubmit = async (data: UnitTypeFormData) => {
    setIsLoading(true);
    const result = await createUnitType(facilityId, data);
    
    if (result.success) {
      toast.success("Tipe unit berhasil ditambahkan!");
      reset(); // Kosongkan form
      setImagePreview(null); // Hapus preview
    } else {
      toast.error(result.error);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 space-y-4">
      <h3 className="font-semibold text-gray-800 border-b pb-2 mb-4">Tambah Tipe Unit Baru</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Nama Unit</label>
          <input {...register("name")} placeholder="Cth: Suite A" className="w-full p-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Kategori</label>
          <input {...register("category")} placeholder="Cth: Suite" className="w-full p-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Total Unit</label>
          <input type="number" {...register("totalUnits")} placeholder="Cth: 22" className="w-full p-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Luas SGA (m²)</label>
          <input type="number" step="0.1" {...register("areaSGA")} placeholder="Cth: 428" className="w-full p-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Deskripsi (Opsional)</label>
        <textarea {...register("description")} rows={2} placeholder="Deskripsi singkat unit..." className="w-full p-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Gambar Denah / Unit</label>
        <div className="flex items-center gap-4">
          <label className="flex-1 cursor-pointer bg-gray-50 border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-lg p-4 flex flex-col items-center justify-center transition-colors">
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={isUploading} />
            {isUploading ? (
              <span className="text-blue-600 text-xs font-medium animate-pulse">Mengunggah...</span>
            ) : (
              <>
                <UploadCloud className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-xs text-gray-500">Pilih Gambar</span>
              </>
            )}
          </label>
          {imagePreview && (
            <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200 shrink-0">
              <Image src={imagePreview} alt="Preview" fill className="object-cover" />
              <div className="absolute top-1 right-1 bg-green-500 rounded-full p-0.5">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
            </div>
          )}
        </div>
        <input type="hidden" {...register("imageUrl")} />
        {errors.imageUrl && <p className="text-red-500 text-xs mt-1">{errors.imageUrl.message}</p>}
      </div>

      <button type="submit" disabled={isLoading || isUploading} className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 font-medium mt-4">
        <Plus className="w-4 h-4" /> {isLoading ? "Menyimpan..." : "Tambah Unit"}
      </button>
    </form>
  );
}
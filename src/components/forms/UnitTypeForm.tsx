"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { unitTypeSchema, UnitTypeFormData } from "@/lib/schemas/unitType";
import { createUnitType } from "@/app/actions/unitType";
import { useState } from "react";
import { UploadCloud, Plus, X } from "lucide-react";
import Image from "next/image";
import { useUploadThing } from "@/lib/uploadthing";
import { toast } from "sonner";

type UnitTypeFormInput = z.input<typeof unitTypeSchema>;

export default function UnitTypeForm({ facilityId }: { facilityId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isUploadingGallery, setIsUploadingGallery] = useState(false);
  
  const { startUpload } = useUploadThing("zoneImage");

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<
    UnitTypeFormInput,
    unknown,
    UnitTypeFormData
  >({
    resolver: zodResolver(unitTypeSchema),
    defaultValues: {
      images: [], // Inisialisasi array kosong
    }
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    
    setIsUploadingGallery(true);
    try {
      const res = await startUpload(files);
      if (res) {
        const newUrls = res.map((r) => r?.ufsUrl).filter((url): url is string => !!url);
        if (newUrls.length > 0) {
          const updatedGallery = [...galleryImages, ...newUrls];
          setGalleryImages(updatedGallery);
          setValue("images", updatedGallery, { shouldValidate: true });
          toast.success(`${newUrls.length} gambar berhasil diunggah!`);
        }
      }
    } catch (error) {
      toast.error("Gagal mengunggah gambar.");
    } finally {
      setIsUploadingGallery(false);
      e.target.value = ""; // Reset input
    }
  };

  const removeImage = (index: number) => {
    const updated = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(updated);
    setValue("images", updated, { shouldValidate: true });
  };

    const onSubmit = async (data: UnitTypeFormData) => {
    console.log("Form disubmit:", data);
    setIsLoading(true);
    const result = await createUnitType(facilityId, data);
    
    // Gunakan optional chaining (?.) untuk berjaga-jaga jika result undefined
    if (result?.success) {
      toast.success("Tipe unit berhasil ditambahkan!");
      reset();
      setGalleryImages([]);
    } else {
      // Berikan fallback string jika result.error undefined
      toast.error(result?.error || "Gagal menambahkan unit.");
    }
    setIsLoading(false);
  };

  // Detektor jika ada isian yang tidak valid
  const onInvalid = (errors: any) => {
    console.log("VALIDASI GAGAL:", errors);
    toast.error("Gagal menyimpan. Pastikan gambar sudah diunggah dan isian benar.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 space-y-4">
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

      {/* SECTION GAMBAR */}
      <div className="pt-4 border-t border-gray-200">
        <label className="block text-xs font-medium text-gray-600 mb-2">Gambar Denah / Unit (Bisa lebih dari 1)</label>
        
        <div className="flex flex-wrap gap-3 mb-3">
          {galleryImages.map((url, idx) => (
            <div key={idx} className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 group">
              <Image src={url} alt="Preview" fill className="object-cover" />
              <button 
                type="button" 
                onClick={() => removeImage(idx)}
                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        <label className="flex flex-col items-center justify-center w-full h-24 bg-gray-50 border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-lg cursor-pointer transition-colors">
          <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} disabled={isUploadingGallery} />
          {isUploadingGallery ? (
            <span className="text-blue-600 text-sm font-medium animate-pulse">Mengunggah...</span>
          ) : (
            <>
              <UploadCloud className="w-6 h-6 text-gray-400 mb-2" />
              <span className="text-xs text-gray-500">Pilih satu atau beberapa gambar</span>
            </>
          )}
        </label>
        
        {errors.images && <p className="text-red-500 text-xs mt-1">{errors.images.message}</p>}
      </div>

      <button type="submit" disabled={isLoading || isUploadingGallery} className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 font-medium mt-4">
        <Plus className="w-4 h-4" /> {isLoading ? "Menyimpan..." : "Tambah Unit"}
      </button>
    </form>
  );
}
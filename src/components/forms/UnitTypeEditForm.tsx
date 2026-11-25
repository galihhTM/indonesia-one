"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { unitTypeSchema, UnitTypeFormData } from "@/lib/schemas/unitType";
import { updateUnitType } from "@/app/actions/unitType";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Save, ArrowLeft, UploadCloud, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useUploadThing } from "@/lib/uploadthing";
import { toast } from "sonner";

type UnitTypeFormInput = z.input<typeof unitTypeSchema>;

export default function UnitTypeEditForm({ initialData, facilityId }: { initialData: any, facilityId: string }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadingGallery, setIsUploadingGallery] = useState(false);
  
  const [galleryImages, setGalleryImages] = useState<string[]>(initialData.images || []);
  const { startUpload } = useUploadThing("zoneImage");

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<
    UnitTypeFormInput,
    unknown,
    UnitTypeFormData
  >({
    resolver: zodResolver(unitTypeSchema),
    defaultValues: {
      name: initialData.name,
      category: initialData.category,
      totalUnits: initialData.totalUnits || "", // Gunakan string kosong jika null
      areaSGA: initialData.areaSGA || "", 
      description: initialData.description || "",
      images: initialData.images || [],
    },
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
      e.target.value = "";
    }
  };

  const removeImage = (index: number) => {
    const updated = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(updated);
    setValue("images", updated, { shouldValidate: true });
  };

  const onSubmit = async (data: UnitTypeFormData) => {
    console.log("Data yang akan dikirim:", data);
    setIsLoading(true);
    const result = await updateUnitType(initialData.id, facilityId, data);
    
    if (result.success) {
      toast.success("Tipe unit berhasil diperbarui!");
      router.push(`/admin/facilities/${facilityId}/units`);
      router.refresh();
    } else {
      toast.error(result.error);
    }
    setIsLoading(false);
  };

  // Fungsi ini akan menangkap JIKA ada isian yang tidak valid
  const onInvalid = (errors: any) => {
    console.log("Form tidak valid:", errors);
    toast.error("Gagal menyimpan. Cek kembali isian Anda (pastikan gambar tidak kosong).");
  };

  return (
    // Tambahkan noValidate agar HTML5 tidak memblokir form secara diam-diam
    <form 
      onSubmit={handleSubmit(onSubmit, onInvalid)} 
      noValidate 
      className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 space-y-4"
    >
      <h3 className="font-semibold text-gray-800 border-b pb-2 mb-4">Edit Tipe Unit</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Nama Unit</label>
          <input {...register("name")} className="w-full p-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Kategori</label>
          <input {...register("category")} className="w-full p-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Total Unit</label>
          <input type="number" {...register("totalUnits")} className="w-full p-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Luas SGA (m²)</label>
          <input type="number" step="0.1" {...register("areaSGA")} className="w-full p-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Deskripsi (Opsional)</label>
        <textarea {...register("description")} rows={3} className="w-full p-2.5 rounded-lg border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
      </div>

      {/* SECTION GAMBAR */}
      <div className="pt-4 border-t border-gray-200">
        <label className="block text-xs font-medium text-gray-600 mb-2">Gambar Denah / Unit</label>
        
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
              <span className="text-xs text-gray-500">Tambah gambar baru</span>
            </>
          )}
        </label>
        {errors.images && <p className="text-red-500 text-xs mt-1">{errors.images.message}</p>}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        <button type="submit" disabled={isLoading || isUploadingGallery} className="flex items-center gap-2 bg-[#3b2f2a] text-white px-6 py-2.5 rounded-lg hover:bg-black transition disabled:opacity-50 font-medium">
          <Save className="w-4 h-4" /> {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
        
        <Link href={`/admin/facilities/${facilityId}/units`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2.5">
          <ArrowLeft className="w-4 h-4" /> Batal
        </Link>
      </div>
    </form>
  );
}
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zoneSchema, ZoneFormData } from "@/lib/schemas/zone";
import { updateZone } from "@/app/actions/zone";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Save, ArrowLeft, Code, UploadCloud, CheckCircle2 } from "lucide-react";
import { useUploadThing } from "@/lib/uploadthing";
import { toast } from "sonner"; 
import Link from "next/link";
import Image from "next/image";

export default function ZoneEditForm({ initialData }: { initialData: any }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.imageUrl || null);
  const { startUpload, isUploading } = useUploadThing("zoneImage");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ZoneFormData>({
    resolver: zodResolver(zoneSchema),
    defaultValues: {
      towerId: initialData?.towerId || "", // <--- TAMBAHKAN BARIS INI
      categoryName: initialData?.categoryName || "",
      floorsRange: initialData?.floorsRange || "",
      points: initialData?.points || "",
      imageUrl: initialData?.imageUrl || "",
    },
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

  const onSubmit = async (data: ZoneFormData) => {
    setIsLoading(true);
    try {
      const result = await updateZone(initialData.id, data);
      
      if (result.success) {
        toast.success("Zona diperbarui!");
        router.push("/admin/zones");
        router.refresh();
      } else {
        toast.error(result.error || "Terjadi kesalahan.");
      }
    } catch (error) {
      toast.error("Gagal menyimpan data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Kategori Zona</label>
          <input 
            {...register("categoryName")} 
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b2f2a] focus:outline-none text-gray-800" 
          />
          {errors.categoryName && <p className="text-red-500 text-sm mt-1">{errors.categoryName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rentang Lantai</label>
          <input 
            {...register("floorsRange")} 
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b2f2a] focus:outline-none text-gray-800" 
          />
          {errors.floorsRange && <p className="text-red-500 text-sm mt-1">{errors.floorsRange.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Gambar Interior (Zone Card)</label>
        <div className="flex items-center gap-4">
          <label className="flex-1 cursor-pointer bg-gray-50 border-2 border-dashed border-gray-300 hover:border-[#3b2f2a] rounded-lg p-4 flex flex-col items-center justify-center transition-colors">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageUpload}
              disabled={isUploading}
            />
            {isUploading ? (
              <span className="text-[#3b2f2a] font-medium animate-pulse">Mengunggah...</span>
            ) : (
              <>
                <UploadCloud className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Ganti gambar</span>
              </>
            )}
          </label>

          {imagePreview && (
            <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-200 shadow-sm shrink-0">
              <Image src={imagePreview} alt="Preview" fill className="object-cover" />
              <div className="absolute top-1 right-1 bg-green-500 rounded-full p-0.5">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
            </div>
          )}
        </div>
        <input type="hidden" {...register("imageUrl")} />
        {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
          <Code className="w-4 h-4 text-[#3b2f2a]" /> Kode SVG Path
        </label>
        <textarea 
          {...register("points")} 
          rows={4}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3b2f2a] focus:outline-none text-gray-800 font-mono text-sm" 
        />
        {errors.points && <p className="text-red-500 text-sm mt-1">{errors.points.message}</p>}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        <button 
          type="submit" 
          disabled={isLoading || isUploading}
          className="flex items-center gap-2 bg-[#3b2f2a] text-white px-6 py-2.5 rounded-lg hover:bg-[#3b2f2a]/80 transition disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
        
        <Link href="/admin/zones" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2.5">
          <ArrowLeft className="w-4 h-4" /> Batal
        </Link>
      </div>
    </form>
  );
}
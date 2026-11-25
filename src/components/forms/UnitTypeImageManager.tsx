"use client";

import { useState } from "react";
import { useUploadThing } from "@/lib/uploadthing";
import { updateUnitTypeImages } from "@/app/actions/unitType";
import { UploadCloud, Trash2, Save, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";

export default function UnitTypeImageManager({ 
  unitId, 
  initialImages 
}: { 
  unitId: string; 
  initialImages: string[] 
}) {
  const [images, setImages] = useState<string[]>(initialImages || []);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { startUpload } = useUploadThing("zoneImage");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsUploading(true);
    const res = await startUpload(files);
    
    if (res) {
      const newUrls = res.map((r) => r?.ufsUrl).filter((url): url is string => !!url);
      setImages((prev) => [...prev, ...newUrls]);
      toast.success(`${newUrls.length} gambar ditambahkan ke daftar.`);
    }
    setIsUploading(false);
    e.target.value = "";
  };

  const handleRemove = (indexToRemove: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSave = async () => {
    setIsSaving(true);
    const result = await updateUnitTypeImages(unitId, images);
    
    if (result.success) {
      toast.success("Gambar unit berhasil disimpan!");
    } else {
      toast.error(result.error);
    }
    setIsSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Galeri Gambar Unit</h2>
        <button 
          onClick={handleSave} 
          disabled={isSaving || isUploading}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 font-medium"
        >
          <Save className="w-4 h-4" /> {isSaving ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>

      {/* Area Upload */}
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <UploadCloud className="w-8 h-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500">
            {isUploading ? "Mengunggah..." : "Klik untuk mengunggah gambar baru"}
          </p>
        </div>
        <input 
          type="file" 
          multiple 
          accept="image/*" 
          className="hidden" 
          onChange={handleUpload}
          disabled={isUploading}
        />
      </label>

      {/* Grid Gambar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((url, idx) => (
          <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <Image src={url} alt={`Gambar ${idx}`} fill className="object-cover" />
            <button 
              onClick={() => handleRemove(idx)}
              className="absolute bottom-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <p className="text-center text-gray-500 py-8">Belum ada gambar untuk unit ini.</p>
      )}
    </div>
  );
}
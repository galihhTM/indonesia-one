"use client";

import { useUploadThing } from "@/lib/uploadthing";
import { addFacilityImage, deleteFacilityImage } from "@/app/actions/facility";
import { UploadCloud, Trash2, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

export default function FacilityImageManager({ 
    facilityId, 
    initialImages 
    }: { 
    facilityId: string; 
    initialImages: any[] 
    }) {
    const [isUploading, setIsUploading] = useState(false);
    const { startUpload } = useUploadThing("zoneImage"); // Kita pakai route yang sama

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const res = await startUpload([file]);
        
        if (res && res[0]) {
        // Jika ini gambar pertama, jadikan primary
        const isPrimary = initialImages.length === 0;
        await addFacilityImage(facilityId, res[0].ufsUrl, isPrimary);
        toast.success("Gambar ditambahkan!");
        }
        setIsUploading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Hapus gambar ini?")) return;
        await deleteFacilityImage(id, facilityId);
        toast.success("Gambar dihapus!");
    };

    return (
        <div className="space-y-6">
        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <UploadCloud className="w-10 h-10 text-gray-400 mb-3" />
            <p className="text-sm text-gray-500">
                {isUploading ? "Mengunggah..." : "Klik untuk mengunggah gambar baru"}
            </p>
            </div>
            <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleUpload}
            disabled={isUploading}
            />
        </label>

        {/* Grid Gambar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {initialImages.map((img) => (
            <div key={img.id} className="relative group aspect-square rounded-xl overflow-hidden border border-gray-200">
                <Image src={img.imageUrl} alt="Galeri" fill className="object-cover" />
                
                {/* Label Primary */}
                {img.isPrimary && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Utama
                </div>
                )}

                {/* Tombol Hapus */}
                <button 
                onClick={() => handleDelete(img.id)}
                className="absolute bottom-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                <Trash2 className="w-4 h-4" />
                </button>
            </div>
            ))}
        </div>
        </div>
    );
}
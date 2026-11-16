"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

export default function FacilityHeroImage({ 
    imageUrl, 
    title, 
    category 
    }: { 
    imageUrl?: string | null; 
    title: string; 
    category: string; 
    }) {
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <>
        {/* Gambar Utama */}
        <div className="relative w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
            {imageUrl ? (
            <Image src={imageUrl} alt={title} fill className="object-cover" priority />
            ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <p className="text-gray-500">Belum ada gambar</p>
            </div>
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            {/* Teks Judul & Kategori */}
            <div className="absolute bottom-8 left-6 md:left-8 right-6 md:right-8">
            <span className="inline-block bg-[#973E02] text-black text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                {category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-2">{title}</h1>
            </div>

            {imageUrl && (
            <button 
                onClick={() => setIsZoomed(true)}
                className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all z-10 shadow-lg"
                title="Perbesar Gambar"
            >
                <Maximize2 className="w-5 h-5" />
            </button>
            )}
        </div>

        {isZoomed && imageUrl && (
            <div className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm">
            <button 
                onClick={() => setIsZoomed(false)}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-all z-110"
            >
                <X className="w-6 h-6" />
            </button>
            
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                <Image 
                src={imageUrl} 
                alt={title} 
                fill 
                className="object-contain" // object-contain agar gambar tidak terpotong saat di-zoom
                />
            </div>
            </div>
        )}
        </>
    );
}
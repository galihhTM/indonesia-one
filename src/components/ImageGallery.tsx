"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Plus, Minus, RefreshCw, ZoomIn } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Grid Galeri Utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((imgUrl, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedImage(imgUrl)}
            className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
          >
            <Image
              src={imgUrl}
              alt={`${title} ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized={true}
            />
            {/* Overlay Hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col items-center justify-center gap-2">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-medium tracking-widest uppercase transition-opacity duration-300">
                Click to zoom
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Zoom (Menggunakan logika FacilityHeroImage) */}
      {selectedImage && mounted && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm">
          
          {/* Tombol Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="fixed top-5 right-5 z-[10000] text-white bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-all cursor-pointer"
            aria-label="Tutup Zoom"
          >
            <X className="w-6 h-6" />
          </button>

          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            centerOnInit={true}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Kontrol Zoom di Bawah */}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-4 bg-black/70 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
                  <button
                    onClick={() => zoomOut()}
                    className="text-white hover:text-[#fad06c] transition-colors cursor-pointer"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className="text-white text-xs font-semibold uppercase tracking-widest hover:text-[#fad06c] transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => zoomIn()}
                    className="text-white hover:text-[#fad06c] transition-colors cursor-pointer"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {/* Area Gambar */}
                <TransformComponent
                  wrapperStyle={{ width: "100vw", height: "100vh" }}
                >
                  <div className="w-screen h-screen flex items-center justify-center p-4 sm:p-8">
                    <img
                      src={selectedImage}
                      alt={title}
                      className="max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain pointer-events-none select-none"
                    />
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>,
        document.body
      )}
    </>
  );
}
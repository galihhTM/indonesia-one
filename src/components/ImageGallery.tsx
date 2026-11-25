"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Plus, Minus, RefreshCw, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ImageGallery({ images, title }: { images: string[]; title: string }) {
  // Ubah state menjadi index (angka) agar bisa next/prev
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fitur navigasi keyboard (Kiri, Kanan, ESC)
  useEffect(() => {
    if (selectedIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Grid Galeri Utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((imgUrl, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedIndex(idx)} // Simpan index yang diklik
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
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col items-center justify-center gap-2">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-medium tracking-widest uppercase transition-opacity duration-300">
                Click to zoom
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Zoom */}
      {selectedIndex !== null && mounted && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm">
          
          {/* Tombol Close */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="fixed top-5 right-5 z-[10000] text-white bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-all cursor-pointer"
            aria-label="Tutup Zoom"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Tombol Navigasi Kiri & Kanan (Hanya muncul jika gambar > 1) */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[10000] text-white bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-all cursor-pointer"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[10000] text-white bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-all cursor-pointer"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          {/* Indikator Angka (Misal: 1 / 3) */}
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[10000] text-white/70 text-sm tracking-widest font-medium">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* KEY={selectedIndex} SANGAT PENTING! 
              Ini memaksa library zoom untuk mereset posisi zoom setiap kali gambar berubah */}
          <TransformWrapper
            key={selectedIndex}
            initialScale={1}
            minScale={0.5}
            maxScale={5}
            centerOnInit={true}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-4 bg-black/70 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
                  <button onClick={() => zoomOut()} className="text-white hover:text-[#fad06c] transition-colors cursor-pointer">
                    <Minus className="w-5 h-5" />
                  </button>
                  <button onClick={() => resetTransform()} className="text-white text-xs font-semibold uppercase tracking-widest hover:text-[#fad06c] transition-colors cursor-pointer">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button onClick={() => zoomIn()} className="text-white hover:text-[#fad06c] transition-colors cursor-pointer">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <TransformComponent wrapperStyle={{ width: "100vw", height: "100vh" }}>
                  <div className="w-screen h-screen flex items-center justify-center p-4 sm:p-8">
                    <img
                      src={images[selectedIndex]}
                      alt={`${title} - ${selectedIndex + 1}`}
                      className="max-w-[85vw] max-h-[85vh] w-auto h-auto object-contain pointer-events-none select-none"
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
"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Plus, Minus, RefreshCw, ZoomIn } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function FacilityHeroImage({
  imageUrl,
  title,
}: {
  imageUrl?: string | null;
  title: string;
  category?: string;
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isZoomed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed]);

  return (
    <>
      <div
        onClick={() => imageUrl && setIsZoomed(true)}
        className={`relative mx-auto aspect-square w-65 sm:w-75 md:w-[43vw] md:max-w-100 lg:w-[min(63vh,560px)] xl:w-[min(66vh,600px)] rounded-full overflow-hidden border-2 border-white/15 group ${
          imageUrl ? "cursor-pointer" : ""
        }`}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <p className="text-gray-500 text-sm">Belum ada gambar</p>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

        {imageUrl && (
          <div className="absolute bottom-5 sm:bottom-6 lg:bottom-8 inset-x-0 flex flex-col items-center justify-center gap-1 text-[#fad06c]/75 group-hover:text-[#fad06c] transition-colors pointer-events-none">
            <ZoomIn className="w-4 h-4 opacity-85 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] sm:text-[11px] lg:text-xs tracking-widest lowercase font-medium">
              click to zoom in
            </span>
          </div>
        )}
      </div>

      {/* MODAL ZOOM */}
      {isZoomed &&
        imageUrl &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-9999 bg-black/95 backdrop-blur-sm">
            <button
              onClick={() => setIsZoomed(false)}
              className="fixed top-5 right-5 z-10000 text-white bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-all cursor-pointer"
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
                  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-10000 flex items-center gap-4 bg-black/70 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
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

                  <TransformComponent
                    wrapperStyle={{ width: "100vw", height: "100vh" }}
                  >
                    <div className="w-screen h-screen flex items-center justify-center p-4 sm:p-8">
                      <img
                        src={imageUrl}
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
"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Plus, Minus, RefreshCw } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
        <div className="relative w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
            {imageUrl ? (
            <Image src={imageUrl} alt={title} fill className="object-cover" priority />
            ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <p className="text-gray-500">Belum ada gambar</p>
            </div>
            )}
            
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-8 left-6 md:left-8 right-6 md:right-8">
            <span className="inline-block bg-[#fad06c] text-[#293241] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
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

        {/* MODAL ZOOM */}
        {isZoomed && imageUrl && (
            <div className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex flex-col">
            
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-110">
                <button 
                onClick={() => setIsZoomed(false)}
                className="text-white bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-all"
                >
                <X className="w-6 h-6" />
                </button>
            </div>

            <div className="flex-1 w-full h-full relative overflow-hidden">
                <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
                minScale={0.5}
                maxScale={5} // zoom up to 5x
                centerOnInit={true}
                >
                {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                    {/* Tombol Kontrol Zoom (Untuk Desktop) */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-110 flex items-center gap-4 bg-black/60 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
                        <button onClick={() => zoomOut()} className="text-white hover:text-yellow-500 transition-colors">
                        <Minus className="w-5 h-5" />
                        </button>
                        <button onClick={() => resetTransform()} className="text-white text-xs font-semibold uppercase tracking-widest hover:text-yellow-500 transition-colors">
                        <RefreshCw className="w-4 h-4" />
                        </button>
                        <button onClick={() => zoomIn()} className="text-white hover:text-yellow-500 transition-colors">
                        <Plus className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Gambar yang bisa di-zoom */}
                    <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                        <div className="relative w-screen h-screen flex items-center justify-center">
                        <img 
                            src={imageUrl} 
                            alt={title} 
                            className="max-w-full max-h-full object-contain pointer-events-none select-none" 
                        />
                        </div>
                    </TransformComponent>
                    </>
                )}
                </TransformWrapper>
            </div>

            </div>
        )}
        </>
    );
}
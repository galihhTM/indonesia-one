"use client";

import { useState, useRef } from "react";
import { X, AlignLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ZoneCardProps = {
  zone: any;
  onClose: () => void;
};

export default function ZoneCard({ zone, onClose }: ZoneCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // State untuk mendukung drag menggunakan mouse di desktop
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Gabungkan gambar dari tabel ZoneImage & filter yang kosong agar tidak error src=""
  const rawImages =
    zone.images && zone.images.length > 0
      ? zone.images.map((img: any) => img.imageUrl).filter(Boolean)
      : [];

  const images =
    rawImages.length > 0
      ? rawImages
      : [zone.imageUrl || "/images/zone/zone3.png"];

  // Fungsi scroll halus ke slide tertentu
  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
    setCurrentImageIndex(index);
  };

  // Sinkronkan indikator titik saat user melakukan scroll/swipe manual
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newIndex = Math.round(scrollLeft / clientWidth);
    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex);
    }
  };

  const nextImage = () => {
    const nextIdx = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    scrollToSlide(nextIdx);
  };

  const prevImage = () => {
    const prevIdx = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    scrollToSlide(prevIdx);
  };

  // Handler drag mouse (desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <div className="w-full bg-[#3b2f2a]/85 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20">
      {/* ================= HEADER GAMBAR (SMOOTH SCROLL SLIDER) ================= */}
      <div className="relative h-52 w-full bg-gray-700 group select-none">
        {/* Container Scroll Horizontal */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className={`flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
            isDragging ? "cursor-grabbing snap-none" : "cursor-grab"
          }`}
        >
                    {images.map((imgSrc: string, idx: number) => (
            <div key={idx} className="relative w-full h-full flex-shrink-0 snap-center">
              <Image
                src={imgSrc}
                alt={`${zone.categoryName} - ${idx + 1}`}
                fill
                draggable={false}
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 400px" // <--- 1. TAMBAHKAN INI
                unoptimized={true}                 // <--- 2. TAMBAHKAN INI (Bypass timeout)
              />
            </div>
          ))}
        </div>

        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black hover:scale-110 transition-all duration-300 z-50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tombol Navigasi Kiri & Kanan (Hanya muncul jika gambar > 1) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black transition-all opacity-0 group-hover:opacity-100 z-40"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black transition-all opacity-0 group-hover:opacity-100 z-40"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indikator Titik (Dots) - Bisa diklik juga */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
              {images.map((_: string, idx: number) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Gambar ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "w-4 bg-[#fad06c]"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ================= HEADER INFO ================= */}
      <div className="p-6">
        <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
          <h3 className="text-black font-bold font-serif text-2xl tracking-wider">
            {zone.floorsRange || "Lantai 36 - 50"}
          </h3>
          <span className="text-[10px] text-gray-300 font-bold tracking-widest uppercase">
            {zone.tower?.name || "Tower"}
          </span>
        </div>

        <h4 className="text-white/90 font-sans text-lg mb-4">
          {zone.categoryName}
        </h4>

        <div className="text-xs text-gray-400 font-bold tracking-wider mb-2 uppercase">
          Unit & Fasilitas
        </div>

        <ul className="space-y-3">
          {zone.facilities.map((facility: any) => (
            <li key={facility.id} className="flex items-center justify-between group">
              <Link
                href={`/facilities/${facility.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-200 hover:text-blue-500 transition-all duration-300 group-hover:translate-x-1"
              >
                <AlignLeft className="w-4 h-4 text-[#fad06c]" />
                {facility.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
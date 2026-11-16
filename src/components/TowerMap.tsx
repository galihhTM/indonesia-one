"use client";

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ZoneCard from "./ZoneCard";
import Image from "next/image";

type Facility = { id: string; title: string; category: string };
type Zone = { 
  id: string; 
  categoryName: string; 
  floorsRange: string; 
  points: string | null; 
  imageUrl: string | null; 
  facilities: Facility[]; 
  tower?: { name: string } 
};
type Tower = { id: string; name: string; slug: string; zones: Zone[] };

export default function TowerMap({ towers }: { towers: Tower[] }) {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const container = useRef(null);
  const cardRef = useRef(null);

  const allZones = towers.flatMap((tower) => tower.zones);

  useEffect(() => {
    const handlePopState = () => {
      if (selectedZone) setSelectedZone(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedZone]);

  const handleZoneClick = (zone: Zone) => {
    setSelectedZone(zone);
    try {
      window.history.pushState({ modalOpen: true }, "");
    } catch (error) {}
  };

  const handleClose = () => {
    window.history.back();
  };

  useGSAP(
    () => {
      if (selectedZone) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, scale: 0.95, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "expo.out" }
        );
      }
    },
    { dependencies: [selectedZone], scope: container },
  );

  return (
    <div
      ref={container}
      className="w-full min-h-[100dvh] bg-[#1a1c3b] flex justify-center items-center relative overflow-hidden py-4 md:py-8"
    >
      {/* 
        KUNCI PERBAIKAN: 
        Kita gunakan max-w-full dan max-h-[100dvh] dengan aspect-ratio yang tepat.
        Ini memastikan gambar dan SVG punya ukuran yang SAMA PERSIS, sehingga klik presisi.
      */}
      <div className="relative w-full max-w-[700px] md:max-w-[800px] aspect-[2729/3859] bg-gray-800 lg:rounded-3xl overflow-hidden shadow-2xl mx-4 md:mx-auto">
        
        {/* LOGO */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-24 md:w-32 pointer-events-none">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* GAMBAR UTAMA (Gunakan object-cover agar pas dengan wadah aspect-ratio) */}
        <Image
          src="/images/towers/tower.jpg"
          alt="Twin Towers"
          fill
          className="object-cover"
          priority
        />

        {/* SVG OVERLAY */}
        <svg
          className="absolute inset-0 w-full h-full z-20"
          viewBox="0 0 2729 3859"
          preserveAspectRatio="xMidYMid slice"
        >
          {allZones.map((zone) => {
            const isActive =
              hoveredZone === zone.id || selectedZone?.id === zone.id;

            return (
              <path
                key={zone.id}
                d={zone.points || ""}
                pointerEvents="all"
                // Beri warna putih transparan 1% agar iOS Safari mendeteksi sentuhan
                fill={isActive ? "rgba(59, 130, 246, 0.6)" : "rgba(255, 255, 255, 0.01)"}
                stroke={isActive ? "#3b82f6" : "rgba(255, 255, 255, 0.01)"}
                strokeWidth="5"
                className="cursor-pointer transition-all duration-300 touch-manipulation"
                onMouseEnter={() => setHoveredZone(zone.id)}
                onMouseLeave={() => setHoveredZone(null)}
                onClick={() => handleZoneClick(zone)}
              />
            );
          })}
        </svg>
      </div>

      {/* BACKDROP GELAP */}
      {selectedZone && (
        <div
          className="fixed inset-0 bg-black/40 z-40 animate-backdrop"
          onClick={handleClose} 
        />
      )}

      {/* FLOATING CARD */}
      {selectedZone && (
        <div
          ref={cardRef}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-[400px]"
        >
          <ZoneCard zone={selectedZone} onClose={handleClose} />
        </div>
      )}
    </div>
  );
}
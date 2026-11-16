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
  tower?: { name: string; slug: string } 
};
type Tower = { id: string; name: string; slug: string; zones: Zone[] };

export default function TowerMap({ towers }: { towers: Tower[] }) {
  // State untuk klik (mengunci card)
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  // State untuk hover (muncul sementara)
  const [hoveredZone, setHoveredZone] = useState<Zone | null>(null);
  
  const container = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const allZones = towers.flatMap((tower) => tower.zones);

  // Menentukan zona mana yang sedang aktif (prioritas: yang diklik)
  const activeZone = selectedZone || hoveredZone;

  // Menentukan apakah card harus muncul di kiri atau kanan
  const isNorthTower = activeZone?.tower?.name.toLowerCase().includes("north");
  
  const desktopCardPosition = isNorthTower 
    ? "lg:right-90 lg:mr-10 lg:left-auto" 
    : "lg:left-90 lg:ml-10 lg:right-auto";

  useEffect(() => {
    const handlePopState = () => {
      if (selectedZone) setSelectedZone(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedZone]);

  const handleZoneClick = (zone: Zone) => {
    // Jika zona yang sama diklik lagi, maka batalkan pilihan (toggle)
    if (selectedZone?.id === zone.id) {
      setSelectedZone(null);
    } else {
      setSelectedZone(zone);
      window.history.pushState({ modalOpen: true }, "");
    }
  };

  const handleClose = () => {
    setSelectedZone(null);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  useGSAP(
    () => {
      if (activeZone && cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, scale: 0.95, x: isNorthTower ? 20 : -20 }, // Efek geser dari arah gedung
          { 
            opacity: 1, 
            scale: 1, 
            x: 0, 
            duration: 0.4, 
            ease: "power2.out", 
            clearProps: "transform" 
          }
        );
      }
    },
    { dependencies: [activeZone?.id], scope: container },
  );

  return (
    <div
      ref={container}
      className="w-full min-h-dvh bg-[#1a1c3b] flex justify-center items-center relative overflow-hidden"
    >
      <div className="relative w-full h-dvh lg:h-dvh lg:w-auto lg:aspect-2729/3859 bg-gray-800">
        
        {/* LOGO */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50 w-25 md:w-35 lg:w-45 pointer-events-none">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* BACKGROUND HOME */}
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
            const isActive = activeZone?.id === zone.id;

            return (
              <path
                key={zone.id}
                d={zone.points || ""}
                pointerEvents="all"
                fill={isActive ? "rgba(59, 130, 246, 0.6)" : "transparent"}
                stroke={isActive ? "#3b82f6" : "transparent"}
                strokeWidth="5"
                className="cursor-pointer transition-all duration-300 hover:fill-blue-500/40 hover:stroke-blue-500"
                onMouseEnter={() => setHoveredZone(zone)}
                onMouseLeave={() => setHoveredZone(null)}
                onClick={() => handleZoneClick(zone)}
              />
            );
          })}
        </svg>

        {/* FLOATING CARD */}
        {activeZone && (
          <div
            ref={cardRef}
            className={`fixed lg:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-100 lg:w-95 lg:max-w-none
                        lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 ${desktopCardPosition}`}
          >
            <ZoneCard zone={activeZone} onClose={handleClose} />
          </div>
        )}
      </div>

      {selectedZone && (
        <div
          className="fixed inset-0 bg-black/30 z-40 animate-backdrop lg:hidden"
          onClick={handleClose} 
        />
      )}
    </div>
  );
}
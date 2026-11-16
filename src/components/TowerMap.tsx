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
  tower?: { name: string } // <--- HANYA INI YANG BOLEH ADA (Hapus 'Tower: string;')
};

type Tower = { id: string; name: string; slug: string; zones: Zone[] };

export default function TowerMap({ towers }: { towers: Tower[] }) {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  
  // Tambahkan <HTMLDivElement> agar TS tidak protes
  const container = useRef<HTMLDivElement>(null); 
  const cardRef = useRef<HTMLDivElement>(null);

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
    } catch (error) {
      console.warn("pushState error:", error);
    }
  };

  const handleClose = () => {
    window.history.back();
  };

  useGSAP(
    () => {
      if (selectedZone && cardRef.current) { // Tambahkan cardRef.current pengecekan
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, scale: 0.95, y: 20 }, 
          { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            duration: 0.6, 
            ease: "expo.out", 
            clearProps: "transform" 
          }
        );
      }
    },
    { dependencies: [selectedZone], scope: container },
  );

  useGSAP(
    () => {
      const isDesktop = window.matchMedia("(hover: hover)").matches;
      if (!selectedZone && isDesktop) {
        gsap.to(".clickable-zone", {
          fill: "rgba(59, 130, 246, 0.3)",
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          stagger: 0.2,
          ease: "sine.inOut",
        });
      } else {
        gsap.killTweensOf(".clickable-zone");
      }
    },
    { dependencies: [selectedZone] },
  );

  return (
    <div
      ref={container}
      className="w-full min-h-dvh bg-[#1a1c3b] flex justify-center items-start relative overflow-hidden"
    >
      <div className="relative w-full h-dvh bg-gray-800 lg:h-auto lg:max-w-175 lg:aspect-2729/3859 lg:rounded-3xl lg:overflow-hidden lg:shadow-2xl">
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

        <svg
          className="absolute inset-0 w-full h-full z-20 pointer-events-auto touch-none"
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
                fill={isActive ? "rgba(59, 130, 246, 0.6)" : "rgba(255, 255, 255, 0.01)"}
                stroke={isActive ? "#3b82f6" : "rgba(255, 255, 255, 0.01)"}
                strokeWidth={isActive ? "5" : "15"}
                className="cursor-pointer transition-all duration-300"
                onPointerDown={() => handleZoneClick(zone)}
                onMouseEnter={() => setHoveredZone(zone.id)}
                onMouseLeave={() => setHoveredZone(null)}
              />
            );
          })}
        </svg>
      </div>

      {selectedZone && (
        <div
          className="fixed inset-0 bg-black/30 z-40 animate-backdrop"
          onClick={handleClose} 
        />
      )}

      {selectedZone && (
        <div
          ref={cardRef}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-115 lg:max-w-100"
        >
          <ZoneCard zone={selectedZone} onClose={handleClose} />
        </div>
      )}
    </div>
  );
}
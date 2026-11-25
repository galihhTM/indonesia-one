"use client";

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ZoneCard from "./ZoneCard";
import Image from "next/image";
import { string } from "zod";

type Facility = { id: string; title: string; category: string };
type Zone = { 
  id: string; 
  categoryName: string; 
  floorsRange: string; 
  points: string | null; 
  imageUrl: string | null; 
  facilities: Facility[];
  images?: { id: string; imageUrl: string }[];
  tower?: { name: string; slug: string } 
};
type Tower = { id: string; name: string; slug: string; zones: Zone[] };

export default function TowerMap({ towers }: { towers: Tower[] }) {
  // State untuk klik (mengunci card)
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  // State untuk hover (muncul sementara)
  const [hoveredZone, setHoveredZone] = useState<Zone | null>(null);
  
  const container = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const allZones = towers.flatMap((tower) => tower.zones);

  // Menentukan zona mana yang sedang aktif (prioritas: yang diklik)
  const activeZone = selectedZone || hoveredZone;

  const desktopCardPosition = "lg:left-64 lg:right-auto";

  useEffect(() => {
    const el = scrollRef.current;
    if (el && window.innerWidth < 768) {
      const targetX = el.scrollWidth * 0.67 - el.clientWidth / 2;
      el.scrollTo({ left: Math.max(0, targetX), behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (selectedZone) setSelectedZone(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedZone]);

  const handleZoneClick = (zone: Zone) => {
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
          { opacity: 0, scale: 0.95, x: -20 },
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
      className="w-full h-dvh bg-[#1a1c3b] relative overflow-hidden"
    >
      <div 
        aria-hidden="true"
        className="absolute top-0 left-0 w-72 h-44 bg-linear-to-br from-black/40 via-black/15 to-transparent z-30 pointer-events-none"
      />

      {/* LOGO */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50 w-25 md:w-35 lg:w-45 pointer-events-none">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={200}
          height={80}
          className="w-full h-auto object-contain brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* WRAPPER */}
      <div
        ref={scrollRef}
        className="w-full h-dvh overflow-x-auto overflow-y-hidden md:overflow-hidden"
      >
        <div className="relative h-dvh aspect-1449/1086 shrink-0 md:w-full md:aspect-auto">
          {/* BACKGROUND HOME */}
          <Image
            src="/images/towers/tower-home.jpg"
            alt="Twin Towers"
            fill
            className="object-cover"
            priority
          />

          {/* SVG OVERLAY */}
          <svg
            className="absolute inset-0 w-full h-full z-20"
            viewBox="0 0 1449 1086"
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
        </div>
      </div>

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

      {selectedZone && (
        <div
          className="fixed inset-0 bg-black/30 z-40 animate-backdrop lg:hidden"
          onClick={handleClose} 
        />
      )}
    </div>
  );
}
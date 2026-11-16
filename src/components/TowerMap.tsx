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
    window.history.pushState({ modalOpen: true }, "");
  };

  const handleClose = () => {
    window.history.back();
  };

  useGSAP(
    () => {
      if (selectedZone && cardRef.current) {
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
      className="w-full min-h-dvh bg-[#1a1c3b] flex justify-center items-start lg:py-12 relative overflow-hidden"
    >
      {/* Wadah Gambar */}
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
                fill={isActive ? "rgba(59, 130, 246, 0.6)" : "transparent"}
                stroke={isActive ? "#3b82f6" : "transparent"}
                strokeWidth="5"
                className="clickable-zone cursor-pointer transition-all duration-500 ease-out hover:fill-blue-500/40 hover:stroke-blue-500 touch-manipulation"
                onMouseEnter={() => setHoveredZone(zone.id)}
                onMouseLeave={() => setHoveredZone(null)}
                onClick={() => handleZoneClick(zone)}
              />
            );
          })}
        </svg>
      </div>

      {selectedZone && (
        <div
          className="fixed inset-0 bg-black/30 z-40 animate-backdrop lg:hidden"
          onClick={handleClose} 
        />
      )}

      {/* FLOATING CARD */}
      {selectedZone && (
        <div
          ref={cardRef}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-100 lg:absolute lg:top-20 lg:-left-16 lg:translate-x-0 lg:translate-y-0 lg:w-auto lg:max-w-[320px]"
        >
          <ZoneCard zone={selectedZone} onClose={handleClose} />
        </div>
      )}
    </div>
  );
}
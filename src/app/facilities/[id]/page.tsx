import type { CSSProperties } from "react";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FacilityHeroImage from "@/components/FacilityHeroImage";
import ImageGallery from "@/components/ImageGallery";
import { Building2, MapPin, LayoutGrid, Maximize } from "lucide-react";

function getArcStyle(
  index: number,
  total: number,
  side: "left" | "right"
): CSSProperties {
  if (total <= 1) {
    return { "--arc-x": "0px", "--arc-x-md": "0px" } as CSSProperties;
  }

  const normalized = (index / (total - 1)) * 2 - 1;
  const maxInset = total === 2 ? 12 : 18;
  const inset = Math.round(Math.pow(normalized, 2) * maxInset);
  const signedValue = side === "left" ? inset : -inset;
  const signedMdValue = Math.round(signedValue * 0.55);

  return {
    "--arc-x": `${signedValue}px`,
    "--arc-x-md": `${signedMdValue}px`,
  } as CSSProperties;
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const facility = await prisma.facility.findUnique({
    where: { id },
    include: {
      zone: { include: { tower: true } },
      images: { orderBy: { sortOrder: "asc" } },
      unitTypes: true,
    },
  });

  if (facility) {
    const primaryImage =
      facility.images.find((img) => img.isPrimary) || facility.images[0];
    const galleryImages = facility.images.filter(
      (img) => img.id !== primaryImage?.id
    );

    const titleWords = facility.title.trim().split(/\s+/);
    const leftArcTotal = titleWords.length + 1;

    const infoItems = [
      {
        key: "tower",
        icon: Building2,
        text: facility.zone.tower.name,
      },
      {
        key: "zone",
        icon: MapPin,
        text: `${facility.zone.categoryName} (${facility.zone.floorsRange})`,
      },
    ];
    const rightArcTotal = infoItems.length + 1;

    return (
      <main className="animate-page min-h-screen bg-[#1a1c3b] text-white overflow-x-hidden">
        <section className="md:min-h-[82vh] lg:min-h-screen flex flex-col justify-between max-w-6xl mx-auto px-5 md:px-6 py-6 md:py-8 lg:py-6">
          {/* LOGO */}
          <div className="w-full flex justify-center shrink-0">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={60}
                className="object-contain w-28 md:w-36 lg:w-32"
              />
            </Link>
          </div>

          {/* HERO 3 KOLOM */}
          <div className="my-auto py-6 md:py-4 lg:py-2 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-4 lg:gap-10">
            {/* CATEGORY & TITLE */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right order-2 md:order-1">
              <div
                style={getArcStyle(0, leftArcTotal, "left")}
                className="mb-3 md:translate-x-(--arc-x-md) lg:translate-x-(--arc-x)transition-transform duration-300"
              >
                <span className="inline-block bg-[#fad06c] text-[#293241] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                  {facility.category}
                </span>
              </div>

              <h1 className="flex flex-col items-center md:items-end font-serif font-bold text-3xl sm:text-4xl md:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.15] tracking-wider uppercase">
                {titleWords.map((word, idx) => (
                  <span
                    key={idx}
                    style={getArcStyle(idx + 1, leftArcTotal, "left")}
                    className="block md:translate-x-(--arc-x-md) lg:translate-x-(--arc-x)transition-transform duration-300"
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            {/* IMAGE */}
            <div className="order-1 md:order-2 flex justify-center">
              <FacilityHeroImage
                imageUrl={primaryImage?.imageUrl}
                title={facility.title}
                category={facility.category}
              />
            </div>

            {/* INFORMATION */}
            <div className="w-fit mx-auto md:w-auto md:mx-0 flex flex-col items-start text-left order-3 space-y-3.5 md:space-y-4">
              <h3
                style={getArcStyle(0, rightArcTotal, "right")}
                className="text-xl md:text-2xl font-semibold text-[#fad06c] tracking-wide md:translate-x-(--arc-x-md) lg:translate-x-[var(--arc-x) transition-transform duration-300"
              >
                Information
              </h3>

              {infoItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.key}
                    style={getArcStyle(idx + 1, rightArcTotal, "right")}
                    className="flex items-center gap-3 lg:gap-3.5 md:translate-x-(--arc-x-md) lg:translate-x-(--arc-x) transition-transform duration-300"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#3b2f2a] border border-[#fad06c]/30 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4 text-[#fad06c]" />
                    </div>
                    <p className="font-medium text-sm sm:text-base md:text-[15px] lg:text-[17px] text-gray-100 leading-snug">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center h-5 text-white/30 text-[11px] tracking-widest uppercase">
            <span>Scroll for details</span>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pt-8 pb-20 space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">
              {facility.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {facility.description ||
                "Deskripsi lengkap untuk fasilitas ini belum ditambahkan."}
            </p>
          </div>

          {/* BUTTON TO UNIT (Kiri) & GALERI (Kanan) */}
          {(facility.unitTypes.length > 0 || galleryImages.length > 0) && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-2">
              {facility.unitTypes.length > 0 && (
                <div className="lg:col-span-4">
                  <h2 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-2">
                    Type Unit
                  </h2>
                  <div className="flex flex-col gap-3.5 max-w-xs">
                    {facility.unitTypes.map((unit) => (
                      <Link
                        key={unit.id}
                        href={`/facilities/${unit.id}`}
                        className="group flex items-center justify-center bg-[#fad06c] border border-white/10 rounded-xl px-5 py-3.5 hover:bg-[#fad06c]/80 transition-all duration-300"
                      >
                        <h3 className="text-xl font-serif text-[#293241] font-bold">
                          {unit.name}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {galleryImages.length > 0 && (
                <div
                  className={
                    facility.unitTypes.length === 0
                      ? "lg:col-span-12"
                      : "lg:col-span-8"
                  }
                >
                  <h2 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-2">
                    Galery
                  </h2>
                    <ImageGallery 
                      images={galleryImages.map((img) => img.imageUrl)} 
                      title={facility.title} 
                    />
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    );
  }

  /* =========================================================
    HALAMAN DETAIL UNIT (Suite A, Suite B, dst.)
     ========================================================= */
  const unit = await prisma.unitType.findUnique({
    where: { id },
    include: {
      facility: {
        include: {
          zone: { include: { tower: true } },
          unitTypes: true,
        },
      },
    },
  });

  if (unit) {
    const siblingUnits = unit.facility.unitTypes;
    const titleWords = unit.name.trim().split(/\s+/);
    const leftArcTotal = titleWords.length + 1;

    const mainImage = unit.images?.[0] || null;
    const galleryImages = unit.images?.slice(1) || [];

    const unitInfoItems = [
      {
        key: "tower",
        icon: Building2,
        text: unit.facility.zone.tower.name,
      },
      {
        key: "zone",
        icon: MapPin,
        text: `${unit.facility.zone.categoryName} (${unit.facility.zone.floorsRange})`,
      },
      ...(unit.totalUnits
        ? [
            {
              key: "totalUnits",
              icon: LayoutGrid,
              text: `${unit.totalUnits} Units`,
            },
          ]
        : []),
      ...(unit.areaSGA
        ? [
            {
              key: "areaSGA",
              icon: Maximize,
              text: `SGA ${unit.areaSGA} M²`,
            },
          ]
        : []),
    ];
    const rightArcTotal = unitInfoItems.length + 1;

    return (
      <main className="animate-page min-h-screen bg-[#1a1c3b] text-white overflow-x-hidden">
        <section className="md:min-h-[82vh] lg:min-h-screen flex flex-col justify-between max-w-6xl mx-auto px-5 md:px-6 py-6 md:py-8 lg:py-6">
          {/* LOGO */}
          <div className="w-full flex justify-center shrink-0">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={60}
                className="object-contain w-28 md:w-36 lg:w-32"
              />
            </Link>
          </div>

          {/* HERO 3 KOLOM */}
          <div className="my-auto py-6 md:py-4 lg:py-2 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-4 lg:gap-10">
            {/* CATEGORY & TITLE */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right order-2 md:order-1">
              <div
                style={getArcStyle(0, leftArcTotal, "left")}
                className="mb-3 md:translate-x-(--arc-x-md) lg:translate-x-(--arc-x) transition-transform duration-300"
              >
                <span className="inline-block bg-[#fad06c] text-[#293241] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                  {unit.category}
                </span>
              </div>

              <h1 className="flex flex-col items-center md:items-end font-serif font-bold text-3xl sm:text-4xl md:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.15] tracking-wider uppercase">
                {titleWords.map((word, idx) => (
                  <span
                    key={idx}
                    style={getArcStyle(idx + 1, leftArcTotal, "left")}
                    className="block md:translate-x-(--arc-x-md) lg:translate-x-(--arc-x) transition-transform duration-300"
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            {/* IMAGE */}
            <div className="order-1 md:order-2 flex justify-center">
              <FacilityHeroImage
                imageUrl={mainImage}
                title={unit.name}
                category={unit.category}
              />
            </div>

            {/* INFORMATION */}
            <div className="w-fit mx-auto md:w-auto md:mx-0 flex flex-col items-start text-left order-3 space-y-3 md:space-y-3.5">
              <h3
                style={getArcStyle(0, rightArcTotal, "right")}
                className="text-xl md:text-2xl font-semibold text-[#fad06c] tracking-wide md:translate-x-(--arc-x-md) lg:translate-x-(--arc-x) transition-transform duration-300"
              >
                Information
              </h3>

              {unitInfoItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.key}
                    style={getArcStyle(idx + 1, rightArcTotal, "right")}
                    className="flex items-center gap-3 lg:gap-3.5 md:translate-x-(--arc-x-md) lg:translate-x-(--arc-x) transition-transform duration-300"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#3b2f2a] border border-[#fad06c]/30 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4 text-[#fad06c]" />
                    </div>
                    <p className="font-medium text-sm sm:text-base md:text-[15px] lg:text-base text-gray-100 leading-snug">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center h-5 text-white/30 text-[11px] tracking-widest uppercase">
            <span>Scroll for details</span>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pt-8 pb-20 space-y-12">
          <div>
            <h2 className="text-3xl font-serif text-white mb-6 border-b border-white/10 pb-4">
              {unit.name}{" "}
              <span className="text-lg text-gray-500 font-sans tracking-normal">
                ({unit.category})
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg text-justify">
              {unit.description ||
                "Deskripsi lengkap untuk unit ini belum ditambahkan."}
            </p>
            {galleryImages.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-2">
                  Galery
                </h2>
                <ImageGallery 
                  images={galleryImages} 
                  title={unit.name} 
                />
              </div>
            )}
          </div>

          {siblingUnits.length > 0 && (
            <div className="max-w-xs">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-2">
                <h2 className="text-2xl font-semibold">Type Unit</h2>
              </div>
              <div className="flex flex-col gap-3">
                {siblingUnits.map((u) => (
                  <Link
                    key={u.id}
                    href={`/facilities/${u.id}`}
                    className={`px-5 py-3.5 rounded-xl font-serif text-xl tracking-wide transition-all duration-300 flex items-center justify-center ${
                      u.id === unit.id
                        ? "bg-[#fad06c] text-[#293241] font-bold"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                  >
                    <span>{u.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    );
  }

  notFound();
}
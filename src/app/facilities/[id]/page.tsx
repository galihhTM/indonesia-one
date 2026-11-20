import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FacilityHeroImage from "@/components/FacilityHeroImage";
import { Building2, MapPin, LayoutGrid, Maximize, DoorOpen, Bath } from "lucide-react";

export default async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const facility = await prisma.facility.findUnique({
    where: { id },
    include: {
      zone: { include: { tower: true } },
      images: { orderBy: { sortOrder: 'asc' } },
      unitTypes: true, // <--- Ambil daftar Unit (Suite A, Suite B)
    }
  });

  if (facility) {
    const primaryImage = facility.images.find(img => img.isPrimary) || facility.images[0];
    const galleryImages = facility.images.filter(img => img.id !== primaryImage?.id);

    return (
      <main className="animate-page min-h-screen bg-[#1a1c3b] text-white">
        {/* LOGO */}
        <div className="w-full flex justify-center lg:justify-center px-6 py-8 max-w-6xl mx-auto">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image src="/images/logo.png" alt="Logo" width={150} height={60} className="object-contain w-32 md:w-40" />
          </Link>
        </div>

        {/* IMAGE */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <FacilityHeroImage 
            imageUrl={primaryImage?.imageUrl} 
            title={facility.title} 
            category={facility.category} 
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">{facility.title}</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {facility.description || "Deskripsi lengkap untuk fasilitas ini belum ditambahkan."}
              </p>
            </div>

            {facility.unitTypes.length > 0 && (
              <div className="pt-6">
                <h2 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-2">Type Unit</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facility.unitTypes.map((unit) => (
                    <Link 
                      key={unit.id}
                      href={`/facilities/${unit.id}`} // Mengarah ke detail unit
                      className="group block bg-[#fad06c] border border-white/10 rounded-xl p-3 hover:bg-[#fad06c]/70 hover:border-[#3b2f2a] transition-all duration-300"
                    >
                      <div className="flex justify-center items-center mb-2">
                        <h3 className="text-xl font-serif text-[#293241] font-bold group-hover:text-[#3b2f2a]-400">{unit.name}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Galery */}
            {galleryImages.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">Galery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((img) => (
                    <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden group">
                      <Image src={img.imageUrl} alt="Galeri" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* KANAN: Info Fasilitas */}
          <div className="lg:col-span-1">
            <div className="bg-[#3b2f2a] text-white border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-6 sticky top-8">
              <h3 className="text-xl font-semibold mb-4">Information</h3>
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-[#fad06c] shrink-0" />
                <div>
                  <p className="font-medium">{facility.zone.tower.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#fad06c] shrink-0" />
                <div>
                  <p className="font-medium">{facility.zone.categoryName} ({facility.zone.floorsRange})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const unit = await prisma.unitType.findUnique({
    where: { id },
    include: {
      facility: {
        include: { 
          zone: { include: { tower: true } },
          unitTypes: true 
        }
      }
    }
  });

  if (unit) {
    const siblingUnits = unit.facility.unitTypes;

    return (
      <main className="animate-page min-h-screen bg-[#1a1c3b] text-white">
        <div className="w-full flex justify-center lg:justify-center px-6 py-8 max-w-6xl mx-auto">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image src="/images/logo.png" alt="Logo" width={150} height={60} className="object-contain w-32 md:w-40" />
          </Link>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-20">
          <FacilityHeroImage 
            imageUrl={unit.imageUrl} 
            title={unit.name} 
            category={unit.category} 
          />

          {/* TAB NAVIGASI PINDAH UNIT */}
          <div className="mt-12 mb-8">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <p className="text-sm text-white uppercase tracking-widest">Type Unit</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {siblingUnits.map((u) => (
                <Link
                  key={u.id}
                  href={`/facilities/${u.id}`}
                  className={`px-6 py-3 rounded-xl font-sans uppercase tracking-widest text-sm transition-all duration-300 ${
                    u.id === unit.id
                      ? "bg-[#fad06c] text-[#293241] scale-105 font-bold"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {u.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-serif text-white mb-6 border-b border-white/10 pb-4">
                  {unit.name} <span className="text-lg text-gray-500 font-sans tracking-normal">({unit.category})</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg text-justify">
                  {unit.description || "Deskripsi lengkap untuk unit ini belum ditambahkan."}
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[#3b2f2a] border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-5 sticky top-8">
                <h3 className="text-xl font-semibold mb-4 border-b border-white/10 pb-3">Information</h3>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <Building2 className="w-5 h-5 text-[#fad06c] shrink-0" />
                  <span>{unit.facility.zone.tower.name}</span>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#fad06c] shrink-0" />
                  <span>{unit.facility.zone.categoryName} ({unit.facility.zone.floorsRange})</span>
                </div>

                {unit.totalUnits && (
                  <div className="flex items-center gap-4 text-gray-300">
                    <LayoutGrid className="w-5 h-5 text-[#fad06c] shrink-0" />
                    <span>{unit.totalUnits} Units</span>
                  </div>
                )}
                
                {unit.areaSGA && (
                  <div className="flex items-center gap-4 text-gray-300">
                    <Maximize className="w-5 h-5 text-[#fad06c] shrink-0" />
                    <span>SGA {unit.areaSGA} M²</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  notFound();
}
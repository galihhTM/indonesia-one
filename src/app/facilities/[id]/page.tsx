import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Building2, MapPin } from "lucide-react";
import FacilityHeroImage from "@/components/FacilityHeroImage"; // <--- Import komponen baru

export default async function FacilityDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;

    const facility = await prisma.facility.findUnique({
        where: { id: resolvedParams.id },
        include: {
        zone: { include: { tower: true } },
        images: { orderBy: { sortOrder: 'asc' } }
        }
    });

    if (!facility) notFound();

    const primaryImage = facility.images.find(img => img.isPrimary) || facility.images[0];
    const galleryImages = facility.images.filter(img => img.id !== primaryImage?.id);

    return (
        <main className="animate-page min-h-screen bg-[#1a1c3b] text-white">
        
        <div className="w-full flex justify-center lg:justify-start px-6 py-8 max-w-6xl mx-auto">
            <Link href="/" className="transition-opacity hover:opacity-80">
            <Image 
                src="/images/logo.png" 
                alt="Indonesia One Logo" 
                width={150} 
                height={60} 
                className="object-contain w-32 md:w-40" 
            />
            </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
            <FacilityHeroImage 
            imageUrl={primaryImage?.imageUrl} 
            title={facility.title} 
            category={facility.category} 
            />
        </div>

        {/* Konten Utama */}
        <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">Tentang Fasilitas</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                {facility.description || "Deskripsi lengkap untuk fasilitas ini belum ditambahkan."}
                </p>
            </div>

            {galleryImages.length > 0 && (
                <div>
                <h2 className="text-2xl font-semibold mb-4 border-b border-white/10 pb-2">Galeri</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((img) => (
                    <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden group">
                        <Image 
                        src={img.imageUrl} 
                        alt="Galeri Fasilitas" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                    </div>
                    ))}
                </div>
                </div>
            )}
            </div>

            {/* Kanan: Info Singkat */}
            <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-6 sticky top-8">
                <h3 className="text-xl font-semibold mb-4">Informasi</h3>
                
                <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-[#973E02] shrink-0" />
                <div>
                    <p className="font-medium">{facility.zone.tower.name}</p>
                </div>
                </div>

                <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#973E02] shrink-0" />
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
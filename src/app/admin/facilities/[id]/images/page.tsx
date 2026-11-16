import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FacilityImageManager from "@/components/forms/FacilityImageManager";

export default async function FacilityImagesPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    
    const facility = await prisma.facility.findUnique({
        where: { id: resolvedParams.id },
        include: { 
        images: { orderBy: { sortOrder: 'asc' } },
        zone: true
        }
    });

    if (!facility) notFound();

    return (
        <div className="max-w-5xl mx-auto">
        <Link href="/admin/zones" className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6">
            <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>

        <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Galeri: {facility.title}</h1>
            <p className="text-gray-500">Zona: {facility.zone.categoryName}</p>
        </div>

        <FacilityImageManager facilityId={facility.id} initialImages={facility.images} />
        </div>
    );
}
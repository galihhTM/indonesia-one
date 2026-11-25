import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import FacilityForm from "@/components/forms/FacilityForm";
import DeleteFacilityButton from "@/components/DeleteFacilityButton";
import Link from "next/link";
import { ArrowLeft, AlignLeft } from "lucide-react";

export default async function ZoneFacilitiesPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;

    const zone = await prisma.zone.findUnique({
        where: { id: resolvedParams.id },
        include: { 
        facilities: true,
        tower: true 
        },
    });

    if (!zone) notFound();

    return (
        <div className="max-w-5xl mx-auto">
        <Link href="/admin/zones" className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Zona
        </Link>

        <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Kelola Fasilitas</h1>
            <p className="text-gray-500">
            Zona: <span className="font-semibold text-[#3b2f2a]">{zone.categoryName}</span> ({zone.tower.name} - {zone.floorsRange})
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
            <FacilityForm zoneId={zone.id} />
            </div>

            <div className="md:col-span-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Daftar Fasilitas ({zone.facilities.length})</h3>
            
            {zone.facilities.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500">Belum ada fasilitas.</p>
                </div>
            ) : (
                <ul className="space-y-3">
                {zone.facilities.map((facility) => (
                    <li key={facility.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
    <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-100 text-[#3b2f2a] rounded-lg mt-0.5">
        <AlignLeft className="w-4 h-4" />
        </div>
        <div>
        <p className="font-semibold text-gray-800">{facility.title}</p>
        <p className="text-xs text-gray-500 uppercase tracking-wider">{facility.category}</p>
        </div>
    </div>
    
    <div className="flex items-center gap-2">
        <Link 
            href={`/admin/facilities/${facility.id}/edit`}
            className="text-xs font-medium bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1.5 rounded-lg transition"
        >
            Edit
        </Link>
        <Link 
        href={`/admin/facilities/${facility.id}/images`}
        className="text-xs font-medium bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-lg transition"
        >
        Kelola Gambar
        </Link>
        <DeleteFacilityButton id={facility.id} zoneId={zone.id} />
    </div>
    </li>
                ))}
                </ul>
            )}
            </div>
        </div>
        </div>
    );
}
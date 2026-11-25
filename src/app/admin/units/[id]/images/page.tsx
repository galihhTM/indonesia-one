import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import UnitTypeImageManager from "@/components/forms/UnitTypeImageManager";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function UnitImagesPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  const unit = await prisma.unitType.findUnique({
    where: { id: resolvedParams.id },
    include: { facility: true },
  });

  if (!unit) notFound();

  return (
    <div className="max-w-5xl mx-auto">
      <Link 
        href={`/admin/facilities/${unit.facilityId}/units`} 
        className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Unit
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Gambar: {unit.name}</h1>
        <p className="text-gray-500">Fasilitas: {unit.facility.title}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <UnitTypeImageManager unitId={unit.id} initialImages={unit.images} />
      </div>
    </div>
  );
}
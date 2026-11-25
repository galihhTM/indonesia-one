import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import UnitTypeForm from "@/components/forms/UnitTypeForm";
import DeleteUnitTypeButton from "@/components/DeleteUnitTypeButton";

export default async function FacilityUnitsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const facility = await prisma.facility.findUnique({
    where: { id: resolvedParams.id },
    include: { unitTypes: true, zone: { include: { tower: true } } },
  });

  if (!facility) notFound();

  return (
    <div className="max-w-6xl mx-auto">
      <Link href="/admin/units" className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6">
        <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Unit
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Tipe Unit: {facility.title}</h1>
        <p className="text-gray-500">Lokasi: {facility.zone.tower.name} - {facility.zone.categoryName}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5">
          <UnitTypeForm facilityId={facility.id} />
        </div>

        <div className="md:col-span-7 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Daftar Unit ({facility.unitTypes.length})</h3>
          {facility.unitTypes.length === 0 ? (
            <p className="text-gray-500 text-sm">Belum ada unit.</p>
          ) : (
            <ul className="space-y-3">
              {facility.unitTypes.map((unit) => (
                <li key={unit.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-800">{unit.name}</p>
                    <p className="text-xs text-gray-500">{unit.areaSGA} m²</p>
                  </div>
                  <Link 
                    href={`/admin/units/${unit.id}/images`}
                    className="text-xs font-medium bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-lg transition"
                  >
                    Kelola Gambar
                  </Link>
                   <Link 
                    href={`/admin/units/${unit.id}/edit`}
                    className="text-xs font-medium bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1.5 rounded-lg transition"
                  >
                    Edit
                  </Link>
                  <DeleteUnitTypeButton id={unit.id} facilityId={facility.id} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
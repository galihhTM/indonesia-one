import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import UnitTypeEditForm from "@/components/forms/UnitTypeEditForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditUnitPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  const unit = await prisma.unitType.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!unit) notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <Link href={`/admin/facilities/${unit.facilityId}/units`} className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6">
        <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Unit
      </Link>
      
      <UnitTypeEditForm initialData={unit} facilityId={unit.facilityId} />
    </div>
  );
}
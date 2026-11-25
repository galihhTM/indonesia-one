import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import FacilityEditForm from "@/components/forms/FacilityEditForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditFacilityPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  const facility = await prisma.facility.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!facility) notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <Link href={`/admin/zones/${facility.zoneId}/facilities`} className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6">
        <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Fasilitas
      </Link>
      
      <FacilityEditForm initialData={facility} />
    </div>
  );
}
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ZoneEditForm from "@/components/forms/ZoneEditForm";

export default async function EditZonePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  const zone = await prisma.zone.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!zone) {
    notFound(); // Tampilkan halaman 404 jika ID tidak ditemukan
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Edit Zona</h1>
      </div>

      <ZoneEditForm initialData={zone} />
    </div>
  );
}
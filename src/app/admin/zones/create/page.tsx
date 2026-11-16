import { prisma } from "@/lib/prisma";
import ZoneCreateForm from "@/components/forms/ZoneCreateForm";

export default async function CreateZonePage() {
  // Ambil daftar Tower dari database untuk dropdown
  const towers = await prisma.tower.findMany({
    select: { id: true, name: true }
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Tambah Zona Baru</h1>
      </div>

      <ZoneCreateForm towers={towers} />
    </div>
  );
}
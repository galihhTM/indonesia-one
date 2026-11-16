import { prisma } from "@/lib/prisma";
import { Edit, Plus, List } from "lucide-react";
import Link from "next/link";
import DeleteZoneButton from "@/components/DeleteZoneButton";

export default async function ZonesPage() {
  const zones = await prisma.zone.findMany({
    include: { tower: true },
    orderBy: { categoryName: "asc" }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Zona</h1>
        <Link 
          href="/admin/zones/create"
          className="flex items-center gap-2 bg-[#3b2f2a]/80 text-white px-4 py-2 rounded-lg hover:bg-[#3b2f2a] transition"
        >
          <Plus className="w-4 h-4" /> Tambah Zona
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600">
              <th className="p-4 font-semibold">Tower</th>
              <th className="p-4 font-semibold">Kategori Zona</th>
              <th className="p-4 font-semibold">Lantai</th>
              <th className="p-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {zones.map((zone) => (
              <tr key={zone.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">{zone.tower.name}</td>
                <td className="p-4 font-medium text-gray-800">{zone.categoryName}</td>
                <td className="p-4 text-gray-600">{zone.floorsRange}</td>
                <td className="p-4 flex items-center gap-2">
  <Link 
    href={`/admin/zones/${zone.id}`}
    className="inline-flex items-center gap-2 text-[#3b2f2a] hover:text-[#3b2f2a]/80 bg-blue-50 px-3 py-1.5 rounded-lg transition text-sm font-medium"
  >
    <Edit className="w-4 h-4" /> Edit
  </Link>
  
  <Link 
    href={`/admin/zones/${zone.id}/facilities`}
    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg transition text-sm font-medium"
  >
    <List className="w-4 h-4" /> Fasilitas
  </Link>

  <DeleteZoneButton id={zone.id} />
</td>
              </tr>
            ))}
            {zones.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-500">Belum ada data zona.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
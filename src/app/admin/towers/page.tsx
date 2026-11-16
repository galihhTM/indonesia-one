import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit } from "lucide-react";

export default async function TowersPage() {
  const towers = await prisma.tower.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { zones: true } } } 
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Kelola Tower</h1>
        </div>
        <Link 
          href="/admin/towers/create"
          className="flex items-center gap-2 bg-[#3b2f2a]/80 text-white px-4 py-2 rounded-lg hover:bg-[#3b2f2a] transition"
        >
          <Plus className="w-4 h-4" /> Tambah Tower
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600">
              <th className="p-4 font-semibold">Nama Tower</th>
              <th className="p-4 font-semibold">Jumlah Zona</th>
            </tr>
          </thead>
          <tbody>
            {towers.map((tower) => (
              <tr key={tower.id} className="border-b border-gray-300 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">{tower.name}</td>
                <td className="p-4">
                  <span className="bg-blue-100 text-[#3b2f2a]/80 px-2.5 py-1 rounded-full text-xs font-semibold">
                    {tower._count.zones} Zona
                  </span>
                </td>
              </tr>
            ))}
            {towers.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-500">Belum ada data Tower.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
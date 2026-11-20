import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Building2, Map, Box, Plus } from "lucide-react";

export default async function AdminUnitsPage() {
  // Ambil Tower -> Zone -> Facility -> UnitTypes
  const towers = await prisma.tower.findMany({
    include: {
      zones: {
        include: {
          facilities: {
            include: { unitTypes: true }
          }
        }
      }
    }
  });

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Kelola Unit</h1>
        <p className="text-gray-500">Pilih fasilitas di bawah ini (misal: Topaz Suite) untuk mengelola tipe unitnya (Suite A, Suite B).</p>
      </div>

      <div className="space-y-8">
        {towers.map((tower) => (
          <div key={tower.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200 flex items-center gap-3">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-800">{tower.name}</h2>
            </div>
            
            <div className="p-6 space-y-6">
              {tower.zones.map((zone) => (
                <div key={zone.id} className="border-l-4 border-blue-200 pl-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Map className="w-4 h-4 text-gray-500" />
                    <h3 className="font-semibold text-gray-700">{zone.categoryName} ({zone.floorsRange})</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {zone.facilities.map((facility) => (
                      <div key={facility.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Box className="w-4 h-4 text-yellow-500" />
                            <p className="font-bold text-gray-800">{facility.title}</p>
                          </div>
                          <p className="text-xs text-gray-500 mb-4">Kategori: {facility.category}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-200">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            {facility.unitTypes.length} Tipe Unit
                          </span>
                          <Link 
                            href={`/admin/facilities/${facility.id}/units`}
                            className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                          >
                            <Plus className="w-4 h-4" /> Kelola Unit
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
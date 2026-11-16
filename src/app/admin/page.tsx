import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const session = await getSession();
  const currentUser = session?.userId
    ? await prisma.user.findUnique({
        where: { id: session.userId },
        select: { name: true },
      })
    : null;

  const adminName = currentUser?.name || "Admin";
  const totalZones = await prisma.zone.count();
  const totalFacilities = await prisma.facility.count();
  const totalTowers = await prisma.tower.count();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Selamat Datang, {adminName}!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
            Total Zona
          </h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">{totalZones}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
            Total Fasilitas
          </h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">
            {totalFacilities}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider">
            Total Menara
          </h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">{totalTowers}</p>
        </div>
      </div>
    </div>
  );
}

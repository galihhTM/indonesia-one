import { prisma } from "@/lib/prisma";
import TowerMap from "@/components/TowerMap";

export default async function Home() {
  const towers = await prisma.tower.findMany({
    include: {
      zones: {
        include: {
          tower: true,
          facilities: true,
        },
      },
    },
  });

  return (
    <main className="animate-page min-h-screen bg-[#1a1c3b]">
      <TowerMap towers={towers} />
    </main>
  );
}
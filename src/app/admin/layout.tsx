import { logoutAction } from "@/app/actions/auth";
import { getSession } from "@/lib/session";
import { LayoutDashboard, LayoutGrid, Map, Building2, LogOut, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function AdminLayout({ children,}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-[#1a1c3b] text-white flex flex-col shadow-xl z-50">
        <div className="flex items-center justify-center gap-3 p-6 text-xl font-serif tracking-widest border-b border-white/10">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-17 w-auto object-contain"
          />
         
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition"
          >
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link
            href="/admin/towers"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition"
          >
            <Building2 className="w-5 h-5" /> Kelola Tower
          </Link>
          <Link
            href="/admin/zones"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition"
          >
            <Map className="w-5 h-5" /> Kelola Zona
          </Link>
          <Link href="/admin/units" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition">
            <LayoutGrid className="w-5 h-5" /> Kelola Unit
          </Link>
          {session?.role === "ADMIN" && (
            <Link href="/admin/users" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition border-t border-white/10 mt-2 pt-4">
              <Users className="w-5 h-5" /> Kelola User
            </Link>
          )}
        </nav>

        <div className="p-4 border-t border-white/10">
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex items-center gap-3 p-3 w-full rounded-lg text-red-400 hover:bg-red-500/10 transition"
            >
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Konten Utama */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
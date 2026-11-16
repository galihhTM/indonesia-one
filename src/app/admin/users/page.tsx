import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, User as UserIcon } from "lucide-react";
import DeleteUserButton from "@/components/DeleteUserButton";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function UsersPage() {
  const session = await getSession();
  
  // Keamanan ekstra: Cegah Manager masuk ke halaman ini
  if (session?.role !== "ADMIN") {
    redirect("/admin");
  }

  const users = await prisma.user.findMany({
    orderBy: { name: "asc" },
    select: { id: true, name: true, email: true, role: true, createdAt: true }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Kelola User</h1>
          <p className="text-gray-500 text-sm">Manajemen akun Admin dan Manager.</p>
        </div>
        <Link 
          href="/admin/users/create"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-4 h-4" /> Tambah User
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600">
              <th className="p-4 font-semibold">Nama</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Role</th>
              <th className="p-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800 flex items-center gap-2">
                  <div className="p-2 bg-gray-100 rounded-full text-gray-500">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  {user.name}
                </td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    user.role === 'ADMIN' ? 'bg-purple-100 text-purple-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-4 flex items-center gap-2">
                  <Link 
                    href={`/admin/users/${user.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg transition text-sm"
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </Link>
                  <DeleteUserButton id={user.id} email={user.email} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
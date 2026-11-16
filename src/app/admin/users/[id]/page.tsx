import { prisma } from "@/lib/prisma";
import UserAdminForm from "@/components/forms/UserAdminForm";
import { notFound } from "next/navigation";

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const user = await prisma.user.findUnique({
    where: { id: resolvedParams.id },
    select: { id: true, name: true, email: true, role: true }
  });

  if (!user) notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit User: {user.name}</h1>
      <UserAdminForm initialData={user} />
    </div>
  );
}
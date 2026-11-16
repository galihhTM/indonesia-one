import UserAdminForm from "@/components/forms/UserAdminForm";

export default function CreateUserPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Tambah User Baru</h1>
      <UserAdminForm />
    </div>
  );
}
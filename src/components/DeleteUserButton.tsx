"use client";

import { deleteUserAdmin } from "@/app/actions/userAdmin";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DeleteUserButton({ id, email }: { id: string, email: string }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm(`Yakin ingin menghapus akun ${email}?`)) return;
        
        setIsDeleting(true);
        const res = await deleteUserAdmin(id);
        
        if (res.success) {
        toast.success("User berhasil dihapus!");
        } else {
        toast.error(res.error);
        }
        setIsDeleting(false);
    };

    return (
        <button 
        onClick={handleDelete} 
        disabled={isDeleting}
        className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 bg-red-50 px-3 py-1.5 rounded-lg transition text-sm disabled:opacity-50"
        >
        <Trash2 className="w-4 h-4" /> {isDeleting ? "..." : "Hapus"}
        </button>
    );
}
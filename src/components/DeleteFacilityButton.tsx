"use client";

import { deleteFacility } from "@/app/actions/facility";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DeleteFacilityButton({ id, zoneId }: { id: string, zoneId: string }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Yakin ingin menghapus fasilitas ini?")) return;
        
        setIsDeleting(true);
        const res = await deleteFacility(id, zoneId);
        
        if (res.success) {
        toast.success("Fasilitas dihapus!");
        } else {
        toast.error(res.error);
        }
        setIsDeleting(false);
    };

    return (
        <button 
        onClick={handleDelete} 
        disabled={isDeleting}
        className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
        title="Hapus"
        >
        <Trash2 className="w-4 h-4" />
        </button>
    );
}
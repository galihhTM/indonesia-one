"use client";

import { deleteUnitType } from "@/app/actions/unitType";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DeleteUnitTypeButton({ id, facilityId }: { id: string, facilityId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Yakin ingin menghapus tipe unit ini?")) return;
    
    setIsDeleting(true);
    const res = await deleteUnitType(id, facilityId);
    
    if (res.success) {
      toast.success("Tipe unit berhasil dihapus!");
    } else {
      toast.error(res.error);
    }
    setIsDeleting(false);
  };

  return (
    <button 
      onClick={handleDelete} 
      disabled={isDeleting} 
      className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors disabled:opacity-50"
      title="Hapus Unit"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
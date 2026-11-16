import { X, AlignLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ZoneCardProps = {
  zone: any;
  onClose: () => void;
};

export default function ZoneCard({ zone, onClose }: ZoneCardProps) {
  return (
    <div className="w-full bg-[#3b2f2a]/85 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20">
      
      {/* Header Gambar */}
      <div className="relative h-52 w-full bg-gray-700">
        <Image
          src={zone.imageUrl}
          alt={zone.categoryName}
          fill
          className="object-cover"
        />
        <button
          onClick={onClose} // Tombol X akan memanggil fungsi history.back()
          className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black hover:scale-110 transition-all duration-300 z-50"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Header Info */}
      <div className="p-6">
        <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4">
          <h3 className="text-white font-serif text-xl tracking-wider">
            {zone.floorsRange || "Lantai 36 - 50"}
          </h3>
          <span className="text-[10px] text-gray-300 font-bold tracking-widest uppercase">
            {zone.tower?.name || "Tower"}
          </span>
        </div>

        <h4 className="text-white/90 font-serif text-lg mb-4">
          {zone.categoryName}
        </h4>

        <div className="text-xs text-gray-400 font-bold tracking-wider mb-2 uppercase">
          Unit & Fasilitas
        </div>

        <ul className="space-y-3">
          {zone.facilities.map((facility: any) => (
            <li key={facility.id} className="flex items-center justify-between group">
              <Link 
                href={`/facilities/${facility.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-200 hover:text-blue-500 transition-all duration-300 group-hover:translate-x-1"
              >
                <AlignLeft className="w-4 h-4 text-blue-500" />
                {facility.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
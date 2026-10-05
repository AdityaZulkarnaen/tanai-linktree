"use client";

import React from "react";
import { LinkItem } from "@/data/kknData";
import { 
  MoreVertical, 
  FileText, 
  Calendar, 
  Calculator, 
  Handshake, 
  File, 
  Image as ImageIcon,
  FolderOpen
} from "lucide-react";

interface LinkCardProps {
  link: LinkItem;
  onOpenActionMenu: (link: LinkItem) => void;
}

export function LinkCard({ link, onOpenActionMenu }: LinkCardProps) {
  const getIcon = () => {
    switch (link.icon) {
      case "drive":
        return <FolderOpen className="w-5 h-5 text-emerald-300" />;
      case "file-text":
        return <FileText className="w-5 h-5 text-emerald-300" />;
      case "calendar":
        return <Calendar className="w-5 h-5 text-emerald-300" />;
      case "calculator":
        return <Calculator className="w-5 h-5 text-emerald-300" />;
      case "handshake":
        return <Handshake className="w-5 h-5 text-emerald-300" />;
      case "image":
        return <ImageIcon className="w-5 h-5 text-emerald-300" />;
      default:
        return <File className="w-5 h-5 text-emerald-300" />;
    }
  };

  return (
    <div className="relative group w-full transition-transform duration-200 hover:-translate-y-0.5">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full min-h-[58px] px-5 py-3.5 rounded-full bg-[#203f25] hover:bg-[#274d2d] text-white flex items-center justify-between shadow-md hover:shadow-xl transition-all duration-300 border border-[#2d5834] group-active:scale-[0.98]"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0 pr-2">
          <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
            {getIcon()}
          </div>
          <span className="text-[13.5px] sm:text-[14.5px] font-bold tracking-wide uppercase text-white/95 text-center flex-1 leading-snug line-clamp-2">
            {link.title}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onOpenActionMenu(link);
          }}
          className="p-2 -mr-1 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none flex-shrink-0"
          title="Opsi Tautan"
          aria-label="Opsi Tautan"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </a>
    </div>
  );
}

export default LinkCard;

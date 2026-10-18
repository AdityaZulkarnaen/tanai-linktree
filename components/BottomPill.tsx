"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { kknData } from "@/data/kknData";

interface BottomPillProps {
  onOpenShare: () => void;
}

export function BottomPill({ onOpenShare }: BottomPillProps) {
  const [visible, setVisible] = useState(true);
  const analisisUrl = kknData.links.find((link) => link.id === "analisis-anggota")?.url ?? "#";

  if (!visible) return null;

  return (
    <div className="sticky bottom-4 z-30 flex flex-col items-center justify-center gap-2 mt-8 pb-2">
      {/* Floating Pill */}
      <div className="flex items-center px-4 py-2 bg-white/95 text-zinc-900 rounded-full shadow-lg border border-white/40 backdrop-blur-md transition-all hover:scale-105">
        <button
          onClick={onOpenShare}
          className="text-xs font-bold tracking-tight hover:text-[#4c80ba] transition-colors flex items-center gap-1.5"
        >
          <span>{kknData.siteUrl.replace(/^https?:\/\//, "")}</span>
        </button>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="p-1 -mr-1 text-zinc-400 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex items-center gap-2 text-[12px] text-white/70">
        <span>KKN {kknData.name}</span>
        <span>•</span>
        <a
          href={analisisUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:scale-105 transition-all duration-100 cursor-pointer ease-in-out underline font-semibold"
        >
          Lihat Analisis Tim
        </a>
      </div>
    </div>
  );
}

export default BottomPill;

"use client";

import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { kknData } from "@/data/kknData";

interface BottomPillProps {
  onOpenTeam: () => void;
  onOpenShare: () => void;
}

export function BottomPill({ onOpenTeam, onOpenShare }: BottomPillProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="sticky bottom-4 z-30 flex flex-col items-center justify-center gap-2 mt-8 pb-2">
      {/* Floating Pill */}
      <div className="flex items-center gap-2 px-4 py-2 bg-white/95 text-zinc-900 rounded-full shadow-lg border border-white/40 backdrop-blur-md transition-all hover:scale-105">
        <button
          onClick={onOpenShare}
          className="text-xs font-bold tracking-tight hover:text-emerald-700 transition-colors flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>linktr.ee/{kknData.handle}</span>
        </button>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="p-1 -mr-1 text-zinc-400 hover:text-zinc-800 rounded-full hover:bg-zinc-200 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex items-center gap-2 text-[12px] text-white/70">
        <span>KKN {kknData.name}</span>
        <span>•</span>
        <button
          onClick={onOpenTeam}
          className="text-emerald-300 hover:text-emerald-200 underline font-semibold transition-colors"
        >
          Lihat Struktur Anggota Tim
        </button>
      </div>
    </div>
  );
}

export default BottomPill;

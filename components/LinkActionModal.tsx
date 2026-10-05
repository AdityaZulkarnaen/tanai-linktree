"use client";

import React, { useState } from "react";
import { X, ExternalLink, Copy, Check } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";
import { LinkItem } from "@/data/kknData";

interface LinkActionModalProps {
  link: LinkItem | null;
  onClose: () => void;
}

export function LinkActionModal({ link, onClose }: LinkActionModalProps) {
  const [copied, setCopied] = useState(false);

  if (!link) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsApp = () => {
    const text = `Tautan: ${link.title}\n${link.url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full sm:max-w-sm bg-[#1a2025] text-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-white/10 overflow-hidden animate-slideUp sm:animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-3 border-b border-white/10">
          <div className="pr-4">
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              {link.category || "Tautan KKN"}
            </span>
            <h4 className="font-bold text-sm text-white line-clamp-2 mt-0.5">
              {link.title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-2">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors"
          >
            <span className="flex items-center gap-3">
              <ExternalLink className="w-4 h-4 text-emerald-400" />
              Buka Tautan
            </span>
            <span className="text-xs text-white/40 font-mono truncate max-w-[120px]">
              {link.url.replace(/^https?:\/\//, "")}
            </span>
          </a>

          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors"
          >
            <span className="flex items-center gap-3">
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-emerald-400" />
              )}
              {copied ? "Tautan Tersalin!" : "Salin Tautan"}
            </span>
            {copied && <span className="text-xs text-emerald-400 font-semibold">Tersalin</span>}
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors"
          >
            <span className="flex items-center gap-3">
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              Bagikan ke WhatsApp
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkActionModal;

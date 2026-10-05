"use client";

import React, { useState, useEffect } from "react";
import { X, Copy, Check, Send, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";
import { WhatsAppIcon } from "./SocialIcons";
import { kknData } from "@/data/kknData";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetTitle?: string;
  targetUrl?: string;
}

export function ShareModal({
  isOpen,
  onClose,
  targetTitle,
  targetUrl,
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  if (!isOpen) return null;

  const urlToShare = targetUrl || currentUrl || "https://linktr.ee/daengmamanggung";
  const shareTitle = targetTitle || `${kknData.name} - ${kknData.location}`;
  const shareText = `Kunjungi tautan resmi ${shareTitle}:\n${urlToShare}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(urlToShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, "_blank");
  };

  const handleTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(shareTitle)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all animate-fadeIn">
      <div 
        className="relative w-full max-w-sm bg-[#1c2227] text-white rounded-3xl p-6 shadow-2xl border border-white/10 overflow-hidden transform transition-all scale-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <h3 className="text-lg font-bold tracking-tight">
            {targetTitle ? "Bagikan Tautan" : "Bagikan Profil"}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile / Target info */}
        <div className="mt-4 flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white/15 backdrop-blur-sm flex-shrink-0 flex items-center justify-center">
            {kknData.avatarUrl ? (
              <Image
                src={kknData.avatarUrl}
                alt={kknData.name}
                fill
                className="object-cover"
              />
            ) : null}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white truncate text-sm">
              {targetTitle || kknData.name}
            </p>
            <p className="text-xs text-white/60 truncate">
              {targetTitle ? "Tautan Tim KKN" : `@${kknData.handle}`}
            </p>
          </div>
        </div>

        {/* QR Code toggled view */}
        {showQR ? (
          <div className="my-5 flex flex-col items-center justify-center bg-white p-4 rounded-2xl">
            <QRCodeSVG value={urlToShare} size={180} />
            <p className="mt-2 text-xs text-zinc-600 font-medium">Pindai dengan kamera ponsel</p>
            <button
              onClick={() => setShowQR(false)}
              className="mt-3 text-xs text-emerald-700 font-semibold hover:underline"
            >
              Kembali ke opsi bagikan
            </button>
          </div>
        ) : (
          <div className="mt-5 space-y-2.5">
            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition-all font-medium text-sm text-left"
            >
              <div className="p-2 rounded-lg bg-emerald-600 text-white">
                <WhatsAppIcon className="w-4 h-4" />
              </div>
              <span>Bagikan ke WhatsApp</span>
            </button>

            {/* Telegram */}
            <button
              onClick={handleTelegram}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/30 transition-all font-medium text-sm text-left"
            >
              <div className="p-2 rounded-lg bg-sky-500 text-white">
                <Send className="w-4 h-4" />
              </div>
              <span>Bagikan ke Telegram</span>
            </button>

            {/* QR Code toggle */}
            <button
              onClick={() => setShowQR(true)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 transition-all font-medium text-sm text-left"
            >
              <div className="p-2 rounded-lg bg-purple-500 text-white">
                <QrCode className="w-4 h-4" />
              </div>
              <span>Tampilkan Kode QR</span>
            </button>
          </div>
        )}

        {/* Copy Link Input Bar */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl px-3 py-2">
            <span className="text-xs text-white/60 truncate flex-1 font-mono">
              {urlToShare}
            </span>
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                copied
                  ? "bg-emerald-500 text-black font-bold"
                  : "bg-white/15 hover:bg-white/25 text-white"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;

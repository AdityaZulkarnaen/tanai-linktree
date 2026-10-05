"use client";

import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

export function DesktopQrCode() {
  const [currentUrl, setCurrentUrl] = useState("https://linktr.ee/daengmamanggung");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  return (
    <div className="hidden lg:flex fixed bottom-6 right-6 flex-col items-center gap-1.5 p-3.5 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 z-40 group cursor-pointer hover:border-emerald-500/40">
      <span className="text-[11px] font-medium text-white/80 group-hover:text-white transition-colors tracking-tight">
        View on mobile
      </span>
      <div className="p-1.5 bg-white rounded-xl shadow-inner transition-transform group-hover:scale-105 duration-200">
        <QRCodeSVG value={currentUrl} size={64} level="M" />
      </div>
    </div>
  );
}

export default DesktopQrCode;

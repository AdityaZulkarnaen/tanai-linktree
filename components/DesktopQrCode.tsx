"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { kknData } from "@/data/kknData";

export function DesktopQrCode() {
  return (
    <div className="hidden lg:flex fixed bottom-6 right-6 flex-col items-center gap-1.5 p-3.5 transition-all duration-300 z-40 group cursor-pointer">
      <span className="text-[11px] font-medium text-white/80 group-hover:text-white transition-colors tracking-tight">
        View on mobile
      </span>
      <div className="p-1.5 bg-white rounded-xl shadow-inner transition-transform group-hover:scale-105 duration-200">
        <QRCodeSVG value={kknData.siteUrl} size={64} level="M" />
      </div>
    </div>
  );
}

export default DesktopQrCode;

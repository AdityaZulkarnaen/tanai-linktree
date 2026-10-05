"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Share2, 
  Sparkles, 
  Mail, 
  Users, 
  ChevronRight
} from "lucide-react";
import { 
  InstagramIcon, 
  WhatsAppIcon, 
  TikTokIcon, 
  YouTubeIcon 
} from "./SocialIcons";
import { kknData, LinkItem } from "@/data/kknData";
import { LinkCard } from "./LinkCard";
import { ShareModal } from "./ShareModal";
import { TeamModal } from "./TeamModal";
import { LinkActionModal } from "./LinkActionModal";
import { DesktopQrCode } from "./DesktopQrCode";
import { BottomPill } from "./BottomPill";

export function LinktreeClient() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<LinkItem | null>(null);
  const [shareTargetLink, setShareTargetLink] = useState<LinkItem | null>(null);

  const handleOpenActionMenu = (link: LinkItem) => {
    setSelectedLink(link);
  };

  const handleOpenShare = () => {
    setShareTargetLink(null);
    setIsShareModalOpen(true);
  };

  return (
    <main className="min-h-screen w-full bg-[#2596be] flex justify-center items-start sm:py-6 md:py-10 px-0 sm:px-4 relative selection:bg-emerald-600 selection:text-white">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-emerald-950/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-slate-800/30 rounded-full blur-[120px]" />
      </div>

      {/* Main Container Mockup (mimics Linktree desktop & mobile container) */}
      <div className="relative w-full max-w-[580px] min-h-screen sm:min-h-[92vh] flex flex-col justify-between bg-transparent backdrop-blur-4xl sm:rounded-[36px] sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden px-4 sm:px-7 py-6 sm:py-8 backdrop-blur-xl">
        
        {/* Subtle top ambient glow */}
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />

        {/* Content Area */}
        <div className="relative z-10 flex flex-col items-center w-full">
          
          {/* Top Bar (Actions) */}
          <div className="w-full flex items-center justify-end mb-4">
            {/* Team / Info Badge */}
            {/* Share Profile Button */}
            <button
              onClick={handleOpenShare}
              className="w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md cursor-pointer flex items-center justify-center text-white/90 hover:text-white transition-all shadow-md active:scale-95"
              title="Bagikan Halaman"
              aria-label="Bagikan Halaman"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col items-center text-center mt-1 mb-6">
            {/* Avatar */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-xl group">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-800">
                <Image
                  src={kknData.avatarUrl}
                  alt={kknData.name}
                  fill
                  sizes="120px"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Title (matching screenshot's forest green title tone) */}
            <h1 className="mt-3.5 text-2xl sm:text-[26px] font-extrabold text-[#ffffff]">
              {kknData.name}
            </h1>

            {/* Location Tag */}
            <div className="mt-1 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white text-[11px] font-semibold tracking-wide text-[#4c80ba]">
              <span>{kknData.location}</span>
            </div>

            {/* Tagline / Motto */}
            <p className="mt-1 text-[15px] sm:text-[18px] text-white/95 max-w-[340px] leading-relaxed font-medium drop-shadow-sm px-2">
              {kknData.tagline}
            </p>

            {/* Social Icons row */}
            <div className="mt-3.5 flex items-center justify-center gap-2.5 flex-wrap">
              {kknData.socials.instagram && (
                <a
                  href={kknData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black/25 hover:bg-black/45 border border-white/15 flex items-center justify-center text-white/85 hover:text-pink-300 transition-all hover:scale-110 active:scale-95"
                  title="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {kknData.socials.whatsapp && (
                <a
                  href={kknData.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black/25 hover:bg-black/45 border border-white/15 flex items-center justify-center text-white/85 hover:text-emerald-400 transition-all hover:scale-110 active:scale-95"
                  title="WhatsApp Tim KKN"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              )}
              {kknData.socials.tiktok && (
                <a
                  href={kknData.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black/25 hover:bg-black/45 border border-white/15 flex items-center justify-center text-white/85 hover:text-cyan-300 transition-all hover:scale-110 active:scale-95"
                  title="TikTok"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              )}
              {kknData.socials.email && (
                <a
                  href={kknData.socials.email}
                  className="w-9 h-9 rounded-full bg-black/25 hover:bg-black/45 border border-white/15 flex items-center justify-center text-white/85 hover:text-amber-300 transition-all hover:scale-110 active:scale-95"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={() => setIsTeamModalOpen(true)}
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-[#ffffff] transition-all hover:scale-110 active:scale-95"
                title="Daftar Anggota Tim"
              >
                <Users className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Links List */}
          <div className="w-full space-y-3.5 mt-1">
            {kknData.links.map((link) => (
              <LinkCard
                key={link.id}
                link={link}
                onOpenActionMenu={handleOpenActionMenu}
              />
            ))}
          </div>

          {/* Team Quick Preview Banner */}
          {/* <div className="w-full mt-5">
            <button
              onClick={() => setIsTeamModalOpen(true)}
              className="w-full py-3 px-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between transition-all group text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-600/30 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    Lihat Struktur Organisasi & Anggota Tim
                  </p>
                  <p className="text-[11px] text-white/50">
                    {kknData.teamMembers.length} Mahasiswa KKN Daeng Mamanggung
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </button>
          </div> */}
        </div>

        {/* Bottom Floating Pill & Footer */}
        <BottomPill 
          onOpenTeam={() => setIsTeamModalOpen(true)} 
          onOpenShare={handleOpenShare} 
        />
      </div>

      {/* Desktop "View on mobile" QR Code (from user screenshot bottom right) */}
      <DesktopQrCode />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        targetTitle={shareTargetLink?.title}
        targetUrl={shareTargetLink?.url}
      />

      {/* Link 3-dots Action Menu */}
      <LinkActionModal
        link={selectedLink}
        onClose={() => setSelectedLink(null)}
      />

      {/* Team Roster Modal */}
      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
      />
    </main>
  );
}

export default LinktreeClient;

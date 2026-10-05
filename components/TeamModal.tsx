"use client";

import React from "react";
import { X, Users, UserCheck, GraduationCap } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { kknData } from "@/data/kknData";

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TeamModal({ isOpen, onClose }: TeamModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all animate-fadeIn">
      <div 
        className="relative w-full max-w-md max-h-[85vh] bg-[#181d22] text-white rounded-3xl p-6 shadow-2xl border border-white/10 flex flex-col animate-scaleUp overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-600/30 text-emerald-400 border border-emerald-500/30">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Struktur Tim KKN</h3>
              <p className="text-xs text-white/60">{kknData.name} - {kknData.location}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Team list scrollable */}
        <div className="overflow-y-auto mt-4 pr-1 space-y-3 flex-1 custom-scrollbar">
          {kknData.teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all flex items-start justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <h4 className="font-semibold text-sm text-white">{member.name}</h4>
                </div>
                <p className="text-xs font-medium text-emerald-300 ml-6">
                  {member.role}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-white/50 ml-6">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{member.faculty}</span>
                </div>
              </div>

              {member.instagram && (
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white/50 hover:text-pink-400 hover:bg-white/10 rounded-xl transition-colors flex-shrink-0"
                  title={`@${member.instagram}`}
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-white/10 text-center flex-shrink-0">
          <p className="text-xs text-white/50 italic">
            &ldquo;{kknData.tagline}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamModal;

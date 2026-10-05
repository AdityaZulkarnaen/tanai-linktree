export interface LinkItem {
  id: string;
  title: string;
  url: string;
  category?: string;
  icon?: string;
  isFeatured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  faculty: string;
  instagram?: string;
}

export interface KKNConfig {
  name: string;
  handle: string;
  tagline: string;
  location: string;
  avatarUrl: string;
  socials: {
    instagram?: string;
    whatsapp?: string;
    tiktok?: string;
    youtube?: string;
    email?: string;
    drive?: string;
  };
  links: LinkItem[];
  teamMembers: TeamMember[];
}

export const kknData: KKNConfig = {
  name: "Daeng Mamanggung",
  handle: "daengmamanggung",
  tagline: "Berlayar dengan Reso, Menapak dengan Siri', Mengabdi dengan Hati",
  location: "KKN Kareba Kumba 2026",
  avatarUrl: "/team-avatar.png",
  socials: {
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/6281234567890?text=Halo%20Tim%20KKN%20Daeng%20Mamanggung",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com",
    email: "mailto:daengmamanggung.kkn@gmail.com",
    drive: "https://drive.google.com",
  },
  links: [
    {
      id: "cv-tim",
      title: "CV ANGGOTA TIM DAENG MAMANGGUNG - KAREBA KUMBA 2026 - Google Drive",
      url: "https://drive.google.com",
      category: "Dokumen Tim",
      icon: "drive",
      isFeatured: true,
    },
    {
      id: "analisis-masalah",
      title: "ANALISIS MASALAH KAREBA KUMBA 2026",
      url: "https://docs.google.com",
      category: "Riset Lapangan",
      icon: "file-text",
    },
    {
      id: "program-kerja",
      title: "PROGRAM KERJA KAREBA KUMBA 2026",
      url: "https://docs.google.com",
      category: "Program Kerja",
      icon: "briefcase",
    },
    {
      id: "timeline-proker",
      title: "TIMELINE PROKER KAREBA KUMBA 2026",
      url: "https://docs.google.com",
      category: "Jadwal & Timeline",
      icon: "calendar",
    },
    {
      id: "rab-anggaran",
      title: "RAB & RENCANA ANGGARAN BIAYA KAREBA KUMBA 2026",
      url: "https://docs.google.com",
      category: "Keuangan",
      icon: "calculator",
    },
    {
      id: "skema-sponsor",
      title: "SKEMA SPONSOR DAN KEMITRAAN TIM DAENG MAMANGGUNG",
      url: "https://drive.google.com",
      category: "Partnership",
      icon: "handshake",
    },
    {
      id: "proposal-kkn",
      title: "PROPOSAL KEGIATAN KKN KAREBA KUMBA 2026 (PDF)",
      url: "https://drive.google.com",
      category: "Proposal",
      icon: "file",
    },
    {
      id: "logbook-kegiatan",
      title: "DOKUMENTASI KEGIATAN & LOGBOOK LAPANGAN",
      url: "https://drive.google.com",
      category: "Dokumentasi",
      icon: "image",
    },
  ],
  teamMembers: [
    {
      name: "Andi Muhammad Rayhan",
      role: "Koordinator Desa (Kordes)",
      faculty: "Fakultas Ilmu Sosial & Ilmu Politik",
      instagram: "rayhan.kordes",
    },
    {
      name: "Nurul Fadillah",
      role: "Sekretaris",
      faculty: "Fakultas Hukum",
      instagram: "nurulfadillah",
    },
    {
      name: "Muhammad Fadhil",
      role: "Bendahara",
      faculty: "Fakultas Ekonomi & Bisnis",
      instagram: "mfadhil",
    },
    {
      name: "Siti Rahmawati",
      role: "Koordinator Divisi Program Kerja",
      faculty: "Fakultas Pertanian",
      instagram: "sitirahma",
    },
    {
      name: "Ahmad Fauzi",
      role: "Koordinator Hubungan Masyarakat (Humas)",
      faculty: "Fakultas Ilmu Budaya",
      instagram: "ahmadfauzi",
    },
    {
      name: "Rizky Pratama",
      role: "Koordinator PDD (Publikasi, Desain & Dokumentasi)",
      faculty: "Fakultas Teknik - Informatika",
      instagram: "rizkypratama",
    },
    {
      name: "Annisa Tri Wahyuni",
      role: "Koordinator Divisi Kesehatan & Lingkungan",
      faculty: "Fakultas Kedokteran & Kesehatan Masyarakat",
      instagram: "annisa.tri",
    },
  ],
};

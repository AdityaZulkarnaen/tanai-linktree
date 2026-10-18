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
  siteUrl: string;
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
  name: "Daeng Mamangung",
  handle: "daengmamangung",
  siteUrl: "https://daeng-mamangung-tanai.vercel.app",
  tagline: "Berpayung Rahmat Tuhan, selamat datang di tanah pelaut berdoa",
  location: "KKN Tanai Tanadoang 2027",
  avatarUrl: "",
  socials: {
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/6281234567890?text=Halo%20Tim%20KKN%20Daeng%20Mamangung",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com",
    email: "mailto:daengmamangung.kkn@gmail.com",
    drive: "https://drive.google.com",
  },
  links: [
    {
      id: "analisis-anggota",
      title: "ANALISIS ANGGOTA",
      url: "#",
      category: "Dokumen Tim",
      icon: "file-text",
    },
    {
      id: "rab",
      title: "RAB",
      url: "https://docs.google.com/spreadsheets/d/1AsQ8KxGi23wS8uzT-LFwX9VfNFblUXYOCAWtMIFv52E/edit?usp=sharing",
      category: "Keuangan",
      icon: "calculator",
    },
    {
      id: "program-kerja",
      title: "PROGRAM KERJA",
      url: "https://docs.google.com/spreadsheets/d/1Re7FHb9ukkfovvKnJJ1NpyGfOEh_y10Hgbgv__d-svs/edit?usp=drive_link",
      category: "Program Kerja",
      icon: "briefcase",
    },
    {
      id: "cv-anggota",
      title: "CV ANGGOTA",
      url: "https://drive.google.com/drive/folders/1xRqN2N3pKutzFSv7H7QnCxeJCXPZt9wy?usp=sharing",
      category: "Dokumen Tim",
      icon: "drive",
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

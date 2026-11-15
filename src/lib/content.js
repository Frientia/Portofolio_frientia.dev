// ============================================================================
//  PUSAT KONTEN — semua teks/data website dibaca dari sini.
//  Jangan hardcode teks di komponen. Tandai bagian yang ingin kamu ubah: // EDIT
// ============================================================================

export const profile = {
  name: "Muhamad Yajid Rizky",
  wordmark: "Frientia", // EDIT: inisial/wordmark di header
  initials: "FR",
  role: "Web Developer",
  // EDIT: headline raksasa di hero (tiap baris = 1 elemen array)
  headline: ["MUHAMAD", "YAJID RIZKY"],
  kicker: "Web Developer · Bandung, Indonesia", // EDIT
  tagline:
    "I design and build for the web — backend-minded, currently growing into full-stack.",
  photo: "/profile.jpg",
  availability: "Available for freelance & full-time", // EDIT
  localTimezone: "Asia/Jakarta",
  localTimeLabel: "WIB",
};

// ---------------------------------------------------------------------------
//  Navigasi header — tautan ke tiap section
// ---------------------------------------------------------------------------
export const nav = [
  { label: "About", id: "about" },
  { label: "Jalur", id: "journey" },
  { label: "Karya", id: "works" },
  { label: "Proses", id: "process" },
  { label: "Resume", id: "resume" },
  { label: "Testimoni", id: "testimonials" },
  { label: "FAQ", id: "faq" },
  { label: "Kontak", id: "contact" },
];

// ---------------------------------------------------------------------------
//  Marquee / ticker — kata berulang dipisah simbol •
// ---------------------------------------------------------------------------
export const marquee = {
  hero: [
    "Web Developer",
    "PHP · MySQL",
    "JavaScript",
    "Backend-minded",
    "Full-stack in progress",
    "Open to work",
  ],
  // EDIT: ticker penutup di footer
  footer: ["Let's Talk", "Open to work", "Frientia", "Terima kasih"],
  separator: "•",
};

// ---------------------------------------------------------------------------
//  About — Fig. 01
// ---------------------------------------------------------------------------
export const about = {
  fig: "Fig. 01",
  figTitle: "About me",
  // EDIT: pernyataan diri (boleh beberapa paragraf)
  statement: [
    "Lulusan baru Rekayasa Perangkat Lunak yang siap membawa energi positif ke dunia profesional.",
    "Backend-minded dengan fondasi PHP & MySQL, kini tumbuh menuju full-stack — satu commit dalam satu waktu.",
  ],
  // EDIT: 3 chip trait pendek
  traits: ["Backend-minded", "Detail-oriented", "Always learning"],
  photo: "/profile.jpg",
  photoCaption: "Bandung, Indonesia", // EDIT
};

// ---------------------------------------------------------------------------
//  JALUR (animasi utama) — pemberhentian = superpower/keahlian
//  Tiap stop: judul 2 kata KAPITAL (kata ke-2 diselipkan badge),
//  badge (ikon lucide), balon deskripsi, dan tint pastel.
// ---------------------------------------------------------------------------
export const journey = {
  fig: "Fig. 02",
  figTitle: "The path",
  heading: ["WHAT I", "BRING"], // EDIT
  intro:
    "Ikuti garisnya — tiap pemberhentian adalah satu keahlian inti yang kupakai dari awal sampai sebuah proyek rilis.",
  stops: [
    {
      id: "php",
      word1: "SERVER",
      word2: "SIDE",
      icon: "Server", // nama ikon lucide-react
      bubble:
        "Fondasi utamaku. Dari autentikasi sampai logika bisnis, sebagian besar proyekku dibangun dengan PHP.",
      tint: "peach",
      label: "PHP",
    },
    {
      id: "mysql",
      word1: "DATA",
      word2: "LAYER",
      icon: "Database",
      bubble:
        "Merancang skema, relasi, dan query yang efisien supaya data rapi dan gampang dipelihara.",
      tint: "sky",
      label: "MySQL",
    },
    {
      id: "javascript",
      word1: "DYNAMIC",
      word2: "INTERFACE",
      icon: "Sparkles",
      bubble:
        "Menambahkan interaksi di sisi klien agar halaman terasa responsif dan nyaman dipakai.",
      tint: "butter",
      label: "JavaScript",
    },
    {
      id: "git",
      word1: "VERSION",
      word2: "CONTROL",
      icon: "GitBranch",
      bubble:
        "Bekerja rapi dan aman: perubahan terlacak, eksperimen bebas, dan selalu bisa kembali.",
      tint: "mint",
      label: "Git",
    },
    {
      id: "github",
      word1: "OPEN",
      word2: "SOURCE",
      icon: "Github",
      bubble:
        "Tempat kode dibagikan dan kolaborasi terjadi. Semua proyek publikku ada di GitHub.",
      tint: "lilac",
      label: "GitHub",
    },
  ],
};

// ---------------------------------------------------------------------------
//  SELECTED WORKS — kartu bertumpuk + counter + meta
//  role/status/year adalah placeholder editable.
// ---------------------------------------------------------------------------
export const works = {
  fig: "Fig. 03",
  figTitle: "Selected work",
  heading: ["THINGS", "I BUILT"], // EDIT
  intro: "Beberapa repo yang paling mewakili perjalananku sejauh ini.",
  items: [
    {
      id: "attendance",
      title: "Attendance System",
      description: "A simple attendance management system built with PHP and MySQL.",
      link: "https://github.com/Frientia/sistem_absensi",
      image: "/project.jpg",
      role: "Full-stack", // EDIT
      status: "Completed", // EDIT
      year: "2025", // EDIT
      stack: ["PHP", "MySQL"],
      tint: "pink",
    },
    {
      id: "ecommerce",
      title: "E-Commerce (UKK)",
      description: "An e-commerce platform using PHP and MySQL for a competency exam.",
      link: "https://github.com/Frientia/ukk_klaster3",
      image: "/project.jpg",
      role: "Backend", // EDIT
      status: "Completed", // EDIT
      year: "2025", // EDIT
      stack: ["PHP", "MySQL"],
      tint: "peach",
    },
    {
      id: "kampus",
      title: "Display Website Kampus",
      description: "Campus website display project using Blade templating.",
      link: "https://github.com/Frientia/display_website_kampus",
      image: "/project.jpg",
      role: "Frontend", // EDIT
      status: "Completed", // EDIT
      year: "2025", // EDIT
      stack: ["Laravel", "Blade"],
      tint: "mint",
    },
    {
      id: "sewa-mobil",
      title: "Sewa Mobil",
      description: "Simple car rental website — clean flow from browse to booking.",
      link: "https://github.com/Frientia/sewa_mobil",
      image: "/project.jpg",
      role: "Full-stack", // EDIT
      status: "Completed", // EDIT
      year: "2024", // EDIT
      stack: ["PHP", "MySQL"],
      tint: "lilac",
    },
    {
      id: "learning-js",
      title: "Learning JavaScript",
      description: "Repository for practicing JavaScript concepts, in public.",
      link: "https://github.com/Frientia/learning_javascript",
      image: "/project.jpg",
      role: "Learning", // EDIT
      status: "Ongoing", // EDIT
      year: "2026", // EDIT
      stack: ["JavaScript"],
      tint: "sky",
    },
  ],
};

// ---------------------------------------------------------------------------
//  PROSES 01–04 — panel sticky + tab file. Placeholder editable.
// ---------------------------------------------------------------------------
export const process = {
  fig: "Fig. 04",
  figTitle: "How I work",
  heading: ["FROM BRIEF", "TO LIVE"], // EDIT
  steps: [
    {
      no: "01",
      title: "Brief",
      body: "Ngobrol dulu, pahami masalahnya, dan sepakati apa yang mau dibuat. Scope jelas = hasil jelas.",
      file: {
        name: "brief.txt",
        kind: "text",
        tint: "pink",
        // EDIT: isi preview file
        preview: [
          "PROJECT : Portfolio Revamp",
          "CLIENT  : Personal",
          "GOAL    : Rombak tampilan jadi editorial playful",
          "SCOPE   : Design + Front-end",
          "STACK   : Next.js · Tailwind · Motion · Lenis",
          "STATUS  : Kickoff ✔",
        ],
      },
    },
    {
      no: "02",
      title: "Design",
      body: "Susun struktur, alur, dan tampilan. Prototipe kasar dulu, poles kemudian.",
      file: {
        name: "design.fig",
        kind: "design",
        tint: "lilac",
        preview: [],
      },
    },
    {
      no: "03",
      title: "Build",
      body: "Saatnya ngoding. Backend PHP/MySQL, interaksi JavaScript, commit kecil tapi sering.",
      file: {
        name: "app.php",
        kind: "code",
        tint: "mint",
        // EDIT: isi preview file
        preview: [
          "<?php",
          "// endpoint sederhana, siap pakai",
          "$stmt = $pdo->prepare(",
          '  "SELECT * FROM users WHERE id = ?"',
          ");",
          "$stmt->execute([$id]);",
          "echo json_encode($stmt->fetch());",
        ],
      },
    },
    {
      no: "04",
      title: "Ship",
      body: "Uji, rapikan, deploy. Pantau setelah live dan iterate dari feedback.",
      file: {
        name: "report.xlsx",
        kind: "sheet",
        tint: "butter",
        // EDIT: isi preview (baris tabel)
        preview: [
          ["Metric", "Target", "Hasil"],
          ["Lighthouse", "95+", "98"],
          ["Build", "clean", "clean"],
          ["Uptime", "99%", "100%"],
        ],
      },
    },
  ],
};

// ---------------------------------------------------------------------------
//  RESUME / CV — teks diambil dari CV asli. Hanya pengalaman RELEVAN.
//  Foto CV sengaja TIDAK dipakai. File PDF untuk tombol unduh: resume.cvFile
// ---------------------------------------------------------------------------
export const resume = {
  fig: "Fig. 05",
  figTitle: "Resume",
  heading: ["ON", "PAPER"], // EDIT
  intro:
    "Ringkasan latar belakang, pengalaman relevan, dan kemampuan — versi lengkapnya bisa diunduh sebagai PDF.",
  cvFile: "/CV-Muhamad-Yajid-Rizky.pdf",
  cvLabel: "Unduh CV (PDF)",
  about:
    "Lulusan baru yang penuh semangat dengan latar belakang pendidikan Informasi Teknologi; memahami fondasi pemrograman dan keterampilan praktis untuk berkembang di dunia kerja.",
  experience: [
    {
      period: "2024 – 2025",
      role: "Project Manager — Website Display Kampus",
      org: "Proyek UAS · PHP, Laravel & MySQL",
      points: [
        "Memimpin tim pengembangan frontend, backend, database, dan infrastruktur.",
        "Merancang timeline, pembagian tugas, dan dokumentasi proyek.",
        "Mengatur komunikasi tim dan memastikan pengerjaan sesuai deadline.",
      ],
    },
  ],
  education: [
    {
      period: "2019 – 2022",
      title: "Rekayasa Perangkat Lunak",
      org: "SMKN 5 Kabupaten Tangerang",
      note: "Fokus pada pemrograman, pengelolaan database, dan pengenalan berbagai bahasa pemrograman.",
    },
  ],
  certificates: [
    "AWS Certificate — Dicoding",
    "Sertifikat Kompetensi Rekayasa Perangkat Lunak — BNSP",
    "Sertifikat Prakerin — SMKN 5 Kabupaten Tangerang",
  ],
  skills: [
    ["Bahasa", "PHP (intermediate) · JavaScript (intermediate) · HTML · CSS"],
    ["Database", "MySQL"],
    ["Tools", "XAMPP · Laragon · VS Code · phpMyAdmin · Microsoft Office"],
    ["Version Control", "Git (intermediate)"],
    ["Konsep", "CRUD · RESTful API (basic) · OOP (basic) · SDLC"],
    ["Soft skill", "Beradaptasi · Komunikatif · Problem Solving · Cekatan"],
  ],
};

// ---------------------------------------------------------------------------
//  TESTIMONI — placeholder editable (ganti dengan testimoni asli)
// ---------------------------------------------------------------------------
export const testimonials = {
  fig: "Fig. 06",
  figTitle: "Kind words",
  heading: ["PEOPLE", "SAY"], // EDIT
  // EDIT: ganti dengan testimoni asli. avatar boleh pakai /profile.jpg dulu.
  items: [
    {
      name: "Nama Klien",
      role: "Product Owner",
      quote:
        "Kerjaan rapi, komunikasi jelas, dan selesai tepat waktu. Bakal ajak kerja bareng lagi.",
      avatar: "/profile.jpg",
      tint: "pink",
    },
    {
      name: "Nama Mentor",
      role: "Senior Developer",
      quote:
        "Cepat belajar dan nggak takut nanya. Fondasi backend-nya kuat buat ukuran pemula.",
      avatar: "/profile.jpg",
      tint: "mint",
    },
    {
      name: "Nama Rekan",
      role: "Classmate",
      quote:
        "Selalu jadi tempat nanya soal query dan debugging. Sabar banget orangnya.",
      avatar: "/profile.jpg",
      tint: "sky",
    },
  ],
};

// ---------------------------------------------------------------------------
//  FAQ — placeholder editable
// ---------------------------------------------------------------------------
export const faq = {
  fig: "Fig. 07",
  figTitle: "Questions",
  heading: ["ASK ME", "ANYTHING"], // EDIT
  items: [
    {
      q: "Teknologi apa yang paling sering kamu pakai?",
      a: "Sehari-hari aku pakai PHP dan MySQL untuk backend, lalu JavaScript untuk interaksi di sisi klien. Git & GitHub buat versi dan kolaborasi.",
    },
    {
      q: "Kamu lebih condong ke backend atau frontend?",
      a: "Akar kuatnya di backend, tapi aku lagi aktif belajar frontend modern supaya bisa full-stack. Aku menikmati keduanya.",
    },
    {
      q: "Terbuka untuk freelance atau full-time?",
      a: "Ya, dua-duanya. Aku terbuka untuk proyek freelance maupun posisi full-time. Hubungi saja lewat email atau WhatsApp.",
    },
    {
      q: "Berapa lama biasanya sebuah proyek selesai?",
      a: "Tergantung scope. Proyek kecil bisa beberapa hari, yang lebih besar beberapa minggu. Aku selalu sepakati timeline di awal.",
    },
    {
      q: "Boleh lihat kode atau repo lain?",
      a: "Tentu. Semua repo publikku ada di GitHub — tautannya ada di bagian kontak di bawah.",
    },
  ],
};

// ---------------------------------------------------------------------------
//  KONTAK
// ---------------------------------------------------------------------------
export const contact = {
  fig: "Fig. 08",
  figTitle: "Contact",
  heading: ["LET'S BUILD", "SOMETHING", "GOOD"], // EDIT
  statement:
    "Punya proyek, ide, atau cuma mau ngobrol soal web? Aku senang dengar darimu.",
  cta: "Let's Talk",
  email: "muhamadyajidrizky@gmail.com",
  phone: "+62 851-7981-3835",
  phoneRaw: "+6285179813835",
  // EDIT: nomor WhatsApp (format internasional tanpa +, tanpa spasi)
  whatsapp: "6285179813835",
  location: "Indonesia",
  socials: [
    { label: "Email", href: "mailto:muhamadyajidrizky@gmail.com", icon: "Mail" },
    {
      label: "GitHub",
      href: "https://github.com/Frientia",
      icon: "Github",
      external: true,
    },
    {
      label: "Facebook",
      href: "https://web.facebook.com/Frientia",
      icon: "Facebook",
      external: true,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/6285179813835",
      icon: "MessageCircle",
      external: true,
    },
  ],
};

export const footer = {
  credit: "Designed & built by Muhamad Yajid Rizky",
  note: "Next.js · Tailwind · Motion · Lenis",
  year: new Date().getFullYear(),
};

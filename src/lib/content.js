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
  headline: ["LOOKING", "SUSPICIOUSLY", "GOOD"],
  kicker: "Portfolio · 2026 · Bandung, ID", // EDIT
  tagline:
    "Web Developer crafting smooth, modern, and interactive user experiences.",
  photo: "/profile.jpg",
  availability: "Available for freelance & full-time", // EDIT
  localTimezone: "Asia/Jakarta",
  localTimeLabel: "WIB",
};

// ---------------------------------------------------------------------------
//  Marquee / ticker — kata berulang dipisah simbol •
// ---------------------------------------------------------------------------
export const marquee = {
  hero: [
    "Web Developer",
    "Backend-minded",
    "PHP · MySQL",
    "Learning in public",
    "Full-stack in progress",
    "Let's build something",
  ],
  // EDIT: ticker penutup di footer
  footer: ["Let's Talk", "Open to work", "Say hello", "Frientia", "Terima kasih"],
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
    "I'm an aspiring backend developer with a strong foundation in PHP and MySQL.",
    "Currently learning JavaScript, Git, and GitHub to move towards full-stack development — one commit at a time.",
  ],
  // EDIT: 3 chip trait pendek
  traits: ["Backend-minded", "Detail-oriented", "Always learning"],
  photo: "/profile.jpg",
  photoCaption: "me, probably overthinking a query", // EDIT: microcopy lucu
};

// ---------------------------------------------------------------------------
//  JALUR (animasi utama) — pemberhentian = superpower/keahlian
//  Tiap stop: judul 2 kata KAPITAL (kata ke-2 diselipkan badge),
//  badge (ikon lucide), balon deskripsi, dan tint pastel.
// ---------------------------------------------------------------------------
export const journey = {
  fig: "Fig. 02",
  figTitle: "The path",
  heading: ["MY LITTLE", "SUPERPOWER", "PATH"], // EDIT
  intro:
    "Scroll dan ikuti garisnya — tiap pemberhentian adalah satu keahlian yang kupakai buat bikin web jadi hidup.",
  stops: [
    {
      id: "php",
      word1: "SERVER",
      word2: "SIDE",
      icon: "Server", // nama ikon lucide-react
      bubble:
        "PHP adalah rumah pertamaku. Dari form login sampai logika bisnis, di sini semua bermula.",
      tint: "peach",
      label: "PHP",
    },
    {
      id: "mysql",
      word1: "DATA",
      word2: "KEEPER",
      icon: "Database",
      bubble:
        "MySQL tempatku merapikan data — relasi, query, dan skema yang nggak bikin pusing di kemudian hari.",
      tint: "sky",
      label: "MySQL",
    },
    {
      id: "javascript",
      word1: "MAKES IT",
      word2: "MOVE",
      icon: "Sparkles",
      bubble:
        "JavaScript bikin halaman terasa hidup: interaksi, animasi, dan pengalaman yang mulus.",
      tint: "butter",
      label: "JavaScript",
    },
    {
      id: "git",
      word1: "TIME",
      word2: "TRAVEL",
      icon: "GitBranch",
      bubble:
        "Git = mesin waktu kode. Eksperimen bebas, karena selalu ada jalan buat balik.",
      tint: "mint",
      label: "Git",
    },
    {
      id: "github",
      word1: "SHIP",
      word2: "IT",
      icon: "Github",
      bubble:
        "GitHub tempatku berbagi dan berkolaborasi. Kalau belum di-push, artinya belum nyata.",
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
      file: { name: "brief.txt", kind: "text", tint: "pink" },
    },
    {
      no: "02",
      title: "Design",
      body: "Susun struktur, alur, dan tampilan. Prototipe kasar dulu, poles kemudian.",
      file: { name: "design.fig", kind: "design", tint: "lilac" },
    },
    {
      no: "03",
      title: "Build",
      body: "Saatnya ngoding. Backend PHP/MySQL, interaksi JavaScript, commit kecil tapi sering.",
      file: { name: "app.php", kind: "code", tint: "mint" },
    },
    {
      no: "04",
      title: "Ship",
      body: "Uji, rapikan, deploy. Pantau setelah live dan iterate dari feedback.",
      file: { name: "report.xlsx", kind: "sheet", tint: "butter" },
    },
  ],
};

// ---------------------------------------------------------------------------
//  TESTIMONI — placeholder editable (ganti dengan testimoni asli)
// ---------------------------------------------------------------------------
export const testimonials = {
  fig: "Fig. 05",
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
  fig: "Fig. 06",
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
  fig: "Fig. 07",
  figTitle: "Contact",
  heading: ["LET'S BUILD", "SOMETHING", "GOOD"], // EDIT
  statement:
    "Punya proyek, ide, atau cuma mau ngobrol soal web? Aku senang dengar darimu.",
  cta: "Let's Talk",
  email: "muhamadyajidrizky@gmail.com",
  phone: "+62 812-3456-7890",
  phoneRaw: "+6281234567890",
  // EDIT: nomor WhatsApp (format internasional tanpa +, tanpa spasi)
  whatsapp: "6281234567890",
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
      href: "https://wa.me/6281234567890",
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

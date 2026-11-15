import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "../components/SmoothScroll";

// Font pilihan user (HYWenHei) dipakai untuk SELURUH teks.
const brand = localFont({
  src: "./fonts/zh-cn.ttf",
  variable: "--font-brand",
  display: "swap",
});

export const metadata = {
  title: "Frientia — Muhamad Yajid Rizky | Web Developer",
  description:
    "Web Developer crafting smooth, modern, and interactive user experiences. Backend-minded, full-stack in progress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={brand.variable}>
      <body className="bg-bg text-ink antialiased min-h-screen">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

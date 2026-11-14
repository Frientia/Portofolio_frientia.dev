import "./globals.css";
import { Archivo_Black, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Frientia — Muhamad Yajid Rizky | Web Developer",
  description:
    "Web Developer crafting smooth, modern, and interactive user experiences. Backend-minded, full-stack in progress.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-bg text-ink antialiased min-h-screen">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

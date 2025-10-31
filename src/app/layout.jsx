import "./globals.css";

export const metadata = {
  title: "Yajid | Portfolio",
  description: "My personal portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-950 text-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}

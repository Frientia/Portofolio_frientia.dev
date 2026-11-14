import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // Parent folder (C:\laragon\www) punya package.json/lockfile sendiri, sehingga
  // Turbopack salah infer workspace root. Pin ke folder proyek ini.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

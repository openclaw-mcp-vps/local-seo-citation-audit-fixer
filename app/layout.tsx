import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Citation Audit Fixer – Fix NAP Inconsistencies Across 50+ Directories",
  description: "Scan 50+ business directories for NAP inconsistencies, get actionable fix reports, and protect your local SEO rankings automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bf37c2be-5789-4ae0-b28f-fd4813d313a9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

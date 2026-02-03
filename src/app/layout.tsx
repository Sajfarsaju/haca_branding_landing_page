import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "HACA Branding & Identity Design Mastery Program",
  description: "4-Week intensive branding program. Learn end-to-end brand identity design from working professionals. Build portfolio-ready projects.",
  keywords: ["branding", "graphic design", "identity design", "design course", "brand strategy"],
  metadataBase: new URL('https://haca-branding.com'),
  openGraph: {
    title: "HACA Branding & Identity Design Mastery Program",
    description: "4-Week intensive branding program for designers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for faster loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col items-center`}>
        <div className="w-full mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

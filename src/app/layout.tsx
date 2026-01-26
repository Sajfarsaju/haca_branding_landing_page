import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haca Branding",
  description: "Branding Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col items-center`}>
        <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-12 mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

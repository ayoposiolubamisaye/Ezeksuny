import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Fjalla_One, Bitter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fjallaOne = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fjalla-one",
});

const bitter = Bitter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-bitter",
});

export const metadata: Metadata = {
  title: "EZEKSUNY Tailoring and Cleaning LLC",
  description: "Professional tailoring, cleaning, and alteration services in Baltimore, MD.",
  icons: {
    icon: [
      { url: '/Logo-optimized.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/Logo-optimized.png?v=3', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/Logo-optimized.png?v=3',
    apple: '/Logo-optimized.png?v=3',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Bitter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logo-optimized.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Logo-optimized.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logo-optimized.png?v=3" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${fjallaOne.variable} ${bitter.variable} font-bitter`}>
        {/* Header */}
        <header className="bg-navy shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <a href="https://g.co/kgs/t4Prcnv" target="_blank" rel="noopener noreferrer">
                  <Image src="/Logo-optimized.webp" alt="EZEKSUNY Logo" width={50} height={50} className="object-contain hover:opacity-80 transition-opacity cursor-pointer" />
                </a>
                <div>
                  <span className="font-title text-xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">EZEKSUNY</span>
                  <div className="text-white text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">Tailoring and Cleaning</div>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-white hover:text-gold transition-colors font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">HOME</a>
                <a href="/services" className="text-white hover:text-gold transition-colors font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">SERVICES</a>
                <a href="/#about" className="text-white hover:text-gold transition-colors font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">ABOUT</a>
                <a href="/#contact" className="text-white hover:text-gold transition-colors font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">CONTACT</a>
              </nav>
              <div className="flex items-center">
                <a href="tel:6674350059" className="bg-white text-navy px-6 py-2 rounded-lg font-semibold hover:bg-gold transition-all duration-300 !text-black drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                  Give us a call
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

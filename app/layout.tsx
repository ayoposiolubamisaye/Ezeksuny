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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fjallaOne.variable} ${bitter.variable} antialiased bg-navy text-white font-bitter`}
      >
        <header className="fixed top-0 w-full bg-navy/90 backdrop-blur-sm z-50 border-b border-navy-light">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Image src="/Logo.png" alt="EZEKSUNY Logo" width={120} height={40} className="object-contain h-8 w-auto" />
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
                <a href="tel:6674350059" className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-slate-100 transition-all">
                  Give us a call
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}

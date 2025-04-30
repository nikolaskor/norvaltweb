import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/sections/MainNavigation";
import MainFooter from "@/components/sections/MainFooter";
import { CtaSection } from "@/components/sections/CtaSection";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Norvalt",
  description: "Norvalt - Digital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans bg-white`}>
        <MainNavigation />
        <main className="min-h-screen">{children}</main>
        <CtaSection />
        <MainFooter />
      </body>
    </html>
  );
}

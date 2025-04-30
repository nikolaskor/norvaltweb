import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import MainFooter from "@/components/sections/MainFooter";
import { CtaSection } from "@/components/sections/CtaSection";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

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
      <body className={`${manrope.variable} font-sans bg-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <CtaSection />
        <MainFooter />
      </body>
    </html>
  );
}

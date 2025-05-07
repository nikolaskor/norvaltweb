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
  icons: [
    {
      rel: "icon",
      url: "/favicon/favicon 16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon 48.png",
      sizes: "48x48",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon 192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon 512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicon/favicon 512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  themeColor: "#ffffff",
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

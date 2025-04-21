import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavigationMain from "@/components/sections/NavigationMain";
import FooterMain from "@/components/sections/FooterMain";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Norvalt Automation Agency",
  description: "AI-driven automation solutions for SMBs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${manrope.variable} font-sans`}>
        <NavigationMain />
        <main className="min-h-screen bg-base-100 pt-16">{children}</main>
        <FooterMain />
      </body>
    </html>
  );
}

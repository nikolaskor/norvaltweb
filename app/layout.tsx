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
  openGraph: {
    title: "Norvalt - Digital Solutions",
    description:
      "Norvalt leverer digitale løsninger og AI-tjenester for norske bedrifter.",
    url: "https://norvalt.no",
    siteName: "Norvalt",
    images: [
      {
        url: "/images/photo-1529156069898-49953e39b3ac.avif",
        width: 1200,
        height: 630,
        alt: "Norvalt - Fremtidens arbeidsplass",
      },
    ],
    locale: "no_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Norvalt - Digital Solutions",
    description:
      "Norvalt leverer digitale løsninger og AI-tjenester for norske bedrifter.",
    images: ["/images/photo-1529156069898-49953e39b3ac.avif"],
    site: "@norvalt",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://norvalt.no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Norvalt",
              url: "https://norvalt.no",
              logo: "/logos/norvalt-logo-color.png",
              description:
                "Norvalt leverer digitale løsninger og AI-tjenester for norske bedrifter.",
              sameAs: ["https://www.linkedin.com/company/norvalt/"],
            }),
          }}
        />
      </head>
      <body className={`${manrope.variable} font-sans bg-white`}>
        <a
          href="#main-content"
          className="absolute left-2 top-2 z-50 px-4 py-2 bg-primary text-white rounded focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary transition-transform -translate-y-20 focus:-translate-y-0 sr-only focus:not-sr-only"
          tabIndex={0}
          aria-label="Hopp til hovedinnhold"
        >
          Hopp til hovedinnhold
        </a>
        <Header />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <CtaSection />
        <MainFooter />
      </body>
    </html>
  );
}

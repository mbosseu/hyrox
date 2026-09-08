import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#e10600",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Guide et entraînement`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "HYROX Toulouse",
    "HYROX",
    "entraînement HYROX",
    "8 épreuves HYROX",
    "HYROX débutant",
    "fitness racing Toulouse",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    locale: "fr_FR",
    siteName: SITE_NAME,
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} | Guide et entraînement`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/logo.webp", width: 900, height: 616, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Guide et entraînement`,
    description: SITE_DESCRIPTION,
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} ${barlow.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ContentProvider } from "@/context/ContentContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maplescape Landscaping | Premium Landscape Company",
  description:
    "Maplescape Landscaping provides premium landscape construction and maintenance services, specializing in creating beautiful outdoor living areas.",
  keywords: [
    "landscaping",
    "landscape design",
    "garden maintenance",
    "hardscaping",
    "tree plantation",
    "premium landscaping",
    "outdoor living",
    "professional gardeners"
  ],
  authors: [{ name: "Maplescape Landscaping" }],
  openGraph: {
    title: "Maplescape Landscaping | Premium Landscape Company",
    description:
      "Maplescape Landscaping provides premium landscape construction and maintenance services, specializing in creating beautiful outdoor living areas.",
    siteName: "Maplescape Landscaping",
    images: [
      {
        url: "/images/landing_bg_hi_res.png",
        width: 1200,
        height: 630,
        alt: "Maplescape Landscaping Hero Image",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maplescape Landscaping | Premium Landscape Company",
    description:
      "Maplescape Landscaping provides premium landscape construction and maintenance services.",
    images: ["/images/landing_bg_hi_res.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-sans)] antialiased overflow-x-hidden">
        <ContentProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ContentProvider>
      </body>
    </html>
  );
}

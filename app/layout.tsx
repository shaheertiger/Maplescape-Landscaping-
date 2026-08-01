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

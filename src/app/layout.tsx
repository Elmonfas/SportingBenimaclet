import type { Metadata } from "next";
import { Anton, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sporting de Benimaclet C.F.",
    template: "%s | Sporting de Benimaclet C.F.",
  },
  description:
    "Club de futbol de barri en Benimaclet, Valencia. Fundat en 1991. No som un club, som un barri.",
  openGraph: {
    siteName: "Sporting de Benimaclet C.F.",
    images: [
      {
        url: "https://sportingbenimaclet.es/wp-content/uploads/2025/03/Escudo-OFICIAL-2-2.png",
        width: 400,
        height: 400,
        alt: "Escudo Sporting de Benimaclet",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body
        className={`${anton.variable} ${sourceSans.variable} antialiased bg-[#F8F8F6]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import NextMatchSection from "@/components/sections/NextMatchSection";
import NewsSection from "@/components/sections/NewsSection";
import HistorySection from "@/components/sections/HistorySection";
import ValuesSection from "@/components/sections/ValuesSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import SocioCTASection from "@/components/sections/SocioCTASection";
import { news, sponsors } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sporting de Benimaclet C.F. - Futbol de barri des de 1991",
  description:
    "Club de futbol de barri a Benimaclet, Valencia. 11 equips, mes de 300 jugadors. No som un club, som un barri.",
  openGraph: {
    title: "Sporting de Benimaclet C.F.",
    description: "Futbol de barri des de 1991. Benimaclet, Valencia.",
  },
};

export default function HomePage() {
  const latestNews = news.slice(0, 3);

  return (
    <>
      <HeroSection />
      <NextMatchSection />
      <NewsSection articles={latestNews} />
      <HistorySection />
      <ValuesSection />
      <SponsorsSection sponsors={sponsors} />
      <SocioCTASection />
    </>
  );
}

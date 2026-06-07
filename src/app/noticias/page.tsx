import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/data";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Notícies | Sporting de Benimaclet C.F.",
  description:
    "Totes les notícies, resultats i novetats del Sporting de Benimaclet C.F. — el club de futbol de barri de Benimaclet, València.",
};

const featured = news[0];
const rest = news.slice(1);

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ca-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NoticesPage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="bg-[#016531] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm tracking-[0.1em] uppercase mb-2">
            Actualitat
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-7xl leading-none">
            NOTÍCIES
          </h1>
        </div>
      </section>

      <div className="bg-[#F8F8F6] px-4 py-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          {/* ── NOTÍCIA DESTACADA ── */}
          <Link
            href={`/noticias/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl border border-[#D0E4D8] overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Imatge */}
            <div className="relative aspect-video md:aspect-auto md:min-h-[360px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute top-4 left-4 font-[family-name:var(--font-display)] text-[11px] tracking-[0.1em] uppercase bg-[#F0B429] text-[#0d1a10] px-3 py-1 rounded-md">
                Destacat
              </span>
            </div>

            {/* Contingut */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.1em] uppercase text-[#016531] border border-[#D0E4D8] px-2.5 py-1 rounded-md">
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-[#016531] text-3xl md:text-4xl leading-none mb-4 group-hover:text-[#014F27] transition-colors duration-150">
                  {featured.title.toUpperCase()}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[#374151] text-base leading-relaxed line-clamp-4">
                  {featured.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <time
                  className="flex items-center gap-1.5 font-[family-name:var(--font-body)] text-xs text-[#4B5563]"
                  dateTime={featured.date}
                >
                  <CalendarBlank size={13} className="text-[#F0B429]" />
                  {formatDate(featured.date)}
                </time>
                <span className="font-[family-name:var(--font-body)] text-sm font-semibold text-[#016531] group-hover:translate-x-1 transition-transform duration-150">
                  Llegir →
                </span>
              </div>
            </div>
          </Link>

          {/* ── GRID RESTA ── */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[#016531] text-2xl leading-none mb-6 pb-4 border-b border-[#D0E4D8]">
              MÉS NOTÍCIES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((article) => (
                <Link
                  key={article.id}
                  href={`/noticias/${article.slug}`}
                  className="group bg-white rounded-xl border border-[#D0E4D8] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
                >
                  {/* Imatge */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 font-[family-name:var(--font-display)] text-[10px] tracking-[0.08em] uppercase bg-[#016531] text-white px-2.5 py-1 rounded-md">
                      {article.category.split(" / ")[0]}
                    </span>
                  </div>

                  {/* Contingut */}
                  <div className="p-5 flex flex-col flex-1 gap-2">
                    <time
                      className="flex items-center gap-1.5 font-[family-name:var(--font-body)] text-[11px] text-[#4B5563]"
                      dateTime={article.date}
                    >
                      <CalendarBlank size={12} className="text-[#F0B429]" />
                      {formatDate(article.date)}
                    </time>

                    <h3 className="font-[family-name:var(--font-display)] text-[#016531] text-xl leading-tight line-clamp-2 group-hover:text-[#014F27] transition-colors duration-150">
                      {article.title.toUpperCase()}
                    </h3>

                    <p className="font-[family-name:var(--font-body)] text-sm text-[#374151] leading-relaxed line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    <span className="font-[family-name:var(--font-body)] text-xs font-semibold text-[#016531] mt-1 group-hover:translate-x-1 transition-transform duration-150 self-start">
                      Llegir →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

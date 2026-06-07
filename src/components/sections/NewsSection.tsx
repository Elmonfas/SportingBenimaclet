import Image from "next/image";
import Link from "next/link";
import type { News } from "@/types";

interface NewsSectionProps {
  articles: News[];
}

export default function NewsSection({ articles }: NewsSectionProps) {
  return (
    <section className="bg-[#F8F8F6] py-16 px-4" id="noticias">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm tracking-[0.08em] uppercase mb-1">Actualitat</p>
            <h2 className="font-[family-name:var(--font-display)] text-[#016531] text-4xl md:text-5xl leading-none">
              ÚLTIMES NOTÍCIES
            </h2>
          </div>
          <Link
            href="/noticias"
            className="hidden sm:inline-flex items-center font-[family-name:var(--font-body)] text-sm font-semibold text-[#016531] border border-[#D0E4D8] px-5 py-2.5 rounded-lg hover:bg-[#016531] hover:text-white hover:border-[#016531] transition-all duration-150 whitespace-nowrap shrink-0"
          >
            Totes les notícies →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg border border-[#D0E4D8] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block font-[family-name:var(--font-display)] text-[11px] tracking-widest py-1 px-2 rounded-[4px] uppercase bg-[#016531] text-white">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <time
                  className="font-[family-name:var(--font-body)] text-xs text-[#6B7280] mb-2"
                  dateTime={article.date}
                >
                  {new Date(article.date).toLocaleDateString("ca-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>

                <h3 className="font-[family-name:var(--font-body)] font-semibold text-[#111827] text-lg leading-snug mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <p className="font-[family-name:var(--font-body)] text-sm text-[#374151] line-clamp-3 flex-1">
                  {article.excerpt}
                </p>

                <Link
                  href={`/noticias/${article.slug}`}
                  className="mt-4 font-[family-name:var(--font-body)] text-xs font-semibold text-[#016531] hover:translate-x-1 transition-transform duration-150 self-start"
                >
                  Llegir més →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

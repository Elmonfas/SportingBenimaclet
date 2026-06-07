import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/lib/data";
import { CalendarBlank, ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) return { title: "Notícia no trobada" };
  return {
    title: `${article.title} | Sporting de Benimaclet`,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ca-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const idx = news.findIndex((n) => n.slug === slug);
  if (idx === -1) notFound();

  const article = news[idx];
  const prev = idx > 0 ? news[idx - 1] : null;
  const next = idx < news.length - 1 ? news[idx + 1] : null;
  const related = news.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative bg-[#016531] pt-14 pb-0 px-4 overflow-hidden">
        {/* Imatge de fons difuminada */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src={article.image}
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#016531]/60 to-[#016531]" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/noticias"
            className="inline-flex items-center gap-1.5 font-[family-name:var(--font-body)] text-xs text-white/50 hover:text-white transition-colors duration-150 mb-8"
          >
            <ArrowLeft size={13} /> Totes les notícies
          </Link>

          {/* Categoria + data */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.1em] uppercase bg-[#F0B429] text-[#0d1a10] px-3 py-1 rounded-md">
              {article.category.split(" / ")[0]}
            </span>
            <time
              className="flex items-center gap-1.5 font-[family-name:var(--font-body)] text-xs text-white/50 capitalize"
              dateTime={article.date}
            >
              <CalendarBlank size={12} />
              {formatDate(article.date)}
            </time>
          </div>

          {/* Títol */}
          <h1 className="font-[family-name:var(--font-display)] text-white text-4xl md:text-6xl leading-none mb-10">
            {article.title.toUpperCase()}
          </h1>
        </div>
      </section>

      {/* ── IMATGE PRINCIPAL ── */}
      <div className="bg-[#016531] px-4 pb-0">
        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </div>

      {/* ── COS DE L'ARTICLE ── */}
      <div className="bg-[#F8F8F6] px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Sidebar — extracte destacat */}
            <aside className="md:col-span-1 order-2 md:order-1">
              <div className="md:sticky md:top-24 flex flex-col gap-6">
                <div className="border-l-2 border-[#F0B429] pl-4">
                  <p className="font-[family-name:var(--font-display)] text-[#016531] text-xs tracking-[0.08em] uppercase mb-2">
                    En resum
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-[#374151] text-sm leading-relaxed italic">
                    {article.excerpt}
                  </p>
                </div>

                <div className="border-t border-[#D0E4D8] pt-4 flex flex-col gap-2">
                  <p className="font-[family-name:var(--font-display)] text-[#016531] text-[10px] tracking-[0.08em] uppercase">
                    Categoria
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-[#4B5563] text-xs">
                    {article.category}
                  </p>
                </div>
              </div>
            </aside>

            {/* Article principal */}
            <article className="md:col-span-3 order-1 md:order-2">
              <div className="font-[family-name:var(--font-body)] text-[#374151] text-base leading-relaxed space-y-5">
                {article.content.split(". ").reduce<string[]>((acc, sentence, i, arr) => {
                  // Agrupar en paràgrafs de ~2 frases
                  if (i % 2 === 0) {
                    acc.push(sentence + (arr[i + 1] ? ". " + arr[i + 1] + "." : "."));
                  }
                  return acc;
                }, []).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Signatura */}
              <div className="mt-10 pt-6 border-t border-[#D0E4D8] flex items-center gap-3">
                <Image
                  src="https://sportingbenimaclet.es/wp-content/uploads/2025/03/Escudo-OFICIAL-2-2.png"
                  alt="Sporting de Benimaclet"
                  width={32}
                  height={32}
                  className="object-contain opacity-60"
                  sizes="32px"
                />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-[#016531] text-sm leading-none">
                    SPORTING DE BENIMACLET
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-[#4B5563] text-xs mt-0.5 capitalize">
                    {formatDate(article.date)}
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>

      {/* ── NAV ANTERIOR / SEGÜENT ── */}
      <div className="bg-white border-t border-[#D0E4D8] px-4 py-6">
        <div className="max-w-3xl mx-auto flex justify-between gap-4">
          {prev ? (
            <Link
              href={`/noticias/${prev.slug}`}
              className="group flex items-center gap-3 max-w-xs hover:text-[#016531] transition-colors duration-150"
            >
              <ArrowLeft size={16} className="text-[#4B5563] group-hover:text-[#016531] shrink-0 group-hover:-translate-x-1 transition-transform duration-150" />
              <div>
                <p className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.08em] uppercase text-[#4B5563] mb-0.5">Anterior</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#111827] line-clamp-1">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          {next && (
            <Link
              href={`/noticias/${next.slug}`}
              className="group flex items-center gap-3 max-w-xs text-right hover:text-[#016531] transition-colors duration-150"
            >
              <div>
                <p className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.08em] uppercase text-[#4B5563] mb-0.5">Següent</p>
                <p className="font-[family-name:var(--font-body)] text-sm text-[#111827] line-clamp-1">{next.title}</p>
              </div>
              <ArrowRight size={16} className="text-[#4B5563] group-hover:text-[#016531] shrink-0 group-hover:translate-x-1 transition-transform duration-150" />
            </Link>
          )}
        </div>
      </div>

      {/* ── MÉS NOTÍCIES ── */}
      <section className="bg-[#F8F8F6] px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[#016531] text-3xl leading-none mb-8">
            MÉS NOTÍCIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/noticias/${r.slug}`}
                className="group bg-white rounded-xl border border-[#D0E4D8] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 font-[family-name:var(--font-display)] text-[10px] tracking-[0.08em] uppercase bg-[#016531] text-white px-2.5 py-1 rounded-md">
                    {r.category.split(" / ")[0]}
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <time className="font-[family-name:var(--font-body)] text-[11px] text-[#4B5563]" dateTime={r.date}>
                    {formatDate(r.date)}
                  </time>
                  <h3 className="font-[family-name:var(--font-display)] text-[#016531] text-lg leading-tight line-clamp-2">
                    {r.title.toUpperCase()}
                  </h3>
                  <span className="font-[family-name:var(--font-body)] text-xs font-semibold text-[#016531] mt-auto group-hover:translate-x-1 transition-transform duration-150 self-start">
                    Llegir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

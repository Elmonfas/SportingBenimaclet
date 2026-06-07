import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Història del Club | Sporting de Benimaclet C.F.",
  description:
    "Coneix l'origen i la història del Sporting de Benimaclet, fundat el 1991 al barri de Benimaclet (València). Fills de les reivindicacions veïnals i de l'energia del barri.",
  openGraph: {
    title: "Història del Club — Sporting de Benimaclet C.F.",
    description: "Des de 1991, fills del barri de Benimaclet.",
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

const chapters = [
  {
    year: "1991",
    label: "El primer xiulet",
    color: "bg-[#F0B429]",
    intro: "Benimaclet ha aconseguit lliurar-se d'una part del cinturó de ferro que l'atenallava. El Trenet que comunicava Pont de Fusta amb la platja havia sigut suprimit. El barri respira.",
    body: [
      "En eixe any del 91, el ja desaparegut col·legi Centre d'Estudis Benimaclet (al carrer San Columbano) s'adona que el seu equip de futbol sala ha superat les previsions: té prou jugadors per a fer-lo de Futbol 11. En aquella època no existia el Futbol 7, de manera que fins i tot en la categoria Benjamí es jugava 11 contra 11.",
      "L'equip de Futbol Sala passa a ser de Futbol 11, i tenim la primera data de fundació: el 2 de setembre de 1991. Actuen com a locals al camp de Las Palmeras a Burjassot. Encara sense federar, disputen una temporada completa. L'equipació: samarreta roja amb mànigues blanques i pantaló blanc. Molt a l'estil de l'Arsenal.",
    ],
    quote: null,
  },
  {
    year: "1992",
    label: "El nom que ens definix",
    color: "bg-[#016531]",
    intro: "La temporada 91-92 ha funcionat. Es decideix que per a la 92-93 el club ha de ser federat. Són els pares dels propis jugadors els qui organitzen i formalitzen la primera directiva.",
    body: [
      "Apareix la segona data de fundació: 3 de juny de 1992. Data d'aprovació d'estatuts, constitució com a club i afiliació a la Federació Valenciana de Futbol.",
      "Quan els directius es presenten a la seu de la Federació per a donar d'alta el club, se'ls informa que l'antic CF Benimaclet arrossega una elevada deute des de la seua desaparició. Per a evitar-la, el nou club pren el nom de SPORTING DE BENIMACLET CF, i és donat d'alta amb el número 1723. El terreny de joc local serà el del Torre Levante. Entrenadors: Javi Mestre i Miguel Muñoz.",
    ],
    quote: "El nom «Sporting» naix per una deute aliena. La identitat, però, serà per sempre nostra.",
  },
  {
    year: "1993",
    label: "El Camp de Les Fonts",
    color: "bg-[#014F27]",
    intro: "Hi ha una barrera arquitectònica que ho condiciona tot: el tren. El pas de la via aconsella buscar un terreny diferent, un lloc al qual els xavals puguen anar caminant sols sense haver de travessar la via.",
    body: [
      "Es troba finalment un vell terreny de cultiu en guaret al Camí de les Fonts, al final del carrer Murta. No és el terreny ideal —no és 100% rectangular— i en proporció és més llarg de l'habitual però una mica més estret. No té il·luminació artificial: els entrenaments nocturns s'efectuen sota l'escassa llum dels fanals del carrer.",
      "De nou els mateixos pares construïxen amb les seues pròpies mans els vestuaris i l'oficina, lleven les pedres del terreny de joc —a pesar que durant anys apareixeran misteriosos trossets de rajola— i apareix la famosa furgoneta blava que fa de bar durant molts anys.",
      "La temporada 93-94 el Sporting Benimaclet es presenta amb equipació verd i negra sobre el nou Camp de Les Fonts. El dissabte 16 d'octubre de 1993 es juga el primer partit oficial: Aleví del Sporting (entrenat per Sebas Peris) vs Moncada. Resultat: empat a 1 gol.",
    ],
    quote: null,
  },
  {
    year: "2025",
    label: "Quasi 35 anys d'empremta",
    color: "bg-[#F0B429]",
    intro: "Prop de 35 anys de vida. Més de 300 jugadores i jugadors repartits en 11 equips, des del Querubí fins a l'Amateur.",
    body: [
      "El club seguix sent el que sempre va ser: un lloc on el barri es troba, on els xiquets i xiquetes creixen com a persones, i on el futbol és l'excusa per a construir comunitat. El camp de Les Fonts, construït amb les mans dels pares el 1993, seguix sent l'últim camp de terra de la província de València.",
    ],
    quote: "No som un club, som un barri.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Arrels",
    text: "Nascuts del moviment veïnal de Benimaclet, som inseparables del barri. L'un no existix sense l'altre.",
  },
  {
    num: "02",
    title: "Comunitat",
    text: "Més de 300 jugadores i jugadors, centenars de famílies i socis que troben en el Sporting un lloc de pertinença.",
  },
  {
    num: "03",
    title: "Futbol popular",
    text: "Sense patrocinadors corporatius ni inversors. El club el sostenen els negocis i les persones del barri.",
  },
  {
    num: "04",
    title: "Formació",
    text: "De Querubí a Amateur: formem persones, no només futbolistes. El camp és una extensió de l'escola de vida.",
  },
];

export default function ClubPage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="bg-[#016531] pt-20 pb-0 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-8 pb-16">
            <div className="flex-1">
              <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm tracking-[0.12em] uppercase mb-3">
                Fundat el 1991 · Benimaclet, València
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-white text-6xl md:text-7xl lg:text-8xl leading-none mb-6">
                EL CLUB
              </h1>
              <p className="font-[family-name:var(--font-body)] text-white/65 text-lg leading-relaxed max-w-lg">
                Encara que poguera semblar que és només un equip més de futbol base,
                el Sporting Benimaclet compta darrere seu amb una història profundament
                arrelada al seu barri, al seu temps i a la seua gent.
              </p>
            </div>
            <div className="shrink-0">
              <Image
                src="https://sportingbenimaclet.es/wp-content/uploads/2025/03/Escudo-OFICIAL-2-2.png"
                alt="Escudo oficial Sporting de Benimaclet"
                width={140}
                height={140}
                className="object-contain opacity-90"
                sizes="140px"
                priority
              />
            </div>
          </div>

          {/* Stats bar pegada al borde inferior del hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {[
              { n: "1991", l: "Any de fundació" },
              { n: "11", l: "Equips actius" },
              { n: "300+", l: "Jugadors i jugadores" },
              { n: "1", l: "Barri: Benimaclet" },
            ].map((s) => (
              <div key={s.l} className="py-6 px-4 border-r border-white/10 last:border-r-0 text-center">
                <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-4xl leading-none">{s.n}</p>
                <p className="font-[family-name:var(--font-body)] text-white/40 text-xs mt-1 uppercase tracking-[0.08em]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-[#F8F8F6] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[#016531] text-4xl md:text-5xl leading-none mb-6">
                COM VA NÀIXER<br />EL SPORTING
              </h2>
            </div>
            <div className="space-y-4 font-[family-name:var(--font-body)] text-[#374151] text-base leading-relaxed">
              <p>
                Si tan sols un dels events d&apos;aquells anys s&apos;hagués produït de forma
                diferent, és segur que hui este equip no existiria. El Sporting és fill
                —col·lateral si es vol— de les reivindicacions veïnals pel col·legi Municipal
                i de les lluites del Trenet.
              </p>
              <p>
                Ara, a punt de complir els 35 anys de vida, és moment de reivindicar que el seu
                origen i cor contenen l&apos;essència mateixa del Barri de Benimaclet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPÍTOLS ── */}
      <section className="bg-white px-4 py-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          {chapters.map((ch, i) => (
            <div key={i} className="border border-[#D0E4D8] rounded-xl overflow-hidden">
              {/* Capsalera del capítol */}
              <div className="bg-[#F8F8F6] px-8 py-6 flex items-center gap-6 border-b border-[#D0E4D8]">
                <span className={`${ch.color} font-[family-name:var(--font-display)] text-white text-2xl leading-none px-4 py-2 rounded-lg shrink-0`}>
                  {ch.year}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-[#016531] text-2xl md:text-3xl leading-none">
                  {ch.label.toUpperCase()}
                </h3>
              </div>

              {/* Cos del capítol */}
              <div className="px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Intro destacada */}
                <div className="md:col-span-1">
                  <p className="font-[family-name:var(--font-body)] text-[#016531] text-base font-medium leading-relaxed">
                    {ch.intro}
                  </p>
                  {ch.quote && (
                    <blockquote className="mt-6 border-l-2 border-[#F0B429] pl-4 font-[family-name:var(--font-body)] text-sm text-[#4B5563] italic leading-relaxed">
                      &ldquo;{ch.quote}&rdquo;
                    </blockquote>
                  )}
                </div>

                {/* Cos narratiu */}
                <div className="md:col-span-2 space-y-4">
                  {ch.body.map((p, j) => (
                    <p key={j} className="font-[family-name:var(--font-body)] text-[#374151] text-sm md:text-base leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PILARS ── */}
      <section className="bg-[#016531] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm tracking-[0.08em] uppercase mb-2">
              El que som
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-white text-4xl md:text-5xl leading-none">
              MÉS QUE UN CLUB
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden">
            {pillars.map((p) => (
              <div key={p.num} className="bg-[#014f27] p-8">
                <span className="font-[family-name:var(--font-display)] text-[#F0B429] text-4xl leading-none block mb-4">
                  {p.num}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-white text-2xl leading-none mb-3">
                  {p.title.toUpperCase()}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-white/60 text-sm leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-[#F8F8F6] py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[#016531] text-4xl md:text-5xl leading-none mb-2">
              FORMA PART<br />DE LA HISTÒRIA
          </h2>
            <p className="font-[family-name:var(--font-body)] text-[#4B5563] text-base leading-relaxed max-w-md">
              35 anys de barri no s&apos;improvisen. Es construïxen soci a soci, família a família,
              temporada a temporada.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/socios"
              className="inline-flex items-center justify-center font-[family-name:var(--font-body)] font-semibold text-sm uppercase tracking-wider bg-[#F0B429] text-[#0d1a10] px-8 py-4 rounded-lg hover:bg-[#D4960F] transition-all duration-150 whitespace-nowrap shadow-lg"
            >
              Fes-te Soci
            </Link>
            <Link
              href="/equipos"
              className="inline-flex items-center justify-center font-[family-name:var(--font-body)] font-semibold text-sm uppercase tracking-wider text-[#016531] border border-[#016531] px-8 py-4 rounded-lg hover:bg-[#016531] hover:text-white transition-all duration-150 whitespace-nowrap"
            >
              Veure Equips
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

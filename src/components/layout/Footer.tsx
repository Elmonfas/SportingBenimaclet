import Image from "next/image";
import Link from "next/link";
import {
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  MapPin,
  ArrowSquareOut,
} from "@phosphor-icons/react/dist/ssr";

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.25!2d-0.3596!3d39.4921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048b4c6b7d4b5%3A0x1!2sCalle+Di%C3%B3genes+L%C3%B3pez+Mech%C3%B3%2C+Benimaclet%2C+Val%C3%A8ncia!5e0!3m2!1sca!2ses!4v1700000000000!5m2!1sca!2ses";

const MAPS_LINK =
  "https://maps.google.com/?q=Calle+Di%C3%B3genes+L%C3%B3pez+Mech%C3%B3,+Benimaclet,+Val%C3%A8ncia";

const colLinks = [
  {
    heading: "El Club",
    links: [
      { href: "/club", label: "Qui som" },
      { href: "/equipos", label: "Equips" },
      { href: "/#calendario", label: "Calendari" },
      { href: "/#noticias", label: "Notícies" },
    ],
  },
  {
    heading: "Participar",
    links: [
      { href: "/socios", label: "Fes-te Soci" },
      { href: "/#contacto", label: "Contacte" },
      { href: "/#patrocinadors", label: "Patrocinadors" },
    ],
  },
];

const socials = [
  { href: "https://www.instagram.com/sportingbenimaclet", label: "Instagram", Icon: InstagramLogo },
  { href: "https://facebook.com/sportingbenimaclet", label: "Facebook", Icon: FacebookLogo },
  { href: "https://youtube.com/@sportingbenimaclet", label: "YouTube", Icon: YoutubeLogo },
];

export default function Footer() {
  return (
    <footer className="bg-[#012e17]" role="contentinfo" id="contacto">

      {/* ── MAPA FULL WIDTH ── */}
      <div className="relative h-[260px] overflow-hidden">
        {/* iframe */}
        <iframe
          title="Camp de Les Fonts — Sporting de Benimaclet"
          src={MAPS_EMBED}
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ filter: "saturate(0.7) brightness(0.85)" }}
        />

        {/* Overlay oscur que amaga el popup i dona llegibilitat */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(1,20,10,0.35) 0%, rgba(1,20,10,0.55) 60%, #012e17 100%)",
          }}
          aria-hidden="true"
        />

        {/* Info flotant centrada */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-xs tracking-[0.12em] uppercase mb-1">
              On som
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-white text-2xl md:text-3xl leading-none">
              CAMP DE LES FONTS
            </h2>
            <p className="font-[family-name:var(--font-body)] text-white/50 text-sm mt-1">
              C/ Diògenes López Mechó · Benimaclet, València
            </p>
          </div>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-wider bg-[#F0B429] text-[#0d1a10] px-5 py-2.5 rounded-lg hover:bg-[#D4960F] transition-colors duration-150"
          >
            <MapPin size={13} weight="fill" />
            Com arribar
            <ArrowSquareOut size={12} />
          </a>
        </div>
      </div>

      {/* ── CONTINGUT ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-10 border-b border-white/8">

          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-5">
            <Link
              href="/"
              aria-label="Sporting de Benimaclet - Inici"
              className="flex items-center gap-3 group"
            >
              <Image
                src="https://sportingbenimaclet.es/wp-content/uploads/2025/03/Escudo-OFICIAL-2-2.png"
                alt="Escudo Sporting de Benimaclet"
                width={44}
                height={44}
                className="object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                sizes="44px"
              />
              <div>
                <div className="font-[family-name:var(--font-display)] text-white text-base tracking-wide leading-none">
                  SPORTING BENIMACLET
                </div>
                <div className="font-[family-name:var(--font-body)] text-white/30 text-[11px] italic mt-1">
                  No som un club, som un barri
                </div>
              </div>
            </Link>

            <p className="font-[family-name:var(--font-body)] text-white/35 text-xs leading-relaxed">
              Club de futbol de barri a Benimaclet, València. Fundats el 1991.
            </p>

            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (nova finestra)`}
                  className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center text-white/40 hover:bg-[#F0B429] hover:text-[#0d1a10] transition-all duration-150"
                >
                  <Icon size={16} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          {colLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="font-[family-name:var(--font-display)] text-white/20 text-[10px] tracking-[0.12em] uppercase mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-[family-name:var(--font-body)] text-sm text-white/45 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Soci */}
          <div className="flex flex-col gap-3">
            <h3 className="font-[family-name:var(--font-display)] text-white/20 text-[10px] tracking-[0.12em] uppercase mb-1">
              Uneix-te
            </h3>
            <p className="font-[family-name:var(--font-body)] text-white/35 text-xs leading-relaxed">
              Des de 20€/any formaràs part de la família del Sporting.
            </p>
            <Link
              href="/socios"
              className="inline-flex items-center justify-center font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-wider border border-[#F0B429]/40 text-[#F0B429] px-5 py-2.5 rounded-lg hover:bg-[#F0B429] hover:text-[#0d1a10] transition-all duration-150 self-start"
            >
              Fes-te Soci →
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-[family-name:var(--font-body)] text-[11px] text-white/20">
            &copy; 2025 Sporting de Benimaclet C.F. · Tots els drets reservats
          </p>
          <p className="font-[family-name:var(--font-display)] text-[10px] text-white/15 tracking-[0.1em] uppercase">
            Fundat el 1991 · Benimaclet, València
          </p>
        </div>
      </div>

    </footer>
  );
}

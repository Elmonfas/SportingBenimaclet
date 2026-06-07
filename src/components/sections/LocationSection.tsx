import { MapPin, EnvelopeSimple, InstagramLogo, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.25!2d-0.3596!3d39.4921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048b4c6b7d4b5%3A0x1!2sCalle+Di%C3%B3genes+L%C3%B3pez+Mech%C3%B3%2C+Benimaclet%2C+Val%C3%A8ncia!5e0!3m2!1sca!2ses!4v1700000000000!5m2!1sca!2ses";

const MAPS_LINK =
  "https://maps.google.com/?q=Calle+Di%C3%B3genes+L%C3%B3pez+Mech%C3%B3,+Benimaclet,+Val%C3%A8ncia";

export default function LocationSection() {
  return (
    <section className="relative" id="contacto">
      {/* Mapa — pantalla completa */}
      <div className="relative w-full h-[500px] md:h-[560px]">
        <iframe
          title="Camp de Les Fonts — Sporting de Benimaclet"
          src={MAPS_EMBED}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ filter: "saturate(0.9) contrast(1.02)" }}
        />

        {/* Gradiente inferior para anclar la tarjeta */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(1,30,15,0.55) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Tarjeta flotante */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl">
          <div className="bg-[#012e17]/95 backdrop-blur-sm rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 shadow-2xl border border-white/10">

            {/* Nombre + dirección */}
            <div className="flex-1 min-w-0">
              <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-xs tracking-[0.12em] uppercase mb-0.5">
                Camp de Les Fonts
              </p>
              <p className="font-[family-name:var(--font-display)] text-white text-xl leading-tight truncate">
                C/ DIÒGENES LÓPEZ MECHÓ
              </p>
              <p className="font-[family-name:var(--font-body)] text-white/50 text-xs mt-0.5">
                Benimaclet · València
              </p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-white/10 shrink-0" />

            {/* Contacto */}
            <div className="flex items-center gap-5">
              <a
                href="mailto:sportingbenimaclet@gmail.com"
                aria-label="Enviar correu electrònic"
                className="flex flex-col items-center gap-1 text-white/40 hover:text-[#F0B429] transition-colors duration-150"
              >
                <EnvelopeSimple size={20} weight="fill" />
                <span className="font-[family-name:var(--font-display)] text-[10px] tracking-wide uppercase">Email</span>
              </a>
              <a
                href="https://www.instagram.com/sportingbenimaclet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (nova finestra)"
                className="flex flex-col items-center gap-1 text-white/40 hover:text-[#F0B429] transition-colors duration-150"
              >
                <InstagramLogo size={20} weight="fill" />
                <span className="font-[family-name:var(--font-display)] text-[10px] tracking-wide uppercase">Instagram</span>
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-white/10 shrink-0" />

            {/* CTA */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-wider bg-[#F0B429] text-[#0d1a10] px-5 py-3 rounded-lg hover:bg-[#D4960F] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <MapPin size={14} weight="fill" />
              Com arribar
              <ArrowSquareOut size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

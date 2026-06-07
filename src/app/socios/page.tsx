import type { Metadata } from "next";
import { socioTiers } from "@/lib/data";
import SocioForm from "./SocioForm";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Hazte Socio",
  description:
    "Fes-te soci del Sporting de Benimaclet C.F. Quatre modalitats de socis des de 20 euros a l'any. Forma part del barri.",
};

export default function SociosPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-[#016531] py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-6xl leading-none mb-4">
            FES-TE SOCI
          </h1>
          <p className="font-[family-name:var(--font-body)] text-white/80 text-base leading-relaxed italic">
            No som un club, som un barri
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-sm mt-4 leading-relaxed">
            Uneix-te a la familia del Sporting de Benimaclet i ajuda&apos;ns a
            mantindre viu el futbol popular al nostre barri des de 1991.
          </p>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="bg-[#F8F8F6] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[#016531] text-4xl md:text-5xl leading-none mb-2 text-center">
            MODALITATS DE SOCI
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#4B5563] text-sm text-center mb-10">
            Quota anual &middot; Renovacio automatica cada temporada
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {socioTiers.map((tier) => {
              const isPlatino = tier.id === "platino";
              return (
                <div
                  key={tier.id}
                  className={`rounded-lg border flex flex-col ${
                    isPlatino
                      ? "bg-[#016531] border-[#016531] text-white"
                      : "bg-white border-[#D0E4D8] text-[#111827]"
                  }`}
                >
                  <div className="p-6 border-b border-[rgba(255,255,255,0.1)]">
                    <h2
                      className={`font-[family-name:var(--font-display)] text-3xl leading-none mb-2 ${
                        isPlatino ? "text-white" : "text-[#016531]"
                      }`}
                    >
                      {tier.name.toUpperCase()}
                    </h2>
                    <div className="flex items-end gap-1">
                      <span
                        className={`font-[family-name:var(--font-display)] text-5xl leading-none ${
                          isPlatino ? "text-white" : "text-[#016531]"
                        }`}
                      >
                        {tier.price}&euro;
                      </span>
                      <span
                        className={`font-[family-name:var(--font-body)] text-sm mb-1 ${
                          isPlatino ? "text-white/60" : "text-[#6B7280]"
                        }`}
                      >
                        /any
                      </span>
                    </div>
                    {tier.id === "reducida" && (
                      <p className={`font-[family-name:var(--font-body)] text-xs mt-2 ${isPlatino ? "text-white/60" : "text-[#6B7280]"}`}>
                        Per a jubilats, desempleats i families nombroses
                      </p>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <ul className="flex flex-col gap-3 flex-1">
                      {tier.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 font-[family-name:var(--font-body)] text-sm"
                        >
                          <CheckCircle
                            size={16}
                            weight="fill"
                            className="text-[#F0B429] shrink-0 mt-0.5"
                          />
                          <span
                            className={
                              isPlatino ? "text-white/90" : "text-[#374151]"
                            }
                          >
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      {isPlatino ? (
                        <a
                          href="#sol-licitud"
                          className="block w-full text-center font-[family-name:var(--font-body)] font-semibold text-sm uppercase tracking-wide bg-[#F0B429] text-[#1a1a1a] py-3 rounded-lg hover:bg-[#D4960F] transition-colors duration-150"
                        >
                          Triar Platino
                        </a>
                      ) : (
                        <a
                          href="#sol-licitud"
                          className="block w-full text-center font-[family-name:var(--font-body)] font-semibold text-sm uppercase tracking-wide bg-[#016531] text-white py-3 rounded-lg hover:bg-[#014F27] transition-colors duration-150"
                        >
                          Triar {tier.name}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="relative bg-[#012e17] py-20 px-4 overflow-hidden" id="sol-licitud">
        {/* Número decorativo de fondo */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-display)] text-white select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(180px, 30vw, 320px)", opacity: 0.03 }}
          aria-hidden="true"
        >
          91
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Cabecera */}
          <div className="mb-12">
            <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm tracking-[0.12em] uppercase mb-3">
              Sol·licitud d&apos;alta
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-6xl leading-none mb-4">
              EL TEU DORSAL<br />T&apos;ESPERA
            </h2>
            <p className="font-[family-name:var(--font-body)] text-white/50 text-sm leading-relaxed max-w-md">
              Omple el formulari i ens posarem en contacte amb tu per completar el procés d&apos;alta. Ràpid i senzill.
            </p>
          </div>

          <SocioForm tiers={socioTiers} />
        </div>
      </div>
    </div>
  );
}

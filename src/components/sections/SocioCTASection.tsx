import Link from "next/link";

export default function SocioCTASection() {
  return (
    <section className="bg-[#016531] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-display)] text-white text-4xl md:text-6xl leading-none mb-4">
          FORMA PART DEL SPORTING
        </h2>
        <p className="font-[family-name:var(--font-body)] text-white/80 text-base mb-8 leading-relaxed">
          Fes-te soci i contribueix a mantindre viu el futbol de barri a
          Benimaclet. Des de 20 euros a l&apos;any, formaras part d&apos;una comunitat de
          mes de 300 socis que creuen en el poder de l&apos;esport popular.
        </p>
        <Link
          href="/socios"
          className="inline-flex items-center justify-center font-[family-name:var(--font-body)] font-semibold text-sm uppercase tracking-wide bg-[#F0B429] text-[#1a1a1a] px-10 py-4 rounded-lg hover:bg-[#D4960F] active:scale-[0.98] transition-all duration-150"
        >
          FES-TE SOCI ARA
        </Link>
      </div>
    </section>
  );
}

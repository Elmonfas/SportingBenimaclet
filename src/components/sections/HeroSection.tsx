"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Video */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/campana-abonos-2025.mp4" type="video/mp4" />
      </video>

      {/* Capa 1: viñeta oscura en bordes */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.68) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Capa 2: gradiente hacia abajo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 30%, rgba(0,18,8,0.75) 65%, rgba(0,18,8,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Contenido central — logo + texto como una sola unidad */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 py-16 gap-4">

        {/* Logo 3D */}
        <motion.div
          className="w-full"
          aria-hidden="true"
          initial={shouldReduce ? false : { opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <iframe
            src="/sporting_benimaclet_3d.html?v=6"
            className="w-full border-0 block"
            style={{
              height: "clamp(260px, 50vw, 560px)",
              background: "transparent",
            }}
            allowTransparency={true}
            title="Logotip 3D Sporting Benimaclet"
            aria-hidden="true"
            tabIndex={-1}
            scrolling="no"
          />
        </motion.div>

        {/* Línea dorada */}
        <motion.div
          className="w-14 h-px bg-[#F0B429] mt-1"
          initial={shouldReduce ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Motto */}
        <motion.p
          className="font-[family-name:var(--font-display)] text-white text-3xl sm:text-4xl md:text-5xl leading-none tracking-wide"
          initial={shouldReduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          NO SOM UN CLUB,{" "}
          <span className="text-[#F0B429]">SOM UN BARRI</span>
        </motion.p>

        {/* Subtexto */}
        <motion.p
          className="font-[family-name:var(--font-body)] text-white/70 text-xs tracking-[0.18em] uppercase drop-shadow-sm"
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.6 }}
        >
          Benimaclet · València · des de 1991
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 mt-2"
          initial={shouldReduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/socios"
            className="inline-flex items-center justify-center font-[family-name:var(--font-body)] font-semibold text-sm uppercase tracking-wider bg-[#F0B429] text-[#0d1a10] px-8 py-3.5 rounded-lg hover:bg-[#D4960F] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shadow-2xl"
          >
            Fes-te Soci
          </Link>
          <Link
            href="/equipos"
            className="inline-flex items-center justify-center font-[family-name:var(--font-body)] font-semibold text-sm uppercase tracking-wider text-white border border-white/30 px-8 py-3.5 rounded-lg hover:bg-white/10 active:scale-[0.98] transition-all duration-150 whitespace-nowrap"
          >
            Veure Equips
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

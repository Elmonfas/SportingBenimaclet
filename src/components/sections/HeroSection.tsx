"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const shouldReduce = useReducedMotion();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Reenvía el movimiento del ratón al iframe para el tilt 3D
  useEffect(() => {
    if (shouldReduce) return;
    const handleMouseMove = (e: MouseEvent) => {
      iframeRef.current?.contentWindow?.postMessage(
        {
          type: "mousemove",
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        },
        "*"
      );
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduce]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="https://res.cloudinary.com/dtvcdfzbx/video/upload/v1780803855/campana-abonos-2025_eoy94j.mp4" type="video/mp4" />
      </video>

      {/* Viñeta oscura en bordes */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.65) 100%)" }}
        aria-hidden="true"
      />
      {/* Gradiente hacia abajo */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 25%, rgba(0,18,8,0.70) 60%, rgba(0,18,8,0.96) 100%)" }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 py-16 gap-5">

        {/* Escudo 3D */}
        <motion.div
          aria-hidden="true"
          initial={shouldReduce ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <iframe
            ref={iframeRef}
            src="/sporting_benimaclet_3d.html?v=9"
            className="border-0 block"
            style={{
              width: "clamp(220px, 38vw, 380px)",
              height: "clamp(220px, 38vw, 380px)",
              background: "transparent",
            }}
            allowTransparency={true}
            title="Escudo 3D Sporting Benimaclet"
            aria-hidden="true"
            tabIndex={-1}
            scrolling="no"
          />
        </motion.div>

        {/* Línea dorada */}
        <motion.div
          className="w-12 h-px bg-[#F0B429]"
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
          className="font-[family-name:var(--font-body)] text-white/60 text-xs tracking-[0.18em] uppercase"
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.65 }}
        >
          Benimaclet · València · des de 1991
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 mt-1"
          initial={shouldReduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
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

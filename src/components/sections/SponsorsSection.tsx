"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import type { Sponsor } from "@/types";

interface SponsorsSectionProps {
  sponsors: Sponsor[];
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const shouldReduce = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // El logo se mueve hasta 10px en cada dirección
  const logoX = useTransform(x, [-0.5, 0.5], [-10, 10]);
  const logoY = useTransform(y, [-0.5, 0.5], [-10, 10]);

  // La card hace un leve tilt en 3D
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (shouldReduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Normaliza entre -0.5 y 0.5
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.a
      ref={cardRef}
      href={sponsor.url !== "#" ? sponsor.url : undefined}
      target={sponsor.url !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={`${sponsor.name}${sponsor.url !== "#" ? " (obre en una nova finestra)" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: shouldReduce ? 0 : rotateX,
        rotateY: shouldReduce ? 0 : rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 600,
      }}
      className={`bg-white rounded-2xl border border-[#D0E4D8] p-4 flex flex-col items-center justify-center gap-2 hover:border-[#016531] hover:shadow-xl transition-[border-color,box-shadow] duration-200 group ${sponsor.url === "#" ? "cursor-default" : "cursor-pointer"}`}
    >
      <div style={{ minHeight: "96px" }} className="w-full flex flex-col items-center justify-center gap-2">
        {sponsor.logo ? (
          <motion.div
            style={{
              x: shouldReduce ? 0 : logoX,
              y: shouldReduce ? 0 : logoY,
            }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src={sponsor.logo}
              alt={`Logo ${sponsor.name}`}
              width={120}
              height={60}
              className="object-contain w-full h-auto max-h-[52px]"
              sizes="120px"
            />
          </motion.div>
        ) : (
          <motion.span
            style={{
              x: shouldReduce ? 0 : logoX,
              y: shouldReduce ? 0 : logoY,
            }}
            className="font-[family-name:var(--font-display)] text-[#016531] text-sm leading-none text-center group-hover:text-[#F0B429] transition-colors duration-150 px-1"
          >
            {sponsor.name.toUpperCase()}
          </motion.span>
        )}
        <span className="font-[family-name:var(--font-body)] text-[10px] text-[#9CA3AF] text-center leading-tight group-hover:text-[#016531] transition-colors duration-200 w-full truncate">
          {sponsor.name}
        </span>
      </div>
    </motion.a>
  );
}

export default function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  return (
    <section className="bg-[#F8F8F6] py-20 px-4" id="patrocinadors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm tracking-[0.08em] uppercase mb-1">
            Gràcies a ells és possible
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[#016531] text-4xl md:text-5xl leading-none">
            PATROCINADORS
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#4B5563] text-sm mt-2">
            Negocis i empreses del barri que fan possible el Sporting
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
}

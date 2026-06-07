"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";

const milestones = [
  {
    year: "1991",
    title: "El primer xiulet",
    tag: "Fundació",
    text: "Neix l'equip de futbol 11 al Col·legi Centre d'Estudis Benimaclet. Primera temporada al Camp de Las Palmeras de Burjassot. L'equip vestix molt a l'Arsenal: samarreta roja amb mànigues blanques i pantaló blanc.",
    detail: "El 2 de setembre de 1991 és la primera data de fundació oficial. L'equip de futbol sala del col·legi passa a ser de Futbol 11 en comprovar que hi ha suficients jugadors. Sense federar encara, ja disputen una temporada completa alternant distints tornejos.",
  },
  {
    year: "1992",
    title: "El nom que ens definix",
    tag: "Identitat",
    text: "El 3 de juny s'inscriu oficialment a la Federació Valenciana de Futbol amb el número 1723. El nom Sporting de Benimaclet neix perquè l'antic CF Benimaclet arrossegava una deute de la directiva anterior.",
    detail: "Quan els directius es presenten a la seu de la Federació Valenciana per a donar d'alta el Club, se'ls informa que l'antic CF Benimaclet arrossega una elevada deute. Per a evitar-la, el nou club pren el nom de SPORTING DE BENIMACLET CF i és donat d'alta amb el número 1723.",
  },
  {
    year: "1993",
    title: "El Camp de Les Fonts",
    tag: "Casa nostra",
    text: "Estrena del Camp de Les Fonts, al Camí de les Fonts. Els propis pares construïxen els vestuaris amb les seues mans i treuen les pedres del terreny de joc. Naix la famosa furgoneta blava que fa de bar.",
    detail: "Es troba un vell terreny de cultiu en guaret al Camí de les Fonts, al final del Carrer Murta. No és el terreny ideal —no és 100% rectangular— però els pares ho transformen tot: construïxen vestuaris, lleven pedres i instal·len la icònica furgoneta blava que farà de bar durant molts anys.",
  },
  {
    year: "1993",
    title: "El primer partit oficial",
    tag: "Història",
    text: "16 d'octubre: primer partit oficial a Les Fonts. Aleví Sporting vs Moncada, empat a 1. L'equip estrena els colors verd i negre que el definiran per sempre.",
    detail: "El dissabte 16 d'octubre de 1993 es juga a Les Fonts el primer partit oficial. L'Aleví del Sporting, entrenat per Sebas Peris, empata a 1 gol davant el Moncada. A partir d'aquest moment, el verd i el negre seran els colors identitaris del club.",
  },
  {
    year: "1994+",
    title: "L'escola creix",
    tag: "Creixement",
    text: "De l'equip original es passa a Cadete + Infantil + Aleví. El Bar-Mesón La Granja (Emilio Baró) actua de seu social i primer patrocinador del club. La comunitat s'amplia temporada rere temporada.",
    detail: "L'escola de futbol creix de forma orgànica, impulsada per les famílies del barri. S'afegixen les categories Cadete, Infantil i Aleví. El Bar-Mesón La Granja, regentat per Emilio Baró, es convertix en la seu social i el primer patrocinador del Sporting.",
  },
  {
    year: "2025",
    title: "Quasi 35 anys deixant empremta",
    tag: "Avui",
    text: "Prop de 35 anys de vida. Més de 300 jugadores i jugadors en 11 equips, des del Querubí fins a l'Amateur. El camp seguix sent de terra, l'últim de la província de València.",
    detail: "El Sporting de Benimaclet és avui un club amb 11 equips, més de 300 jugadores i jugadors, i una comunitat de socis que creix cada temporada. El camp de Les Fonts, construït amb les mans dels pares el 1993, seguix sent l'últim camp de terra de la província de València. No som un club, som un barri.",
  },
];

const stats = [
  { value: "35", label: "Anys de vida" },
  { value: "300+", label: "Jugadores i jugadors" },
  { value: "11", label: "Equips actius" },
  { value: "1", label: "Barri: Benimaclet" },
];

export default function HistorySection() {
  const [active, setActive] = useState(0);
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-[#016531] py-20 px-4 overflow-hidden" id="historia">
      <div className="max-w-6xl mx-auto">

        {/* Cabecera */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm tracking-[0.08em] uppercase mb-2">
            Història del Club
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-6xl leading-none">
            FILLS DEL BARRI<br className="hidden sm:block" /> DES DE 1991
          </h2>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden mb-14"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[#014f27] px-6 py-5 text-center">
              <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-4xl md:text-5xl leading-none">
                {s.value}
              </p>
              <p className="font-[family-name:var(--font-body)] text-white/50 text-xs mt-1 uppercase tracking-[0.08em]">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Timeline interactiu */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Nav d'anys — esquerra */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-1" id="historia-timeline" role="tablist" aria-label="Moments de la història del Sporting">
              {milestones.map((m, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`milestone-panel-${i}`}
                  onClick={() => setActive(i)}
                  className={`group text-left px-5 py-4 rounded-lg transition-all duration-200 flex items-center gap-4 ${
                    active === i
                      ? "bg-white/10 border border-white/20"
                      : "border border-transparent hover:bg-white/5"
                  }`}
                >
                  {/* Indicador actiu */}
                  <div className={`w-1 h-8 rounded-full shrink-0 transition-all duration-200 ${
                    active === i ? "bg-[#F0B429]" : "bg-white/15 group-hover:bg-white/30"
                  }`} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className={`font-[family-name:var(--font-display)] text-2xl leading-none transition-colors duration-200 ${
                        active === i ? "text-[#F0B429]" : "text-white/40 group-hover:text-white/60"
                      }`}>
                        {m.year}
                      </span>
                      <span className={`font-[family-name:var(--font-display)] text-xs tracking-[0.08em] uppercase transition-colors duration-200 ${
                        active === i ? "text-white/60" : "text-white/25"
                      }`}>
                        {m.tag}
                      </span>
                    </div>
                    <p className={`font-[family-name:var(--font-body)] text-sm leading-snug mt-0.5 transition-colors duration-200 truncate ${
                      active === i ? "text-white/90" : "text-white/40 group-hover:text-white/60"
                    }`}>
                      {m.title}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className={`shrink-0 transition-all duration-200 ${
                      active === i ? "text-[#F0B429] translate-x-0 opacity-100" : "text-white/20 -translate-x-1 opacity-0 group-hover:opacity-50 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Contingut — dreta */}
          <div className="lg:col-span-3 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                id={`milestone-panel-${active}`}
                role="tabpanel"
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduce ? {} : { opacity: 0, y: -8 }}
                transition={shouldReduce ? { duration: 0 } : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 h-full flex flex-col justify-between gap-8"
              >
                {/* Top */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className="font-[family-name:var(--font-display)] text-[#F0B429] text-[clamp(64px,10vw,100px)] leading-none">
                      {milestones[active].year}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-white/20 text-xs tracking-[0.1em] uppercase mt-2 text-right">
                      {milestones[active].tag}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-white text-3xl md:text-4xl leading-none mb-4">
                    {milestones[active].title.toUpperCase()}
                  </h3>

                  <p className="font-[family-name:var(--font-body)] text-white/70 text-base leading-relaxed mb-4">
                    {milestones[active].text}
                  </p>

                  <p className="font-[family-name:var(--font-body)] text-white/45 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {milestones[active].detail}
                  </p>
                </div>

                {/* Bottom nav */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <button
                    onClick={() => setActive((prev) => Math.max(0, prev - 1))}
                    disabled={active === 0}
                    className="font-[family-name:var(--font-body)] text-xs text-white/40 hover:text-white/80 disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-150 uppercase tracking-wide"
                  >
                    ← Anterior
                  </button>

                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {milestones.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        aria-label={`Anar a ${milestones[i].year}`}
                        className={`rounded-full transition-all duration-200 ${
                          active === i
                            ? "bg-[#F0B429] w-5 h-1.5"
                            : "bg-white/20 w-1.5 h-1.5 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setActive((prev) => Math.min(milestones.length - 1, prev + 1))}
                    disabled={active === milestones.length - 1}
                    className="font-[family-name:var(--font-body)] text-xs text-white/40 hover:text-white/80 disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-150 uppercase tracking-wide"
                  >
                    Següent →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.4, delay: 0.3 }}
          className="mt-10 flex justify-start"
        >
          <Link
            href="/club"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] font-semibold text-sm uppercase tracking-wide text-white border border-white/25 px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-150"
          >
            Llegir la història completa <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

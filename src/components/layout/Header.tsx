"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "/", label: "Inici" },
  { href: "/club", label: "Club" },
  { href: "/equipos", label: "Equips" },
  { href: "/#calendario", label: "Calendari" },
  { href: "/noticias", label: "Notícies" },
  { href: "/socios", label: "Socis" },
  { href: "/#contacto", label: "Contacte" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduce = useReducedMotion();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // Focus trap: mover foco al abrir, devolver al cerrar
  useEffect(() => {
    if (drawerOpen) {
      const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
        "a, button, [tabindex]:not([tabindex='-1'])"
      );
      firstFocusable?.focus();
    } else {
      hamburgerRef.current?.focus();
    }
  }, [drawerOpen]);

  const drawerTransition = shouldReduce
    ? { duration: 0 }
    : { duration: 0.32, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-white border-b border-[#D0E4D8] transition-shadow duration-200"
        style={{
          boxShadow: scrolled
            ? "0 2px 12px rgba(1,101,49,0.10)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Sporting de Benimaclet - Inici">
            <Image
              src="https://sportingbenimaclet.es/wp-content/uploads/2025/03/Escudo-OFICIAL-2-2.png"
              alt="Escudo Sporting de Benimaclet"
              width={40}
              height={40}
              className="object-contain"
              sizes="40px"
            />
            <span className="hidden md:block font-[family-name:var(--font-display)] text-[#016531] text-xl tracking-wide leading-none">
              SPORTING BENIMACLET
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegació principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-body)] text-sm text-[#374151] hover:text-[#016531] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/socios"
              className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-wide bg-[#016531] text-white px-4 py-2 rounded-lg hover:bg-[#014F27] transition-colors duration-150 ml-2"
            >
              Fes-te Soci
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            ref={hamburgerRef}
            className="md:hidden text-[#016531] p-2"
            onClick={() => setDrawerOpen(true)}
            aria-label="Obrir menú de navegació"
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
          >
            <List size={24} weight="bold" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 md:hidden"
              style={{ backgroundColor: "rgba(1,101,49,0.72)" }}
              initial={{ opacity: shouldReduce ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: shouldReduce ? 1 : 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.2 }}
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-drawer"
              ref={drawerRef}
              className="fixed top-0 left-0 bottom-0 z-[60] w-[85%] max-w-sm bg-[#016531] flex flex-col md:hidden"
              initial={{ x: shouldReduce ? 0 : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: shouldReduce ? 0 : "-100%" }}
              transition={drawerTransition}
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegació"
            >
              {/* Drawer Header — grid 3 cols para logo centrado de verdad */}
              <div className="grid grid-cols-3 items-center px-6 py-4 border-b border-[rgba(255,255,255,0.12)]">
                <div />
                <div className="flex justify-center">
                  <Image
                    src="https://sportingbenimaclet.es/wp-content/uploads/2025/03/Escudo-OFICIAL-2-2.png"
                    alt=""
                    width={48}
                    height={48}
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="text-white p-2"
                    aria-label="Tancar menú"
                  >
                    <X size={24} weight="bold" />
                  </button>
                </div>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Navegació mòbil">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-[family-name:var(--font-display)] text-white text-4xl tracking-wide hover:text-[#F0B429] transition-colors duration-150 py-1"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                ))}
              </nav>

              {/* CTA Bottom */}
              <div className="px-8 pb-10">
                <Link
                  href="/socios"
                  className="block w-full font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-wide bg-[#F0B429] text-[#1a1a1a] text-center py-4 rounded-lg hover:bg-[#D4960F] transition-colors duration-150"
                  onClick={() => setDrawerOpen(false)}
                >
                  FES-TE SOCI
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

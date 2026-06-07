<div align="center">

<img src="https://sportingbenimaclet.es/wp-content/uploads/2025/03/Escudo-OFICIAL-2-2.png" width="100" alt="Escudo Sporting de Benimaclet" />

# Sporting de Benimaclet C.F.

**No som un club, som un barri.**

Website oficial del Sporting de Benimaclet C.F. — club de futbol de barri fundat el 1991 a Benimaclet, València.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion)

</div>

---

## Pàgines

| Ruta | Descripció |
|---|---|
| `/` | Portada — Hero 3D, història, notícies, pròxim partit, patrocinadors |
| `/club` | Història del club, valors i pilars |
| `/equipos` | Tots els equips per categoria |
| `/equipos/[slug]` | Plantilla i partits d'un equip |
| `/noticias` | Llistat de notícies amb destacat |
| `/noticias/[slug]` | Article complet amb navegació |
| `/socios` | Formulari d'alta de soci |

## Stack tècnic

- **Framework** — Next.js 16 App Router amb TypeScript
- **Estils** — Tailwind CSS v4 amb `@theme` tokens personalitzats
- **Animacions** — Framer Motion (parallax, tilt, AnimatePresence, useReducedMotion)
- **Tipografia** — Anton (display) + Source Sans 3 (cos) via `next/font`
- **3D** — Three.js r128 en iframe per al logo animat del hero
- **Formulari** — React Hook Form + validació accessible (aria-invalid, aria-describedby)
- **Accessibilitat** — WCAG AA: focus trap, tablist/tab/tabpanel, aria-expanded, safe-area-inset

## Característiques destacades

- **Logo 3D interactiu** al hero — rota seguint el ratolí via Three.js
- **Secció d'història** amb tabs interactius i transicions AnimatePresence
- **Cards de patrocinadors** amb efecte parallax inner: el logo segueix el cursor dins la card
- **Footer amb Google Maps** integrat sense popup intrusiu
- **Formulari de socis** amb personalitat — fons fosc, numeració estil dorsal, feedback accessible
- **Notícies** amb pàgines de slug generades estàticament (`generateStaticParams`)
- **Mobile-first** — drawer de navegació amb focus trap i scroll lock

## Posada en marxa

```bash
# Instal·lar dependències
npm install

# Servidor de desenvolupament
npm run dev

# Build de producció
npm run build
npm start
```

Obre [http://localhost:3000](http://localhost:3000) al navegador.

## Estructura del projecte

```
src/
├── app/
│   ├── layout.tsx          # Layout global (fonts, header, footer)
│   ├── page.tsx            # Portada
│   ├── club/               # Pàgina del club
│   ├── equipos/            # Equips + [slug]
│   ├── noticias/           # Notícies + [slug]
│   └── socios/             # Formulari de soci
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # HeroSection, HistorySection, SponsorsSection…
│   └── ui/                 # Badge, Button
├── lib/
│   └── data.ts             # Dades estàtiques (equips, notícies, patrocinadors)
├── types/
│   └── index.ts            # Interfaces TypeScript
public/
├── images/
│   ├── sponsors/           # 27 logos de patrocinadors
│   └── news/               # Imatges de notícies
└── sporting_benimaclet_3d.html  # Escena Three.js del logo
```

## Paleta de colors

| Token | Valor | Ús |
|---|---|---|
| `--color-primary` | `#016531` | Verd Sporting — accions principals |
| `--color-accent` | `#F0B429` | Or — destacats, títols, CTAs |
| `--color-background` | `#F8F8F6` | Fons general |
| `--color-text-primary` | `#111827` | Text principal |
| `--color-border` | `#D0E4D8` | Bordes suaus |

## Deploy

El projecte es pot desplegar a **Render** com a Web Service:

1. Connecta el repositori GitHub a [render.com](https://render.com)
2. **Build Command:** `npm run build`
3. **Start Command:** `npm start`
4. **Environment:** Node 20+

---

<div align="center">

Fet amb 💚 per al barri de Benimaclet · València

</div>

import type { Metadata } from "next";
import TeamsGrid from "./TeamsGrid";
import { teams } from "@/lib/data";

export const metadata: Metadata = {
  title: "Equipos",
  description:
    "Tots els equips del Sporting de Benimaclet C.F.: des dels Veterans fins als Querubins. Futbol per a totes les edats.",
};

export default function EquiposPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#016531] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-6xl leading-none tracking-wide">
            LES NOSTRES PLANTILLES
          </h1>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-base mt-3">
            {teams.length} equips &middot; Totes les categories &middot; Temporada 2024-2025
          </p>
        </div>
      </div>

      {/* Teams Grid with client-side filter */}
      <TeamsGrid teams={teams} />
    </div>
  );
}

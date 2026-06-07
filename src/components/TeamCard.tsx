import Link from "next/link";
import type { Team } from "@/types";
import Badge from "@/components/ui/Badge";

interface TeamCardProps {
  team: Team;
}

const gradients: Record<string, string> = {
  senior: "from-[#016531] to-[#028A42]",
  "youth-senior": "from-[#028A42] to-[#3D56A0]",
  "youth-junior": "from-[#016531] to-[#F0B429]",
};

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Link
      href={`/equipos/${team.slug}`}
      className="group block rounded-lg overflow-hidden border border-[#D0E4D8] bg-white hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(1,101,49,0.14)] transition-all duration-200"
      aria-label={`Veure l'equip ${team.name}`}
    >
      {/* Portrait gradient placeholder */}
      <div
        className={`relative bg-gradient-to-br ${gradients[team.categoryTier]} aspect-[3/4] flex items-end p-4`}
      >
        {/* Team initials decorative */}
        <span
          className="font-[family-name:var(--font-display)] text-white/10 text-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          {team.name
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("")
            .toUpperCase()}
        </span>

        {/* Badge overlay */}
        <div className="absolute top-3 left-3">
          <Badge label={team.category} tier={team.categoryTier} />
        </div>

        {/* Team name on image */}
        <div className="relative z-10">
          <h3 className="font-[family-name:var(--font-display)] text-white text-2xl leading-none tracking-wide">
            {team.name.toUpperCase()}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <p className="font-[family-name:var(--font-body)] text-xs text-[#6B7280] uppercase tracking-wide">
          Entrenador
        </p>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#374151] font-semibold mt-0.5">
          {team.coach}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-[family-name:var(--font-body)] text-xs text-[#6B7280]">
            {team.players.length} jugadors
          </span>
          <span className="font-[family-name:var(--font-body)] text-xs text-[#016531] font-semibold group-hover:underline">
            Veure plantilla &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}

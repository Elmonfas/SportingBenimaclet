import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teams, matches } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import MatchRow from "@/components/MatchRow";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return teams.map((team) => ({ slug: team.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);
  if (!team) return { title: "Equip no trobat" };
  return {
    title: team.name,
    description: `Plantilla i informacio de l'equip ${team.name} del Sporting de Benimaclet C.F.`,
  };
}

export default async function TeamDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);

  if (!team) notFound();

  const teamMatches = matches.filter((m) => m.teamId === team.id);
  const recentMatches = teamMatches.filter((m) => m.result).slice(-3).reverse();
  const upcomingMatches = teamMatches.filter((m) => !m.result).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <div className="bg-[#016531] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3">
            <Badge label={team.category} tier={team.categoryTier} />
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-7xl leading-none tracking-wide">
            {team.name.toUpperCase()}
          </h1>
          <p className="font-[family-name:var(--font-body)] text-white/60 text-sm mt-3">
            Temporada 2024-2025 &middot; {team.players.length} jugadors
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#F8F8F6] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Coach + Players */}
            <div>
              <div className="mb-8">
                <p className="font-[family-name:var(--font-display)] text-[#016531] text-xs tracking-[0.08em] uppercase mb-1">
                  Entrenador
                </p>
                <p className="font-[family-name:var(--font-body)] text-[#111827] text-xl font-semibold">
                  {team.coach}
                </p>
              </div>

              <div>
                <p className="font-[family-name:var(--font-display)] text-[#016531] text-xs tracking-[0.08em] uppercase mb-4">
                  Plantilla
                </p>
                <div className="bg-white rounded-lg border border-[#D0E4D8] overflow-hidden">
                  {team.players.map((player, i) => (
                    <div
                      key={player.id}
                      className={`flex items-center gap-4 px-4 py-3 ${
                        i !== team.players.length - 1
                          ? "border-b border-[#D0E4D8]"
                          : ""
                      }`}
                    >
                      {/* Number */}
                      <span className="font-[family-name:var(--font-display)] text-[#016531] text-lg leading-none w-8 shrink-0">
                        {player.number ?? "-"}
                      </span>
                      {/* Name */}
                      <span className="font-[family-name:var(--font-body)] text-[#111827] font-semibold text-sm flex-1">
                        {player.name}
                      </span>
                      {/* Position */}
                      <span className="font-[family-name:var(--font-body)] text-[#6B7280] text-xs">
                        {player.position}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Matches */}
            <div>
              {recentMatches.length > 0 && (
                <div className="mb-8">
                  <p className="font-[family-name:var(--font-display)] text-[#016531] text-xs tracking-[0.08em] uppercase mb-4">
                    Resultats Recents
                  </p>
                  <div className="bg-white rounded-lg border border-[#D0E4D8] px-4">
                    {recentMatches.map((match) => (
                      <MatchRow key={match.id} match={match} />
                    ))}
                  </div>
                </div>
              )}

              {upcomingMatches.length > 0 && (
                <div>
                  <p className="font-[family-name:var(--font-display)] text-[#016531] text-xs tracking-[0.08em] uppercase mb-4">
                    Propers Partits
                  </p>
                  <div className="bg-white rounded-lg border border-[#D0E4D8] px-4">
                    {upcomingMatches.map((match) => (
                      <MatchRow key={match.id} match={match} />
                    ))}
                  </div>
                </div>
              )}

              {recentMatches.length === 0 && upcomingMatches.length === 0 && (
                <div className="bg-white rounded-lg border border-[#D0E4D8] p-8 text-center">
                  <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-sm">
                    No hi ha partits registrats per a aquest equip.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

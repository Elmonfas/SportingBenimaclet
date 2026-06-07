import { matches, teams } from "@/lib/data";
import { MapPin, Clock, CalendarBlank, House } from "@phosphor-icons/react/dist/ssr";

export default function NextMatchSection() {
  const upcomingMatches = matches.filter((m) => !m.result);
  const nextMatch = upcomingMatches[0];

  if (!nextMatch) return null;

  const team = teams.find((t) => t.id === nextMatch.teamId);
  const dateObj = new Date(nextMatch.date);
  const formattedDate = dateObj.toLocaleDateString("ca-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <section className="bg-[#EDF5F0] py-16 px-4" id="calendario">
      <div className="max-w-4xl mx-auto">
        <p className="font-[family-name:var(--font-display)] text-[#016531] text-sm tracking-[0.08em] uppercase mb-2 text-center">
          Proper Partit
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-[#016531] text-4xl md:text-5xl text-center mb-10 leading-none">
          ANEM AL CAMP
        </h2>

        <div className="bg-white rounded-lg border border-[#D0E4D8] shadow-sm overflow-hidden">
          {/* Team header */}
          <div className="bg-[#016531] px-6 py-4 text-white">
            <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.08em] text-white/60">
              {team?.category ?? "Amateur A"}
            </span>
          </div>

          {/* Match info */}
          <div className="px-6 py-8">
            <div className="flex items-center justify-center gap-6 md:gap-12">
              {/* Home team */}
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-[#016531] text-xl md:text-2xl leading-tight">
                  {nextMatch.isHome ? "SPORTING BENIMACLET" : nextMatch.rival}
                </p>
                {nextMatch.isHome && (
                  <span className="inline-flex items-center gap-1 mt-1 font-[family-name:var(--font-body)] text-xs text-white bg-[#016531] px-2 py-0.5 rounded-[4px]">
                    <House size={12} weight="fill" /> En casa
                  </span>
                )}
              </div>

              {/* VS */}
              <div className="font-[family-name:var(--font-display)] text-[#F0B429] text-4xl md:text-6xl leading-none shrink-0">
                VS
              </div>

              {/* Away team */}
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-[#016531] text-xl md:text-2xl leading-tight">
                  {nextMatch.isHome ? nextMatch.rival : "SPORTING BENIMACLET"}
                </p>
                {!nextMatch.isHome && (
                  <span className="inline-flex items-center gap-1 mt-1 font-[family-name:var(--font-body)] text-xs text-white bg-[#016531] px-2 py-0.5 rounded-[4px]">
                    Fora
                  </span>
                )}
              </div>
            </div>

            {/* Match details */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center border-t border-[#D0E4D8] pt-6">
              <div className="flex items-center gap-2 font-[family-name:var(--font-body)] text-sm text-[#374151]">
                <CalendarBlank size={16} className="text-[#F0B429]" />
                <span className="capitalize">{formattedDate}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#D0E4D8]" />
              <div className="flex items-center gap-2 font-[family-name:var(--font-body)] text-sm text-[#374151]">
                <Clock size={16} className="text-[#F0B429]" />
                <span>{nextMatch.time} h</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#D0E4D8]" />
              <div className="flex items-center gap-2 font-[family-name:var(--font-body)] text-sm text-[#374151]">
                <MapPin size={16} className="text-[#F0B429]" />
                <span>{nextMatch.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

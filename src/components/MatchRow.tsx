import type { Match } from "@/types";
import { CalendarBlank, MapPin, House } from "@phosphor-icons/react/dist/ssr";

interface MatchRowProps {
  match: Match;
}

export default function MatchRow({ match }: MatchRowProps) {
  const dateObj = new Date(match.date);
  const formattedDate = dateObj.toLocaleDateString("ca-ES", {
    day: "numeric",
    month: "short",
  });

  const isResult = Boolean(match.result);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-[#D0E4D8] last:border-b-0">
      {/* Date */}
      <div className="flex items-center gap-1.5 font-[family-name:var(--font-body)] text-xs text-[#6B7280] shrink-0 min-w-[70px]">
        <CalendarBlank size={13} />
        <time dateTime={match.date} className="capitalize">
          {formattedDate}
        </time>
      </div>

      {/* Match */}
      <div className="flex-1 font-[family-name:var(--font-body)] text-sm text-[#111827] font-semibold">
        <span>Sporting Benimaclet</span>
        <span className="font-normal text-[#6B7280] mx-2">vs</span>
        <span>{match.rival}</span>
        {match.isHome && (
          <span className="ml-2 inline-flex items-center gap-1 font-[family-name:var(--font-body)] text-[10px] text-white bg-[#016531] px-1.5 py-0.5 rounded-[4px]">
            <House size={10} weight="fill" /> Casa
          </span>
        )}
      </div>

      {/* Location */}
      <div className="flex items-center gap-1 font-[family-name:var(--font-body)] text-xs text-[#6B7280] shrink-0">
        <MapPin size={13} />
        <span className="max-w-[140px] truncate">{match.location}</span>
      </div>

      {/* Result or time */}
      <div className="shrink-0 min-w-[60px] text-right">
        {isResult ? (
          <span className="font-[family-name:var(--font-display)] text-lg text-[#016531] leading-none">
            {match.result}
          </span>
        ) : (
          <span className="font-[family-name:var(--font-body)] text-sm text-[#F0B429] font-semibold">
            {match.time} h
          </span>
        )}
      </div>
    </div>
  );
}

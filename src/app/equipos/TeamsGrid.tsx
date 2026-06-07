"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Team } from "@/types";
import TeamCard from "@/components/TeamCard";

type Filter = "all" | "senior" | "youth-senior" | "youth-junior";

const filterLabels: { value: Filter; label: string }[] = [
  { value: "all", label: "Tots" },
  { value: "senior", label: "Senior" },
  { value: "youth-senior", label: "Juvenil" },
  { value: "youth-junior", label: "Infantil" },
];

interface TeamsGridProps {
  teams: Team[];
}

export default function TeamsGrid({ teams }: TeamsGridProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredTeams =
    activeFilter === "all"
      ? teams
      : teams.filter((t) => t.categoryTier === activeFilter);

  return (
    <div className="bg-[#F8F8F6] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtre per categoria">
          {filterLabels.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              aria-pressed={activeFilter === value}
              className={`font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-wide px-5 py-2 rounded-lg transition-all duration-150 cursor-pointer ${
                activeFilter === value
                  ? "bg-[#016531] text-white"
                  : "bg-white text-[#374151] border border-[#D0E4D8] hover:border-[#016531] hover:text-[#016531]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredTeams.map((team, i) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <TeamCard team={team} />
            </motion.div>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <p className="font-[family-name:var(--font-body)] text-[#6B7280] text-center py-16">
            No hi ha equips per a aquesta categoria.
          </p>
        )}
      </div>
    </div>
  );
}

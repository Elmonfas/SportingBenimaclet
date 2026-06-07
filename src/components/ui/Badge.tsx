interface BadgeProps {
  label: string;
  tier: "senior" | "youth-senior" | "youth-junior";
}

export default function Badge({ label, tier }: BadgeProps) {
  const styles = {
    senior: "bg-[#016531] text-white",
    "youth-senior": "bg-[rgba(1,101,49,0.12)] text-[#016531]",
    "youth-junior": "bg-[#F0B429] text-[#1a1a1a]",
  };

  return (
    <span
      className={`inline-block font-[family-name:var(--font-display)] text-[11px] tracking-widest py-1 px-2 rounded-[4px] uppercase ${styles[tier]}`}
    >
      {label}
    </span>
  );
}

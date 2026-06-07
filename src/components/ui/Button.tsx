import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "secondary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled,
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-[family-name:var(--font-body)] font-semibold text-sm uppercase tracking-wide rounded-lg px-6 py-3 transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#016531] text-white hover:bg-[#014F27] active:scale-[0.98] active:-translate-y-px",
    accent:
      "bg-[#F0B429] text-[#1a1a1a] hover:bg-[#D4960F] active:scale-[0.98] active:-translate-y-px",
    secondary:
      "bg-white text-[#016531] border border-[#016531] hover:bg-[#EDF5F0] active:scale-[0.98] active:-translate-y-px",
    ghost: "text-[#016531] underline hover:text-[#014F27] px-0",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

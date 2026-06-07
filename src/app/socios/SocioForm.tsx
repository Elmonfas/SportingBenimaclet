"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SocioTier } from "@/types";

interface FormData {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  cuota: string;
  dni: string;
}

interface SocioFormProps {
  tiers: SocioTier[];
}

export default function SocioForm({ tiers }: SocioFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      const res = await fetch("/api/socios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error en enviar la sol·licitud");
      setSubmitted(true);
    } catch {
      setError("Hi ha hagut un error. Torna-ho a intentar o contacta amb nosaltres.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        {/* Número dorsal */}
        <div className="font-[family-name:var(--font-display)] text-[#F0B429] text-[clamp(80px,20vw,140px)] leading-none opacity-20 select-none absolute inset-x-0 top-0 pointer-events-none" aria-hidden="true">
          ✓
        </div>
        <div className="relative">
          <div className="w-20 h-20 bg-[#F0B429] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#0d1a10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-white text-5xl md:text-6xl leading-none mb-4">
            BENVINGUT AL SPORTING
          </h3>
          <p className="font-[family-name:var(--font-body)] text-white/70 text-base leading-relaxed max-w-md mx-auto">
            Sol·licitud rebuda. Ens posarem en contacte amb tu aviat per completar el procés d&apos;alta. Ja ets de la família.
          </p>
          <p className="font-[family-name:var(--font-display)] text-[#F0B429] text-2xl mt-6 tracking-wide">
            NO SOM UN CLUB, SOM UN BARRI.
          </p>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full font-[family-name:var(--font-body)] text-base text-white bg-transparent border-0 border-b-2 border-white/20 px-0 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#F0B429] transition-colors duration-200";

  const selectClass =
    "w-full font-[family-name:var(--font-body)] text-base text-white bg-transparent border-0 border-b-2 border-white/20 px-0 py-3 focus:outline-none focus:border-[#F0B429] transition-colors duration-200 appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22rgba(255,255,255,0.5)%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0px_center]";

  const errorClass =
    "font-[family-name:var(--font-body)] text-xs text-[#fca5a5] mt-1.5";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10"
      noValidate
    >
      {/* Fila 1: Nom + Cognoms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="relative">
          <label htmlFor="nombre" className="flex items-baseline gap-3 mb-1">
            <span className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm leading-none">01</span>
            <span className="font-[family-name:var(--font-display)] text-white/50 text-sm tracking-[0.1em] uppercase leading-none">
              Nom <span className="text-[#fca5a5]" aria-hidden="true">*</span>
            </span>
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Josep"
            className={inputClass}
            aria-required="true"
            aria-invalid={!!errors.nombre}
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
            {...register("nombre", { required: "El nom és obligatori" })}
          />
          {errors.nombre && (
            <p id="nombre-error" className={errorClass} role="alert">{errors.nombre.message}</p>
          )}
        </div>

        <div className="relative">
          <label htmlFor="apellidos" className="flex items-baseline gap-3 mb-1">
            <span className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm leading-none">02</span>
            <span className="font-[family-name:var(--font-display)] text-white/50 text-sm tracking-[0.1em] uppercase leading-none">
              Cognoms <span className="text-[#fca5a5]" aria-hidden="true">*</span>
            </span>
          </label>
          <input
            id="apellidos"
            type="text"
            placeholder="Ferrer Lloret"
            className={inputClass}
            aria-required="true"
            aria-invalid={!!errors.apellidos}
            aria-describedby={errors.apellidos ? "apellidos-error" : undefined}
            {...register("apellidos", { required: "Els cognoms són obligatoris" })}
          />
          {errors.apellidos && (
            <p id="apellidos-error" className={errorClass} role="alert">{errors.apellidos.message}</p>
          )}
        </div>
      </div>

      {/* Fila 2: Email */}
      <div>
        <label htmlFor="email" className="flex items-baseline gap-3 mb-1">
          <span className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm leading-none">03</span>
          <span className="font-[family-name:var(--font-display)] text-white/50 text-sm tracking-[0.1em] uppercase leading-none">
            Correu electrònic <span className="text-[#fca5a5]" aria-hidden="true">*</span>
          </span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="nom@exemple.com"
          className={inputClass}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email", {
            required: "El correu és obligatori",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "El format del correu no és vàlid",
            },
          })}
        />
        {errors.email && (
          <p id="email-error" className={errorClass} role="alert">{errors.email.message}</p>
        )}
      </div>

      {/* Fila 3: Telèfon + DNI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="telefono" className="flex items-baseline gap-3 mb-1">
            <span className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm leading-none">04</span>
            <span className="font-[family-name:var(--font-display)] text-white/50 text-sm tracking-[0.1em] uppercase leading-none">
              Telèfon <span className="text-[#fca5a5]" aria-hidden="true">*</span>
            </span>
          </label>
          <input
            id="telefono"
            type="tel"
            placeholder="612 345 678"
            className={inputClass}
            aria-required="true"
            aria-invalid={!!errors.telefono}
            aria-describedby={errors.telefono ? "telefono-error" : undefined}
            {...register("telefono", { required: "El telèfon és obligatori" })}
          />
          {errors.telefono && (
            <p id="telefono-error" className={errorClass} role="alert">{errors.telefono.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="dni" className="flex items-baseline gap-3 mb-1">
            <span className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm leading-none">05</span>
            <span className="font-[family-name:var(--font-display)] text-white/50 text-sm tracking-[0.1em] uppercase leading-none">
              DNI <span className="text-[#fca5a5]" aria-hidden="true">*</span>
            </span>
          </label>
          <input
            id="dni"
            type="text"
            placeholder="12345678A"
            className={inputClass}
            aria-required="true"
            aria-invalid={!!errors.dni}
            aria-describedby={errors.dni ? "dni-error" : undefined}
            {...register("dni", {
              required: "El DNI és obligatori",
              pattern: {
                value: /^[0-9]{8}[A-Z]$/,
                message: "Format de DNI no vàlid (ex: 12345678A)",
              },
            })}
          />
          {errors.dni && (
            <p id="dni-error" className={errorClass} role="alert">{errors.dni.message}</p>
          )}
        </div>
      </div>

      {/* Fila 4: Modalitat */}
      <div>
        <label htmlFor="cuota" className="flex items-baseline gap-3 mb-1">
          <span className="font-[family-name:var(--font-display)] text-[#F0B429] text-sm leading-none">06</span>
          <span className="font-[family-name:var(--font-display)] text-white/50 text-sm tracking-[0.1em] uppercase leading-none">
            Modalitat de soci <span className="text-[#fca5a5]" aria-hidden="true">*</span>
          </span>
        </label>
        <select
          id="cuota"
          className={selectClass}
          style={{ WebkitAppearance: "none" }}
          aria-required="true"
          aria-invalid={!!errors.cuota}
          aria-describedby={errors.cuota ? "cuota-error" : undefined}
          {...register("cuota", { required: "Selecciona una modalitat" })}
        >
          <option value="" style={{ background: "#014a25", color: "rgba(255,255,255,0.5)" }}>Selecciona una modalitat...</option>
          {tiers.map((tier) => (
            <option key={tier.id} value={tier.id} style={{ background: "#014a25", color: "#fff" }}>
              {tier.name} — {tier.price}€/any
            </option>
          ))}
        </select>
        {errors.cuota && (
          <p id="cuota-error" className={errorClass} role="alert">{errors.cuota.message}</p>
        )}
      </div>

      {/* Server error */}
      {error && (
        <div className="border border-[#fca5a5]/40 bg-red-900/20 rounded-lg px-5 py-4" role="alert">
          <p className="font-[family-name:var(--font-body)] text-sm text-[#fca5a5]">{error}</p>
        </div>
      )}

      {/* Divisor */}
      <div className="h-px bg-white/10" />

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-[family-name:var(--font-display)] text-2xl tracking-wider bg-[#F0B429] text-[#0d1a10] py-5 rounded-lg hover:bg-[#D4960F] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 cursor-pointer"
        >
          {isSubmitting ? "ENVIANT..." : "UNEIX-TE AL SPORTING"}
        </button>
        <p className="font-[family-name:var(--font-body)] text-xs text-white/30 text-center mt-4">
          Les teues dades es tractaran conforme a la nostra política de privacitat i només s&apos;usaran per gestionar la teua inscripció.
        </p>
      </div>
    </form>
  );
}

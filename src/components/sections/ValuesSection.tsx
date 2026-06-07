import { Users, Heart, MapPin } from "@phosphor-icons/react/dist/ssr";

const values = [
  {
    icon: Users,
    title: "Comunitat",
    description:
      "Som un espai on tothom es benvingut. Jugadors, famílies i veins formen part d'una mateixa familia que creix junta.",
  },
  {
    icon: Heart,
    title: "Inclusio",
    description:
      "El futbol es per a tothom, independentment de l'edat, el genere o les capacitats. Al Sporting, cada persona suma.",
  },
  {
    icon: MapPin,
    title: "Territori",
    description:
      "Estem arrelats a Benimaclet. El barri ens dona la identitat i nosaltres donem vida al barri a través de l'esport.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-[#EDF5F0] py-20 px-4" id="club">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[#016531] text-4xl md:text-5xl leading-none mb-4">
              MES QUE UN CLUB
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#374151] text-base leading-relaxed mb-10 max-w-lg">
              Des de 1991, el Sporting de Benimaclet ha estat un punt de
              trobada per a les families del barri. Mes de 300 jugadors i
              jugadores, 11 equips i una comunitat que creix temporada rere
              temporada.
            </p>

            <div className="flex flex-col gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex gap-4 items-start">
                    <div className="shrink-0 w-11 h-11 bg-[#016531] rounded-lg flex items-center justify-center">
                      <Icon size={22} weight="fill" className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-body)] font-semibold text-[#111827] text-base mb-1">
                        {value.title}
                      </h3>
                      <p className="font-[family-name:var(--font-body)] text-[#374151] text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Decorative side */}
          <div className="relative flex items-center justify-center py-10 overflow-hidden select-none">
            <span
              className="font-[family-name:var(--font-display)] text-[#016531] text-[clamp(80px,15vw,160px)] leading-none opacity-[0.04] md:opacity-[0.07] text-center break-words"
              aria-hidden="true"
            >
              NO SOM UN CLUB SOM UN BARRI
            </span>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
              <blockquote className="font-[family-name:var(--font-display)] text-[#016531] text-3xl md:text-4xl text-center leading-tight">
                &ldquo;NO SOM UN CLUB, SOM UN BARRI&rdquo;
              </blockquote>
              <p className="font-[family-name:var(--font-body)] text-[#374151] text-sm mt-4 text-center italic">
                Motto del Sporting de Benimaclet, 1991
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

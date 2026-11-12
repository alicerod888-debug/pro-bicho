import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Motion";
import { Btn, Heading } from "./ui";
import { MAPS_EMBED, MAPS_LINK, SITE, TEL, WA_DEFAULT } from "@/lib/site";

export default function Contact() {
  const a = SITE.address;
  const rows = [
    { icon: MapPin, label: "Endereço", value: `${a.street} – ${a.district}, ${a.city} – ${a.state}, ${a.zip}` },
    { icon: Phone, label: "Telefone", value: SITE.phoneDisplay, href: TEL },
    { icon: MessageCircle, label: "WhatsApp", value: SITE.phoneDisplay, href: WA_DEFAULT },
    { icon: Clock, label: "Horário", value: "24 horas, todos os dias, inclusive feriados" },
  ];
  return (
    <section id="contato" className="scroll-mt-20 bg-sand/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <Heading>Localização e contato</Heading>
          <ul className="mt-10 space-y-6">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest text-gold"><Icon size={20} /></span>
                <div><p className="text-sm text-ink/60">{label}</p>{href ? <a href={href} className="text-lg font-medium text-forest underline-offset-4 hover:underline">{value}</a> : <p className="text-lg font-medium text-forest">{value}</p>}</div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-ink/70">Atendemos Itaberaba e região: {SITE.regions.join(", ")}.</p>
          <Btn href={MAPS_LINK} className="mt-8">Abrir no Google Maps</Btn>
        </Reveal>
        <Reveal delay={0.1}>
          <iframe title="Mapa da ProBicho em Itaberaba" src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[26rem] w-full rounded-[2rem] border-0 lg:h-full lg:min-h-[28rem]" />
        </Reveal>
      </div>
    </section>
  );
}

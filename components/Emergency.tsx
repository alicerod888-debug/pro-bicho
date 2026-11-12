import { Siren } from "lucide-react";
import { Reveal } from "./Motion";
import { Btn } from "./ui";
import { SITE, TEL, WA_EMERGENCY } from "@/lib/site";

export default function Emergency() {
  return (
    <section id="emergencia" className="relative scroll-mt-20 overflow-hidden bg-forest-deep py-28 text-center text-cream lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden>
        {[0, 1, 2].map((k) => <span key={k} className="absolute -left-48 -top-48 h-96 w-96 animate-ring rounded-full border border-gold/40" style={{ animationDelay: `${k * 1.05}s` }} />)}
      </div>
      <Reveal className="relative mx-auto max-w-3xl px-5">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold text-forest-deep"><Siren size={30} /></span>
        <h2 className="mt-8 font-display text-4xl leading-tight sm:text-6xl">Seu pet precisa de atendimento agora?</h2>
        <p className="mt-5 text-xl text-cream/80">Estamos preparados para cuidar dele a qualquer hora.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Btn href={WA_EMERGENCY} variant="gold" className="!px-10 !py-5 !text-base">FALAR COM A PROBICHO</Btn>
          <Btn href={TEL} external={false} variant="light" className="!px-8 !py-5">Ligar {SITE.phoneDisplay}</Btn>
        </div>
      </Reveal>
    </section>
  );
}

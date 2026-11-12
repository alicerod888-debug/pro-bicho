import { Pill, Store } from "lucide-react";
import { Reveal } from "./Motion";
import { Btn, Heading } from "./ui";
import { WA_DEFAULT } from "@/lib/site";

export default function PetCenter() {
  return (
    <section id="petcenter" className="scroll-mt-20 px-5 py-12 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[3rem] bg-gold/90 p-8 sm:p-14 lg:grid-cols-2">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-forest-deep/20" aria-hidden />
        <div className="absolute -right-10 -top-10 h-80 w-80 rounded-full border border-forest-deep/20" aria-hidden />
        <Reveal className="relative">
          <Heading className="!text-forest-deep">PetCenter e farmácia veterinária</Heading>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-forest-deep/80">Uma loja completa, com tudo para manter seu pet feliz e confortável, e uma farmácia veterinária para que ele esteja sempre saudável.</p>
          <Btn href={WA_DEFAULT} className="mt-8">Perguntar pelo WhatsApp</Btn>
        </Reveal>
        <Reveal delay={0.1} className="relative grid gap-4 sm:grid-cols-2">
          <div className="rounded-[2rem] bg-cream p-7"><Store className="text-forest" size={30} /><h3 className="mt-5 font-display text-2xl text-forest">PetCenter</h3><p className="mt-2 text-ink/70">Brinquedos, acessórios, rações e muito mais.</p></div>
          <div className="rounded-[2rem] bg-forest p-7 text-cream sm:mt-10"><Pill className="text-gold" size={30} /><h3 className="mt-5 font-display text-2xl">Farmácia veterinária</h3><p className="mt-2 text-cream/75">Remédios, medicamentos e tratamentos para o seu pet.</p></div>
        </Reveal>
      </div>
    </section>
  );
}

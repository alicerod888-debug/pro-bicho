import { Reveal } from "./Motion";
import { Btn, Heading, Photo } from "./ui";
import { services } from "@/lib/content";
import { WA_DEFAULT } from "@/lib/site";

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-sand/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal><Heading>Nossos serviços</Heading></Reveal>
          <Btn href={WA_DEFAULT}>Falar com uma consultora</Btn>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.07}>
                <article className="group h-full overflow-hidden rounded-[1.75rem] bg-cream ring-1 ring-forest/10 transition-shadow duration-500 hover:shadow-xl hover:shadow-forest/10">
                  {s.photo && <Photo src={s.photo} alt={s.title} sizes="(max-width:768px) 100vw, 33vw" className="aspect-[16/10]" />}
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-forest"><Icon size={22} className="text-gold" /><h3 className="font-display text-2xl">{s.title}</h3></div>
                    <p className="mt-3 leading-relaxed text-ink/70">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

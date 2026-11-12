import { Reveal } from "./Motion";
import { Heading, Photo } from "./ui";
import { structure } from "@/lib/content";

export default function Structure() {
  return (
    <section id="estrutura" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl"><Heading>Estrutura e equipamentos</Heading></Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {structure.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07} className={i === 0 || i === 5 ? "md:col-span-4" : "md:col-span-2"}>
              <figure className="group relative overflow-hidden rounded-[2rem]">
                <Photo src={s.photo} alt={`${s.title} da ProBicho`} sizes="(max-width:768px) 100vw, 40vw" className={i === 0 || i === 5 ? "aspect-[16/10]" : "aspect-square md:aspect-[4/5]"} />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/50 to-transparent p-6 pt-20 text-cream">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-cream/80">{s.text}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

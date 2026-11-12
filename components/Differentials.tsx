"use client";
import { motion } from "framer-motion";
import { Reveal } from "./Motion";
import { Heading } from "./ui";
import { differentials } from "@/lib/content";

export default function Differentials() {
  return (
    <section id="diferenciais" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl"><Heading>Estrutura completa para cuidar do começo ao fim</Heading></Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => {
            const Icon = d.icon; const big = i === 0;
            return (
              <Reveal key={d.title} delay={i * 0.06} className={big ? "lg:col-span-2" : ""}>
                <motion.article whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group relative h-full overflow-hidden rounded-[2rem] p-8 lg:p-10 ${big ? "bg-forest text-cream" : "bg-white text-ink ring-1 ring-forest/10 hover:ring-gold"}`}>
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${big ? "bg-gold text-forest-deep" : "bg-forest text-gold"}`}><Icon size={26} /></span>
                  <h3 className={`mt-8 font-display ${big ? "text-3xl lg:text-4xl" : "text-2xl"}`}>{d.title}</h3>
                  <p className={`mt-3 max-w-md leading-relaxed ${big ? "text-cream/80" : "text-ink/70"}`}>{d.text}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

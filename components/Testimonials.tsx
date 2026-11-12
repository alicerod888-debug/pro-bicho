"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Motion";
import { Btn, Heading } from "./ui";
import { testimonials } from "@/lib/content";
import { WA_DEFAULT } from "@/lib/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const t = testimonials[i];
  return (
    <section id="depoimentos" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal><Heading>Quem confia na ProBicho</Heading></Reveal>
        {n === 0 ? (
          <Reveal delay={0.1} className="mt-12 rounded-[2rem] border border-dashed border-gold/60 p-10">
            <Quote className="mx-auto text-gold" />
            <p className="mx-auto mt-4 max-w-md text-lg text-ink/70">Os relatos de tutores vão aparecer aqui. Atendeu seu pet na ProBicho? Conte como foi a experiência.</p>
            <Btn href={WA_DEFAULT} variant="outline" className="mt-6">Enviar meu relato</Btn>
          </Reveal>
        ) : (
          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.blockquote key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }} className="rounded-[2rem] bg-white p-10 ring-1 ring-forest/10">
                <p className="font-display text-2xl leading-snug text-forest">“{t.text}”</p>
                <footer className="mt-6 text-sm text-ink/60">{t.name}{t.pet ? `, tutor(a) de ${t.pet}` : ""}</footer>
              </motion.blockquote>
            </AnimatePresence>
            {n > 1 && (
              <div className="mt-6 flex justify-center gap-3">
                <button aria-label="Anterior" onClick={() => setI((i - 1 + n) % n)} className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-forest/20 hover:bg-forest hover:text-cream"><ChevronLeft /></button>
                <button aria-label="Próximo" onClick={() => setI((i + 1) % n)} className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-forest/20 hover:bg-forest hover:text-cream"><ChevronRight /></button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

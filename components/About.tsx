"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Motion";
import { Heading, Leaf, Photo } from "./ui";
import { SITE, img } from "@/lib/site";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <section id="sobre" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32">
      <Leaf className="absolute -right-8 bottom-10 h-64 w-44 text-forest-emerald" />
      <div ref={ref} className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-12 lg:px-8">
        <div className="relative lg:col-span-6">
          <Photo src={img("diferencial-desktop.webp")} alt="Medicina veterinária humanizada na ProBicho" sizes="(max-width:1024px) 100vw, 50vw" className="aspect-square rounded-[2.5rem] rounded-br-[8rem]" />
          <motion.div style={{ y }} className="absolute -bottom-8 right-4 hidden w-44 overflow-hidden rounded-3xl border-4 border-cream shadow-xl sm:block">
            <Photo src={img("equipe-2.webp")} alt="Dra. Anne Raphaelle Flick, fundadora da ProBicho" sizes="180px" className="aspect-square" />
          </motion.div>
        </div>
        <div className="lg:col-span-6 lg:pl-8">
          <Reveal><Heading>Mais que uma clínica, uma família que cuida da sua.</Heading></Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-ink/75">
              A Medicina Veterinária Humanizada da ProBicho é reconhecida em Itaberaba e região. Cada tutor tem em seu pet um amigo, uma história, um membro da família, e a ProBicho mantém esse olhar em cada consulta, exame, cuidado, atendimento ou orientação.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              A clínica foi fundada pela Dra. Anne e atende Itaberaba e região: {SITE.regions.join(", ")}.
            </p>
            <p className="mt-6 font-display text-2xl text-forest">Seu pet com o respeito que ele merece.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

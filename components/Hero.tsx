"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Siren } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Btn, Leaf } from "./ui";
import { TEL, WA_SCHEDULE, img } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const words = "Seu pet merece cuidado, carinho e excelência.".split(" ");

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden pt-28 lg:pt-32">
      <Leaf className="absolute -left-10 top-40 h-72 w-48 animate-float text-forest-emerald" />
      <Leaf className="absolute right-[38%] top-24 hidden h-40 w-28 rotate-45 animate-float text-gold lg:block" />
      <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-sand/70 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <h1 className="font-display text-5xl leading-[1.02] text-forest sm:text-6xl lg:text-[5.5rem]" aria-label="Seu pet merece cuidado, carinho e excelência.">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom" aria-hidden>
                <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
            Saúde e bem-estar para quem faz parte da sua família. Conte com uma equipe preparada para cuidar do seu melhor amigo.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Btn href={WA_SCHEDULE} variant="green">AGENDAR CONSULTA</Btn>
            <Btn href={TEL} external={false} variant="outline"><Siren size={18} /> EMERGÊNCIA 24 HORAS</Btn>
          </motion.div>
          <p className="mt-6 flex items-center gap-2 text-sm text-ink/60"><Phone size={14} /> Atendimento 24 horas, todos os dias, em Itaberaba - BA</p>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="absolute -right-4 top-6 h-full w-full rounded-t-[999px] rounded-b-[2.5rem] border border-gold" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-forest">
            <motion.div style={{ y }} className="absolute -inset-x-0 -top-[7%] h-[114%]">
              <Image src={img("hero-probicho-24h.webp")} alt="Atendimento veterinário na ProBicho, clínica 24 horas em Itaberaba" fill priority sizes="(max-width:1024px) 90vw, 40vw" className="object-cover" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

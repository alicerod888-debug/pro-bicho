"use client";
import { motion } from "framer-motion";
import { Reveal } from "./Motion";
import { Heading, Photo } from "./ui";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <section id="equipe" className="scroll-mt-20 bg-forest py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal><Heading light>Dra. Anne e equipe</Heading></Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08} className={i % 2 ? "lg:mt-12" : ""}>
              <motion.article whileHover={{ y: -8, rotateX: 2 }} style={{ transformPerspective: 900 }} className="group overflow-hidden rounded-[2rem] bg-forest-deep ring-1 ring-white/10 transition-shadow hover:shadow-2xl hover:shadow-black/30">
                <Photo src={m.photo} alt={m.name} sizes="(max-width:640px) 100vw, 25vw" className="aspect-[4/5]" />
                <div className="p-6">
                  <h3 className="font-display text-xl">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{m.role}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

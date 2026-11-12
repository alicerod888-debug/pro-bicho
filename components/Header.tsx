"use client";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, PawPrint, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Btn } from "./ui";
import { WA_SCHEDULE } from "@/lib/site";

export const NAV = [
  { href: "#servicos", label: "Serviços" }, { href: "#sobre", label: "Sobre" }, { href: "#equipe", label: "Equipe" },
  { href: "#estrutura", label: "Estrutura" }, { href: "#petcenter", label: "PetCenter" }, { href: "#contato", label: "Contato" },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className={`flex items-center gap-2 font-display text-2xl ${light ? "text-cream" : "text-forest"}`} aria-label="ProBicho, início">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-forest-deep"><PawPrint size={18} /></span>
      ProBicho
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid || open ? "bg-cream/90 shadow-sm backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="group relative text-sm font-medium text-forest">
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Btn href={WA_SCHEDULE} className="!px-5 !py-3">Agendar consulta</Btn>
        </nav>
        <button className="grid h-11 w-11 place-items-center rounded-full text-forest lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden lg:hidden" aria-label="Menu mobile">
            <div className="flex flex-col gap-1 px-5 pb-6">
              {NAV.map((n, i) => (
                <motion.a key={n.href} href={n.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }} className="border-b border-forest/10 py-4 font-display text-2xl text-forest">{n.label}</motion.a>
              ))}
              <Btn href={WA_SCHEDULE} className="mt-4">Agendar consulta</Btn>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.div style={{ scaleX }} className="h-[3px] origin-left bg-gold" />
    </header>
  );
}

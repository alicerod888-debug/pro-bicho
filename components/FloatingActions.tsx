"use client";
import { motion } from "framer-motion";
import { MessageCircle, Siren } from "lucide-react";
import { TEL, WA_DEFAULT } from "@/lib/site";

export default function FloatingActions() {
  return (
    <>
      <motion.a href={TEL} initial={{ y: 80 }} animate={{ y: 0 }} transition={{ delay: 1.5 }} whileTap={{ scale: 0.96 }}
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-semibold text-cream shadow-lg ring-1 ring-gold/60 hover:bg-forest-emerald">
        <Siren size={18} className="text-gold" /> Emergência 24h
      </motion.a>
      <motion.a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.7, type: "spring" }} whileHover={{ scale: 1.08 }}
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg">
        <MessageCircle size={26} />
      </motion.a>
    </>
  );
}

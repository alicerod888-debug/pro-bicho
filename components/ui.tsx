"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

const variants = {
  gold: "bg-gold text-forest-deep hover:bg-[#c9a35a]",
  green: "bg-forest text-cream hover:bg-forest-emerald",
  outline: "border border-forest/30 text-forest hover:border-forest hover:bg-forest hover:text-cream",
  light: "bg-cream text-forest-deep hover:bg-white",
};

export function Btn({ href, children, variant = "green", className = "", external = true }: {
  href: string; children: ReactNode; variant?: keyof typeof variants; className?: string; external?: boolean;
}) {
  return (
    <motion.a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`}>
      {children}
    </motion.a>
  );
}

export function Photo({ src, alt, sizes, className = "", priority = false }: { src: string; alt: string; sizes: string; className?: string; priority?: boolean }) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
    </div>
  );
}

export function Heading({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return <h2 className={`font-display text-4xl leading-[1.08] sm:text-5xl ${light ? "text-cream" : "text-forest"} ${className}`}>{children}</h2>;
}

export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" aria-hidden className={className} fill="none">
      <path d="M60 156C20 120 8 70 60 6c52 64 40 114 0 150Z" fill="currentColor" opacity=".12" />
      <path d="M60 150V30M60 70 36 52M60 96 30 76M60 70l24-18M60 96l30-20" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

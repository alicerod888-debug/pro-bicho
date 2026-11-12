import { Facebook, Instagram } from "lucide-react";
import { Logo, NAV } from "./Header";
import { MAPS_LINK, SITE, TEL, WA_DEFAULT } from "@/lib/site";

export default function Footer() {
  const a = SITE.address;
  return (
    <footer className="bg-forest-deep pb-28 pt-16 text-cream/80 sm:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 lg:px-8">
        <div><Logo light /><p className="mt-4 max-w-xs text-sm">Clínica veterinária 24 horas em Itaberaba, Bahia.</p></div>
        <nav aria-label="Rodapé"><ul className="grid grid-cols-2 gap-2 text-sm">{NAV.map((n) => <li key={n.href}><a className="hover:text-gold" href={n.href}>{n.label}</a></li>)}</ul></nav>
        <div className="space-y-2 text-sm">
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="block hover:text-gold">{a.street} – {a.district}, {a.city} – {a.state}, {a.zip}</a>
          <a href={TEL} className="block hover:text-gold">{SITE.phoneDisplay}</a>
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="block hover:text-gold">WhatsApp</a>
          <div className="flex gap-3 pt-3">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da ProBicho" className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/20 hover:bg-gold hover:text-forest-deep"><Instagram size={18} /></a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook da ProBicho" className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/20 hover:bg-gold hover:text-forest-deep"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-cream/50 lg:px-8">© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
    </footer>
  );
}

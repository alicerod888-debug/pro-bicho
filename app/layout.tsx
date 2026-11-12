import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/Motion";
import { SITE, img } from "@/lib/site";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const title = "Clínica Veterinária 24h em Itaberaba | ProBicho";
const description = "Clínica veterinária 24 horas em Itaberaba-BA: emergência, consultas, vacinas, exames, ultrassom, cirurgias e internação para cães e gatos. Ligue (75) 3251-1721.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title, description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: SITE.name, locale: "pt_BR", type: "website", images: [{ url: img("hero-probicho-24h.webp"), width: 900, height: 900, alt: "ProBicho Clínica Veterinária 24h" }] },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#0F3D2E", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org", "@type": "VeterinaryCare", name: SITE.name, url: SITE.url, telephone: SITE.phoneTel,
  image: img("hero-probicho-24h.webp"), sameAs: [SITE.instagram, SITE.facebook],
  address: { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: SITE.address.city, addressRegion: SITE.address.state, postalCode: SITE.address.zip, addressCountry: "BR" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
  areaServed: [SITE.address.city, ...SITE.regions],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

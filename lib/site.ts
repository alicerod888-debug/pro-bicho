export const SITE = {
  name: "ProBicho Clínica Veterinária 24h",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://probicho24hrs.com.br",
  phoneDisplay: "(75) 3251-1721",
  phoneTel: "+557532511721",
  whatsappNumber: "557532511721",
  address: { street: "Praça Castro Alves, 24", district: "Centro", city: "Itaberaba", state: "BA", zip: "46880-000" },
  instagram: "https://www.instagram.com/probichoclinicaveterinaria24h/",
  facebook: "https://www.facebook.com/BlogProBicho/",
  regions: ["Ruy Barbosa", "Iaçu", "Boa Vista do Tupim", "Macajuba"],
};

export const wa = (msg: string) => `https://api.whatsapp.com/send?phone=${SITE.whatsappNumber}&text=${encodeURIComponent(msg)}`;
export const WA_DEFAULT = wa("Olá! Vim pelo site da ProBicho e gostaria de saber mais.");
export const WA_SCHEDULE = wa("Olá! Gostaria de agendar uma consulta para o meu pet.");
export const WA_EMERGENCY = wa("Olá! Meu pet precisa de atendimento de emergência.");
export const TEL = `tel:${SITE.phoneTel}`;

const q = encodeURIComponent("Praça Castro Alves, 24 - Centro, Itaberaba - BA, 46880-000");
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${q}`;
export const MAPS_EMBED = `https://maps.google.com/maps?q=${q}&t=m&z=16&output=embed`;

// Fotos reais publicadas no site atual da clínica. Para máxima performance,
// baixe-as para /public/images e troque por caminhos locais (veja o README).
export const img = (file: string) => `https://i0.wp.com/probicho24hrs.com.br/wp-content/uploads/2026/11/${file}?ssl=1`;

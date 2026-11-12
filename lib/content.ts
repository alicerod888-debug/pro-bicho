import { BedDouble, Cat, FlaskConical, Microscope, Pill, ScanLine, Scissors, Siren, Stethoscope, Store, Syringe, Users, Wind, type LucideIcon } from "lucide-react";
import { img } from "./site";

export type Item = { icon: LucideIcon; title: string; text: string; photo?: string };

export const differentials: Item[] = [
  { icon: Siren, title: "Atendimento veterinário 24 horas", text: "Emergência a qualquer hora, todos os dias, inclusive feriados." },
  { icon: Users, title: "Equipe especializada", text: "Veterinárias com atuação em clínica, cirurgia, terapia intensiva e medicina felina." },
  { icon: Microscope, title: "Laboratório próprio", text: "Resultados de exames rápidos, acelerando o diagnóstico e o início do tratamento." },
  { icon: Scissors, title: "Centro cirúrgico", text: "Estrutura equipada, com anestesia inalatória e protocolos mais seguros." },
  { icon: BedDouble, title: "Internação", text: "Acompanhamento médico-veterinário 24 h, com apoio de cromoterapia e aromoterapia." },
  { icon: Cat, title: "Atendimento para gatos", text: "Sala exclusiva, planejada para o manejo confortável e seguro dos felinos." },
];

export const services: Item[] = [
  { icon: Stethoscope, title: "Consultas", text: "Profissionais qualificados para atender seu pet da forma que ele merece." },
  { icon: FlaskConical, title: "Exames e laboratório", text: "Exames em um ambiente preparado para o seu pet, com laboratório próprio.", photo: img("equip-laboratorio.webp") },
  { icon: Scissors, title: "Cirurgia", text: "Centro cirúrgico equipado com tecnologia e profissionais preparados.", photo: img("equip-centro-cirurgico.webp") },
  { icon: ScanLine, title: "Ultrassonografia", text: "Análise do tamanho e da textura dos órgãos internos, sem cirurgia e sem radiação.", photo: img("equip-ultrassom.webp") },
  { icon: BedDouble, title: "Internamento", text: "Espaço seguro e médicos-veterinários 24 h para a recuperação do seu pet." },
  { icon: Cat, title: "Sala exclusiva para gatos", text: "Ambiente planejado para manipular o felino de modo confortável e seguro.", photo: img("equip-sala-felinos.webp") },
  { icon: Syringe, title: "Vacinas", text: "Seu pet protegido com vacinas de referência em eficácia." },
  { icon: Wind, title: "Anestesia inalatória", text: "Forma segura e menos invasiva de sedação, evitando reações inesperadas.", photo: img("equip-anestesia-inalatoria.webp") },
  { icon: Pill, title: "Farmácia veterinária", text: "Remédios, medicamentos e tratamentos para manter seu pet saudável." },
  { icon: Siren, title: "Emergência 24 h", text: "Atendimento emergencial 24 horas por dia, todos os dias." },
  { icon: Store, title: "PetCenter", text: "Loja com brinquedos, acessórios, rações e muito mais." },
];

export const team = [
  { name: "Dra. Anne Raphaelle Flick", role: "Fundadora. Médica-veterinária especialista em clínica e cirurgia de cães e gatos.", photo: img("equipe-2.webp") },
  { name: "Dra. Maria Viviane Bury", role: "Médica-veterinária especializada em atendimento de felinos, com mestrado em ciência animal.", photo: img("equipe-4.webp") },
  { name: "Dra. Mannuela Azevedo", role: "Médica-veterinária intensivista.", photo: img("equipe-3.webp") },
  { name: "Dra. Aileen Karaoglan Grassi", role: "Médica-veterinária e cirurgiã geral.", photo: img("equipe-1.webp") },
];

export const structure = [
  { title: "Centro cirúrgico", text: "Equipado com tecnologia e profissionais preparados.", photo: img("equip-centro-cirurgico.webp") },
  { title: "Laboratório próprio", text: "Resultados rápidos que aceleram o diagnóstico.", photo: img("equip-laboratorio.webp") },
  { title: "Sala para felinos", text: "Ambiente planejado, com análogo sintético do odor facial felino para que os gatos se sintam protegidos.", photo: img("equip-sala-felinos.webp") },
  { title: "Ultrassom", text: "Imagem dos órgãos internos sem cirurgia e sem radiação.", photo: img("equip-ultrassom.webp") },
  { title: "Anestesia inalatória", text: "Protocolos anestésicos modernos e mais seguros.", photo: img("equip-anestesia-inalatoria.webp") },
  { title: "Ozonioterapia", text: "Terapia alternativa de apoio à cicatrização de feridas e outras patologias.", photo: img("equip-ozonioterapia.webp") },
];

// Adicione avaliações REAIS aqui (com autorização do tutor). Vazio = a seção mostra um convite.
export type Testimonial = { name: string; pet?: string; text: string };
export const testimonials: Testimonial[] = [];

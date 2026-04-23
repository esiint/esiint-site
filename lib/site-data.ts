import type { Route } from "next";

type HomeCourse = {
  title: string;
  level: string;
  summary: string;
  href: Route;
};

export const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#metodo", label: "Método" },
  { href: "#observatorio", label: "Observatório" },
  { href: "#prevencao", label: "Prevenção 4.0" },
  { href: "#cursos", label: "Cursos & Trilhas" },
  { href: "#contato", label: "Contato" }
];

export const homeCourses: HomeCourse[] = [
  {
    title: "Observatórios & Centros de Evidência na Prática",
    level: "Intermediário/Avançado",
    summary:
      "Estruturação, implementação e operação de observatórios e centros de evidência, conectando metodologia científica, governança e indicadores.",
    href: "/cursos/observatorios-centros-de-evidencia"
  },
  {
    title: "A Era da Inteligência",
    level: "Introdutório",
    summary:
      "Fundamentos da Inteligência Híbrida, inovação e tecnologia aplicadas à vida real, à gestão pública e às cidades inteligentes.",
    href: "/cursos/a-era-da-inteligencia"
  },
  {
    title: "Prevenção 4.0 & Segurança em Cidades Inteligentes",
    level: "Avançado",
    summary:
      "Modelos preventivos, Rede 193, indicadores territoriais e comunicação de risco para proteger vidas e reduzir vulnerabilidades.",
    href: "/projetos/prevencao-seguranca-riscos"
  }
];

export const observatorioModules = [
  "Governança Pública, Multinível e Colaborativa",
  "Evidências Científicas e Centros de Evidência",
  "PRISMA, Revisões Sistemáticas e Sínteses de Evidências",
  "Indicadores, Dashboards e Visualização de Dados",
  "ODS / Agenda 2030 e Monitoramento de Políticas",
  "Prevenção, Risco e Segurança (Prevenção 4.0)",
  "Democracia, Parlamentos e Participação Social",
  "Comparação Internacional Brasil–Portugal"
];

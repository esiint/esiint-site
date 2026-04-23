import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";

const modules = [
  {
    title: "Módulo 1 — Governança Pública, Multinível e Colaborativa",
    text: "Modelos de governança contemporânea, arranjos multinível e integração entre parlamentos, universidades, conselhos e sociedade."
  },
  {
    title: "Módulo 2 — Evidências Científicas e Centros de Evidência",
    text: "Estruturação de Centros de Evidência e conexão da ciência com a formulação, monitoramento e avaliação de políticas públicas."
  },
  {
    title: "Módulo 3 — PRISMA, Revisões Sistemáticas e Sínteses de Evidências",
    text: "Uso de revisões integrativas, rápidas e sistemáticas para transformar literatura científica em notas técnicas e produtos acionáveis."
  },
  {
    title: "Módulo 4 — Indicadores, Dashboards e Visualização de Dados",
    text: "Seleção de indicadores, protótipos de painéis e comunicação visual para apoiar o processo decisório."
  },
  {
    title: "Módulo 5 — ODS / Agenda 2030",
    text: "Alinhamento de políticas públicas aos ODS e construção de matrizes de monitoramento com foco territorial."
  },
  {
    title: "Módulo 6 — Prevenção, Risco e Segurança (Prevenção 4.0)",
    text: "Integração de dados, prevenção e participação social em modelos orientados à redução de vulnerabilidades."
  },
  {
    title: "Módulo 7 — Democracia, Parlamentos e Participação Social",
    text: "Uso de evidências para fortalecer o processo legislativo, os conselhos setoriais e a participação qualificada."
  },
  {
    title: "Módulo 8 — Comparação Internacional Brasil–Portugal",
    text: "Benchmarking, cooperação binacional e adaptação de boas práticas entre Santa Catarina e Coimbra."
  }
];

export default function CursoObservatoriosPage() {
  return (
    <>
      <SiteHeader />
      <main className="section-shell">
        <SectionTitle
          eyebrow="Curso ESIINT"
          title="Observatórios & Centros de Evidência na Prática"
          text="Formação aplicada para estruturar, implementar e operar observatórios de políticas públicas e centros de evidência em ambientes legislativos, executivos e acadêmicos."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Visão geral</h3>
            <p className="mt-4 text-white/75">Curso desenhado para gestores públicos, pesquisadores, equipes técnicas, conselheiros e profissionais de planejamento que desejam transformar evidências em decisões públicas qualificadas.</p>
            <h3 className="mt-8 text-xl font-semibold">Resultados esperados</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
              <li>Projetar a arquitetura de um Observatório de Políticas Públicas</li>
              <li>Implementar Centros de Evidência alinhados a padrões internacionais</li>
              <li>Produzir notas técnicas, painéis e dashboards</li>
              <li>Articular evidências com o processo legislativo e executivo</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Informações do curso</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li><strong>Nível:</strong> Intermediário/Avançado</li>
              <li><strong>Formato:</strong> Online, com videoaulas e encontros opcionais</li>
              <li><strong>Carga horária sugerida:</strong> 12–20 horas</li>
              <li><strong>Certificação:</strong> ESIINT, com possibilidade de parceria institucional</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/#contato" className="link-button-primary">Inscreva-se no curso</a>
              <a href="#programa" className="link-button-secondary">Ver programa completo</a>
            </div>
          </div>
        </div>
        <section id="programa" className="mt-10">
          <h2 className="text-2xl font-semibold">Programa completo</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {modules.map((module) => (
              <div key={module.title} className="card p-5">
                <h3 className="font-semibold">{module.title}</h3>
                <p className="mt-2 text-sm text-white/75">{module.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

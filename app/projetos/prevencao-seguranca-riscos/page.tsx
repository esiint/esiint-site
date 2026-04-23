import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";

const pilots = [
  {
    title: "Piloto A — Rede 193 de Prevenção",
    text: "Prevenção comunitária e territorial com mapas de risco, protocolos preventivos, comunicação de risco e indicadores de antecipação."
  },
  {
    title: "Piloto B — Observatório Preventivo",
    text: "Painéis, notas técnicas e sínteses de evidências para decisões legislativas e executivas orientadas à prevenção."
  },
  {
    title: "Piloto C — Escolas & Saúde",
    text: "Protocolos, checklists e cultura preventiva em ambientes sensíveis, com foco em redução de vulnerabilidades."
  }
];

export default function PrevencaoPage() {
  return (
    <>
      <SiteHeader />
      <main className="section-shell">
        <SectionTitle
          eyebrow="Projeto ESIINT"
          title="Prevenção, Segurança e Gestão de Riscos"
          text="Estrutura integrada para sair de modelos reativos e avançar para uma prevenção inteligente, antecipatória e orientada por evidências."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Fase 1 — Estruturação conceitual e institucional</h3>
            <p className="mt-4 text-white/75">Consolidação do marco conceitual da Prevenção 4.0, dos eixos estruturantes, da governança e dos produtos-base do projeto.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Fase 2 — Pilotos e implementação</h3>
            <p className="mt-4 text-white/75">Validação de pilotos âncora em territórios e instituições, com indicadores, protocolos, painéis e ciclos de melhoria iterativa.</p>
          </div>
        </div>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Pilotos âncora</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pilots.map((pilot) => (
              <div key={pilot.title} className="card p-5">
                <h3 className="font-semibold">{pilot.title}</h3>
                <p className="mt-2 text-sm text-white/75">{pilot.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

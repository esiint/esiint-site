import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { observatorioModules } from "@/lib/site-data";

export default function ObservatorioPage() {
  return (
    <>
      <SiteHeader />
      <main className="section-shell">
        <SectionTitle
          eyebrow="Observatório de Políticas Públicas"
          title="Evidências, governança ativa e cooperação internacional entre Santa Catarina e Coimbra"
          text="O Observatório da ESIINT aproxima ciência, dados, instituições e sociedade para apoiar decisões públicas mais transparentes, eficazes, sustentáveis e orientadas à qualidade de vida."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Direção-Geral</h3>
            <p className="mt-2 text-white/75">José Luiz Gonçalves da Silveira</p>
            <h3 className="mt-8 text-xl font-semibold">Binômio orientador</h3>
            <p className="mt-2 text-white/75">Conhecer e Confiar. Produção e gestão de conhecimento para qualificar o processo decisório e aproximar políticas públicas das necessidades reais das pessoas e dos territórios.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Missão Institucional</h3>
            <p className="mt-3 text-white/75">Atuar em diálogo com parlamentos, conselhos, universidades, gestores e sociedade civil para fortalecer uma cultura de decisão pública informada.</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>🇧🇷 Assembleia Legislativa do Estado de Santa Catarina (ALESC)</li>
              <li>🇵🇹 Assembleia Municipal de Coimbra</li>
              <li>🌍 Cooperação internacional Brasil–Portugal</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 card p-6">
          <h3 className="text-xl font-semibold">Módulos estruturantes</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {observatorioModules.map((module, index) => (
              <div key={module} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-cyan-300/80">Módulo {index + 1}</p>
                <p className="mt-2 font-medium">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

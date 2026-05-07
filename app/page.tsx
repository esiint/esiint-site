import Link from "next/link";
import { ArrowRight, ShieldCheck, BookOpenText, Globe2, Radar, BarChart3, Landmark } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";
import { homeCourses, observatorioModules } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="inicio" className="section-shell pt-14 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_.8fr]">
            <div>
              <span className="badge">🌍 Brasil • Portugal • Mundo</span>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
  ESIINT
</h1>
<p className="mt-4 text-xl font-medium text-violet-300 sm:text-2xl">
  Escola de Inteligência, Inovação e Tecnologia
</p>
<p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
  Transformando conhecimento em decisões que melhoram a vida das pessoas.
</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
  Conectamos ciência, tecnologia e inteligência territorial para construir cidades mais seguras, resilientes e sustentáveis.
</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#cursos" className="link-button-primary">Ver cursos & trilhas</a>
                <a href="#observatorio" className="link-button-secondary">Explorar o Observatório</a>
              </div>
            </div>
            <div className="card p-6">
              <p className="eyebrow">Mini-manifesto ESIINT</p>
              <h2 className="mt-2 text-2xl font-semibold">
                Inteligência que evolui. Evidência que orienta. Prevenção que protege.
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-white/75">
                <li>🔁 Design Iterativo como método institucional</li>
                <li>🛰️ Observatório de Políticas Públicas orientado por evidências</li>
                <li>🛡️ Prevenção 4.0 com dados, IA e participação social</li>
                <li>🎓 Cursos vivos, aplicados e conectados à realidade</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="metodo" className="section-shell">
          <SectionTitle
            eyebrow="Nosso método"
            title="Design Iterativo ESIINT"
            text="Boas soluções não nascem prontas — elas evoluem em ciclos de ideação, prototipagem, uso real, aprendizado e aprimoramento."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-5">
            {["Ideação", "Protótipo", "Uso real", "Aprendizado", "Evolução"].map((step) => (
              <div key={step} className="grid-card text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">{step[0]}</div>
                <h3 className="mt-4 font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="observatorio" className="section-shell">
          <SectionTitle
            eyebrow="Observatório de Políticas Públicas"
            title="Inteligência, evidências e governança para decisões que impactam a vida real"
            text="Uma infraestrutura de inteligência pública que aproxima ciência, dados, instituições e sociedade para decisões mais transparentes, eficazes e orientadas à qualidade de vida."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {observatorioModules.map((module, index) => (
              <div key={module} className="grid-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-cyan-200">{index + 1}</span>
                  <h3 className="font-semibold leading-tight">{module}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/observatorio" className="link-button-primary">
              Ver página do Observatório <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/cursos/observatorios-centros-de-evidencia" className="link-button-secondary">
              Curso Observatórios & Centros de Evidência
            </Link>
          </div>
        </section>

        <section id="prevencao" className="section-shell">
          <SectionTitle
            eyebrow="Prevenção, Segurança e Gestão de Riscos"
            title="Prevenção 4.0: antecipar, aprender e proteger em ciclos contínuos"
            text="Integração de inteligência humana, evidências científicas, indicadores, tecnologia e participação comunitária para reduzir vulnerabilidades e proteger vidas."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="grid-card">
              <Radar className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold">Piloto A — Rede 193 de Prevenção</h3>
              <p className="mt-3 text-sm text-white/75">Prevenção comunitária e territorial orientada por evidências, com mapas de risco, comunicação preventiva e engajamento local.</p>
            </div>
            <div className="grid-card">
              <Landmark className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold">Piloto B — Observatório Preventivo</h3>
              <p className="mt-3 text-sm text-white/75">Evidências antecipatórias para decisões legislativas e executivas, apoiadas por indicadores, notas técnicas e dashboards.</p>
            </div>
            <div className="grid-card">
              <ShieldCheck className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold">Piloto C — Escolas & Saúde</h3>
              <p className="mt-3 text-sm text-white/75">Protocolos preventivos, comunicação de risco e capacitação em ambientes sensíveis para fortalecer a cultura de segurança.</p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/projetos/prevencao-seguranca-riscos" className="link-button-primary">Ver projeto completo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </section>

        <section id="cursos" className="section-shell">
          <SectionTitle
            eyebrow="Cursos & Trilhas"
            title="Formações aplicadas para gestores, pesquisadores, equipes técnicas e cidadãos"
            text="Cursos desenhados para compreender, decidir e agir com base em evidências, em ciclos curtos de aprendizagem prática."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {homeCourses.map((course) => (
              <div key={course.title} className="grid-card">
                <BookOpenText className="h-8 w-8 text-cyan-300" />
                <h3 className="mt-4 text-xl font-semibold">{course.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/50">{course.level}</p>
                <p className="mt-4 text-sm text-white/75">{course.summary}</p>
                <div className="mt-6">
                  <Link href={course.href as any} className="link-button-secondary">Ver programa completo</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="section-shell">
          <div className="card p-8">
            <SectionTitle
              eyebrow="Contato"
              title="Pronto para pilotar uma missão conjunta?"
              text="A ESIINT pode apoiar instituições, parlamentos, universidades e redes territoriais com cursos, projetos, observatórios e prevenção orientada por evidências."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:contato@esiint.org" className="link-button-primary">Fale com a ESIINT</a>
              <a href="#cursos" className="link-button-secondary">Explorar cursos</a>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <Globe2 className="h-6 w-6 text-cyan-300" />
                <p className="mt-2 text-sm text-white/70">Domínios principais</p>
                <p className="font-medium">esiint.org · esiint.br</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <BarChart3 className="h-6 w-6 text-cyan-300" />
                <p className="mt-2 text-sm text-white/70">Frentes</p>
                <p className="font-medium">Observatório · Prevenção · Cursos</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <ShieldCheck className="h-6 w-6 text-cyan-300" />
                <p className="mt-2 text-sm text-white/70">Eixo binacional</p>
                <p className="font-medium">Santa Catarina ↔ Coimbra</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

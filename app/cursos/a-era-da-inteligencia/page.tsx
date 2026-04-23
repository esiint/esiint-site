import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionTitle } from "@/components/section-title";

const modules = [
  "A transição histórica: da sociedade da informação à Era da Inteligência",
  "Inteligência Humana, Inteligência Artificial e Inteligência Híbrida",
  "Políticas públicas, evidências e prevenção na nova era",
  "Transformação digital, automação e dados",
  "Ética, segurança e responsabilidade",
  "Aplicações práticas na vida real",
  "Inteligência para qualidade de vida"
];

export default function EraDaInteligenciaPage() {
  return (
    <>
      <SiteHeader />
      <main className="section-shell">
        <SectionTitle
          eyebrow="Curso ESIINT"
          title="A Era da Inteligência"
          text="Curso introdutório para compreender a transição histórica em que humanos, dados, sistemas inteligentes e instituições passam a operar de forma integrada."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Apresentação</h3>
            <p className="mt-4 text-white/75">Formação estratégica para gestores públicos, estudantes, pesquisadores e cidadãos interessados em compreender a Inteligência Híbrida e suas aplicações em educação, saúde, segurança, governança e qualidade de vida.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Estrutura modular</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
              {modules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

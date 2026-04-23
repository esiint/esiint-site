export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="section-shell py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="eyebrow">ESIINT</p>
            <h3 className="mt-2 text-lg font-semibold">
              Escola de Inteligência, Inovação e Tecnologia
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Plataforma binacional dedicada à inteligência aplicada, prevenção,
              políticas públicas, evidências e qualidade de vida.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Atalhos</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#observatorio" className="hover:text-white">Observatório</a></li>
              <li><a href="#prevencao" className="hover:text-white">Prevenção 4.0</a></li>
              <li><a href="#cursos" className="hover:text-white">Cursos & Trilhas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Domínios</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>esiint.org</li>
              <li>esiint.br</li>
              <li>observatorio.esiint.org (planejado)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
          © 2026 ESIINT — Brasil 🇧🇷 · Portugal 🇵🇹
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Brain, Menu } from "lucide-react";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 shadow-glow">
            <Brain className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">ESIINT</p>
            <p className="font-semibold">Inteligência · Inovação · Tecnologia</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a href="#contato" className="link-button-primary text-sm">
            Fale com a ESIINT
          </a>
        </nav>

        <details className="md:hidden">
          <summary className="list-none rounded-xl border border-white/10 bg-white/5 p-2 text-white/80">
            <Menu className="h-5 w-5" />
          </summary>
          <div className="absolute right-4 mt-3 w-72 rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a href="#contato" className="mt-2 block rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-3 text-center text-sm font-semibold text-slate-950">
              Fale com a ESIINT
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

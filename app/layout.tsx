import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ESIINT — Escola de Inteligência, Inovação e Tecnologia",
  description:
    "Plataforma binacional dedicada à inteligência aplicada, inovação, prevenção, observatórios e políticas públicas orientadas à qualidade de vida.",
  openGraph: {
    title: "ESIINT — Escola de Inteligência, Inovação e Tecnologia",
    description:
      "Inteligência aplicada, observatórios, prevenção 4.0 e cursos para qualificar decisões e transformar territórios.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

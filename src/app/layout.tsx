import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "meusuperproject1010101",
  description: "Projeto inicial gerado automaticamente.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

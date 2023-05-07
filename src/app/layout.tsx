import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description:
    "Aplicação criada em Next.js, criado para reunir meus repositórios do github e algumas das minhas habilidades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

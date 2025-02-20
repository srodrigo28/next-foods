import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dica de layout",
  description: "Caso de error",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

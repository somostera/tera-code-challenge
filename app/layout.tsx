import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", weight: ["400"] });

export const metadata: Metadata = {
  title: "Tera Code Challange",
  description: "Solução desenvolvida por Jean Silva",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${anton.variable} antialiased`}>{children}</body>
    </html>
  );
}

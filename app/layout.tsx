import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/skip-link";

const anton = Anton({
  variable: "--font-anton",
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

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
      <body className={`${anton.variable} antialiased`}>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Plataforma de Cursos Online",
  description:
    "A melhor plataforma para aprender e se desenvolver com cursos online em diversas áreas.",
  metadataBase: new URL(baseUrl),
  keywords: [
    "cursos",
    "educação online",
    "aprendizado",
    "plataforma de cursos",
    "EAD",
  ],
  authors: [{ name: "Pedro Romão", url: baseUrl }],
  openGraph: {
    title: "Plataforma de Cursos Online",
    description: "Aprenda de forma prática com os melhores cursos online.",
    url: baseUrl,
    siteName: "Plataforma de Cursos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imagem da plataforma de cursos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plataforma de Cursos Online",
    description: "Aprenda com os melhores cursos da internet.",
    images: ["/images/og-image.jpg"],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

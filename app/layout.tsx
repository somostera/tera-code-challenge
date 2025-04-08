import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import { CoursesProvider } from "@/contexts/courses";
import { getCourses } from "@/services/get-courses";

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
  const { courses } = await getCourses();
  return (
    <html lang="pt-BR">
      <body className={`${anton.variable} antialiased`}>
        <CoursesProvider courses={courses}>{children}</CoursesProvider>{" "}
      </body>
    </html>
  );
}

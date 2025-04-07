import React from "react";
import CourseList from "@/components/List";
import { getCourses } from "@/actions/getCourses";

export default async function CoursesPage() {
  const data = await getCourses();

  return (
    <div className='min-h-screen flex flex-col bg-gray-50 text-gray-800'>
      <header className='bg-white shadow-md py-4 px-6 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Plataforma de Cursos</h1>
        <nav className='space-x-4 text-sm'>
          <a href='#' className='hover:underline'>
            Início
          </a>
          <a href='#' className='hover:underline'>
            Cursos
          </a>
          <a href='#' className='hover:underline'>
            Contato
          </a>
        </nav>
      </header>

      <main className='flex-1'>
        <section className='max-w-7xl mx-auto py-8 px-6'>
          <h2 className='text-3xl font-semibold mb-6'>Nossos Cursos</h2>
          <CourseList courses={data.courses} />
        </section>
      </main>

      <footer className='bg-white border-t text-sm text-center text-gray-500 py-4 mt-8'>
        © {new Date().getFullYear()} Plataforma de Cursos. Todos os direitos
        reservados.
      </footer>
    </div>
  );
}

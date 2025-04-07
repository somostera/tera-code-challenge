"use client";

import { useCourses } from "@/context/SearchContext";
import Link from "next/link";

export default function Navbar() {
  const { search, setSearch } = useCourses();

  return (
    <header className='bg-white shadow-md px-6 py-4'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        <Link
          href='/'
          className='text-3xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200'
          data-cy='back-to-home'
        >
          Plataforma de Cursos
        </Link>

        <input
          type='text'
          placeholder='Buscar curso por nome...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200'
        />
      </div>
    </header>
  );
}

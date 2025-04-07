"use client";


import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useCoursesStore } from "@/store/Courses";

export default function Navbar() {
  const { search, setSearch } = useCoursesStore();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className='bg-white dark:bg-gray-900 shadow-md px-6 py-4'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        <Link
          href='/'
          className='text-3xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200'
          data-cy='back-to-home'
        >
          Plataforma de Cursos
        </Link>

        <div className='flex items-center gap-4 w-full md:w-auto'>
          <input
            type='text'
            placeholder='Buscar curso por nome...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full md:w-80 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200'
          />

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className='px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm text-black dark:text-white transition-colors'
            >
              {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

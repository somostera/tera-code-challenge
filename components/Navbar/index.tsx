"use client";

import { useCourses } from "@/context/SearchContext";
import Link from "next/link";

export default function Navbar() {
  const { search, setSearch } = useCourses();

  return (
    <header className='bg-white shadow-md py-4 px-6 flex flex-col md:flex-row md:items-center justify-between gap-4'>
      <Link href={"/courses"} className='text-2xl font-bold'>
        Plataforma de Cursos
      </Link>
      <input
        type='text'
        placeholder='Buscar curso por nome...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='px-4 py-2 border rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </header>
  );
}

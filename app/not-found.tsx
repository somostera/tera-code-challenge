'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl mt-4 text-gray-600">Página não encontrada</p>
      <p className="text-gray-500 mt-2">A página que você procurou não existe ou foi movida.</p>
      <Link href="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Voltar para o início
      </Link>
    </div>
  );
}

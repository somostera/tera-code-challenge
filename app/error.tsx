"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <motion.div
      className='flex flex-col items-center justify-center min-h-screen px-4 text-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className='text-4xl font-bold text-red-600 mb-4'>Algo deu errado</h1>
      <p className='text-lg text-gray-700 dark:text-gray-300 mb-6'>
        Não conseguimos carregar esta página no momento. Isso pode ter ocorrido
        por um erro interno ou por um recurso inexistente.
      </p>

      <div className='flex gap-4'>
        <button
          onClick={() => reset()}
          className='px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
        >
          Tentar novamente
        </button>
        <button
          onClick={() => router.push("/")}
          className='px-5 py-2 border border-gray-400 text-gray-800 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition'
        >
          Voltar para o início
        </button>
      </div>
    </motion.div>
  );
}

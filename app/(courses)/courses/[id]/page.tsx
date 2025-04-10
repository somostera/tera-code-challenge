"use client";

import { motion } from "framer-motion";
import { getCourses } from "@/actions/getCourses";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Course, Module } from "@/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { enrol } from "@/actions/enrol";
import { toast } from "react-toastify";

export default function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  // Simula o ID do usuário logado
  const userId = 123;

  useEffect(() => {
    async function fetchData() {
      try {
        const { courses } = await getCourses();
        const found = courses.find((c: Course) => c.id === Number(id));
        if (!found) return notFound();
        setCourse(found);
        setLoading(false);
      } catch {
        throw new Error("Erro ao buscar curso");
      }
    }

    fetchData();
  }, [id]);

  function handleEnrol() {
    startTransition(() => {
      enrol(Number(id), userId).then((res) => {
        if (res.success) {
          toast.success(res.message);
        } else {
          toast.error("Erro ao matricular-se.");
        }
      });
    });
  }

  return (
    <motion.div
      className='max-w-4xl mx-auto px-4 py-10 min-h-screen'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1
        className='text-3xl font-bold mb-6 text-gray-800 dark:text-white'
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {loading ? <Skeleton width={300} height={36} /> : course?.title}
      </motion.h1>

      <motion.div
        className='flex flex-wrap gap-3 mb-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {loading ? (
          <>
            <Skeleton width={100} height={28} />
            <Skeleton width={90} height={28} />
          </>
        ) : (
          <>
            <span className='inline-block bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900 text-sm px-3 py-1 rounded-full'>
              Categoria: {course?.category}
            </span>
            <span className='inline-block bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 text-sm px-3 py-1 rounded-full capitalize'>
              Nível: {course?.level}
            </span>
          </>
        )}
      </motion.div>

      <motion.p
        className='text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {loading ? <Skeleton count={3} /> : course?.short_description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className='text-xl font-semibold text-gray-800 dark:text-white mb-4'>
          {loading ? <Skeleton width={160} /> : "Conteúdo do Curso"}
        </h2>

        <ul className='list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300'>
          {loading
            ? [...Array(4)].map((_, idx) => (
                <li key={idx}>
                  <Skeleton width={`${80 + idx * 20}px`} />
                </li>
              ))
            : course?.modules?.map((item: Module, idx: number) => (
                <motion.li
                  key={item.title}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  {item.title}
                </motion.li>
              ))}
        </ul>
      </motion.div>

      {!loading && (
        <motion.div
          className='mt-10 flex justify-center'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition duration-300 shadow-md disabled:opacity-50'
            onClick={handleEnrol}
            disabled={isPending}
            data-cy='enrol-button'
          >
            {isPending ? "Matriculando..." : "Matricule-se"}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

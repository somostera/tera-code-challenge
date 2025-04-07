"use client";

import CourseCard from "@/components/Card/Course";
import { useCourses } from "@/context/SearchContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CoursesPage() {
  const { filteredCourses, category, setCategory, level, setLevel } =
    useCourses();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.main
      className='p-6 max-w-7xl mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className='flex flex-col sm:flex-row gap-4 mb-8'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='flex-1 border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
        >
          <option value=''>Todas as categorias</option>
          <option value='Design'>Design</option>
          <option value='Desenvolvimento'>Desenvolvimento</option>
          <option value='Produto'>Produto</option>
          <option value='Dados'>Dados</option>
        </select>

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className='flex-1 border border-gray-300 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
        >
          <option value=''>Todos os níveis</option>
          <option value='iniciante'>Iniciante</option>
          <option value='intermediario'>Intermediário</option>
          <option value='avancado'>Avançado</option>
        </select>
      </motion.div>

      {loading ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[...Array(9)].map((_, i) => (
            <div key={i} className='p-4  rounded-2xl shadow-md bg-white'>
              <Skeleton height={24} width='60%' className='mb-4' />
              <Skeleton height={16} width='90%' className='mb-2' />
              <Skeleton height={16} width='80%' />
            </div>
          ))}
        </div>
      ) : filteredCourses.length === 0 ? (
        <p
          className='text-center text-gray-500 text-lg mt-12'
          data-cy='no-courses-message'
        >
          Nenhum curso encontrado.
        </p>
      ) : (
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.main>
  );
}

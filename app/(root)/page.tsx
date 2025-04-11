"use client";

import CourseList from "@/components/List/Courses";
import Select from "@/components/Select";
import { levelOptions } from "@/constants/levels";
import { useCoursesStore } from "@/store/Courses";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CoursesPage() {
  const {
    filteredCourses,
    category,
    setCategory,
    level,
    setLevel,
    fetchCourses,
    courses,
  } = useCoursesStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchCourses();
      setLoading(false);
    };

    loadData();
  }, [fetchCourses]);

  const categoryOptions = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(courses.map((course) => course.category))
    );
    return uniqueCategories.map((cat) => ({
      value: cat,
      label: cat,
    }));
  }, [courses]);

  return (
    <motion.main
      className='p-6 max-w-7xl mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.header
        className='mb-10 text-center'
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
          Descubra o curso ideal para você
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
          Explore nossa seleção de cursos especialmente desenvolvidos para ampliar seus conhecimentos, aprimorar habilidades técnicas e impulsionar sua carreira. Utilize os filtros abaixo para refinar sua busca por categoria ou nível de dificuldade.
        </p>
      </motion.header>

      <motion.div
        className='flex flex-col sm:flex-row gap-4 mb-8'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Select
          value={category}
          onChange={setCategory}
          options={categoryOptions}
          placeholder='Todas as categorias'
        />

        <Select
          value={level}
          onChange={setLevel}
          options={levelOptions}
          placeholder='Todos os níveis'
        />
      </motion.div>

      {loading ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className='p-4 rounded-2xl shadow-md bg-white dark:bg-gray-900'
            >
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
        <CourseList courses={filteredCourses} />
      )}
    </motion.main>
  );
}

"use client";

import { motion } from "framer-motion";
import { getCourses } from "@/actions/getCourses";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Course, Module } from "@/types";



export default function CourseDetailPage() {
    const { id } = useParams();
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    async function fetchData() {
      const { courses } = await getCourses();
      const found = courses.find((c: Course) => c.id === Number(id));
      if (!found) return notFound();
      setCourse(found);
    }

    fetchData();
  }, [id]);

  if (!course) return null;

  return (
    <motion.div
      className='max-w-4xl mx-auto px-4 py-10'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1
        className='text-3xl font-bold mb-4'
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {course.title}
      </motion.h1>

      <motion.div
        className='mb-6 flex flex-wrap gap-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className='text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded'>
          Categoria: {course.category}
        </span>
        <span className='text-sm bg-green-100 text-green-800 px-2 py-1 rounded'>
          Nível: {course.level}
        </span>
      </motion.div>

      <motion.p
        className='text-gray-700 leading-relaxed'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {course.short_description}
      </motion.p>

      <motion.div
        className='mt-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className='text-xl font-semibold mb-2'>Conteúdo</h2>
        <ul className='list-disc list-inside text-gray-600'>
          {course.modules?.map((item: Module, idx: number) => (
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
    </motion.div>
  );
}

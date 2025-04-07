"use client";

import { motion } from "framer-motion";
import { getCourses } from "@/actions/getCourses";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Course, Module } from "@/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { courses } = await getCourses();
      const found = courses.find((c: Course) => c.id === Number(id));
      if (!found) return notFound();
      setCourse(found);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {loading ? <Skeleton width={300} height={36} /> : course?.title}
      </motion.h1>

      <motion.div
        className="mb-6 flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {loading ? (
          <>
            <Skeleton width={120} height={24} />
            <Skeleton width={100} height={24} />
          </>
        ) : (
          <>
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
              Categoria: {course?.category}
            </span>
            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
              Nível: {course?.level}
            </span>
          </>
        )}
      </motion.div>

      <motion.p
        className="text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {loading ? <Skeleton count={3} /> : course?.short_description}
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-xl font-semibold mb-2">
          {loading ? <Skeleton width={150} /> : "Conteúdo"}
        </h2>

        <ul className="list-disc list-inside text-gray-600">
          {loading
            ? [...Array(4)].map((_, idx) => (
                <li key={idx}>
                  <Skeleton width={`${80 + idx * 10}px`} />
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
    </motion.div>
  );
}

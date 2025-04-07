'use client'

import CourseCard from "@/components/Card"
import { useCourses } from "@/context/SearchContext"
import { motion } from "framer-motion"

export default function CoursesPage() {
  const { filteredCourses, category, setCategory, level, setLevel } = useCourses()

  return (
    <motion.main
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="flex flex-wrap gap-4 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">Todas as categorias</option>
          <option value="Design">Design</option>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Produto">Produto</option>
          <option value="Dados">Dados</option>
        </select>

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">Todos os níveis</option>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="avancado">Avançado</option>
        </select>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
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
    </motion.main>
  )
}

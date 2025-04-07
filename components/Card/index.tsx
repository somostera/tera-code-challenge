'use client'

import { Course } from "@/types"
import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  course: Course
}

export default function CourseCard({ course }: Props) {
  return (
    <Link href={`/courses/${course.id}`} className="block">
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="border rounded-2xl p-4 shadow-sm bg-white cursor-pointer"
      >
        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{course.short_description}</p>

        <div className="flex justify-between text-xs text-white">
          <span className="bg-blue-500 px-3 py-1 rounded-full">
            {course.category}
          </span>
          <span className="bg-green-500 px-3 py-1 rounded-full capitalize">
            {course.level}
          </span>
        </div>
      </motion.div>
    </Link>
  )
}

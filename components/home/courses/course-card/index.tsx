"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 + index / 10, ease: "linear" }}
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md hover:scale-102 transition"
    >
      <Image
        src="/images/course.png"
        alt={course.title}
        className="w-full mb-4 rounded-lg"
        width={200}
        height={100}
      />
      <div className="flex items-center gap-2">
        <span className="text-emerald-600 capitalize text-xs px-3 py-1 rounded-md bg-emerald-50">
          {course.category}
        </span>
        <span className="text-emerald-600 capitalize text-xs px-3 py-1 rounded-md bg-emerald-50">
          {course.level}
        </span>
      </div>
      <Link href={`/course/${course.id}`}>
        <h3 className="text-lg font-semibold mt-4 cursor-pointer hover:text-emerald-500 transition-colors">
          {course.title}
        </h3>
      </Link>
      <div className="flex items-center py-2 gap-4">
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 7.00003H4M8 12H4M8 17H4M12 3V21M9.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V6.20003C20 5.07993 20 4.51987 19.782 4.09205C19.5903 3.71573 19.2843 3.40977 18.908 3.21802C18.4802 3.00003 17.9201 3.00003 16.8 3.00003H9.2C8.07989 3.00003 7.51984 3.00003 7.09202 3.21802C6.71569 3.40977 6.40973 3.71573 6.21799 4.09205C6 4.51987 6 5.07993 6 6.20003V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
              stroke="var(--color-emerald-500)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-gray-500 text-xs">4 aulas</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 7V12L9.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="var(--color-emerald-500)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-gray-500 text-xs">
            {course.duration_hours} horas
          </span>
        </div>
      </div>
      <p className="text-md text-gray-500 mt-2">{course.short_description}</p>
    </motion.div>
  );
}

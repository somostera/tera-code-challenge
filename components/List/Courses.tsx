import { Course } from "@/types";
import React from "react";

export default function CourseList({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white dark:bg-gray-800 shadow dark:shadow-md rounded-lg p-6 hover:shadow-lg dark:hover:shadow-xl transition"
        >
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {course.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            {course.short_description}
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span className="block">Categoria: {course.category}</span>
            <span className="block capitalize">Nível: {course.level}</span>
            <span className="block">Duração: {course.duration_hours}h</span>
          </div>
          <button className="mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm">
            Ver detalhes
          </button>
        </div>
      ))}
    </div>
  );
}

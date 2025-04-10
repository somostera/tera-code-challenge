"use client";

import Icon from "@/components/common/icon";
import { LEVELS } from "@/constants/levels";
import { getLessonsNumber } from "@/utils/get-lessons-number";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 + index / 10, ease: "linear" }}
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
    >
      <Image
        src={`/images/courses/${course.id}.jpg`}
        alt={course.title}
        className="w-full mb-4 rounded-lg"
        width={200}
        height={100}
      />
      <div className="flex items-center gap-2">
        <span className="text-emerald-600 text-xs px-3 py-1 rounded-md bg-emerald-50">
          {course.category}
        </span>
        <span className="text-emerald-600 text-xs px-3 py-1 rounded-md bg-emerald-50">
          {LEVELS[course.level]}
        </span>
      </div>
      <Link href={`/course/${course.id}`}>
        <h3 className="text-lg font-semibold mt-4 cursor-pointer hover:text-emerald-500 transition-colors">
          {course.title}
        </h3>
      </Link>
      <div className="flex items-center py-2 gap-4">
        <div className="flex items-center gap-1">
          <Icon name="lessons" className="w-4 h-4 text-emerald-500" />
          <span className="text-gray-500 text-xs">
            {getLessonsNumber(course)} aulas
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Icon name="timer" className="w-4 h-4 text-emerald-500" />
          <span className="text-gray-500 text-xs">
            {course.duration_hours} horas
          </span>
        </div>
      </div>
      <p className="text-md text-gray-500 mt-2">{course.short_description}</p>
    </motion.div>
  );
};

export default CourseCard;

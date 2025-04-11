import { Course } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import CourseCard from "../Course/Card";

export default function CourseList({ courses }: { courses: Course[] }) {
  return (
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
      {courses.map((course) => (
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
  );
}

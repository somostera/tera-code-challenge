"use client";
import { motion } from "framer-motion";
import { useCourses } from "@/hooks/useCourses";
import CoursesFilter from "@/components/modules/home/courses/courses-filter";
import CourseCard from "@/components/modules/home/courses/course-card";
import Skeleton from "@/components/common/skeleton";
import Icon from "@/components/common/icon";

const Placeholder = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 + index / 10, ease: "linear" }}
    className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
  >
    <Skeleton className="h-35 w-[100%] mb-2" />
    <Skeleton className="h-4 w-20 mb-2" />
    <Skeleton className="h-7 w-[90%] mb-2" />
    <Skeleton className="h-4 w-20 mb-2" />
    <Skeleton className="h-4 w-[100%] mb-2" />
    <Skeleton className="h-4 w-[55%] mb-2" />
  </motion.div>
);

const Error = () => (
  <div className="w-full flex flex-col items-center py-25">
    <Icon name="emptyFolder" className="w-20 h-20 text-gray-300" />
    <p className="text-md text-gray-500">Nenhum curso foi encontrado</p>
  </div>
);

const Courses = () => {
  const { courses } = useCourses();

  return (
    <div className="py-20">
      <CoursesFilter />
      {courses.error ? (
        <Error />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {courses.loading || !courses?.data?.length
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Placeholder key={item} index={item} />
              ))
            : courses?.data?.map((course, index) => (
                <CourseCard course={course} key={course.id} index={index} />
              ))}
        </div>
      )}
    </div>
  );
};

export default Courses;

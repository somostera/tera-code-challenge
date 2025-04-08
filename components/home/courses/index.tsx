"use client";
import { useCourses } from "@/hooks/useCourses";
import CoursesFilter from "@/components/home/courses/courses-filter";
import CourseCard from "@/components/home/courses/course-card";

export default function Courses() {
  const { courses } = useCourses();

  return (
    <div className="py-10">
      <CoursesFilter />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {!courses?.loading &&
          courses?.data?.map((course, index) => (
            <CourseCard course={course} key={course.id} index={index} />
          ))}
      </div>
    </div>
  );
}

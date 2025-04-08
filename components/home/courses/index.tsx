"use client";
import { changeParams } from "@/utils/change-params";
import CourseCard from "./course-card";
import { useCourses } from "@/hooks/useCourses";

export default function Courses() {
  const { data, isLoading, category, level } = useCourses();

  if (isLoading) return null;

  return (
    <>
      <button onClick={() => changeParams({ category: "Design", level })}>
        Design
      </button>
      <button onClick={() => changeParams({ category, level: "iniciante" })}>
        iniciante
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-25">
        {data?.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </>
  );
}

"use server";
import coursesData from "@/data/courses.json";

export default async function fetchCourses({ category, level }: Filter) {
  const filteredCourses = coursesData.courses.filter(
    (course) =>
      (!level || course.level === level) &&
      (!category || course.category === category)
  );

  return filteredCourses;
}

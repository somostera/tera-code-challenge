"use server";

import coursesData from "@/data/courses.json";

export async function fetchCourses({ category, level }: Filter) {
  const filteredCourses = coursesData.courses.filter(
    (course) =>
      (!level || course.level === level) &&
      (!category || course.category === category)
  );

  return filteredCourses;
}

export async function fetchCourseById(id: Id) {
  const course = coursesData.courses.find((course) => course.id === id);

  return course;
}

import { useCoursesStore } from "@/store/courses-store";
import { useFilterStore } from "@/store/filter-store";
import { useEffect } from "react";

export const useCourses = () => {
  const { category, level } = useFilterStore();
  const { courses, fetchCourses } = useCoursesStore();

  useEffect(() => {
    fetchCourses({ category, level });
  }, [category, level]);

  return {
    courses,
  };
};

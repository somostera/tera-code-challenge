import { useCoursesStore } from "@/store/courses-store";
import { useFilterStore } from "@/store/filter-store";
import { useCallback, useEffect } from "react";

export const useCourses = () => {
  const { category, level } = useFilterStore();
  const { courses, fetchCourses } = useCoursesStore();

  const handleFetchCourses = useCallback(() => {
    fetchCourses({ category, level });
  }, [category, level, fetchCourses]);

  useEffect(() => {
    handleFetchCourses();
  }, [handleFetchCourses]);

  return {
    courses,
  };
};

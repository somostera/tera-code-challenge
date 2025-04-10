import { useCoursesStore } from "@/store/courses-store";
import { useFilterStore } from "@/store/filter-store";
import { capitalize } from "@/utils/capitalize";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export const useCourses = () => {
  const searchParams = useSearchParams();

  const { category, level } = useFilterStore();
  const { courses, fetchCourses, resetCourses } = useCoursesStore();

  const handleFetchCourses = useCallback(() => {
    const validateCategory = (searchParams.get("category") || "") === category;
    const validateLevel = (searchParams.get("level") || "") === level;

    if (validateCategory && validateLevel) {
      fetchCourses({ category: capitalize(category), level });
    }
  }, [category, level, fetchCourses, searchParams]);

  const handleResetCourses = useCallback(() => {
    resetCourses();
  }, [resetCourses]);

  useEffect(() => {
    handleResetCourses();
  }, [handleResetCourses]);

  useEffect(() => {
    handleFetchCourses();
  }, [handleFetchCourses]);

  return {
    courses,
  };
};

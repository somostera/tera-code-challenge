import { useCoursesStore } from "@/store/courses-store";
import { useFilterStore } from "@/store/filter-store";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export const useCourses = () => {
  const searchParams = useSearchParams();

  const { category, level } = useFilterStore();
  const { courses, fetchCourses } = useCoursesStore();

  const handleFetchCourses = useCallback(() => {
    const validateCategory = (searchParams.get("category") || "") === category;
    const validateLevel = (searchParams.get("level") || "") === level;

    if (validateCategory && validateLevel) {
      fetchCourses({ category, level });
    }
  }, [category, level, fetchCourses, searchParams]);

  useEffect(() => {
    handleFetchCourses();
  }, [handleFetchCourses]);

  return {
    courses,
  };
};

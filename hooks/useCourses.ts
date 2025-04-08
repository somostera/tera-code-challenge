import fetchCourses from "@/actions/courses";
import { useFilterStore } from "@/store/filter-store";
import { useEffect, useState, useTransition } from "react";

export const useCourses = () => {
  const { category, level } = useFilterStore();
  const [isCoursesLoading, startCoursesTransition] = useTransition();
  const [data, setData] = useState<Course[] | null>(null);

  const handleFetchCourses = async (filter: Filter) => {
    startCoursesTransition(async () => {
      const result = await fetchCourses(filter);
      setData(result);
    });
  };

  useEffect(() => {
    handleFetchCourses({ category, level });
  }, [category, level]);

  return {
    handleFetchCourses,
    data,
    isCoursesLoading,
    category,
    level,
  };
};

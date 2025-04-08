import fetchCourses from "@/actions/courses";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, useTransition } from "react";

export const useCourses = () => {
  const searchParams = useSearchParams();
  const [isCoursesLoading, startCoursesTransition] = useTransition();
  const [data, setData] = useState<Course[] | null>(null);

  const category = useMemo(
    () => searchParams.get("category") || "",
    [searchParams]
  );

  const level = useMemo(() => searchParams.get("level") || "", [searchParams]);

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

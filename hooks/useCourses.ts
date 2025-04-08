import fetchCourses from "@/actions/courses";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, useTransition } from "react";

export const useCourses = () => {
  const searchParams = useSearchParams();
  const [isLoading, startTransition] = useTransition();
  const [data, setData] = useState<Course[] | null>(null);

  const category = useMemo(
    () => searchParams.get("category") || "",
    [searchParams]
  );

  const level = useMemo(() => searchParams.get("level") || "", [searchParams]);

  const handleFetch = async (filter: Filter) => {
    startTransition(async () => {
      const result = await fetchCourses(filter);
      setData(result);
    });
  };

  useEffect(() => {
    handleFetch({ category, level });
  }, [category, level]);

  return {
    handleFetch,
    data,
    isLoading,
    category,
    level,
  };
};

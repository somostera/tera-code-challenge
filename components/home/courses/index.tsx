"use client";
import { useEffect, useMemo, useState, useTransition } from "react";
import fetchCourses from "@/actions/courses";
import { redirectWithoutRefresh } from "@/utils/redirect";
import CourseCard from "./course-card";
import { useSearchParams } from "next/navigation";

export default function Courses() {
  const searchParams = useSearchParams();

  const [isLoading, startTransition] = useTransition();
  const [data, setData] = useState<Course[] | null>(null);

  const category = useMemo(
    () => searchParams.get("category") || "",
    [searchParams]
  );
  const level = useMemo(() => searchParams.get("level") || "", [searchParams]);
  console.log(category);

  const handleFetch = async (filter: Filter) => {
    startTransition(async () => {
      const result = await fetchCourses(filter);
      setData(result);
    });
  };

  useEffect(() => {
    handleFetch({ category, level });
  }, [category, level]);

  if (isLoading) return null;

  return (
    <>
      <button
        onClick={() => redirectWithoutRefresh({ category: "Design", level })}
      >
        Design
      </button>
      <button
        onClick={() => redirectWithoutRefresh({ category, level: "iniciante" })}
      >
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

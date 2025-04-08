"use client";

import { Card } from "@/components/card";
import { useContextState } from "@/contexts/courses";

export function CardList() {
  const { filteredCourses: courses } = useContextState();
  return (
    <section className="mx-auto grid max-w-9/12 grid-cols-[auto] place-content-center gap-5 p-2.5 md:grid-cols-[300px_300px] lg:grid-cols-[320px_320px_320px]">
      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </section>
  );
}

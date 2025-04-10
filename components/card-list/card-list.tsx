"use client";

import { Card } from "@/components/card";
import { useContextState } from "@/contexts/courses";

export function CardList() {
  const { filteredCourses: courses } = useContextState();

  if (!courses.length) {
    return (
      <p className="mx-auto w-[90%] text-center text-xl md:text-2xl">
        Não foi possível encontrar resultados para esta pesquisa.
      </p>
    );
  }

  return (
    <section className="mx-auto w-[90%]">
      <div className="grid w-full grid-cols-[1fr] place-content-center place-items-center gap-5 p-2.5 md:grid-cols-[300px_300px] lg:grid-cols-[320px_320px_320px]">
        {courses.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

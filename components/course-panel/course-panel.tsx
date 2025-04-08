import { GetCourseByIdResponse } from "@/services/get-course-by-id";
import { use } from "react";

export type CoursePanelProps = {
  coursePromise: Promise<GetCourseByIdResponse>;
};

export function CoursePanel({ coursePromise }: CoursePanelProps) {
  const { course } = use(coursePromise);

  function formatHours(hours: number) {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "unit",
      unit: "hour",
      unitDisplay: "long",
    });

    return formatter.format(hours);
  }

  function plurarize(count: number, singular: string, plural: string) {
    const pluralRules = new Intl.PluralRules("pt-BR");
    const category = pluralRules.select(count);
    return category === "one" ? `${count} ${singular}` : `${count} ${plural}`;
  }

  return (
    <>
      <div className="flex w-full flex-wrap gap-3">
        <span className="bg-purple flex-grow rounded-[8px] p-1 text-center font-sans text-[12px] font-extrabold text-white uppercase select-none md:flex-none">
          {course.category}
        </span>

        <span className="bg-purple flex-grow rounded-[8px] p-1 text-center font-sans text-[12px] font-extrabold text-white uppercase select-none md:flex-none">
          {course.level}
        </span>

        <span className="bg-purple flex-grow rounded-[8px] p-1 text-center font-sans text-[12px] font-extrabold text-white uppercase select-none md:flex-none">
          {formatHours(course.duration_hours)}
        </span>
      </div>
      <h1 className="font-anton mt-1 mb-5 text-left text-2xl font-extrabold md:text-4xl">
        {course.title}
      </h1>
      <p className="text-[16px]">{course.full_description}</p>
      <h2 className="font-anton mt-5 text-2xl text-black">Módulos</h2>
      <ul>
        {course.modules.map((module) => (
          <li key={module.title}>
            <p>
              {module.title}:{" "}
              <strong>{plurarize(module.lessons, "Aula", "Aulas")}</strong>
            </p>
          </li>
        ))}
      </ul>
      <button className="bg-action mt-5 block cursor-pointer px-6 py-3 text-center font-extrabold text-black uppercase">
        Matricular-se
      </button>
    </>
  );
}

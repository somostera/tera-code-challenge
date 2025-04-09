import { ICourse } from "@/models/course";
import { Enroll } from "@/components/enroll";
import { pluralize } from "@/utils/pluralize";

export type CoursePanelProps = {
  course: ICourse;
};

export function CoursePanel({ course }: CoursePanelProps) {
  function formatHours(hours: number) {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "unit",
      unit: "hour",
      unitDisplay: "long",
    });

    return formatter.format(hours);
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
              <strong>
                {module.lessons} {pluralize(module.lessons, "Aula", "Aulas")}
              </strong>
            </p>
          </li>
        ))}
      </ul>
      <Enroll />
    </>
  );
}

import { ICourse } from "@/models/course";

export function pipeFilters(
  initialCourses: ICourse[],
  search: string,
  category: string,
  level: string
) {
  return initialCourses
    .filter((course) =>
      course.title.toLocaleLowerCase().includes(search.toLowerCase())
    )
    .filter((course) =>
      course.category.toLowerCase().includes(category.toLowerCase())
    )
    .filter((course) =>
      course.level.toLowerCase().includes(level.toLowerCase())
    );
}

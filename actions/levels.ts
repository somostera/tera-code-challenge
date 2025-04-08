"use server";
import coursesData from "@/data/courses.json";

export default async function fetchLevels() {
  if (!coursesData || !coursesData.courses) {
    return [];
  }

  const levelsSet = new Set<string>();

  coursesData.courses.forEach((course) => {
    levelsSet.add(course.level);
  });

  const uniqueLevels = Array.from(levelsSet);

  return uniqueLevels.sort();
}

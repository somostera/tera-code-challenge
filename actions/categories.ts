"use server";

import coursesData from "@/data/courses.json";

export default async function fetchCategories() {
  if (!coursesData || !coursesData.courses) {
    return [];
  }

  const categoriesSet = new Set<string>();

  coursesData.courses.forEach((course) => {
    categoriesSet.add(course.category);
  });

  const uniqueCategories = Array.from(categoriesSet).sort();
  const formattedCategories = uniqueCategories.map((category) => ({
    label: category,
    value: category.toLowerCase(),
  }));

  return formattedCategories;
}

import fetchCategories from "@/actions/categories";
import coursesData from "@/data/courses.json";

const categoriesSet = new Set<string>();

coursesData.courses.forEach((course) => {
  categoriesSet.add(course.category);
});

const uniqueCategories = Array.from(categoriesSet).sort();
const expectedCategories = uniqueCategories.map((category) => ({
  label: category,
  value: category.toLowerCase(),
}));

describe("fetchCategories", () => {
  it("should return an array of unique categories sorted alphabetically", async () => {
    const result = await fetchCategories();

    expect(result).toEqual(expectedCategories);
  });

  it("should handle duplicate categories correctly", async () => {
    const result = await fetchCategories();

    expect(result).toEqual(expectedCategories);
  });
});

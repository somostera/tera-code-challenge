import fetchCategories from "@/actions/categories";
import coursesData from "@/data/courses.json";

describe("fetchCategories", () => {
  it("should return an array of unique categories sorted alphabetically", async () => {
    const result = await fetchCategories();
    const expectedCategories = Array.from(
      new Set(coursesData.courses.map((course) => course.category))
    ).sort();

    expect(result).toEqual(expectedCategories);
  });

  it("should handle duplicate categories correctly", async () => {
    const expectedCategories = [
      "Dados",
      "Desenvolvimento",
      "Design",
      "Produto",
    ];
    const result = await fetchCategories();

    expect(result).toEqual(expectedCategories);
  });
});

import fetchLevels from "@/actions/levels";
import coursesData from "@/data/courses.json";

describe("fetchLevels", () => {
  it("should return an array of unique levels sorted alphabetically", async () => {
    const result = await fetchLevels();
    const expectedLevels = Array.from(
      new Set(coursesData.courses.map((course) => course.level))
    ).sort();

    expect(result).toEqual(expectedLevels);
  });

  it("should handle duplicate levels correctly", async () => {
    const expectedLevels = ["avancado", "iniciante", "intermediario"];
    const result = await fetchLevels();

    expect(result).toEqual(expectedLevels);
  });
});

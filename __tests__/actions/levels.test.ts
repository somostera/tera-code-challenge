import fetchLevels from "@/actions/levels";
import { LEVELS } from "@/constants/levels";
import coursesData from "@/data/courses.json";
const levelsSet = new Set<string>();

coursesData.courses.forEach((course) => {
  levelsSet.add(course.level);
});

const uniqueLevels = Array.from(levelsSet).sort();
const expectedLevels = uniqueLevels.map((level) => ({
  label: LEVELS[level],
  value: level,
}));

describe("fetchLevels", () => {
  it("should return an array of unique levels sorted alphabetically", async () => {
    const result = await fetchLevels();

    expect(result).toEqual(expectedLevels);
  });

  it("should handle duplicate levels correctly", async () => {
    const result = await fetchLevels();

    expect(result).toEqual(expectedLevels);
  });
});

import { fetchCourseById, fetchCourses } from "@/actions/courses";
import coursesData from "@/data/courses.json";

describe("fetchCourses", () => {
  it("should return an array of filtered courses", async () => {
    const filter = { category: "Design", level: "iniciante" };
    const result = await fetchCourses(filter);
    const expectedCourses = coursesData.courses.filter(
      (course) =>
        course.level === filter.level && course.category === filter.category
    );

    expect(result).toEqual(expectedCourses);
  });
});

describe("fetchCourseById", () => {
  it("should return a course filtered by id", async () => {
    const id = 1;
    const result = await fetchCourseById(id);
    const expectedCourses = coursesData.courses.find(
      (course) => course.id === id
    );

    expect(result).toEqual(expectedCourses);
  });
});

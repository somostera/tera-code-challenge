import { coursesData } from "@/mocks/courses";

type GetRouteParams = { params: Promise<{ id?: string[] }> };

export async function GET(_: Request, { params }: GetRouteParams) {
  const { id: [courseId] = [] } = await params;

  if (courseId) {
    const selectedCourse = coursesData.courses.find(
      (course) => course.id === Number(courseId)
    );

    if (!selectedCourse) {
      return Response.json({ message: "course not found" }, { status: 404 });
    }
    return Response.json({ course: selectedCourse });
  }

  return Response.json(coursesData);
}

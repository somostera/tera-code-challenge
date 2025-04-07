import { coursesData } from "@/mocks/courses";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id?: string[] }> }
) {
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

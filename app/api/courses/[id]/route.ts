import { coursesData } from "@/mocks/courses";

type GetRouteParams = { params: Promise<{ id: string }> };

export async function GET(_: Request, { params }: GetRouteParams) {
  const { id = "" } = await params;

  const selectedCourse = coursesData.courses.find(
    (course) => course.id === Number(id)
  );

  if (!selectedCourse) {
    return Response.json({ message: "course not found" }, { status: 404 });
  }

  return Response.json({ course: selectedCourse });
}

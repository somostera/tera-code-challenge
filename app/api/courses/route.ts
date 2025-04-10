import { coursesData } from "@/mocks/courses";

export async function GET() {
  return Response.json(coursesData);
}

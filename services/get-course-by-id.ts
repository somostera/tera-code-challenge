import { ICourse } from "@/models/course";
import { BASE_URL } from "@/services/config";

export type GetCourseByIdResponse = { course: ICourse };

export async function getCourseById(
  id: number
): Promise<GetCourseByIdResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/courses/${id}`, {
      cache: "force-cache",
      next: { revalidate: 3600 },
    });
    return await response.json();
  } catch (error) {
    return await Promise.reject(error);
  }
}

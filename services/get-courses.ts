import { ICourse } from "@/models/course";
import { BASE_URL } from "./config";

export type GetCoursesResponse = { courses: ICourse[] };

export async function getCourses(): Promise<GetCoursesResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/courses`, {
      cache: "force-cache",
      next: { revalidate: 3600 },
    });
    return await response.json();
  } catch (error) {
    return await Promise.reject(error);
  }
}

import { fetchCourseById } from "@/actions/courses";
import CourseBanner from "@/components/modules/course/banner";
import { redirect } from "next/navigation";

const CourseDetails = async ({ id }: { id: number }) => {
  const result = await fetchCourseById(Number(id));
  console.log(result);

  if (!result) {
    redirect("/");
  }

  return (
    <div className="max-w font-sans">
      <CourseBanner course={result} />
      <div className="container mx-auto px-5"></div>
    </div>
  );
};

export default CourseDetails;

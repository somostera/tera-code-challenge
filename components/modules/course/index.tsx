import { fetchCourseById } from "@/actions/courses";
import CourseBanner from "@/components/modules/course/banner";
import EnrollCourse from "@/components/modules/course/enroll";
import OverviewCourse from "@/components/modules/course/overview";
import { redirect } from "next/navigation";

const CourseDetails = async ({ id }: { id: number }) => {
  const result = await fetchCourseById(Number(id));

  if (!result) {
    redirect("/");
  }

  return (
    <div className="max-w font-sans">
      <CourseBanner course={result} />
      <div className="container mx-auto px-5 pt-15 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <OverviewCourse course={result} />
          </div>
          <div>
            <EnrollCourse course={result} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

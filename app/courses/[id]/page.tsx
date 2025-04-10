import { CourseContentWrapper } from "@/components/course-content-wrapper";
import { CoursePanel } from "@/components/course-panel";
import { Header } from "@/components/header";
import { MainLandmark } from "@/components/main-landmark";
import { getCourseById } from "@/services/get-course-by-id";
import { notFound } from "next/navigation";

type CoursePageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: CoursePageProps) {
  const { id } = await params;
  const { course } = await getCourseById(Number(id));

  return {
    title: course.title,
    description: course.full_description,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const { course } = await getCourseById(Number(id));

  if (!course) {
    notFound();
  }

  return (
    <>
      <Header />
      <MainLandmark>
        <CourseContentWrapper>
          <CoursePanel course={course} />
        </CourseContentWrapper>
      </MainLandmark>
    </>
  );
}

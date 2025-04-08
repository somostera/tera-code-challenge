import { CourseContentWrapper } from "@/components/course-content-wrapper";
import { CoursePanel } from "@/components/course-panel";
import { Header } from "@/components/header";
import { getCourseById } from "@/services/get-course-by-id";
import { notFound } from "next/navigation";

type CoursePageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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
      <main>
        <CourseContentWrapper>
          <CoursePanel course={course} />
        </CourseContentWrapper>
      </main>
    </>
  );
}

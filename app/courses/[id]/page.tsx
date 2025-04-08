import { CoursePanel } from "@/components/course-panel";
import { Header } from "@/components/header";
import { getCourseById } from "@/services/get-course-by-id";
import Image from "next/image";
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
        <section className="mx-auto my-10 grid w-[90%] max-w-[1000px] grid-cols-1 gap-3 md:grid-cols-2">
          <section className="order-2 md:order-1">
            <CoursePanel course={course} />
          </section>
          <section className="order-1 md:order-2">
            <Image
              src="/course-banner.jpg"
              alt=""
              width={1280}
              height={853}
              priority
            />
          </section>
        </section>
      </main>
    </>
  );
}

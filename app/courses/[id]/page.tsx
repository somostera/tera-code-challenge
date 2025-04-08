import { CoursePanel } from "@/components/course-panel";
import { CoursePanelSkeleton } from "@/components/course-panel-skeleton";
import { Header } from "@/components/header";
import { getCourseById } from "@/services/get-course-by-id";
import Image from "next/image";
import { Suspense } from "react";

type CoursePageProps = { params: Promise<{ id: string }> };

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const response = getCourseById(Number(id));

  return (
    <>
      <Header />
      <main>
        <section className="mx-auto my-10 grid w-[90%] max-w-[1000px] grid-cols-1 gap-3 md:grid-cols-2">
          <section className="order-2 md:order-1">
            <Suspense fallback={<CoursePanelSkeleton />}>
              <CoursePanel coursePromise={response} />
            </Suspense>
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

import { CoursePanelSkeleton } from "@/components/course-panel-skeleton";
import { Header } from "@/components/header";
import Image from "next/image";

export default function CoursePageLoading() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto my-10 grid w-[90%] max-w-[1000px] grid-cols-1 gap-3 md:grid-cols-2">
          <section className="order-2 md:order-1">
            <CoursePanelSkeleton />
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

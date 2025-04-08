import { CourseContentWrapper } from "@/components/course-content-wrapper";
import { CoursePanelSkeleton } from "@/components/course-panel-skeleton";
import { Header } from "@/components/header";

export default function CoursePageLoading() {
  return (
    <>
      <Header />
      <main>
        <CourseContentWrapper>
          <CoursePanelSkeleton />
        </CourseContentWrapper>
      </main>
    </>
  );
}

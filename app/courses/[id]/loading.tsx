import { CourseContentWrapper } from "@/components/course-content-wrapper";
import { CoursePanelSkeleton } from "@/components/course-panel-skeleton";
import { Header } from "@/components/header";
import { MainLandmark } from "@/components/main-landmark";

export default function CoursePageLoading() {
  return (
    <>
      <Header />
      <MainLandmark>
        <CourseContentWrapper>
          <CoursePanelSkeleton />
        </CourseContentWrapper>
      </MainLandmark>
    </>
  );
}

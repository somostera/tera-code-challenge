import CourseDetails from "@/components/modules/course";
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const CoursePage = ({ params }: PageProps) => {
  const { id } = use(params);
  return <CourseDetails id={Number(id)} />;
};

export default CoursePage;

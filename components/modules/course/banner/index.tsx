import Icon from "@/components/common/icon";
import Link from "next/link";

interface CourseBannerProps {
  course: Course;
}

const CourseBanner = ({ course }: CourseBannerProps) => {
  return (
    <div
      className="bg-amber-50 py-30"
      style={{
        backgroundImage: "url(/images/banner-details.jpg)",
        backgroundPosition: "left",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto">
        <div className="mb-15">
          <Link href="/" className="flex items-center gap-2">
            <Icon name="fullArrowLeft" className="w-4 h-4 text-blue-950" />
            <span className="text-blue-950 font-semibold text-sm">Voltar</span>
          </Link>
        </div>
        <div className="mb-6">
          <span className="text-white capitalize text-sm font-semibold px-3 py-1 rounded-md bg-emerald-600">
            {course.category}
          </span>
        </div>
        <h2 className="text-blue-950 text-[36px] font-semibold mb-5">
          {course.title}
        </h2>
        <p className="text-md text-gray-600">{course.short_description}</p>
      </div>
    </div>
  );
};

export default CourseBanner;

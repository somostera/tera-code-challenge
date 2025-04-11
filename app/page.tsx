import MainLoading from "@/components/common/main-loading";
import HomeBanner from "@/components/modules/home/banner";
import Courses from "@/components/modules/home/courses";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="max-w font-sans">
      <HomeBanner />
      <div className="container mx-auto px-5">
        <Suspense fallback={<MainLoading />}>
          <Courses />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;

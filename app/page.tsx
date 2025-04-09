import HomeBanner from "@/components/modules/home/banner";
import Courses from "@/components/modules/home/courses";

const HomePage = () => {
  return (
    <div className="max-w font-sans">
      <HomeBanner />
      <div className="container mx-auto px-5">
        <Courses />
      </div>
    </div>
  );
};

export default HomePage;

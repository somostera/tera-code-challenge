import HomeBanner from "@/components/home/banner";
import Courses from "@/components/home/courses";

const Home = () => {
  return (
    <div className="max-w font-sans">
      <HomeBanner />
      <div className="container mx-auto px-5">
        <Courses />
      </div>
    </div>
  );
};

export default Home;

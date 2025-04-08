import Courses from "@/components/home/courses";

export default function Home() {
  return (
    <div className="max-w font-sans">
      <div
        className="bg-amber-50 flex items-center justify-center py-40"
        style={{
          backgroundImage: "url(/images/banner.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="text-blue-950 text-[48px] font-semibold">
            Explore Nossos Cursos
          </h2>
          <p className="text-sm text-gray-600">Lorem Ipsum</p>
        </div>
      </div>
      <div className="container mx-auto">
        <Courses />
      </div>
    </div>
  );
}

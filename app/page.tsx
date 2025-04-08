import Courses from "@/components/home/courses";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-[#1E1E3F] text-white font-sans flex items-center justify-center py-50">
        <div className="max-w-md mx-auto">Courses</div>
      </div>
      <Courses />
    </div>
  );
}

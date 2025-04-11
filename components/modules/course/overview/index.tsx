import Icon from "@/components/common/icon";

interface OverviewCourseProps {
  course: Course;
}

const OverviewCourse = async ({ course }: OverviewCourseProps) => {
  return (
    <div>
      <h2 className="text-xl text-blue-950 font-semibold mb-8">Overview</h2>
      <p className="text-md text-gray-500 mb-8">{course.full_description}</p>

      <h3 className="text-md text-blue-950 font-semibold mb-3">Módulos</h3>

      <div className="w-full rounded-md overflow-hidden border border-gray-200">
        {course.modules.map((module, index) => (
          <details key={index} className="group border-b border-gray-200">
            <summary className="flex justify-between items-center py-4 cursor-pointer text-gray-800 text-md font-semibold bg-gray-50 px-5">
              <span>
                {index + 1}. {module.title}
              </span>
              <Icon
                name="arrowDown"
                className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                fill="var(--color-gray-600)"
                viewBox="0 0 20 20"
              />
            </summary>
            <div className="text-gray-600 text-md p-5 flex items-center gap-2">
              <Icon name="lessons" className="w-5 h-5 text-gray-600" />
              {module.lessons} aulas
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default OverviewCourse;

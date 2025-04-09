export const getLessonsNumber = (course: Course) => {
  return course.modules.reduce((total, module) => total + module.lessons, 0);
};

import { render, screen } from "@testing-library/react";
import { CoursePanel } from "@/components/course-panel";
import { ICourse } from "@/models/course";

const courseMock: ICourse = {
  id: 1,
  title: "course-title-mock",
  category: "category-mock",
  duration_hours: 10,
  full_description: "full_description-mock",
  short_description: "short_description-mock",
  level: "level-mock",
  modules: [],
};

test("should render with expected props", () => {
  render(<CoursePanel course={courseMock} />);

  expect(screen.getByText(courseMock.category));
  expect(screen.getByText(courseMock.level)).toBeInTheDocument();
  expect(screen.getByText("10 horas")).toBeInTheDocument();
  expect(screen.getByText(courseMock.title)).toBeInTheDocument();
});

test("should render module item with singular word", () => {
  const modules: ICourse["modules"] = [{ title: "module-title", lessons: 1 }];
  render(<CoursePanel course={{ ...courseMock, modules }} />);

  expect(screen.getByText(/module-title/i)).toBeInTheDocument();
  expect(screen.getByText(/1 Aula/i)).toBeInTheDocument();
});

test("should rener module item with plural word", () => {
  const modules: ICourse["modules"] = [
    { title: "module-title-plural", lessons: 3 },
  ];
  render(<CoursePanel course={{ ...courseMock, modules }} />);
  expect(screen.getByText(/module-title-plural/i));
  expect(screen.getByText(/3 Aulas/i)).toBeInTheDocument();
});

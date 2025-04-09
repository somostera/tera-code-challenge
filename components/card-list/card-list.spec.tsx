import { render, screen } from "@testing-library/react";
import { CardList } from "@/components/card-list";
import { ICourse } from "@/models/course";
import { CoursesProvider } from "@/contexts/courses";

beforeEach(() => jest.restoreAllMocks());

test("should return fallback ui if there are no courses", () => {
  render(
    <CoursesProvider courses={[]}>
      <CardList />
    </CoursesProvider>
  );

  expect(
    screen.getByText(
      "Não foi possível encontrar resultados para esta pesquisa."
    )
  ).toBeInTheDocument();
});

test("should render a list of cards if there are courses", () => {
  const coursesMock: ICourse[] = [
    {
      id: 1,
      title: "course-title-1",
      category: "category-mock",
      duration_hours: 10,
      full_description: "full_description-mock",
      short_description: "short_description-mock",
      level: "level-mock",
      modules: [],
    },
    {
      id: 2,
      title: "course-title-2",
      category: "category-mock",
      duration_hours: 10,
      full_description: "full_description-mock",
      short_description: "short_description-mock",
      level: "level-mock",
      modules: [],
    },
  ];

  render(
    <CoursesProvider courses={coursesMock}>
      <CardList />
    </CoursesProvider>
  );

  expect(screen.getByText("course-title-1")).toBeInTheDocument();
  expect(screen.getByText("course-title-2")).toBeInTheDocument();
});

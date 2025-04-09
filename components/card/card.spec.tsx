import { render, screen } from "@testing-library/react";
import { Card } from "@/components/card";
import { ICourse } from "@/models/course";

test("should render with expected data", () => {
  const courseMock: ICourse = {
    id: 1,
    title: "title-mock",
    category: "category-mock",
    duration_hours: 10,
    full_description: "full_description-mock",
    short_description: "short_description-mock",
    level: "level-mock",
    modules: [],
  };
  render(<Card course={courseMock} />);

  expect(screen.getByText(courseMock.title)).toBeInTheDocument();
  expect(screen.getByText(courseMock.short_description)).toBeInTheDocument();
  expect(screen.getByText(courseMock.level)).toBeInTheDocument();
  expect(screen.getByRole("link").getAttribute("href")).toBe("/courses/1");
});

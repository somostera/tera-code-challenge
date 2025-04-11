import { render, screen } from "@testing-library/react";
import { Card, CardProps } from "@/components/card";

test("should render with expected data", () => {
  const cardMock: CardProps = {
    id: 1,
    title: "title-mock",
    category: "category-mock",
    description: "description-mock",
    level: "level-mock",
  };
  render(<Card {...cardMock} />);

  expect(screen.getByText(cardMock.title)).toBeInTheDocument();
  expect(screen.getByText(cardMock.description)).toBeInTheDocument();
  expect(screen.getByText(cardMock.level)).toBeInTheDocument();
  expect(screen.getByRole("link").getAttribute("href")).toBe("/courses/1");
});

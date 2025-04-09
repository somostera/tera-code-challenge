import { render, screen } from "@testing-library/react";
import { MainLandmark } from "@/components/main-landmark";

test("should render main content landmark with children", () => {
  render(
    <MainLandmark>
      <p>children content</p>
    </MainLandmark>
  );

  expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
  expect(screen.getByText("children content")).toBeInTheDocument();
});

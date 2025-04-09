import { render, screen } from "@testing-library/react";
import { CourseContentWrapper } from "@/components/course-content-wrapper";

test("should render children", () => {
  render(
    <CourseContentWrapper>
      <h1>children content</h1>
    </CourseContentWrapper>
  );

  expect(screen.getByText(/children content/i)).toBeInTheDocument();
});

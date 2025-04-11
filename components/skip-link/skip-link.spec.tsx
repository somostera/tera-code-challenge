import { render, screen } from "@testing-library/react";
import { SkipLink } from "@/components/skip-link";

test("should render skip link with href pointing to #main-content", () => {
  render(<SkipLink />);
  const link = screen.getByRole("link");
  expect(link).toHaveTextContent("Conteúdo principal");
  expect(link).toHaveAttribute("href", "#main-content");
});

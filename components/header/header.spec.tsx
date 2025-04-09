import { render, screen } from "@testing-library/react";
import { Header } from "@/components/header";

test("should render with logo as link and alt text", () => {
  render(<Header />);

  const logo = screen.getByRole("img");
  expect(logo.getAttribute("src")).toBe("/logo.svg");
  expect(logo.getAttribute("alt")).toBe("Tera");
  expect(screen.getByRole("link", { name: "Tera" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Tera" }).getAttribute("href")).toBe(
    "/"
  );
});

test("should render children content", () => {
  render(
    <Header>
      <p>children content</p>
    </Header>
  );
  expect(screen.getByText("children content")).toBeInTheDocument();
});

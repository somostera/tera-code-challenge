import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "@/components/search-form";
import { CoursesProvider } from "@/contexts/courses";

test("should be able to find accessible select element and change its value", async () => {
  render(
    <CoursesProvider courses={[]}>
      <SearchForm />
    </CoursesProvider>
  );

  const categorySelect = screen.getByLabelText("Categorias");
  expect(categorySelect).toBeInTheDocument();
  expect(categorySelect).toHaveValue("");
  await userEvent.selectOptions(categorySelect, "produto");
  expect(categorySelect).toHaveValue("produto");

  const levelSelect = screen.getByLabelText("Nível");
  expect(levelSelect).toBeInTheDocument();
  expect(levelSelect).toHaveValue("");
  await userEvent.selectOptions(levelSelect, "iniciante");
  expect(levelSelect).toHaveValue("iniciante");
});

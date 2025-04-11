import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "@/components/search-form";

const useSearchParamsMock = jest.fn();
const usePathnameMock = jest.fn();

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: () => useSearchParamsMock(),
  usePathname: () => usePathnameMock(),
}));

jest.mock("../../contexts/courses", () => ({
  useContextDispatch: () => jest.fn(),
}));

test("should be able to find accessible select element and change its value", async () => {
  useSearchParamsMock.mockReturnValue(new URLSearchParams());
  usePathnameMock.mockReturnValue("");

  render(<SearchForm />);

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

test("should init SearchForm with params provided from useSearchParams if it exists", async () => {
  const searchParams = new URLSearchParams();
  searchParams.set("search", "ux");
  searchParams.set("category", "dados");
  searchParams.set("level", "iniciante");

  useSearchParamsMock.mockReturnValue(searchParams);
  usePathnameMock.mockReturnValue("");

  render(<SearchForm />);

  const search = screen.getByRole("searchbox");
  const category = screen.getByLabelText("Categorias");
  const level = screen.getByLabelText("Nível");

  expect(search).toHaveValue("ux");
  expect(category).toHaveValue("dados");
  expect(level).toHaveValue("iniciante");
});

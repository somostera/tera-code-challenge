import { render, screen, fireEvent } from "@testing-library/react";
import Select from "@/components/common/select";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
];

describe("Select component", () => {
  it("should render with correct label", () => {
    render(
      <Select label="Category" value="" options={options} onChange={() => {}} />
    );

    expect(screen.getByText("Category")).toBeInTheDocument();
  });

  it("should show selected value", () => {
    render(
      <Select
        label="Category"
        value="option1"
        options={options}
        onChange={() => {}}
      />
    );

    expect(screen.getByRole("button")).toHaveTextContent("Option 1");
  });

  it("should open and close the select dropdown", () => {
    render(
      <Select label="Category" value="" options={options} onChange={() => {}} />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.getByText("Option 1")).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });

  it("should call onChange on select value", () => {
    const handleChange = jest.fn();
    render(
      <Select
        label="Category"
        value=""
        options={options}
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Option 2"));

    expect(handleChange).toHaveBeenCalledWith("option2");
  });

  it("should close dropdown on select value", () => {
    render(
      <Select label="Category" value="" options={options} onChange={() => {}} />
    );

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Option 1"));

    expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
  });

  it("should not open dropdown when disabled", () => {
    render(
      <Select
        label="Category"
        value=""
        options={options}
        onChange={() => {}}
        disabled
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });
});

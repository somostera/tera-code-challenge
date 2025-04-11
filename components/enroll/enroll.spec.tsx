import { render, screen } from "@testing-library/react";
import { Enroll } from "@/components/enroll";
import { useActionState } from "react";
import userEvent from "@testing-library/user-event";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useActionState: jest.fn(),
}));

test("should render and handle button state", async () => {
  const mockFormAction = jest.fn();
  const mockPending = false;
  const mockState = { enrolled_count: 1 };

  (useActionState as jest.Mock).mockReturnValue([
    mockState,
    mockFormAction,
    mockPending,
  ]);

  render(<Enroll />);

  const button = screen.getByRole("button", { name: /Matricular-se/i });
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();

  await userEvent.click(button);
  expect(mockFormAction).toHaveBeenCalled();
});

test("should show pluralized enrollment text correctly", () => {
  const mockState = { enrolled_count: 2 };
  const mockFormAction = jest.fn();
  const mockPending = false;

  (useActionState as jest.Mock).mockReturnValue([
    mockState,
    mockFormAction,
    mockPending,
  ]);

  render(<Enroll />);

  const enrollmentText = screen.getByText(/Pessoas já se matricularam/i);
  expect(enrollmentText).toBeInTheDocument();
  expect(screen.getByRole("strong").textContent).toBe("2");
});

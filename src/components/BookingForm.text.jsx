import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders BookingForm label text", () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} />);
  expect(screen.getByText("Choose date")).toBeInTheDocument();
});

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./BookingForm";

function setup(props = {}) {
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  const defaultProps = {
    availableTimes: ["17:00", "18:00"],
    dispatch,
    submitForm,
    ...props,
  };

  render(<BookingForm {...defaultProps} />);
  return { dispatch, submitForm };
}

describe("BookingForm HTML5 validation attributes", () => {
  test("date input has required + type=date", () => {
    setup();
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();
  });

  test("time select has required (and enabled when times exist)", () => {
    setup();
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
    expect(timeSelect).not.toBeDisabled();
  });

  test("guests input has required + min/max + type=number", () => {
    setup();
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select has required", () => {
    setup();
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });

  test("time select is disabled when no available times", () => {
    setup({ availableTimes: [] });
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeDisabled();
  });
});

describe("BookingForm JS/React validation behavior", () => {
  test("dispatch fires when date changes", () => {
    const { dispatch } = setup();
    const dateInput = screen.getByLabelText(/choose date/i);

    fireEvent.change(dateInput, { target: { value: "2026-01-12" } });

    expect(dispatch).toHaveBeenCalledWith({
      type: "date_changed",
      payload: "2026-01-12",
    });
  });

  test("submit is disabled until form is valid, enabled when valid", async () => {
    setup();

    const submitBtn = screen.getByDisplayValue(/make your reservation/i);
    expect(submitBtn).toBeDisabled();

    // time auto-sets from availableTimes via useEffect
    await waitFor(() => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect.value).toBe("17:00");
    });

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-01-12" },
    });

    await waitFor(() => {
      expect(submitBtn).not.toBeDisabled();
    });
  });

  test("invalid guests disables submit (0 and 11), valid guests enables submit", async () => {
    setup();

    const submitBtn = screen.getByDisplayValue(/make your reservation/i);

    await waitFor(() => {
      expect(screen.getByLabelText(/choose time/i).value).toBe("17:00");
    });

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-01-12" },
    });

    // valid baseline
    await waitFor(() => expect(submitBtn).not.toBeDisabled());

    // invalid 0
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "0" },
    });
    await waitFor(() => expect(submitBtn).toBeDisabled());

    // invalid 11
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "11" },
    });
    await waitFor(() => expect(submitBtn).toBeDisabled());

    // valid 2
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });
    await waitFor(() => expect(submitBtn).not.toBeDisabled());
  });

  test("submit calls submitForm with form data when valid", async () => {
    const { submitForm } = setup();

    await waitFor(() => {
      expect(screen.getByLabelText(/choose time/i).value).toBe("17:00");
    });

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-01-12" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "3" },
    });

    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Engagement" },
    });

    await waitFor(() => {
      expect(
        screen.getByDisplayValue(/make your reservation/i)
      ).not.toBeDisabled();
    });

    fireEvent.click(screen.getByDisplayValue(/make your reservation/i));

    expect(submitForm).toHaveBeenCalledTimes(1);
    expect(submitForm).toHaveBeenCalledWith({
      date: "2026-01-12",
      time: "17:00",
      guests: 3,
      occasion: "Engagement",
    });
  });
});

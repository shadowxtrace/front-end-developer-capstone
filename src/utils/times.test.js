import { initializeTimes, updateTimes } from "./times";

describe("booking times reducer helpers", () => {
  beforeEach(() => {
    // Mock the Coursera API functions that normally come from index.html script
    window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes returns a non-empty array of times", () => {
    const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  });

  test("updateTimes returns available times for the selected date", () => {
    const selectedDate = "2026-01-12";

    const result = updateTimes([], {
      type: "date_changed",
      payload: selectedDate,
    });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  });
});

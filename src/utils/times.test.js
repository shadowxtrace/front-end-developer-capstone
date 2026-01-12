import { initializeTimes, updateTimes } from "./times";

test("initializeTimes returns the expected initial times", () => {
  expect(initializeTimes()).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same state it receives", () => {
  const state = ["17:00", "18:00"];
  expect(updateTimes(state, { type: "date_changed", payload: "2026-01-12" })).toBe(state);
});

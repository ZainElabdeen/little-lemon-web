import { initializeTimes, updateTimes } from "./bookingTimes";

describe("initializeTimes", () => {
  test("returns the expected list of available times", () => {
    expect(initializeTimes()).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});

describe("updateTimes", () => {
  test("returns the same state that is provided in the state", () => {
    const state = ["17:00", "18:00"];
    // An unrecognized action must leave the state untouched.
    expect(updateTimes(state, { type: "unknown_action" })).toBe(state);
  });

  test("returns the available times on a date_change action", () => {
    const state = ["18:00"];
    const newState = updateTimes(state, {
      type: "date_change",
      payload: "2026-10-25",
    });
    expect(newState).toEqual(initializeTimes());
  });
});

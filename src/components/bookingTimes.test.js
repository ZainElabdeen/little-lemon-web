import { initializeTimes, updateTimes } from "./bookingTimes";

// For testing purposes, fetchAPI returns a non-empty array of available
// booking times instead of the pseudo-random slots from public/api.js.
const mockTimes = ["17:00", "17:30", "18:00", "18:30", "19:00"];

beforeEach(() => {
  window.fetchAPI = jest.fn(() => mockTimes);
});

afterEach(() => {
  delete window.fetchAPI;
});

describe("initializeTimes", () => {
  test("returns a non-empty array of available times from the API", () => {
    expect(initializeTimes()).toEqual(mockTimes);
    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });
});

describe("updateTimes", () => {
  test("returns the same state that is provided in the state", () => {
    const state = ["18:00"];
    // An unrecognized action must leave the state untouched, without
    // calling the API.
    expect(updateTimes(state, { type: "unknown_action" })).toBe(state);
    expect(window.fetchAPI).not.toHaveBeenCalled();
  });

  test("returns the API times for the pre-selected date on a date_change action", () => {
    const state = ["18:00"];
    const newState = updateTimes(state, {
      type: "date_change",
      payload: "2026-10-25",
    });
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(newState).toEqual(mockTimes);
  });
});

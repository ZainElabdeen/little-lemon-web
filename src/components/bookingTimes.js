// Booking times logic, backed by the booking API (public/api.js, which the
// page loads as a script and exposes as window.fetchAPI). The API is
// synchronous: it returns an array of available reservation times for the
// given Date.

const parseDateString = (dateString) => new Date(`${dateString}T00:00:00`);

// Shown when the API script failed to load, so the booking page degrades
// gracefully instead of crashing on a missing window.fetchAPI.
const DEFAULT_TIMES = [
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00",
];

const fetchTimes = (date) => {
  if (typeof window.fetchAPI !== "function") {
    console.warn(
      "Booking API unavailable (public/api.js not loaded); using default times."
    );
    return DEFAULT_TIMES;
  }
  return window.fetchAPI(date);
};

export const initializeTimes = () => fetchTimes(new Date());

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "date_change":
      // action.payload is the selected date string ("YYYY-MM-DD") from the
      // form; the API expects a Date object.
      return fetchTimes(parseDateString(action.payload));
    default:
      return state;
  }
};

// Booking times logic, backed by the booking API (public/api.js, which the
// page loads as a script and exposes as window.fetchAPI). The API is
// synchronous: it returns an array of available reservation times for the
// given Date.

const parseDateString = (dateString) => new Date(`${dateString}T00:00:00`);

export const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "date_change":
      // action.payload is the selected date string ("YYYY-MM-DD") from the
      // form; the API expects a Date object.
      return window.fetchAPI(parseDateString(action.payload));
    default:
      return state;
  }
};

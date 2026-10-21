// Pure functions for the booking times state, kept outside of the Main
// component so they can be unit tested without rendering React (and without
// pulling in react-router-dom, which CRA's jest cannot resolve).

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "date_change":
      // For now, the same seating times are available regardless of the
      // selected date (action.payload holds the newly selected date). This is
      // where a call to the reservations API will go in a future exercise.
      return initializeTimes();
    default:
      return state;
  }
};

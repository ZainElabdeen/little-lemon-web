import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import { initializeTimes, updateTimes } from "./bookingTimes";

function Main() {
  // The third useReducer argument is the lazy initializer: initializeTimes is
  // called to produce the initial state. (Passing it as the second argument
  // would store the function itself as state instead of calling it.)
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatchAvailableTimes}
            />
          }
        />
        <Route
          path="*"
          element={
            <section className="not-found">
              <h1>Page not found</h1>
              <p>This page is coming soon. Check back shortly!</p>
            </section>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;

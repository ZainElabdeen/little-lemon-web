import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
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
  const navigate = useNavigate();

  // Submits the reservation to the API and navigates to the confirmation
  // page when the API accepts it.
  const submitForm = (formData) => {
    if (window.submitAPI(formData)) {
      navigate("/confirmed");
      return true;
    }
    return false;
  };

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
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
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

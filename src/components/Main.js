import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
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

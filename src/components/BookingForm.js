import { useState } from "react";

const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(initialTimes[0]);
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  // Stateful array of available seating times. In a future exercise this will
  // be fetched from the reservations API whenever the date changes.
  const [availableTimes] = useState(initialTimes);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ready to send { date, time, guests, occasion } to the API in a future
    // exercise. For now, just log the reservation request.
    console.log("Reservation requested:", { date, time, guests, occasion });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" className="button" />
    </form>
  );
}

export default BookingForm;

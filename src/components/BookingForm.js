import { useState } from "react";

function BookingForm({ availableTimes, dispatchAvailableTimes, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Birthday");

  const today = new Date().toISOString().split("T")[0];

  // React-side validation: the submit button stays disabled until every
  // field holds a valid value. The HTML5 attributes on the inputs (required,
  // min, max) provide a second, independent layer of validation.
  const isDateValid = date !== "" && date >= today;
  const isTimeValid = time !== "";
  const isGuestsValid =
    guests !== "" && Number(guests) >= 1 && Number(guests) <= 10;
  const isFormValid = isDateValid && isTimeValid && isGuestsValid;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatchAvailableTimes({ type: "date_change", payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guard against submissions that bypass the disabled button (e.g. the
    // Enter key) while a field is invalid.
    if (!isFormValid) return;
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        min={today}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
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
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        className="button"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;

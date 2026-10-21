import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const dispatchAvailableTimes = jest.fn();

test("Renders the BookingForm static labels", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatchAvailableTimes={dispatchAvailableTimes}
    />
  );

  const chooseDateLabel = screen.getByText("Choose date");
  expect(chooseDateLabel).toBeInTheDocument();

  const submitButton = screen.getByDisplayValue("Make Your reservation");
  expect(submitButton).toBeInTheDocument();
});

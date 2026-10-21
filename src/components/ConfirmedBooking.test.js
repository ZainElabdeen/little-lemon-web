import { render, screen } from "@testing-library/react";
import ConfirmedBooking from "./ConfirmedBooking";

test("Renders the booking confirmation message", () => {
  render(<ConfirmedBooking />);
  const headingElement = screen.getByText(/reservation is confirmed/i);
  expect(headingElement).toBeInTheDocument();
});

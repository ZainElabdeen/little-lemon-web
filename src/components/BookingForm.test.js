import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const dispatchAvailableTimes = jest.fn();
const submitForm = jest.fn(() => true);

const renderBookingForm = () =>
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatchAvailableTimes={dispatchAvailableTimes}
      submitForm={submitForm}
    />
  );

// Fills in a valid date and guest count so the form can be submitted.
const fillValidForm = () => {
  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2030-01-01" },
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "4" },
  });
};

beforeEach(() => {
  // clearAllMocks() also drops the mock's implementation, so restore the
  // happy-path return value (the API accepting the reservation) explicitly.
  jest.clearAllMocks();
  submitForm.mockReturnValue(true);
});

test("Renders the BookingForm static labels", () => {
  renderBookingForm();

  const chooseDateLabel = screen.getByText("Choose date");
  expect(chooseDateLabel).toBeInTheDocument();

  const submitButton = screen.getByDisplayValue("Make Your reservation");
  expect(submitButton).toBeInTheDocument();
});

describe("HTML5 validation attributes", () => {
  test("date input is required and cannot be in the past", () => {
    renderBookingForm();
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toBeRequired();
    const today = new Date().toISOString().split("T")[0];
    expect(dateInput).toHaveAttribute("min", today);
  });

  test("guests input is a required number between 1 and 10", () => {
    renderBookingForm();
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });
});

describe("React validation of the submit button", () => {
  test("submit button is disabled when the form is incomplete", () => {
    renderBookingForm();
    expect(screen.getByDisplayValue("Make Your reservation")).toBeDisabled();
  });

  test("submit button is disabled when the number of guests is out of range", () => {
    renderBookingForm();
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2030-01-01" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "0" },
    });
    expect(screen.getByDisplayValue("Make Your reservation")).toBeDisabled();
  });

  test("submit button is enabled when all fields are valid", () => {
    renderBookingForm();
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2030-01-01" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    expect(
      screen.getByDisplayValue("Make Your reservation")
    ).not.toBeDisabled();
  });
});

describe("form submission", () => {
  test("submits the form data when the form is valid", () => {
    const { container } = renderBookingForm();
    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2030-01-01" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.submit(container.querySelector("form"));
    expect(submitForm).toHaveBeenCalledWith({
      date: "2030-01-01",
      time: "17:00",
      guests: "4",
      occasion: "Birthday",
    });
  });

  test("does not submit the form data when the form is invalid", () => {
    const { container } = renderBookingForm();
    // No date or guests chosen: submitting directly (e.g. pressing Enter)
    // must not reach submitForm.
    fireEvent.submit(container.querySelector("form"));
    expect(submitForm).not.toHaveBeenCalled();
  });

  test("shows an error message when the API rejects the reservation", () => {
    submitForm.mockReturnValueOnce(false);
    const { container } = renderBookingForm();
    fillValidForm();
    fireEvent.submit(container.querySelector("form"));
    expect(submitForm).toHaveBeenCalled();
    expect(screen.getByRole("alert")).toHaveTextContent(
      /couldn't complete your reservation/i
    );
    expect(submitForm).toHaveReturnedWith(false);
  });

  test("shows no error message when the reservation is accepted", () => {
    const { container } = renderBookingForm();
    fillValidForm();
    fireEvent.submit(container.querySelector("form"));
    expect(submitForm).toHaveBeenCalled();
    expect(submitForm).toHaveReturnedWith(true);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});

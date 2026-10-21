import BookingForm from "./BookingForm";

function BookingPage() {
  return (
    <section className="booking">
      <h1>Book a table</h1>
      <p>
        Fill in the form below to reserve your table at Little Lemon. We look
        forward to seeing you!
      </p>
      <BookingForm />
    </section>
  );
}

export default BookingPage;

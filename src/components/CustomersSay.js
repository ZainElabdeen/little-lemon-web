const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    review:
      "The Greek salad was fresh and full of flavor. The service was excellent and the atmosphere was lovely. We will be back soon!",
  },
  {
    name: "John D.",
    rating: 5,
    review:
      "Authentic Mediterranean food in the heart of Chicago. The bruschetta and the lemon dessert were outstanding.",
  },
  {
    name: "Amelia R.",
    rating: 4,
    review:
      "Great food, friendly staff and a really cozy space. Booking a table online was quick and easy.",
  },
  {
    name: "Michael T.",
    rating: 5,
    review:
      "Little Lemon never disappoints. Bold flavors, generous portions and fair prices. Highly recommended!",
  },
];

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>What our customers say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial" key={testimonial.name}>
            <div className="testimonial-header">
              <span className="testimonial-avatar" aria-hidden="true">
                {testimonial.name.charAt(0)}
              </span>
              <div>
                <h3>{testimonial.name}</h3>
                <span
                  className="testimonial-rating"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </span>
              </div>
            </div>
            <p>&ldquo;{testimonial.review}&rdquo;</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;

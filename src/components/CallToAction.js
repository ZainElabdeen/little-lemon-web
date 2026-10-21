import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Link to="/booking" className="button">
          Reserve a table
        </Link>
      </div>
      <div
        className="hero-image"
        role="img"
        aria-label="A selection of Little Lemon's Mediterranean dishes"
      />
    </section>
  );
}

export default CallToAction;

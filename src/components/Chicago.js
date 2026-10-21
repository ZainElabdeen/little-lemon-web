function Chicago() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple
          food and bold flavors in a lively atmosphere. The menu draws on
          Mediterranean-inspired recipes, made fresh every day by our chefs.
        </p>
      </div>
      <img
        className="about-image"
        src={`${process.env.PUBLIC_URL}/images/restaurant chef B.jpg`}
        alt="The owners of Little Lemon"
      />
    </section>
  );
}

export default Chicago;

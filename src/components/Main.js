const specials = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes.",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button type="button" className="button">
            Reserve a table
          </button>
        </div>
        <div
          className="hero-image"
          role="img"
          aria-label="A selection of Little Lemon's Mediterranean dishes"
        />
      </section>

      <section className="specials">
        <div className="specials-header">
          <h2>This week&rsquo;s specials</h2>
          <button type="button" className="button">
            Online Menu
          </button>
        </div>
        <div className="specials-grid">
          {specials.map((item) => (
            <article className="card" key={item.name}>
              <div className="card-image" role="img" aria-label={item.name} />
              <div className="card-body">
                <div className="card-title-row">
                  <h3>{item.name}</h3>
                  <span className="card-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <a className="card-link" href="/order">
                  Order a delivery
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

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
        <div
          className="about-image"
          role="img"
          aria-label="The owners of Little Lemon"
        />
      </section>
    </main>
  );
}

export default Main;

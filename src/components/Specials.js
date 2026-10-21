import { Link } from "react-router-dom";

const specials = [
  {
    name: "Greek Salad",
    image: "greek salad.jpg",
    price: "$12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruschetta",
    image: "bruschetta.jpg",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes.",
  },
  {
    name: "Lemon Dessert",
    image: "lemon dessert.jpg",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week&rsquo;s specials</h2>
        <Link to="/menu" className="button" aria-label="On Click">
          Online Menu
        </Link>
      </div>
      <div className="specials-grid">
        {specials.map((item) => (
          <article className="card" key={item.name}>
            <img
              className="card-image"
              src={`${process.env.PUBLIC_URL}/images/${item.image}`}
              alt={item.name}
            />
            <div className="card-body">
              <div className="card-title-row">
                <h3>{item.name}</h3>
                <span className="card-price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <Link className="card-link" to="/order">
                Order a delivery
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;

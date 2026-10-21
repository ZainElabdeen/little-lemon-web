import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Reservations", to: "/booking" },
  { label: "Order Online", to: "/order" },
  { label: "Login", to: "/login" },
];

function Nav() {
  return (
    <nav aria-label="Main">
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

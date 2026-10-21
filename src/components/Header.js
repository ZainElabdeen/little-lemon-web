import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <img
        className="header-logo"
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="Little Lemon logo"
      />
      <Nav />
    </header>
  );
}

export default Header;

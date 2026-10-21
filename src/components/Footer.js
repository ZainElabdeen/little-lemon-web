function Footer() {
  console.log(
    "Footer component rendered",
    `${process.env.PUBLIC_URL}/images/Logo.svg`,
  );
  return (
    <footer className="footer">
      <div>
        <img
          className="footer-logo"
          src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
          alt="Little Lemon logo"
        />
        <p>Family owned Mediterranean restaurant in the heart of Chicago.</p>
      </div>
      <div>
        <h2>Contact</h2>
        <address>
          630 W Chicago Ave
          <br />
          Chicago, IL 60654
          <br />
          (312) 555-1234
          <br />
          info@littlelemon.com
        </address>
      </div>
      <div>
        <h2>Links</h2>
        <nav aria-label="Footer">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h2>Social Media</h2>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/littlelemon"
              aria-label="Little Lemon on Facebook"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/littlelemon"
              aria-label="Little Lemon on Instagram"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/littlelemon"
              aria-label="Little Lemon on X (Twitter)"
            >
              X (Twitter)
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

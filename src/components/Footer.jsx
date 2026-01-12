function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="container footer-grid">
        {/* Logo / brand */}
        <div className="footer-brand">
          <h2 id="footer-title" className="footer-logo">
            Little Lemon
          </h2>
        </div>

        {/* Navigation */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <ul className="footer-list">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer-contact">
          <p>Chicago, IL</p>
          <p>© Little Lemon</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


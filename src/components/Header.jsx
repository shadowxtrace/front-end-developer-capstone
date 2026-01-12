import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        {/* Logo */}
        <div className="logo-wrapper">
          <img
            src="/logo.png"
            alt="Little Lemon Logo"
            className="logo"
          />
        </div>

        {/* Navigation */}
        <Nav />
      </div>
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        {/* Text content */}
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">
            Little Lemon
          </h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-text">
            Mediterranean restaurant serving traditional dishes.
          </p>
          <Link to="/booking" className="btn btn-primary">
            Reserve a Table
          </Link>
        </div>

        {/* Image placeholder */}
        <div className="hero-image" aria-hidden="true">
          {/* image goes here later */}
        </div>
      </div>
    </section>
  );
}

export default CallToAction;

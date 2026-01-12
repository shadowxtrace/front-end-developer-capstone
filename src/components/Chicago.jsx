function Chicago() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="container about-grid">
        {/* Text content */}
        <div className="about-content">
          <h2 id="about-title" className="about-title">
            Little Lemon
          </h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-text">
            Little Lemon is a family-owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist.
          </p>
        </div>

        {/* Image placeholders */}
        <div className="about-images" aria-hidden="true">
          <div className="about-image image-1"></div>
          <div className="about-image image-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Chicago;


const testimonials = [
  { name: "Alex", rating: "★★★★★", review: "Amazing food and great service!" },
  { name: "Jamie", rating: "★★★★★", review: "Best Mediterranean spot in Chicago." },
  { name: "Taylor", rating: "★★★★☆", review: "Loved the Greek salad!" },
  { name: "Morgan", rating: "★★★★★", review: "Perfect place for date night." },
];

function CustomersSay() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="section-title">
          Testimonials
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial-card">
              <p className="testimonial-rating">{t.rating}</p>
              <p className="testimonial-name">
                <strong>{t.name}</strong>
              </p>
              <p className="testimonial-review">{t.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;

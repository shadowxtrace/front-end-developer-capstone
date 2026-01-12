const testimonials = [
  { name: "Alex", rating: "★★★★★", review: "Amazing food and great service!" },
  { name: "Jamie", rating: "★★★★★", review: "Best Mediterranean spot in Chicago." },
  { name: "Taylor", rating: "★★★★☆", review: "Loved the Greek salad!" },
  { name: "Morgan", rating: "★★★★★", review: "Perfect place for date night." },
];

function CustomersSay() {
  return (
    <section>
      <h2>Testimonials</h2>
      <div>
        {testimonials.map((t) => (
          <article key={t.name}>
            <p>{t.rating}</p>
            <p><strong>{t.name}</strong></p>
            <p>{t.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;

export default function ConfirmedBooking() {
  return (
    <main className="confirmation-page">
      <section
        className="confirmation-section"
        aria-labelledby="confirmation-title"
      >
        <div className="container confirmation-card">
          <h1 id="confirmation-title" className="confirmation-title">
            Booking Confirmed
          </h1>
          <p className="confirmation-text">
            Your reservation has been confirmed.
          </p>
        </div>
      </section>
    </main>
  );
}

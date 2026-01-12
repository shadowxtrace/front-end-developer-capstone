import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <main className="booking-page">
      <section className="booking-hero" aria-labelledby="booking-page-title">
        <div className="container">
          <h1 id="booking-page-title" className="booking-page-title">
            Book a Table
          </h1>
        </div>
      </section>

      <section className="booking-content">
        <div className="container">
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </section>
    </main>
  );
}



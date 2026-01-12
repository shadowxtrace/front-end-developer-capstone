import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section>
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}


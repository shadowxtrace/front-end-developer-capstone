import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch }) {
  return (
    <section>
      <h1>Reservations</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}



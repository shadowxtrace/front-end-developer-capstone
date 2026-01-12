import { useMemo, useState } from "react";

export default function BookingForm({
  availableTimes,
  dispatch,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes?.[0] || "17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // React-side validation (extra beyond HTML5)
  const isFormValid = useMemo(() => {
    const validDate = Boolean(date);
    const validTime = Boolean(time);
    const validGuests =
      Number.isInteger(guests) && guests >= 1 && guests <= 10;
    const validOccasion = Boolean(occasion);

    return validDate && validTime && validGuests && validOccasion;
  }, [date, time, guests, occasion]);

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // dispatch selected date so Main reducer can update times
    dispatch({ type: "date_changed", payload: selectedDate });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;

    const formData = { date, time, guests, occasion };
    if (submitForm) submitForm(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: 200, gap: 20 }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        disabled={!availableTimes || availableTimes.length === 0}
      >
        {(availableTimes || []).map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!isFormValid}
        aria-label="On Click"
      />
    </form>
  );
}

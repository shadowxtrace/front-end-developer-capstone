/* global fetchAPI, submitAPI */

import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { initializeTimes, updateTimes } from "../utils/times";

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  function submitForm(formData) {
    const ok = submitAPI(formData);
    if (ok) navigate("/confirmed");
  }

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />

        <Route path="/about" element={<div>About</div>} />
        <Route path="/menu" element={<div>Menu</div>} />
        <Route path="/order" element={<div>Order Online</div>} />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </main>
  );
}

export default Main;



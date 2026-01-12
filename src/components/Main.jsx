/* global fetchAPI, submitAPI */

import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { initializeTimes, updateTimes } from "../utils/times";

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function submitForm(formData) {
    const ok = submitAPI(formData);
    if (ok) navigate("/confirmed");
  }

  return (
    <main className="main-content">
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

        {/* Placeholder routes for navigation completeness */}
        <Route path="/about" element={<div className="page-placeholder">About</div>} />
        <Route path="/menu" element={<div className="page-placeholder">Menu</div>} />
        <Route path="/order" element={<div className="page-placeholder">Order Online</div>} />
        <Route path="/login" element={<div className="page-placeholder">Login</div>} />
      </Routes>
    </main>
  );
}

export default Main;



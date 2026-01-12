import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />

        {/* Simple placeholders so routes don’t break */}
        <Route path="/about" element={<div>About</div>} />
        <Route path="/menu" element={<div>Menu</div>} />
        <Route path="/order" element={<div>Order Online</div>} />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </main>
  );
}

export default Main;

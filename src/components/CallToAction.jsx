import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>Mediterranean restaurant serving traditional dishes.</p>
      <Link to="/booking" className="btn">Reserve a Table</Link>
    </section>
  );
}

export default CallToAction;

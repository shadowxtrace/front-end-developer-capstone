const specials = [
  {
    name: "Greek Salad",
    price: "$12.00",
    description: "Crisp lettuce, peppers, olives and feta cheese.",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    description: "Grilled bread with garlic and seasoned tomatoes.",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description: "A classic lemon dessert with a light crust.",
  },
];

function Specials() {
  return (
    <section className="specials" aria-labelledby="specials-title">
      <div className="container">
        {/* Section header */}
        <div className="specials-header">
          <h2 id="specials-title" className="section-title">
            Specials
          </h2>
          <button className="btn btn-secondary" type="button">
            Online Menu
          </button>
        </div>

        {/* Cards */}
        <div className="specials-grid">
          {specials.map((item) => (
            <article key={item.name} className="special-card">
              <div className="special-card-header">
                <h3 className="special-name">
                  {item.name}
                  <span className="special-price">{item.price}</span>
                </h3>
              </div>

              <p className="special-description">{item.description}</p>

              <p className="special-order">
                Order a Delivery
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;


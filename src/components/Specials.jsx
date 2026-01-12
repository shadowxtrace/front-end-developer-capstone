const specials = [
  { name: "Greek Salad", price: "$12.00", description: "Crisp lettuce, peppers, olives and feta cheese." },
  { name: "Bruschetta", price: "$5.99", description: "Grilled bread with garlic and seasoned tomatoes." },
  { name: "Lemon Dessert", price: "$5.00", description: "A classic lemon dessert with a light crust." },
];

function Specials() {
  return (
    <section>
      <h2>Specials</h2>
      <div>
        {specials.map((item) => (
          <article key={item.name}>
            <h3>{item.name} <span>{item.price}</span></h3>
            <p>{item.description}</p>
            <p>Order a Delivery</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;

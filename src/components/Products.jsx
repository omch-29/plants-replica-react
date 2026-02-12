import "./prod.css";
import plant1 from "../assets/plant.jpg";
import plant2 from "../assets/pl2.jpg";
import plant3 from "../assets/palm.jpg";

const plants = [
  { id: 1, name: "Aloe Vera", price: "Rs 259/-", img: plant1 },
  { id: 2, name: "Snake Plant", price: "Rs 746/-", img: plant2 },
  { id: 3, name: "Palm Plant", price: "Rs 895/-", img: plant3 },
];

function Products() {
  return (
    <section className="container products">
      <h2 className="head">Our Top Selling</h2>

      <div className="grid">
        {plants.map((plant) => (
          <div className="card" key={plant.id}>
            <img src={plant.img} />
            <h3>{plant.name}</h3>
            <p>{plant.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
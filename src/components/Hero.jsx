import "./hero.css";
import plant from "../assets/plant.jpg";

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>Breath Natural</h1>
        <p>
          Discover the best plants for your space. Fresh, green and healthy.
        </p>
        <button>Explore Now</button>
      </div>

      <img src={plant} alt="Plant" className="hero-img" />
    </section>
  );
}

export default Hero;
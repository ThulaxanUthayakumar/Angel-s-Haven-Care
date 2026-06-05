import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">
          Because You Want What's Best For Someone You Love
        </span>

        <h1>
          You Don't Have To
          <br />
          Do This Alone
          <br />
          Anymore
        </h1>

        <p>
          Join us for a special Open House and discover a warm,
          family-centered assisted living home where comfort,
          dignity, and personalized care come first.
        </p>

        <div className="hero-features">
          <div>✓ Private Rooms Available</div>
          <div>✓ Home-Cooked Meals</div>
          <div>✓ Nurse Oversight & 24-Hour Staff</div>
        </div>

        <div className="event-box">
          <div>📅 June 16th Open House</div>
          <div>📍 69920 Matisse Rd, Cathedral City, CA 92234</div>
        </div>

        <button className="hero-btn">
          Reserve Your Spot
        </button>
      </div>
    </section>
  );
}
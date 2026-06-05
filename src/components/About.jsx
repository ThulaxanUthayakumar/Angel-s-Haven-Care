import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd"
            alt="Angel's Haven Care"
          />
        </div>

        <div className="about-content">

          <span className="about-tag">
            ABOUT ANGEL'S HAVEN CARE
          </span>

          <h2>
            Compassionate Care,
            Comfort, and Peace of Mind
          </h2>

          <p>
            At Angel's Haven Care, we believe every senior deserves
            to live with comfort, dignity, and compassionate support.
            Our family-style assisted living home provides personalized
            care in a warm and welcoming environment where residents
            are treated like family.
          </p>

          <p>
            With private rooms, home-cooked meals, nurse oversight,
            and 24-hour support, we focus on creating a safe and
            peaceful place that truly feels like home.
          </p>

          <div className="about-stats">

            <div className="stat-box">
              <h3>6</h3>
              <span>Residents Max</span>
            </div>

            <div className="stat-box">
              <h3>1:3</h3>
              <span>Caregiver Ratio</span>
            </div>

            <div className="stat-box">
              <h3>24/7</h3>
              <span>Care Support</span>
            </div>

          </div>

          <button className="about-btn">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}
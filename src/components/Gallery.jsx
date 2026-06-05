import "./Gallery.css";

const images = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118",
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-header">
        <span>OUR GALLERY</span>

        <h2>
          Take A Look Inside Our Home
        </h2>

        <p>
          Explore the warm, welcoming spaces where residents
          enjoy comfort, companionship, and quality care.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
            />

            <div className="gallery-overlay">
              <h3>Angel's Haven Care</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
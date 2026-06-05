import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Angel's Haven Care
      </div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="nav-btn">
        Reserve Your Spot
      </a>
    </nav>
  );
}
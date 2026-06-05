import "./Comfort.css";
import {
  FaBed,
  FaUtensils,
  FaHeart,
  FaUserNurse,
  FaHome,
  FaCheckCircle,
} from "react-icons/fa";

export default function Comfort() {
  const comforts = [
    {
      icon: <FaBed />,
      title: "Private Rooms",
      desc: "Comfortable and private living spaces designed for safety and relaxation.",
    },
    {
      icon: <FaUtensils />,
      title: "Home-Cooked Meals",
      desc: "Fresh, nutritious meals prepared daily with care and attention.",
    },
    {
      icon: <FaHeart />,
      title: "Personalized Care",
      desc: "Individualized support tailored to each resident's unique needs.",
    },
    {
      icon: <FaUserNurse />,
      title: "24-Hour Staff",
      desc: "Professional care and supervision available day and night.",
    },
    {
      icon: <FaHome />,
      title: "Family Environment",
      desc: "A warm and welcoming atmosphere where residents feel at home.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Move-In Availability",
      desc: "Flexible accommodations available when families need support.",
    },
  ];

  return (
    <section className="comfort-section">
      <div className="comfort-header">
        <span>WHY FAMILIES CHOOSE US</span>

        <h2>
          The Comfort Your Loved One Deserves
        </h2>

        <p>
          Compassionate care, personalized support,
          and a warm family-style environment.
        </p>
      </div>

      <div className="comfort-grid">
        {comforts.map((item, index) => (
          <div className="comfort-card" key={index}>
            <div className="comfort-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
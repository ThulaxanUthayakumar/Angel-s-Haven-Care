import "./WhyChooseUs.css";
import {
  FaHeart,
  FaShieldAlt,
  FaUserNurse,
  FaUsers
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaHeart />,
      title: "Compassionate Care",
      description:
        "We provide compassionate care in a family-style environment.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety",
      description:
        "Our team ensures every resident feels safe and secure.",
    },
    {
      icon: <FaUserNurse />,
      title: "Experience",
      description:
        "Our experienced team provides trusted care with compassion.",
    },
    {
      icon: <FaUsers />,
      title: "Activities",
      description:
        "Meaningful activities that bring joy every day.",
    },
  ];

  return (
    <section className="why-section">

      <div className="why-header">
        <span>WHY CHOOSE US</span>

        <h2>
          Why Families Trust Angel's Haven Care
        </h2>

        <p>
          Comfort, dignity, and peace of mind for every resident and family.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
}
import "./Services.css";
import {
  FaHome,
  FaUserFriends,
  FaPills,
  FaClock
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaHome />,
      title: "Assisted Living",
      subtitle: "Personalized Support for Everyday Living",
      description:
        "Providing personalized daily support, meals, supervision, and compassionate care in a comfortable home-like environment.",
    },
    {
      icon: <FaUserFriends />,
      title: "Resident Care",
      subtitle: "Compassionate Support and Attention",
      description:
        "Our dedicated caregivers provide daily assistance, companionship, and individualized care to help residents feel safe and valued.",
    },
    {
      icon: <FaPills />,
      title: "Pharmacy Support",
      subtitle: "Medication Management Assistance",
      description:
        "Safe and reliable medication support to promote resident health, wellness, and peace of mind.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Special Services",
      subtitle: "Care Whenever It's Needed",
      description:
        "Round-the-clock assistance and supervision designed to provide comfort, safety, and support.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span>OUR SERVICES</span>

        <h2>
          Personalized Care Designed Around Your Loved One
        </h2>

        <p>
          Compassionate support, professional care, and a warm
          family-style environment where residents can thrive.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <h4>{service.subtitle}</h4>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
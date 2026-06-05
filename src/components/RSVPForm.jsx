import "./RSVPForm.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function RSVPForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Reservation submitted successfully!");
          form.current.reset();
        },
        () => {
          alert("Something went wrong.");
        }
      );
  };

  return (
    <section className="rsvp-section" id="contact">
      <div className="rsvp-container">

        <div className="rsvp-content">
          <span>OPEN HOUSE RSVP</span>

          <h2>
            Accept Your Invitation
          </h2>

          <p>
            Fill out the form below and our team
            will follow up with open house details.
          </p>

          <div className="event-card">
            <h3>Cathedral City Open House</h3>

            <p>📅 June 16th</p>

            <p>🕒 5:00 PM – 8:00 PM</p>

            <p>
              📍 69920 Matisse Rd,
              Cathedral City, CA 92234
            </p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="rsvp-form"
        >
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <select name="attending_as">
            <option>
              Family Member
            </option>

            <option>
              Decision Maker
            </option>

            <option>
              Healthcare Professional
            </option>

            <option>
              Referral Partner
            </option>

            <option>
              Community Member
            </option>

            <option>
              Other
            </option>
          </select>

          <textarea
            rows="5"
            name="message"
            placeholder="Questions or Notes"
          ></textarea>

          <button type="submit">
            Reserve My Spot
          </button>
        </form>

      </div>
    </section>
  );
}
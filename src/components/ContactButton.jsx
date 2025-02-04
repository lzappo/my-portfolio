import "../styles/ContactButton.css";
import { useState, useEffect } from "react";

const ContactButton = () => {
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("emailSent")) {
      setEmailSent(true);
      localStorage.removeItem("emailSent"); // Remove the flag after showing
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem("emailSent", "true"); // Store the flag
  };

  return (
    <div className="contact-container">
      <a
        href="mailto:luizappitelli@gmail.com?subject=Let's%20Connect&body=Hi%20Lui,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
        className="btn secondary-btn"
        onClick={handleClick}
      >
        Get in Touch
      </a>
      {emailSent && (
        <p className="email-confirmation">
          ✅ Email Sent! Thanks for reaching out.
        </p>
      )}
    </div>
  );
};

export default ContactButton;

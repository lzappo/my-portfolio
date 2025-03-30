import { useState } from "react";
import emailjs from "emailjs-com";

import "../styles/ContactForm.css";

const SERVICE_ID = "service_vq76i99";
const TEMPLATE_ID = "template_eg972o8";
const USER_ID = "-Bu2_vcuXS3t0E2Gz";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending..");

    console.log("Sending payload:", formData);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setStatus("Message sent! ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error", error);
        setStatus("Something went wrong ❌");
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="connect-heading">Let's Connect</h3>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn primary-btn">
        Send Message
      </button>

      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default ContactForm;

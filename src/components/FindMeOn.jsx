import "../styles/FindMeOn.css";
import socialLinks from "@/data/socialLinks.jsx";

const FindMeOn = () => {
  return (
    <section className="find-me-section">
      <h2>Find Me On</h2>
      <p>Feel free to connect with me</p>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default FindMeOn;

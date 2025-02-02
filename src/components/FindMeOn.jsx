import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/FindMeOn.css";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/lzappo",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/yourusername",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/lzappo",
  },
];

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

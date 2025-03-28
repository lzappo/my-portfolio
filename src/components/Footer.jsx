import "../styles/Footer.css";
import socialLinks from "@/data/socialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          Designed and developed by Lui Zappitelli
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} LZ All rights reserved
        </div>

        <div className="footer-socials">
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
      </div>
    </footer>
  );
};

export default Footer;

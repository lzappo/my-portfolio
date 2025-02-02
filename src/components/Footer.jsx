import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/yourusername",
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
];

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

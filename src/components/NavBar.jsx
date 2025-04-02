import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome, FaUserAlt, FaLaptopCode, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import LZLogo from "@/assets/svg/LZLogo.svg?react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome className="nav-icon" />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt className="nav-icon" />,
    },
    {
      path: "/skills",
      name: "Skills",
      icon: <FaLaptopCode className="nav-icon" />,
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <FaProjectDiagram className="nav-icon" />,
    },
    {
      path: "/resume",
      name: "Resume",
      icon: <FaFileAlt className="nav-icon" />,
    },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo ">
        <LZLogo className="nav-logo" />
      </Link>

      <div className="navbar-menu">
        <button
          className={`navbar-toggle ${isOpen ? "open" : ""}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-label="Toggle navigation"
        >
          <div className="icon-wrapper">{isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}</div>
        </button>
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link className="nav-item" to={link.path} onClick={closeMenu}>
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

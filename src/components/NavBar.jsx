import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import LZLogo from "@/assets/svg/LZLogo.svg?react";
import navLinks from "@/data/navLinks.jsx";
import ThemeToggle from "./ThemeToggle";

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

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

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

          <div className="navbar-content">
            <ul className={`nav-list ${isOpen ? "open" : ""}`}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link className="nav-item" to={link.path} onClick={closeMenu}>
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="theme-toggle-mobile">
                <ThemeToggle />
              </li>
            </ul>
            <div className="theme-toggle-desktop">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

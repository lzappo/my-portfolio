import { FaHome, FaUserAlt, FaLaptopCode, FaProjectDiagram, FaFileAlt } from "react-icons/fa";

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

export default navLinks;

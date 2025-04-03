import "../styles/TechMarquee.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiMacos,
  SiTypescript,
  SiVite,
  SiExpo,
  SiPrettier,
  SiChakraui,
  SiTailwindcss,
  SiVercel,
  SiApple,
  SiAndroid,
} from "react-icons/si";
import useIsMobile from "@/hooks/useIsMobile";

const techStack = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaReact className="react-native-icon" />, name: "React Native" },
  { icon: <SiApple />, name: "iOS" },
  { icon: <SiAndroid />, name: "Android" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <VscVscode />, name: "VS Code" },
  { icon: <SiVite />, name: "Vite" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiExpo />, name: "Expo" },
  { icon: <SiPrettier />, name: "Prettier" },
  { icon: <SiChakraui />, name: "Chakra" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <SiMacos />, name: "MacOS" },
];

const TechMarquee = () => {
  const isMobile = useIsMobile();

  const repeatedStack = Array(isMobile ? 2 : 4)
    .fill(techStack)
    .flat();

  const animationDuration = isMobile ? "40s" : "120s";

  return (
    <section className="tech-marquee-section">
      <h3 className="tech-marquee-title">⚙️ Tech Stack</h3>
      <div className="tech-marquee" style={{ "--duration": animationDuration }}>
        <div className="marquee-track">
          {repeatedStack.map((tech, index) => (
            <div className="marquee-icon" key={index} title={tech.name}>
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;

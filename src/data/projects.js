import worldImage from "../assets/world-image.svg";
import DoneWithIt from "../assets/DoneWithIt.png";

const projects = [
  {
    title: "Moshify",
    description: "A website built with just HTML and CSS alongside Mosh.",
    image: "https://moshifyxlzappo.vercel.app/images/banner@2x.webp",
    github: "https://github.com/lzappo/moshifyxlzappo",
    demo: "https://moshifyxlzappo.vercel.app",
    tags: ["HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Game-Hub",
    description: "An intensive videogame database with filtering abilities",
    image: "https://lui-game-hub.vercel.app/assets/logo-ff4914e6.webp",
    github: "https://github.com/lzappo/game-hub",
    demo: "https://lui-game-hub.vercel.app/",
    tags: ["React", "TypeScript", "Chakra", "Rawg API"],
  },
  {
    title: "My-Portfolio",
    description: "This portfolio project :)",
    image: worldImage,
    github: "https://github.com/lzappo/my-portfolio",
    demo: "https://luizappitelli.vercel.app",
    tags: ["React", "JavaScript", "Custom Hooks", "Framer Motion", "Responsive"],
  },
  {
    title: "DoneWithIt",
    description: "A mobile app that serves as a marketplace when you are simply done with it!",
    image: DoneWithIt,
    github: "https://github.com/lzappo/DoneWithIt",
    tags: ["React Native", "JavaScript", "API calls", "Expo", "Mobile App"],
  },
  {
    title: "Moon Poker",
    description: "A mobile poker app where I work as a Front-End Developer.",
    image:
      "https://play-lh.googleusercontent.com/TuPY8cPXBtfcOMRdDH-l5SMLu3fYrXpjOwlb4tzG1EGX6i4jnOzuN3EyR3P9dVPYnqw",
    tags: ["React Native", "JavaScript", "Mobile App"],
  },
];

export default projects.reverse();

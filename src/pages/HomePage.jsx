import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.svg";
import devImage from "../assets/developer-image.svg";
import { motion } from "framer-motion";
import "../styles/HomePage.css";
import FindMeOn from "@/components/FindMeOn";
import ContactButton from "@/components/ContactButton";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <FindMeOn />
    </>
  );
};

export default HomePage;

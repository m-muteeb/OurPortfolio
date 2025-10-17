// src/components/Hero.js
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import codenexslogo from "../assets/images/mylogo.png";
import "../scss/_maincss.css";
import Header from "./Header";

const Hero = () => {
  const skills = [
    "Business Solutions",
    "AI Solutions",
    "Web Solutions",
    "Software Solutions",
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentSkillText, setCurrentSkillText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Typing animation
  useEffect(() => {
    const typeSkill = () => {
      const currentSkill = skills[currentSkillIndex];
      if (charIndex < currentSkill.length) {
        setCurrentSkillText((prev) => prev + currentSkill[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
          setCurrentSkillText("");
          setCharIndex(0);
        }, 1500);
      }
    };
    const timeout = setTimeout(typeSkill, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, currentSkillIndex, skills]);

  // Scroll animation for orbs
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (position / height) * 100 : 0;
      setScrollPosition(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryColor = "#3eeabf";
  const secondaryColor = "#6A5ACD";
  const movementFactor = 1.8;

  const heroSectionStyle = {
    minHeight: "100vh",
    backgroundColor: "#050816",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  };

  const orbBase = {
    position: "absolute",
    borderRadius: "50%",
    filter: "blur(140px)",
    zIndex: 1,
    transition: "transform 0.8s ease-out",
  };

  const orb1 = {
    ...orbBase,
    width: "380px",
    height: "380px",
    background: primaryColor,
    opacity: 0.35,
    top: "-120px",
    right: "-10%",
    transform: `translateX(calc(-${scrollPosition * movementFactor}%))`,
  };

  const orb2 = {
    ...orbBase,
    width: "420px",
    height: "420px",
    background: secondaryColor,
    opacity: 0.25,
    bottom: "-180px",
    left: "-15%",
    transform: `translateX(calc(${scrollPosition * movementFactor}%))`,
  };

  return (
    <div className="hero-section" id="hero" style={heroSectionStyle}>
      <div style={orb1}></div>
      <div style={orb2}></div>
      <Header />

      <div className="hero-container">
        {/* LOGO + ANIMATION */}
        <div className="logo-animation-container">
          <img
            src={codenexslogo}
            alt="CodeNexus Logo"
            className="hero-logo"
          />
          <div className="rotating-line line-1"></div>
          <div className="rotating-line line-2"></div>
          <div className="rotating-line line-3"></div>
        </div>

        {/* TEXT CONTENT */}
        <div className="hero-text">
          <h1 className="hero-title">Welcome to CodeNexus</h1>
          <h2 className="hero-subtitle">
            We specialize in <span className="highlight">{currentSkillText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-desc">
            Driving innovation and delivering cutting-edge solutions tailored to your business needs.
            From robust web applications to intelligent AI systems — we build the future together.
          </p>
          <a href="#contact" style={{ textDecoration: "none" }}>
            <Button className="hero-btn">Start Your Project</Button>
          </a>
        </div>
      </div>

      <style>
        {`
        /* GENERAL */
        .hero-container {
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 40px;
          gap: 50px;
          z-index: 2;
          position: relative;
        }

        /* LOGO + ORBS */
        .logo-animation-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 350px;
          height: 350px;
          margin-right: 50px;
        }

        .hero-logo {
          width: 220px;
          height: auto;
          position: relative;
          z-index: 10;
        }

        .rotating-line {
          position: absolute;
          border-radius: 50%;
          z-index: 5;
        }

        .line-1 {
          width: 260px;
          height: 260px;
          border: 1px solid ${primaryColor};
          opacity: 0.5;
          animation: spin 15s linear infinite;
        }

        .line-2 {
          width: 310px;
          height: 310px;
          border: 1px dashed ${secondaryColor};
          opacity: 0.35;
          animation: spinReverse 20s linear infinite;
        }

        .line-3 {
          width: 360px;
          height: 360px;
          border: 1px solid ${primaryColor};
          opacity: 0.2;
          animation: spin 25s linear infinite;
        }

        /* TEXT */
        .hero-text {
          flex: 1;
          text-align: left;
          max-width: 50%;
          padding-left: 50px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(45deg, ${primaryColor}, ${secondaryColor});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          font-weight: 400;
          color: #fff;
          margin-bottom: 30px;
          min-height: 50px;
        }

        .highlight {
          color: ${primaryColor};
        }

        .cursor {
          animation: blink 0.7s infinite;
        }

        .hero-desc {
          color: #ccc;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .hero-btn {
          background: linear-gradient(45deg, ${primaryColor}, ${secondaryColor});
          color: #050816;
          border: none;
          padding: 15px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          margin-top: 30px;
          box-shadow: 0 4px 20px rgba(62, 234, 191, 0.3);
          transition: all 0.3s ease;
        }

        .hero-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(62, 234, 191, 0.5);
        }

        /* MOBILE RESPONSIVENESS */
        @media (max-width: 900px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
            padding: 20px;
            gap: 30px;
          }

          .logo-animation-container {
            order: -1;
            margin: 0 auto;
            width: 250px;
            height: 250px;
          }

          .hero-logo {
            width: 160px;
          }

          .line-1 {
            width: 200px;
            height: 200px;
          }

          .line-2 {
            width: 240px;
            height: 240px;
          }

          .line-3 {
            width: 280px;
            height: 280px;
          }

          .hero-text {
            max-width: 100%;
            padding: 0 10px;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .hero-subtitle {
            font-size: 1.4rem;
          }

          .hero-desc {
            font-size: 1rem;
          }
        }

        /* ANIMATIONS */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}
      </style>
    </div>
  );
};

export default Hero;

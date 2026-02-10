import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import codenexslogo from "../assets/images/mylogo.png";
import "../scss/_hero_new.scss";
import Header from "./Header";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = [
    "Business Solutions",
    "AI Integration",
    "Web Development",
    "Software Architecture",
  ];

  const containerRef = useRef(null);

  // Typing effect logic
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentSkill = skills[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentSkill) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % skills.length);
      } else {
        setDisplayText(
          currentSkill.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, skills]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Inline styles
  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#0f172a',
    letterSpacing: '-0.5px',
    fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
  };

  const gradientStyle = {
    background: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline'
  };

  const subtitleStyle = {
    color: '#475569',
    fontWeight: 300,
    fontFamily: "'Inter', sans-serif"
  };

  const typingStyle = {
    color: '#0ea5e9',
    fontWeight: 600
  };

  const descStyle = {
    color: '#64748b',
    maxWidth: '600px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '1.05rem',
    lineHeight: 1.7
  };

  return (
    <div className="hero-wrapper" ref={containerRef} id="hero">
      <div className="hero-background">
        <div className="grid-overlay" />
      </div>

      <Header />

      <Container className="hero-content position-relative">
        <Row className="align-items-center min-vh-100 pt-5">
          <Col lg={7} className="text-content text-center text-lg-start mb-5 mb-lg-0 pt-5 pt-lg-0">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.15 }}
            >
              <motion.p
                variants={fadeIn}
                transition={{ duration: 0.4 }}
                style={{
                  color: '#0ea5e9',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                Enterprise Software Solutions
              </motion.p>

              <motion.h1
                variants={fadeIn}
                transition={{ duration: 0.5 }}
                style={titleStyle}
                className="mb-4"
              >
                Building the <br />
                <span style={gradientStyle}>Digital Future</span>
              </motion.h1>

              <motion.h2
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h4 mb-4"
                style={subtitleStyle}
              >
                Expertise in{" "}
                <span style={typingStyle}>
                  {displayText}
                  <span style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1em',
                    background: '#0ea5e9',
                    marginLeft: '2px',
                    animation: 'blink 1s step-end infinite'
                  }}>|</span>
                </span>
              </motion.h2>

              <motion.p
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-5 pe-lg-5 mx-auto mx-lg-0"
                style={descStyle}
              >
                We are a leading software development company specializing in
                enterprise-grade web applications, artificial intelligence solutions,
                and custom software architecture.
              </motion.p>

              <motion.div
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="cta-group d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap"
              >
                <motion.a
                  href="#contact"
                  className="hero-btn-primary"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Start Your Project
                </motion.a>
                <motion.a
                  href="#Projects"
                  className="hero-btn-outline"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  View Our Work
                </motion.a>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={5} className="visual-content text-center position-relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="logo-container"
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="logo-glow-effect"
                animate={{
                  boxShadow: [
                    '0 20px 50px rgba(14, 165, 233, 0.15)',
                    '0 25px 60px rgba(14, 165, 233, 0.25)',
                    '0 20px 50px rgba(14, 165, 233, 0.15)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="ring ring-1" />
                <div className="ring ring-2" />
                <div className="ring ring-3" />
                <motion.img
                  src={codenexslogo}
                  alt="CodeNexus"
                  className="main-logo position-relative z-2"
                  loading="eager"
                  decoding="async"
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <motion.div
        className="scroll-indicator d-none d-md-flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </div>
  );
};

export default Hero;

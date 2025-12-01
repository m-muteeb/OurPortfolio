import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import codenexslogo from "../assets/images/mylogo.png";
import "../scss/_maincss.css";
import "../scss/_hero_new.scss"; // Import new SCSS
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
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 120 };
  const mouseX = useSpring(useTransform(scrollY, () => mousePosition.x * 50), springConfig);
  const mouseY = useSpring(useTransform(scrollY, () => mousePosition.y * 50), springConfig);

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

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <div className="hero-wrapper" ref={containerRef} id="hero">
      <div className="hero-background">
        <motion.div 
          className="orb orb-1"
          style={{ y: y1, x: mouseX }}
        />
        <motion.div 
          className="orb orb-2"
          style={{ y: y2, x: mouseY }}
        />
        <div className="grid-overlay"></div>
        <div className="stars"></div>
      </div>

      <Header />

      <Container className="hero-content position-relative">
        <Row className="align-items-center min-vh-100 pt-5">
          {/* Text Content */}
          <Col lg={7} className="text-content text-center text-lg-start mb-5 mb-lg-0 pt-5 pt-lg-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={itemVariants} className="display-title mb-4">
                Building the <br />
                <span className="gradient-text">Digital Future</span>
              </motion.h1>
              
              <motion.h2 variants={itemVariants} className="h3 text-light mb-4 fw-light">
                Expertise in{" "}
                <span className="typing-text">
                  {displayText}
                  <span className="cursor">|</span>
                </span>
              </motion.h2>

              <motion.p variants={itemVariants} className="lead text-gray mb-5 pe-lg-5 mx-auto mx-lg-0" style={{ maxWidth: "600px" }}>
                We transform complex challenges into elegant digital solutions. 
                From high-performance web applications to intelligent AI systems, 
                CodeNexus is your partner in technical innovation.
              </motion.p>

              <motion.div variants={itemVariants} className="cta-group d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
                <Button 
                  className="btn-primary-glow" 
                  size="lg"
                  href="#contact"
                >
                  Start Your Project
                </Button>
                <Button 
                  variant="outline-light" 
                  className="btn-outline-glass" 
                  size="lg"
                  href="#Projects"
                >
                  View Portfolio
                </Button>
              </motion.div>
            </motion.div>
          </Col>

          {/* Visual Content */}
          <Col lg={5} className="visual-content text-center position-relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
              className="logo-container"
            >
              <div className="logo-glow-effect">
                <motion.div 
                  className="ring ring-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="ring ring-2"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="ring ring-3"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <img 
                  src={codenexslogo} 
                  alt="CodeNexus" 
                  className="main-logo position-relative z-2"
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <motion.div 
        className="scroll-indicator d-none d-md-flex"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </div>
  );
};

export default Hero;

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/_about_new.scss";

// Importing images
import muteeb from '../assets/images/muteeb2 (1).png';
import usama from '../assets/images/us.jpg.png';
import rayyan from '../assets/images/ra.png';
import hadia from '../assets/images/ha.png';
import laiba from '../assets/images/laibanew.png';
import tauseef from '../assets/images/tauseefnew (2).png';
import zeeshan from '../assets/images/zeeshan2.png';
import zubair from '../assets/images/zubair_new.png';

// --- 3D Tilt Card Component for Leaders ---
const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  // Team Members Configuration
  // Tauseef is the Center Core
  const teamLead = { name: "Tauseef Haider", role: "Team Lead", img: tauseef };

  // Orbiting Members
  const orbitingMembers = [
    // Left Side
    { name: "Laiba Sarwar", role: "Business & HR", img: laiba, id: "left-inner" },
    { name: "Rayyan", role: "Full Stack", img: rayyan, id: "left-outer" },

    // Right Side
    { name: "Usama", role: "Frontend", img: usama, id: "right-inner" },
    { name: "Hadia Ajmal", role: "Designer", img: hadia, id: "right-outer" },

    // Bottom Center
    { name: "Hafiz Zubair", role: "Security", img: zubair, id: "bottom-center" },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="About" className="about-section">
      <div className="about-bg-effects">
        <div className="grid-lines"></div>
      </div>

      <Container className="position-relative z-2">

        {/* Section Header */}
        <div className="section-header text-center mb-5 pt-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-uppercase text-sky fw-bold letter-spacing-2 mb-2"
          >
            Who We Are
          </motion.p>
          <motion.h2
            className="display-4 fw-bold text-dark"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Leadership & <span className="text-gradient">Vision</span>
          </motion.h2>
          <div className="divider mx-auto"></div>
        </div>

        {/* --- Leaders Section (Cards) --- */}
        <Row className="g-4 justify-content-center mb-5 pb-5">
          {/* CEO */}
          <Col lg={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="h-100"
            >
              <TiltCard className="leader-card h-100">
                <div className="leader-content">
                  <div className="leader-header d-flex align-items-center gap-4 mb-4">
                    <div className="img-wrapper-small">
                      <img src={muteeb} alt="Muteeb Ramzan" className="leader-img" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="h3 text-dark fw-bold mb-1">Muteeb Ramzan</h3>
                      <p className="text-sky mb-0 text-uppercase small letter-spacing-1 fw-bold">Founder & CEO</p>
                    </div>
                  </div>
                  <p className="text-muted">
                    "My mission is to lead a team that builds scalable and meaningful software solutions. Whether it's a startup idea or a large-scale enterprise app, we put passion and precision into everything we do."
                  </p>
                  <div className="social-links-small mt-3">
                    <a href="https://www.linkedin.com/in/muteebramzan/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/m-muteeb" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </Col>

          {/* Advisor */}
          <Col lg={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="h-100"
            >
              <TiltCard className="leader-card h-100">
                <div className="leader-content">
                  <div className="leader-header d-flex align-items-center gap-4 mb-4">
                    <div className="img-wrapper-small">
                      <img src={zeeshan} alt="Dr. Zeeshan" className="leader-img" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="h3 text-dark fw-bold mb-1">Dr. M. Zeeshan Asif</h3>
                      <p className="text-sky mb-0 text-uppercase small letter-spacing-1 fw-bold">Chief Advisor</p>
                    </div>
                  </div>
                  <p className="text-muted">
                    "Innovation thrives at the intersection of academia and industry. My goal is to bridge this gap, guiding the talented team at Code Nexus with strategic insights rooted in deep technical knowledge."
                  </p>
                  <div className="social-links-small mt-3">
                    <a href="https://www.linkedin.com/in/muhammad-zeeshan-asif-922a5742/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://scholar.google.com/citations?hl=en&user=Gjx_oyUAAAAJ" target="_blank" rel="noreferrer"><i className="fas fa-graduation-cap"></i></a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </Col>
        </Row>

        {/* --- Team Solar System Section --- */}
        <div className="team-solar-wrapper mt-5 pt-4">
          <div className="section-header text-center mb-5">
            <h2 className="display-4 fw-bold text-dark">
              Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted">Experts powering your digital transformation</p>
            <div className="divider mx-auto"></div>
          </div>

          <div className="solar-system-container">
            {/* Center Core: Team Lead */}
            <div className="solar-core-wrapper">
              <div className="solar-core-avatar">
                <img src={teamLead.img} alt={teamLead.name} loading="lazy" />
              </div>
              <div className="core-info">
                <span className="name">{teamLead.name}</span>
                <span className="role">{teamLead.role}</span>
              </div>
            </div>

            {/* Orbital Rings */}
            <div className="orbit-ring ring-inner"></div>
            <div className="orbit-ring ring-outer"></div>

            {/* Orbiting Members */}
            {orbitingMembers.map((member, index) => (
              <div
                key={index}
                className={`solar-member member-${member.id}`}
              >
                <div className="member-avatar-wrapper">
                  <img src={member.img} alt={member.name} loading="lazy" />
                </div>
                <div className="member-info-tooltip">
                  <span className="name">{member.name}</span>
                  <span className="role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default About;
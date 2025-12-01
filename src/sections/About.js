import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/_about_new.scss"; // Import new SCSS

// Importing images
import muteeb from '../assets/images/muteeb2 (1).png';
import usama from '../assets/images/us.jpg.png';
import rayyan from '../assets/images/ra.png';
import hadia from '../assets/images/ha.png';
import abdulrehman from '../assets/images/abdulrehman.jpg';
import laiba from '../assets/images/laibanew.png';
import tauseef from '../assets/images/tauseefnew (2).png';
import zeeshan from '../assets/images/zeeshan2.png';
import zubair from '../assets/images/zubair_new.png';


// --- 3D Tilt Card Component ---
const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

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
  const teamMembers = [
    {
      name: "Muteeb Ramzan",
      role: "Founder & CEO",
      img: muteeb,
      desc: "Ai Driven Software Engineer leading the innovation",
      skills: ["Node.js", "Python", "SQL"]
    },
    {
      name: "Mr. Usama",
      role: "Frontend Developer",
      img: usama,
      desc: "Crafting beautiful and responsive user interfaces.",
      skills: ["React", "Vue", "CSS3"]
    },
    {
      name: "Mr. Tauseef Haider",
      role: "Team Lead",
      img: tauseef,
      desc: "Bridging the gap between business goals and tech.",
      skills: ["Agile", "Scrum", "Strategy"]
    },
    {
      name: "Mr. Hafiz Zubair",
      role: "Security Analyst",
      img: zubair,
      desc: "Identifying threats and vulnerabilities to protect and strengthen systems.",
      skills: ["Risk Assessment", "Threat Analysis", "Network Security"]
    },
    {
      name: "Mr. Rayyan",
      role: "Full Stack Developer",
      img: rayyan,
      desc: "Building end-to-end solutions with modern stacks.",
      skills: ["MERN", "Next.js", "AWS"]
    },
    {
      name: "Hadia Ajmal",
      role: "Graphic Designer",
      img: hadia,
      desc: "Visual storytelling through creative design.",
      skills: ["Figma", "Adobe XD", "Illustrator"]
    },
    {
      name: "Laiba Sarwar",
      role: "Business Developer & HR Manager",
      img: laiba,
      desc: "Driving business growth through client relationships and strategy.",
      skills: ["Sales", "HR", "Analytics"]
    },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="About" className="about-section">
      <div className="about-bg-effects">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="grid-lines"></div>
      </div>

      <Container className="position-relative z-2">

        <div className="section-header text-center mb-5 pt-5">
          <motion.h2
            className="display-4 fw-bold text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Leadership & <span className="text-gradient">Vision</span>
          </motion.h2>
          <div className="divider mx-auto"></div>
        </div>

        {/* --- Merged Founder & Advisor Section --- */}
        <Row className="g-4 justify-content-center mb-5 pb-5">
          {/* Founder */}
          <Col lg={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="h-100"
            >
              <TiltCard className="leader-card h-100">
                <div className="leader-content">
                  <div className="leader-header d-flex align-items-center gap-4 mb-4">
                    <motion.div
                      className="img-wrapper-small"
                      variants={floatAnimation}
                      animate="animate"
                    >
                      <img src={muteeb} alt="M. Muteeb Ramzan" className="leader-img" />
                      <div className="glow-ring"></div>
                    </motion.div>
                    <div>
                      <h3 className="h3 text-white fw-bold mb-1">M. Muteeb Ramzan</h3>
                      <p className="text-teal mb-0 text-uppercase small letter-spacing-1">Founder & CEO</p>
                    </div>
                  </div>
                  <p className="text-gray">
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
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="h-100"
            >
              <TiltCard className="leader-card h-100">
                <div className="leader-content">
                  <div className="leader-header d-flex align-items-center gap-4 mb-4">
                    <motion.div
                      className="img-wrapper-small"
                      variants={floatAnimation}
                      animate="animate"
                    >
                      <img src={zeeshan} alt="Dr. Muhammad Zeeshan Asif" className="leader-img" />
                      <div className="glow-ring ring-purple"></div>
                    </motion.div>
                    <div>
                      <h3 className="h3 text-white fw-bold mb-1">Dr. M. Zeeshan Asif</h3>
                      <p className="text-teal mb-0 text-uppercase small letter-spacing-1">Chief Advisor | PhD NUST</p>
                    </div>
                  </div>
                  <p className="text-gray">
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

        {/* --- Team Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-5"
        >
          <div className="section-header text-center mb-5">
            <h2 className="display-4 fw-bold text-white">
              Meet The <span className="text-gradient">Experts</span>
            </h2>
            <p className="text-gray">Our certified team delivering smart solutions</p>
            <div className="divider mx-auto"></div>
          </div>

          <Row className="g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div variants={fadeInUp}>
                  <TiltCard className="team-card-wrapper">
                    <div className="team-card-inner">
                      <div className="team-img-container">
                        <img src={member.img} alt={member.name} className="team-img" />
                        <div className="team-overlay"></div>
                      </div>

                      <div className="team-content">
                        <h4 className="text-white fw-bold mb-1">{member.name}</h4>
                        <p className="text-teal mb-2">{member.role}</p>

                        {/* Expanding Details */}
                        <div className="team-details">
                          <div className="separator"></div>
                          <p className="small text-gray mb-3">{member.desc}</p>
                          <div className="skills-badges">
                            {member.skills.map((skill, i) => (
                              <span key={i} className="skill-badge">{skill}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

      </Container>
    </section>
  );
};

export default About;
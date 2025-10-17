import React from 'react';
import { Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/_index.scss';

// Importing images
import muteeb from '../assets/images/Untitled design (2).png';
import usama from '../assets/images/us.jpg.png';
import rayyan from '../assets/images/ra.png';
import hadia from '../assets/images/ha.png';
import abdulrehman from '../assets/images/abdulrehman.jpg';
import noor from '../assets/images/noor.png';
import tauseef from '../assets/images/tauseef.png';
// NOTE: Add your advisor's image and update the path below
import zeeshan from '../assets/images/zeeshan2.png'; 

const FounderSection = () => {
  const teamMembers = [
    { name: "Mr. Abdul Rehman", role: "Software Developer", img: abdulrehman },
    { name: "Mr. Usama", role: "Frontend Developer", img: usama },
    { name: "Mr. Tauseef Haider", role: "Product Manager", img: tauseef },
    { name: "Mr. Rayyan", role: "Full Stack Developer", img: rayyan },
    { name: "Hadia Ajmal", role: "Graphic Designer", img: hadia },
    { name: "Noor Ali", role: "Google & Meta Ads Expert", img: noor },
    { name: "M. Muteeb Ramzan", role: <>Founder & CEO <br /> Web & Software Developer</>, img: muteeb },
  ];

  return (
    <div
      id="About"
      className="py-5 px-3"
      style={{
        backgroundColor: "#040711",
        color: "#f1f1f1",
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle, #08142c, #040711 70%)'
      }}
    >
      <div className="container">
        {/* ==================================================================== */}
        {/* CEO / Founder Section (UNCHANGED)                                  */}
        {/* ==================================================================== */}
        <h2
          className="section-title text-center mb-4 text-white"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "45px" }}
        >
          Our <span style={{ color: "green" }}><b>Founder</b></span>
        </h2>
        <Row gutter={[32, 32]} align="middle" justify="center" className="animate__animated animate__fadeInUp">
          <Col xs={24} md={10}>
            <div
              className="p-4 rounded-4 text-center shadow"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={muteeb}
                alt="MR. Muteeb"
                className="img-fluid rounded-circle shadow-lg mb-3"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
              <h4 className="fw-bold text-white">MR. Muhammad Muteeb</h4>
              <p className="text-light small mt-2">
                Helping Businesses Automate & Scale with Smart Web Solutions | Web Developer & Software Engineer | AI & JavaScript Expert | Certiport, SMIT & Cisco Certified
              </p>
              <div className="mt-5" style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                <a href="https://www.linkedin.com/in/muteebramzan/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-transform transform hover:scale-125">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/m-muteeb" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform transform hover:scale-125">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/muhammad_muteeb_ramzan/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-transform transform hover:scale-125">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.facebook.com/m.muteeb.ramzan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-transform transform hover:scale-125">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={24} md={14}>
            <div
              className="p-4 rounded-4 shadow"
              style={{
                background: "rgba(255, 255, 255, 0.07)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <h3 className="fw-bold text-white mb-3">Message from the CEO</h3>
              <p className="text-light">
                At <strong>Code Nexus</strong>, we don't just write code — we craft digital experiences that bring ideas to life. Every project we take on is more than just lines of JavaScript or pixels on a screen. It's a journey of innovation, collaboration, and impact.
                <br /><br />
                My mission is to lead a team that builds scalable and meaningful software solutions for modern problems. Whether it's a startup idea or a large-scale enterprise app, we put passion and precision into everything we do.
                <br /><br />
                Thank you for trusting us with your vision. We're here to turn it into reality.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* ==================================================================== */}
      {/* NEW CHIEF ADVISOR SECTION                                            */}
      {/* ==================================================================== */}
      <div className="container mt-5 pt-5">
        <h2
          className="section-title text-center mb-5 text-white"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "45px" }}
        >
          Our <span style={{ color: "green" }}><b>Chief Advisor</b></span>
        </h2>
        <Row gutter={[32, 32]} align="middle" justify="center" className="animate__animated animate__fadeInUp">
          {/* Flipped order for visual variety */}
          <Col xs={24} md={14}>
            <div
              className="p-4 rounded-4 shadow"
              style={{
                background: "rgba(255, 255, 255, 0.07)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                height: '100%' // Ensures cards are same height if content differs
              }}
            >
              <h3 className="fw-bold text-white mb-3">A Word from Our Advisor</h3>
              <p className="text-light">
                Innovation thrives at the intersection of academia and industry. My goal is to bridge this gap, guiding the talented team at <strong>Code Nexus</strong> with strategic insights rooted in deep technical knowledge and research.
                <br /><br />
                I am passionate about mentoring the next generation of engineers and developers, helping them transform complex challenges into elegant, impactful solutions. It is a privilege to advise a company so dedicated to excellence and forward-thinking technology. Together, we are not just building software; we are engineering the future.
              </p>
            </div>
          </Col>
          <Col xs={24} md={10}>
            <div
              className="p-4 rounded-4 text-center shadow"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "transform 0.3s ease",
                height: '100%'
              }}
            >
              <img
                src={zeeshan}
                alt="Dr. Muhammad Zeeshan Asif"
                className="img-fluid rounded-circle shadow-lg mb-3"
                style={{ width: "180px", height: "180px", objectFit: "cover", border: '3px solid green' }}
              />
              <h4 className="fw-bold text-white">Dr. Muhammad Zeeshan Asif </h4>
              <p className="text-light small mt-2">
                Chief Advisor at Code Nexus <br/>
               PhD NUST | Lecturer at UAF
              </p>
              <div className="mt-5" style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                <a href="https://www.linkedin.com/in/muhammad-zeeshan-asif-922a5742/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-transform transform hover:scale-125">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://scholar.google.com/citations?hl=en&user=Gjx_oyUAAAAJ&view_op=list_works&citft=1&citft=2&citft=3&email_for_op=muteebramzan3%40gmail.com&gmla=AH8HC4wfZAjxQanKE4ZLyg70I6bsTWLB3KI-dMbxWwR6zbH319PU5s4nd0dESh33-F8wl4tK5Ih5fsRnzm7teF6RN1WKMWS66qEDSmfaS6mj88bebMzWP6Z2qW5igPBGCKR2wSguHtqfYjMMJpwwR5S1OfNkBLHHjLLzZ84NuFzCzVz3fHVvTQmVfjeHJ_4Zp5GHh8Zd1AVA9x-wUA1V58ZRiqQbO5Tw2wWFDPAg7dg9vm3fgPEN" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-transform transform hover:scale-125">
                  <i className="fas fa-graduation-cap fa-2x"></i>
                </a>
                 <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-transform transform hover:scale-125">
                  <i className="fab fa-google-scholar fa-2x"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* ==================================================================== */}
      {/* NEW ELLIPTICAL "GALACTIC ORBIT" TEAM SECTION                       */}
      {/* ==================================================================== */}
      <div className="our-team-section mt-5 pt-5">
        <h2
          className="section-title text-center mb-5 text-white"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '45px' }}
        >
          Our Certified <span style={{ color: 'green' }}>Team</span> With
          <br />
          Smart Solutions
        </h2>

        {/* Desktop: Elliptical Orbit Layout */}
        <div className="team-galaxy-container">
          <div className="galaxy-core">
            CODE <span style={{ color: 'green' }}>NEXUS</span>
          </div>
          <div className="orbit-path"></div>
          {teamMembers.map((member, index) => {
            // --- Elliptical Path Calculations ---
            const angle = (2 * Math.PI / teamMembers.length) * index;
            const radiusX = 450; // Horizontal radius (wider)
            const radiusY = 220; // Vertical radius (shorter)
            const x = radiusX * Math.cos(angle);
            const y = radiusY * Math.sin(angle);

            const memberStyle = {
              position: 'absolute',
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: 'translate(-50%, -50%)'
            };

            return (
              <div className="team-member-node" style={memberStyle} key={member.name}>
                <img src={member.img} alt={member.name} className="team-member-img" />
                <div className="team-member-info">
                  <h5 className="team-member-name">{member.name}</h5>
                  <p className="team-member-role">{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Mobile/Tablet: Grid Layout as a fallback for smaller screens */}
        <div className="team-grid-container-mobile">
            {teamMembers.map((member) => (
                  <div className="team-member-card" key={member.name}>
                    <img src={member.img} alt={member.name} className="team-member-img" />
                    <div className="team-member-info">
                    <h5 className="team-member-name">{member.name}</h5>
                    <p className="team-member-role">{member.role}</p>
                    </div>
                  </div>
            ))}
        </div>

      </div>

      {/* ==================================================================== */}
      {/* CSS for the new Team Section                                         */}
      {/* ==================================================================== */}
      <style>{`
        /* --- Desktop Elliptical Layout --- */
        .team-galaxy-container {
          position: relative;
          width: 1100px;
          height: 600px;
          margin: 60px auto;
          display: block; /* Visible on desktop */
        }

        .galaxy-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-size: 2.5rem;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          text-align: center;
          letter-spacing: 2px;
          text-shadow: 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1);
          z-index: 10;
        }

        .orbit-path {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 900px;  /* 2 * radiusX */
          height: 440px; /* 2 * radiusY */
          margin-top: -220px;  /* -radiusY */
          margin-left: -450px; /* -radiusX */
          border: 2px solid rgba(29, 184, 228, 0.5);
          border-radius: 50%; /* Creates an ellipse on a non-square element */
          box-shadow: 0 0 25px rgba(29, 184, 228, 0.5), inset 0 0 25px rgba(29, 184, 228, 0.3);
          animation: rotateGalaxy 90s linear infinite;
        }
        
        .team-member-node {
          width: 140px;
          text-align: center;
          z-index: 5;
          transition: transform 0.3s ease, z-index 0s 0.1s;
        }

        .team-member-node:hover {
          transform: translate(-50%, -50%) scale(1.15) !important; /* Keep translate for centering */
          z-index: 20;
        }
        
        .team-member-node .team-member-img { /* Increased specificity */
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #1db8e4;
          box-shadow: 0 0 15px rgba(29, 184, 228, 0.7);
          transition: all 0.4s ease;
          background-color: #040711;
          margin: 0 auto 10px auto;
        }

        .team-member-node:hover .team-member-img {
          box-shadow: 0 0 25px #fff, 0 0 45px #1db8e4;
          border-color: #fff;
        }

        .team-member-info { color: #f1f1f1; }
        .team-member-name { font-size: 1rem; font-weight: bold; color: #fff; margin-bottom: 2px; }
        .team-member-role { font-size: 0.8rem; color: #a1cbe6; }

        @keyframes rotateGalaxy {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Hide mobile grid on desktop */
        .team-grid-container-mobile {
            display: none;
        }

        /* --- Responsive Adjustments --- */
        @media (max-width: 1200px) {
            .team-galaxy-container { width: 900px; }
            .orbit-path { width: 700px; height: 340px; margin-top: -170px; margin-left: -350px; }
            /* JS recalculation would be needed for perfect re-positioning, so we hide it soon */
        }
        
        /* On tablets and mobile, switch to a grid layout */
        @media (max-width: 992px) {
            .team-galaxy-container {
                display: none; /* Hide the complex orbit layout */
            }
            .team-grid-container-mobile {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 40px 20px;
                padding: 0 20px;
            }
            .team-member-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                padding: 20px;
                border-radius: 15px;
                text-align: center;
                width: 250px;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .team-member-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            }
            .team-member-card .team-member-img { /* Specificity for grid card image */
                width: 120px;
                height: 120px;
                margin: 0 auto 15px auto;
                border: 4px solid #1db8e4;
                box-shadow: 0 0 15px rgba(29, 184, 228, 0.7);
            }
        }
      `}</style>
    </div>
  );
};

export default FounderSection;
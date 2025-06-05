import React from 'react';
import { Row, Col, Card } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/_index.scss';

import muteeb from '../assets/images/mu.png';
import usama from '../assets/images/us.jpg.png';
import rayyan from '../assets/images/ra.png';
import hadia from '../assets/images/ha.png';
import vectorimg from '../assets/images/Vector.png'

const FounderSection = () => {
  return (
    <div
    id = "About"
      className="py-5 px-3"
      style={{
      backgroundColor: "#040711",
      color: '#f1f1f1',
      }}
    >
      <div className="container">
         <h2
  className="section-title text-center mb-4 text-white"
  style={{
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '45px'
  }}
>
  Our  <span style={{ color: 'green' }}><b>Founder</b></span>
  <br />

</h2>

        <Row gutter={[32, 32]} align="middle" justify="center" className="animate__animated animate__fadeInUp">
          {/* Founder Image Card */}
          <Col xs={24} md={10}>
            <div
              className="p-4 rounded-4 text-center shadow"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'transform 0.3s ease',
              }}
            >
              <img
                src={muteeb}
                alt="MR. Muteeb"
                className="img-fluid rounded-circle shadow-lg mb-3"
                style={{ width: '180px', height: '180px', objectFit: 'cover' }}
              />
              <h4 className="fw-bold text-white">MR. Muhammad Muteeb</h4>
              <p className="text-light small mt-2">
                React JS Developer | Full Stack Engineer | UI/UX Enthusiast | DevOps Practitioner | API Designer | TypeScript Expert | Cloud Integrator | Agile Team Lead | Open Source Contributor
              </p>
            </div>
          </Col>

          {/* CEO Message Card */}
          <Col xs={24} md={14}>
            <div
              className="p-4 rounded-4 shadow"
              style={{
                background: 'rgba(255, 255, 255, 0.07)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <h3 className="fw-bold text-white mb-3">Message from the CEO</h3>
              <p className="text-light">
                At <strong>Code Nexus</strong>, we don't just write code — we craft digital experiences that bring ideas to life.
                Every project we take on is more than just lines of JavaScript or pixels on a screen. It's a journey of innovation, collaboration, and impact.
                <br /><br />
                My mission is to lead a team that builds scalable and meaningful software solutions for modern problems. Whether it's a startup idea or a large-scale enterprise app, we put passion and precision into everything we do.
                <br /><br />
                Thank you for trusting us with your vision. We're here to turn it into reality.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* Team Section */}
   <div
  className="our-team-section mt-5 pt-5"
 
>
  
  

  
        <h2
  className="section-title text-center mb-4 text-white"
  style={{
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '45px'
  }}
>
  Our Certified <span style={{ color: 'green' }}>Team</span> With
  <br />
  Smart Solutions
</h2>

       <Row gutter={[32, 32]} justify="center">
  {/* Team Member 1 */}
  <Col xs={24} sm={12} md={8}>
    <Card
      hoverable
      className="team-card"
      cover={<img alt="Usama" src={usama} className="team-image" />}
      bordered={false}
      bodyStyle={{ padding: "20px" }}
    >
      <h4 className="team-name">Mr. Usama</h4>
      <p className="team-title team-role">Frontend Developer</p>
      <p className="team-intro">
        A passionate Frontend Developer skilled building modern, responsive,
        and interactive web applications using React and modern UI frameworks.
      </p>
    </Card>
  </Col>

  {/* Team Member 2 */}
  <Col xs={24} sm={12} md={8}>
    <Card
      hoverable
      className="team-card"
      cover={<img alt="Rayyan" src={rayyan} className="team-image" />}
      bordered={false}
      bodyStyle={{ padding: "20px" }}
    >
      <h4 className="team-name">Mr. Rayyan</h4>
      <p className="team-title team-role">Full Stack Developer</p>
      <p className="team-intro">
        Experienced Full Stack Developer with expertise in scalable backend
        systems, clean APIs, and interactive frontend technologies.
      </p>
    </Card>
  </Col>

  {/* Team Member 3 */}
  <Col xs={24} sm={12} md={8}>
    <Card
      hoverable
      className="team-card"
      cover={<img alt="Hadia Graphic" src={hadia} className="team-image" />}
      bordered={false}
      bodyStyle={{ padding: "20px" }}
    >
      <h4 className="team-name">Hadia Ajmal</h4>
      <p className="team-title team-role">Graphic Designer</p>
      <p className="team-intro">
        A creative Graphic Designer with a passion for visual storytelling,
        brand identity, and user-centric design. Skilled in crafting
        engaging visuals, UI mockups
      </p>
    </Card>
  </Col>

  <style>{`
    .team-card {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(15px);
      border-radius: 20px;
      border: 1.5px solid rgba(255, 255, 255, 0.25);
      box-shadow: 0 15px 40px rgba(29, 184, 228, 0.25);
      overflow: visible;
      position: relative;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
      color: #e0f7ff;
      min-height: 420px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    .team-card:hover {
      transform: translateY(-15px) scale(1.05);
      box-shadow: 0 25px 60px rgba(29, 184, 228, 0.7);
      background: rgba(255, 255, 255, 0.15);
    }

    .team-image {
      width: 100%;
      height: 180px;  /* Reduced height for elegant banner look */
      object-fit: cover;
      border-radius: 20px 20px 0 0;
      filter: brightness(0.95) saturate(1.1);
      transition: filter 0.4s ease;
      position: relative;
      animation: gentleFloat 5s ease-in-out infinite;
      box-shadow: 0 8px 20px rgba(29, 184, 228, 0.25);
      z-index: 1;
    }

    .team-card:hover .team-image {
      filter: brightness(1) saturate(1.2);
      animation-play-state: paused;
    }

    

    .team-name {
      font-weight: 800;
      font-size: 1.6rem;
      margin-top: 20px;
      color: #1db8e4;
      text-shadow: 0 0 12px #1db8e4;
      letter-spacing: 1px;
    }

    .team-role {
      font-size: 1.1rem;
      color: #a1cbe6;
      margin-bottom: 14px;
      font-style: italic;
      letter-spacing: 0.8px;
    }

    .team-intro {
      font-size: 1rem;
      line-height: 1.7;
      color:rgb(255, 255, 255);
      font-weight: 300;
      flex-grow: 1;
      min-height: 95px;
    }

    /* Enhanced mirror reflection effect */
    .team-card::after {
      content: "";
      position: absolute;
      bottom: -105%;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: 20px;
      filter: blur(12px) brightness(0.4) saturate(0.7);
      opacity: 0.25;
      transform: scaleY(-1);
      pointer-events: none;
      z-index: 0;
      animation: reflectionWave 6s ease-in-out infinite;
    }

    /* Smooth fade-in animation */
    .team-card {
      opacity: 0;
      transform-origin: center bottom;
      animation: fadeInUp 0.7s forwards;
    }
    .team-card:nth-child(1) {
      animation-delay: 0.1s;
    }
    .team-card:nth-child(2) {
      animation-delay: 0.3s;
    }
    .team-card:nth-child(3) {
      animation-delay: 0.5s;
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      from {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
    }

    /* Mirror reflection subtle wave animation */
    @keyframes reflectionWave {
      0%, 100% {
        transform: scaleY(-1) translateX(0);
        opacity: 0.25;
      }
      50% {
        transform: scaleY(-1) translateX(10px);
        opacity: 0.3;
      }
    }
  `}</style>
</Row>

      </div>
    </div>
  );
};

export default FounderSection;

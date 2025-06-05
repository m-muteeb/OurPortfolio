import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Navbar, Nav } from 'react-bootstrap';
import { InfoCircleOutlined, AppstoreAddOutlined, FundProjectionScreenOutlined, MailOutlined } from '@ant-design/icons';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import '../scss/_home.scss';
import img from "../assets/images/logo.png";

const LandingPage = () => {
  const skills = [
    'Full-Stack Development', 
    'Custom Software Solutions', 
    'Web & Mobile Apps',  
    
    'DevOps & Automation'
  ];
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to track navbar toggle

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prevSkill) => (prevSkill + 1) % skills.length);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle the closing of the navbar when a link is clicked (for mobile screens)
  const handleLinkClick = () => {
    setIsNavbarOpen(false); // Close the navbar
  };

  return (
    <div className="landing-page" id="Hero">
      <Navbar
        expand="lg"
        className={`navbar-custom fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}
      >
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setIsNavbarOpen(!isNavbarOpen)} // Toggle navbar open state
        />
        <Navbar.Collapse id="basic-navbar-nav" in={isNavbarOpen}>
          <Nav className="mx-auto">
            <Nav.Link href="#About" className="nav-link" onClick={handleLinkClick}>
              <InfoCircleOutlined /> About
            </Nav.Link>
            <Nav.Link href="#Projects" className="nav-link" onClick={handleLinkClick}>
              <FundProjectionScreenOutlined /> Projects
            </Nav.Link>
            <Nav.Link href="#Expertise" className="nav-link" onClick={handleLinkClick}>
              <AppstoreAddOutlined /> Services
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link" onClick={handleLinkClick}>
              <MailOutlined /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="intro-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10">
              {/* Logo Image above the text */}
              <div className="logo-container mb-4">
                <img src={img} alt="Code Nexus Logo" className="logo-image" />
              </div>

              <h1 className="intro-name">Code Nexus</h1>
              <h2 className="intro-skill">{skills[currentSkill]}</h2>
              <Button
                type="primary"
                shape="round"
                size="large"
                className="contact-button"
                href="#contact"
              >
                HAVE A PROJECT?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

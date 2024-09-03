import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Navbar, Nav } from 'react-bootstrap';
import { HomeOutlined, InfoCircleOutlined, AppstoreAddOutlined, FundProjectionScreenOutlined, MailOutlined } from '@ant-design/icons';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import '../scss/_home.scss';

const LandingPage = () => {
  const skills = ['Web Developer', 'JavaScript Enthusiast', 'React Specialist', 'UI/UX Designer'];
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="landing-page" id='Hero'>
      <Navbar
        expand="lg"
        className={`navbar-custom fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}
      >
        <Navbar.Brand href="#home" className="brand">M.R</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#Hero">
              <HomeOutlined /> Home
            </Nav.Link>
            <Nav.Link href="#About">
              <InfoCircleOutlined /> About
            </Nav.Link>
            <Nav.Link href="#Projects">
              <FundProjectionScreenOutlined /> Portfolio
            </Nav.Link>
            <Nav.Link href="#Expertise">
              <AppstoreAddOutlined /> Expertise
            </Nav.Link>
            <Nav.Link href="#contact">
              <MailOutlined /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="intro-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10">
              <h1 className="intro-name">I am M. Muteeb Ramzan</h1>
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

              <div className="social-icons mt-4">
                <a href="https://github.com/miangmuteeb" target="_blank" rel="noopener noreferrer">
                  <GithubOutlined />
                </a>
                <a href="https://www.linkedin.com/in/m-muteeb-ramzan-99b489283/" target="_blank" rel="noopener noreferrer">
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

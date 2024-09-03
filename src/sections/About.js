import React from 'react';
import { Row, Col, Image } from 'antd';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/_index.scss'; // Assuming you have some custom CSS
import myImage from '../assets/images/WhatsApp_Image_2023-12-09_at_11.02.51_5e299b08-removebg-preview.png';
import resumePdf from '../assets/images/Resume.pdf'; // Import the PDF

// DownloadButton component
const DownloadButton = () => {
  const handleDownload = () => {
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      className="contact-button btn w-100"
      onClick={handleDownload}
    >
      Download Resume
    </button>
  );
};

// AboutMe component
const AboutMe = () => {
  return (
    <div className="container about-me" id='About'>
      <Row>
        <Col xs={24} md={8} className="left-section">
          <div className="profile-image text-center mb-4">
            <Image
              width={200}
              src={myImage}
              alt="Profile"
              className="rounded"
            />
          </div>
          <div className="personal-info mb-4">
            <h4 className='text-center'>Name: Muhammad Muteeb Ramzan</h4>
            <p className='text-center'><b>Profile:</b> BSCS Student at Agriculture University, SMIT Student Internee at BV Logics Hub</p>
            <p className='text-center'>Email: <a href="mailto:muteebrmazan3@gmail.com">muteebrmazan3@gmail.com</a></p>
            <p className='text-center'>Phone/WhatsApp: +923096829046</p>
            <DownloadButton />
          </div>
        </Col>
        <Col xs={24} md={16} className="right-section">
          <div className="about-me-content">
            <h2>About Me</h2>
            <p>
              As a dedicated student at <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Agriculture University of Faisalabad</span>, majoring in <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>BS Computer Science</span>, and an enthusiastic web and app development student at <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>SMIT</span>, I have a unique blend of expertise in both modern sciences and technology.
            </p>
            <p>
              My academic journey has equipped me with a solid foundation in computer science principles, while my technical training has honed my skills in web and app development.
            </p>
            <p>
              During my internship at <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>BV Logics</span>, I gained hands-on experience in developing and implementing innovative software solutions. My role involved collaborating with a dynamic team to design and deploy web applications, troubleshoot issues, and ensure high-quality code delivery.
            </p>
            <p>
              I am passionate about leveraging technology to address modern challenges and enhance productivity. My goal is to integrate my dual expertise in science and technology to create impactful solutions that drive growth and efficiency in the IT sector.
            </p>
            <p>
              I’m eager about harnessing technology to tackle contemporary challenges and boost productivity. <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>My aim is to blend my expertise in both science and technology</span> to develop innovative solutions that drive growth and efficiency in the IT industry.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;

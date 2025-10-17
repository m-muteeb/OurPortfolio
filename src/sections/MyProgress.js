import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { CheckCircleOutlined, TeamOutlined, TrophyOutlined } from '@ant-design/icons';

// Import SCSS for this component
import '../scss/_progress.scss';

// Import images
import backgroundImage from '../assets/images/progress.webp';
import badge1 from '../assets/images/Achievements Section.png';
import eduLogo from '../assets/images/edunexus.png';
import healthLogo from '../assets/images/health (2).png';

const Progress = () => {
  // The counter animation effect remains the same
  useEffect(() => {
    const counters = document.querySelectorAll('.counter-value');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 100;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  const statsData = [
    { icon: <CheckCircleOutlined />, target: 14, label: 'Projects Delivered' },
    { icon: <TeamOutlined />, target: 10, label: 'Satisfied Clients' },
    { icon: <TrophyOutlined />, target: 26, label: 'Strategic Consultations' },
  ];

  const venturesData = [
    { logo: eduLogo, title: 'EduNexus', description: 'Innovating education through technology and smart solutions.' },
    { logo: healthLogo, title: 'HealthNexus', description: 'Revolutionizing healthcare with data-driven applications.' },
  ];

  return (
    <div
      className="corporate-progress-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="section-overlay"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Journey of Impact & Innovation</h2>
          <p className="section-subtitle">
            We transform vision into reality through dedication, expertise, and measurable results. 
            Our growth is a testament to the trust our partners place in us.
          </p>
        </div>

        <Row gutter={[48, 48]} align="top">
          {/* Left Column: Stats and Narrative */}
          <Col xs={24} lg={12} className="narrative-column">
            <h3 className="column-title">By The Numbers</h3>
            <div className="stats-container">
              {statsData.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <span className="counter-value" data-target={stat.target}>0</span>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="narrative-text">
              Each number represents a story of a challenge solved, a business empowered, and a partnership forged. We are proud of our progress but remain focused on the future, constantly pushing boundaries to deliver exceptional value and drive success for our clients.
            </p>
          </Col>

          {/* Right Column: Achievements and Ventures */}
          <Col xs={24} lg={12} className="proof-column">
            <div className="achievements-container">
              <h3 className="column-title">Awards & Recognition</h3>
              <img src={badge1} alt="Achievement Badge" className="achievement-badge" />
            </div>

            <div className="ventures-container">
              <h3 className="column-title">Our Flagship Ventures</h3>
              <Row gutter={[24, 24]}>
                {venturesData.map((venture, index) => (
                  <Col xs={24} md={12} key={index}>
                    <div className="venture-card">
                      <img src={venture.logo} alt={`${venture.title} Logo`} className="venture-logo" />
                      <h4 className="venture-title">{venture.title}</h4>
                      <p className="venture-description">{venture.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Progress;
// Progress.js
import React, { useEffect } from 'react';
import '../scss/_progress.scss';
import { Col, Row } from 'antd';
import { CheckCircleOutlined, CalendarOutlined, TrophyOutlined } from '@ant-design/icons';
import backgroundImage from '../assets/images/progress.webp'; // Import your background image

const Progress = () => {
  useEffect(() => {
    // Function to animate the counters
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 200; // Adjust the increment for smoother or faster animation

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10); // Adjust the timeout for smoother or faster animation
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className="progress-container mt-2" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="blue-overlay">
        <Row justify="center" align="middle" className="progress-row">
          <Col className="progress-item">
            <CheckCircleOutlined className="progress-icon" />
            <h2 className="counter" data-target="14">+</h2>
            <p className='text-white'>PROJECTS COMPLETED</p>
          </Col>
          <Col className="progress-item">
            <CalendarOutlined className="progress-icon" />
            <h2 className="counter" data-target="1">+</h2>
            <p className='text-white'>YEARS OF EXPERIENCE</p>
          </Col>
         
          <Col className="progress-item">
            <TrophyOutlined className="progress-icon" />
            <h2 className="counter" data-target="5">0</h2>
            <p className='text-white'>SKILLS</p> {/* Updated to "SKILLS" */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Progress;

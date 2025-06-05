import React, { useEffect } from 'react';
import '../scss/_progress.scss';
import { Col, Row } from 'antd';
import {
  CheckCircleOutlined,
  CalendarOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import backgroundImage from '../assets/images/progress.webp';
import badge1 from '../assets/images/Achievements Section.png';

const Progress = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <div
      className="progress-wrapper"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px 80px',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 1,
        }}
      />

      {/* Animated Circles */}
      <div className="animated-circles" style={{ position: 'absolute', zIndex: 2 }}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="floating-circle"
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'rgba(29, 184, 228, 0.3)',
              animation: `float ${5 + i}s ease-in-out infinite`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 90 + 5}%`,
            }}
          />
        ))}
      </div>

      {/* Glass Card */}
      <div
        className="glass-card"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '25px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          padding: '60px 30px',
          marginBottom: '40px',
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <Row justify="center" gutter={[32, 32]} align="middle">
          <Col xs={24} sm={8} className="text-center">
            <CheckCircleOutlined style={{ fontSize: '3rem', color: '#1db8e4' }} />
            <h2 className="counter" data-target="14" style={{ fontSize: '2rem', marginTop: '10px' }}>0</h2>
            <p style={{ color: '#e0f7fa', fontWeight: 'bold' }}>PROJECTS COMPLETED</p>
          </Col>
          <Col xs={24} sm={8} className="text-center">
            <CalendarOutlined style={{ fontSize: '3rem', color: '#1db8e4' }} />
            <h2 className="counter" data-target="10" style={{ fontSize: '2rem', marginTop: '10px' }}>0</h2>
            <p style={{ color: '#e0f7fa', fontWeight: 'bold' }}>CLIENTS</p>
          </Col>
          <Col xs={24} sm={8} className="text-center">
            <TrophyOutlined style={{ fontSize: '3rem', color: '#1db8e4' }} />
            <h2 className="counter" data-target="26" style={{ fontSize: '2rem', marginTop: '10px' }}>0</h2>
            <p style={{ color: '#e0f7fa', fontWeight: 'bold' }}>CONSULTATIONS</p>
          </Col>
        </Row>
      </div>

      {/* Line Separator */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(to right, #1db8e4, #bbcd1d)',
        margin: '30px auto 10px',
        width: '80%',
        zIndex: 3,
        position: 'relative',
      }} />

      {/* Achievements Title */}
      
      {/* Badges Section */}
      <Row justify="center" gutter={[24, 24]} style={{ marginTop: '40px', zIndex: 3, position: 'relative' }}>
        {[badge1].map((badge, index) => (
          <Col xs={22} sm={18} md={14} lg={10} key={index} className="text-center">
            <img
              src={badge}
              alt={`Badge ${index + 1}`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '18px',
                filter: 'drop-shadow(0 0 20px rgba(29, 184, 228, 0.8))',
                transition: 'transform 0.4s ease-in-out',
                transform: 'scale(1.05)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.15)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            />
          </Col>
        ))}
      </Row>

      {/* Floating animation style */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default Progress;

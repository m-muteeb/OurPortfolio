import React, { useState } from 'react';
import { Col, Row } from 'antd';
import {
  LaptopOutlined,
  ApiOutlined,
  SearchOutlined,
  CodeOutlined,
  RobotOutlined,
  CloudServerOutlined,
  DownOutlined,
  UpOutlined,
} from '@ant-design/icons';
import '../scss/_expertise.scss';

const cardData = [
  {
    icon: <LaptopOutlined className="expertise-icon" />,
    title: 'WEB DEVELOPMENT',
    summary: 'We build high-performing, modern, and responsive web applications that scale.',
    details: 'From frontend UI/UX design to backend architecture, we deliver scalable full-stack solutions using React, Node.js, and more.'
  },
  {
    icon: <RobotOutlined className="expertise-icon" />,
    title: 'AI SOLUTIONS',
    summary: 'Harness AI to drive smarter decision-making, automation, and business intelligence.',
    details: 'We create AI models for image recognition, NLP, recommendation engines, and automation using Python and ML frameworks.'
  },
  {
    icon: <SearchOutlined className="expertise-icon" />,
    title: 'SEO & DIGITAL MARKETING',
    summary: 'Enhance your online presence and drive organic traffic with result-driven strategies.',
    details: 'Our team specializes in SEO audits, on-page/off-page SEO, Google Ads, and social media strategies that convert.'
  },
  {
    icon: <ApiOutlined className="expertise-icon" />,
    title: 'API DEVELOPMENT',
    summary: 'Develop scalable and secure APIs for seamless data integration and business growth.',
    details: 'We build RESTful and GraphQL APIs that are secure, fast, and easy to integrate into any ecosystem.'
  },
  {
    icon: <CloudServerOutlined className="expertise-icon" />,
    title: 'CLOUD SERVICES',
    summary: 'Enable seamless scalability and efficiency with reliable cloud infrastructure solutions.',
    details: 'Deploy, scale, and monitor cloud-native applications using AWS, Azure, or Google Cloud.'
  },
  {
    icon: <CodeOutlined className="expertise-icon" />,
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    summary: 'Create tailored software solutions that align with your unique business requirements.',
    details: 'Whether it’s an ERP, CRM, or a specialized tool, we craft software aligned with your exact goals.'
  }
];

const Expertise = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleDetails = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="expertise-container mt-4" id='Expertise'>
      <h1 className="text-center mb-0 text-white" style={{ textShadow: '0 0 6px rgba(255,255,255,0.8)' }}>
        <b>Code Nexus</b> Services For Every Vision
      </h1>
      <p className="text-center mt-0 mb-4 text-white" style={{ textShadow: '0 0 4px rgba(255,255,255,0.6)' }}>
        Crafting innovative, high-quality solutions for your business growth.
      </p>

      <Row justify="center" gutter={[16, 16]}>
        {cardData.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <div
              className="expertise-card"
              style={{
                background: 'rgba(29, 47, 106, 0.85)',
                backdropFilter: 'blur(15px)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                color: '#fff',
                animation: 'fadeInUp 0.8s ease forwards',
                opacity: 0,
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards',
              }}
            >
              <div className="icon-circle">{item.icon}</div>
              <h3 style={{ marginTop: 16, color: '#ffffff', textShadow: '0 0 5px rgba(255,255,255,0.5)' }}>{item.title}</h3>
              <p style={{ color: '#f1f1f1' }}>{item.summary}</p>
              {expandedCards[index] && <p style={{ marginTop: 10, color: '#ddd' }}>{item.details}</p>}

              <div
                style={{
                  marginTop: 10,
                  cursor: 'pointer',
                  color: '#1db8e4',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5
                }}
                onClick={() => toggleDetails(index)}
              >
                {expandedCards[index] ? 'Show Less' : 'Read More'}
                {expandedCards[index] ? <UpOutlined /> : <DownOutlined />}
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .icon-circle {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin: 0 auto 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s;
        }

        .expertise-card:hover .icon-circle {
          transform: scale(1.1) rotate(3deg);
        }

        .expertise-icon {
          font-size: 28px;
          color: #1db8e4;
        }

        .expertise-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
};

export default Expertise;

// Expertise.js
import React from 'react';
import { Col, Row } from 'antd';
import { CodeOutlined, RocketOutlined, TeamOutlined,FileTextOutlined , SketchOutlined, AppstoreOutlined } from '@ant-design/icons';
import '../scss/_expertise.scss';

const Expertise = () => {
  return (
    <div className="expertise-container mt-4 "  id='Expertise'>
        <h1 className="text-center mb-0  ">Expertise</h1>
        <p className="text-center mt-0 mb-4 "> Mastery through practice, precision, and passion.</p> 
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <div className="expertise-card">
            <div className="icon-circle">
              <CodeOutlined className="expertise-icon" />
            </div>
            <h3>WEB DEVELOPMENT</h3>
            <p>Expert in creating modern and responsive web applications using the latest technologies.</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="expertise-card">
            <div className="icon-circle">
              <RocketOutlined className="expertise-icon" />
            </div>
            <h3>SEO</h3>
            <p>Skilled in search engine optimization techniques to boost website rankings and traffic.</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="expertise-card">
            <div className="icon-circle">
              <TeamOutlined className="expertise-icon" />
            </div>
            <h3>COMMUNICATION SKILLS</h3>
            <p>Strong communication skills to effectively collaborate with clients and teams.</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="expertise-card">
            <div className="icon-circle">
              <FileTextOutlined className="expertise-icon" />
            </div>
            <h3>WORDPRESS</h3>
            <p>Proficient in WordPress development, including theme customization and plugin development.</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="expertise-card">
            <div className="icon-circle">
              <SketchOutlined className="expertise-icon" />
            </div>
            <h3>UI/UX DESIGN</h3>
            <p>Experienced in designing user interfaces and experiences that are both functional and visually appealing.</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div className="expertise-card">
            <div className="icon-circle">
              <AppstoreOutlined className="expertise-icon" />
            </div>
            <h3>FRONT END LIBRARIES</h3>
            <p>Knowledgeable in front-end libraries such as React and Vue.js to build dynamic web apps.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Expertise;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MobileOutlined,
  LaptopOutlined,
  ApiOutlined,
  CloudServerOutlined,
  RobotOutlined,
  BgColorsOutlined,
  ThunderboltOutlined,
  RiseOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import '../scss/_expertise.scss';

// Service Data with links to detail pages
const services = [
  {
    id: 1,
    icon: <MobileOutlined />,
    title: 'Mobile App Development',
    summary: 'Native iOS, Android, and cross-platform apps that captivate users and drive business growth.',
    link: '/services/mobile-app'
  },
  {
    id: 2,
    icon: <LaptopOutlined />,
    title: 'Web Development',
    summary: 'High-performing, responsive web applications built for scale and user engagement.',
    link: '/services/web-development'
  },
  {
    id: 3,
    icon: <ApiOutlined />,
    title: 'IoT Solutions',
    summary: 'Connected intelligence at scale—from edge devices to cloud platforms and real-time analytics.',
    link: '/services/iot-solutions'
  },
  {
    id: 4,
    icon: <CloudServerOutlined />,
    title: 'SaaS Development',
    summary: 'Subscription-ready cloud platforms with multi-tenant architecture and seamless billing.',
    link: '/services/saas-development'
  },
  {
    id: 5,
    icon: <ThunderboltOutlined />,
    title: 'DevOps Services',
    summary: 'Continuous delivery excellence with automated CI/CD pipelines and zero-downtime deployments.',
    link: '/services/devops'
  },
  {
    id: 6,
    icon: <RobotOutlined />,
    title: 'Agentic AI Solutions',
    summary: 'Autonomous AI agents that execute complex workflows and enhance productivity at scale.',
    link: '/services/agentic-ai'
  },
  {
    id: 7,
    icon: <BgColorsOutlined />,
    title: 'UI/UX Design',
    summary: 'User-centered digital experiences that delight users and drive conversions through data-driven design.',
    link: '/services/uiux-design'
  },
  {
    id: 8,
    icon: <RiseOutlined />,
    title: 'Digital Marketing',
    summary: 'Data-driven growth strategies combining SEO, content marketing, and paid advertising for maximum ROI.',
    link: '/services/digital-marketing'
  }
];


const Expertise = () => {
  return (
    <section className="services-section" id="Expertise">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-uppercase text-sky fw-bold letter-spacing-2 mb-2 small"
          >
            What We Do
          </motion.p>
          <motion.h2
            className="display-5 fw-bold text-dark mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Services Built for <span className="text-gradient">Growth</span>
          </motion.h2>
          <div className="divider mx-auto"></div>
        </div>

        {/* Services Grid */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={service.id} lg={4} md={6}>
              <Link to={service.link} style={{ textDecoration: 'none' }}>
                <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="icon-wrapper">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-summary">{service.summary}</p>
                  <div className="learn-more-btn">
                    Learn More <ArrowRightOutlined className="ms-2 arrow-icon" />
                  </div>
                </motion.div>
              </Link>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default Expertise;


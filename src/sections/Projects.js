import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowRightOutlined, RocketOutlined, AppstoreOutlined } from '@ant-design/icons';
import '../scss/_projects.scss';

// Import images
import todoAppImage from '../assets/images/cravecurve.png';
import testonology from '../assets/images/testonology.png';
import gramture from '../assets/images/Gramture.png';
import ambitious from '../assets/images/ambitious.png';
import posImage from '../assets/images/possystem.png';
import hospitalImage from '../assets/images/unification.jpg'; // Corrected filename

// Major Case Studies (Editorial Layout)
const caseStudies = [
  {
    title: 'Testnology',
    slug: 'testnology',
    image: testonology,
    description: 'AI-assisted quiz platform with automated test generation from multiple sources.',
    techStack: ['ReactJs', 'Supabase', 'n8n', 'AI'],
    status: 'In Development',
    type: 'Automated Testing',
    link: '/case-study/testnology'
  },
  {
    title: 'Ambitious Pk',
    slug: 'ambitious-pk',
    image: ambitious,
    description: 'Learning portal and management system for students across Pakistan.',
    techStack: ['React.js', 'Firebase'],
    status: 'Completed',
    type: 'Education',
    link: '/case-study/ambitious-pk'
  },
  {
    title: 'Unification Tibbi Foundation',
    slug: 'unification-tibbi',
    image: hospitalImage,
    description: 'Comprehensive healthcare and management foundation system.',
    techStack: ['React', 'Firebase', 'Express'],
    status: 'In Progress',
    type: 'Healthcare & NGO',
    link: '/case-study/unification-tibbi'
  }
];

// Other Projects (Grid Layout)
const otherProjects = [
  {
    title: 'Gramture',
    slug: 'gramture',
    image: gramture,
    description: 'A comprehensive education platform enabling institutions to manage classrooms, assignments, and student progress — all in one place.',
    techStack: ['React.js', 'Ant Design', 'Firebase'],
    status: 'Completed',
    type: 'Education Platform',
    link: '#'
  },
  {
    title: 'Crave Curve',
    slug: 'crave-curve',
    image: todoAppImage,
    description: 'A modern food ordering and delivery tracking application featuring real-time order updates and seamless user experience.',
    techStack: ['React', 'Firebase'],
    status: 'Ongoing',
    type: 'Food & Delivery',
    link: '#'
  },
  {
    title: 'POS System',
    slug: 'pos-system',
    image: posImage,
    description: 'An enterprise-grade Point of Sale system with real-time inventory management, automated billing, and business analytics.',
    techStack: ['React', 'Node.js', 'MySQL'],
    status: 'Completed',
    type: 'Business Software',
    link: '#'
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="Projects">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-uppercase text-sky fw-bold letter-spacing-2 mb-2 small"
          >
            <RocketOutlined className="me-2" />Our Work
          </motion.p>
          <motion.h2
            className="display-5 fw-bold text-dark mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured <span className="text-gradient">Case Studies</span>
          </motion.h2>
          <p className="text-muted mb-0">In-depth look at our major software solutions.</p>
          <div className="divider mx-auto mt-3"></div>
        </div>

        {/* 1. MAJOR CASE STUDIES (Alternating Full-Width) */}
        <div className="editorial-projects">
          {caseStudies.map((project, index) => (
            <motion.article
              key={project.slug}
              className={`editorial-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="editorial-image">
                <Link to={project.link}>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="image-hover-overlay">
                    <span className="hover-text">View Case Study</span>
                  </div>
                </Link>
              </div>

              <div className="editorial-content">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map(tech => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <div className="project-meta">
                  <span className={`status-indicator ${project.status === 'Completed' ? 'completed' : ''}`}>
                    <span className="status-dot"></span>
                    {project.status}
                  </span>
                </div>
                <Link to={project.link} className="case-study-link">
                  Explore Full Case Study
                  <ArrowRightOutlined className="arrow-icon" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 2. OTHER PROJECTS (Grid Layout) */}
        <div className="other-projects-section">
          <div className="text-center mb-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-uppercase text-sky fw-bold letter-spacing-2 mb-2 small"
            >
              <AppstoreOutlined className="me-2" />Portfolio
            </motion.p>
            <motion.h2
              className="display-5 fw-bold text-dark mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              More <span className="text-gradient">Projects</span>
            </motion.h2>
            <p className="text-muted mb-0">Explore more of our crafted digital solutions across industries.</p>
            <div className="divider mx-auto mt-3"></div>
          </div>

          <Row className="gy-4">
            {otherProjects.map((project, index) => (
              <Col lg={4} md={6} sm={12} key={project.slug}>
                <motion.div
                  className="project-card-simple"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className="simple-card-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="simple-card-overlay">
                      <span className="overlay-type">{project.type}</span>
                    </div>
                  </div>
                  <div className="simple-card-body">
                    <div className="card-header-row">
                      <h5 className="card-title">{project.title}</h5>
                      <span className={`status-badge ${project.status === 'Completed' ? 'completed' : 'ongoing'}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="card-description">{project.description}</p>
                    <div className="tech-stack-mini">
                      {project.techStack.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

      </Container>
    </section>
  );
};

export default Projects;
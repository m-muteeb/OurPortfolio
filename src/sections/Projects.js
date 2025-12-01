import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import your images as before
import todoAppImage from '../assets/images/cravecurve.png';
import testonology from '../assets/images/testonology.png';
import gramture from '../assets/images/Gramture.png';
import ambitious from '../assets/images/ambitious.png';
import posImage from '../assets/images/possystem.png';
import hospitalImage from '../assets/images/hospital.png';

const projects = [
  {
    title: 'Testonology',
    slug: 'testonology',
    image: testonology,
    description: 'Test maker platform featuring custom quizzes, AI-assisted question generation, results analytics, and community sharing features.',
    techStack: 'ReactJs, Supabase, n8n',
    status: 'Underdevelopment',
    type: 'Education',
    date: 'Continue',
  },
  {
    title: 'Gramture',
    slug: 'gramture',
    image: gramture,
    description: 'A complete education platform for institutions to manage classes, teachers, and students digitally.',
    techStack: 'React.js, Ant Design, Firebase',
    status: 'Completed',
    date: 'Jan 2024',
    type: 'Education Platform',
  },
  {
    title: 'Ambitious Pk',
    slug: 'ambitious-pk',
    image: ambitious,
    description: 'Learning portal providing online resources and management for students across Pakistan.',
    techStack: 'React.js, Ant Design, Firebase',
    status: 'Completed',
    date: 'Jun 2025',
    type: 'Education Platform',
  },
  {
    title: 'Crave Curve',
    slug: 'crave-curve',
    image: todoAppImage,
    description: 'A food ordering and tracking app designed with Firebase backend integration.',
    techStack: 'React, Firebase',
    status: 'Ongoing',
    date: 'Feb 2024',
    type: 'Web App',
  },
  {
    title: 'POS System',
    slug: 'pos-system',
    image: posImage,
    description: 'Point of Sale system with inventory management, billing, sales tracking, and reporting modules.',
    techStack: 'React, Node.js, MySQL',
    status: 'Completed',
    date: 'Mar 2025',
    type: 'Business Software',
  },
  {
    title: 'Hospital Management System',
    slug: 'hospital-system',
    image: hospitalImage,
    description: 'Comprehensive hospital suite including doctor appointments, pharmacy, labs, patient history, and admin dashboard.',
    techStack: 'React, Firebase, Express.js',
    status: 'In Progress',
    date: 'Apr 2025',
    type: 'Enterprise Software',
  },
];

// --- Styles Object ---

const pageStyles = {
  backgroundColor: '#040711',
  padding: '50px 0',
};

const titleStyles = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  fontSize: '45px',
  color: 'white',
  textAlign: 'center',
  marginBottom: '1rem',
};

const titleSpanStyles = {
  color: 'green',
};

const subtitleStyles = {
  color: '#aaa',
  textAlign: 'center',
  marginBottom: 40,
};

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px',
  padding: '0 50px',
};

const cardBaseStyles = {
  backgroundImage: 'linear-gradient(145deg, rgba(32, 0, 56, 0.6), rgba(0, 0, 64, 0.4))',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(20px)',
  borderRadius: '25px',
  color: '#fff',
  boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  overflow: 'hidden', // Ensures rounded corners apply to image
  display: 'flex',
  flexDirection: 'column',
};

const cardHoverStyles = {
  transform: 'scale(1.05)',
  boxShadow: '0 0 25px rgba(29, 184, 228, 0.5)',
};

const cardImageStyles = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const cardContentStyles = {
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1, // This makes the content area fill the remaining space
  minHeight: '350px', // Ensures cards have a consistent min height for content
};

const cardTitleStyles = {
  color: '#1db8e4',
  marginBottom: '10px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '22px',
  fontWeight: '600',
};

const techStackContainerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '15px',
};

const techTagStyles = {
  backgroundColor: 'rgba(29, 184, 228, 0.15)',
  color: '#9ecfff',
  padding: '4px 10px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: '500',
  border: '1px solid rgba(29, 184, 228, 0.3)',
};

const cardDescriptionStyles = {
  fontSize: '14px',
  color: '#eaeaea',
  lineHeight: '1.5',
  marginBottom: '15px',
};

const spacerStyles = {
  flexGrow: 1, // This is the spacer div
};

const cardMetadataStyles = {
  paddingTop: '15px',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
};

const metadataItemStyles = {
  fontSize: '13px',
  color: '#9ecfff',
  margin: '5px 0',
  display: 'flex',
  justifyContent: 'space-between',
};

const metadataLabelStyles = {
  color: '#eaeaea',
  fontWeight: '600',
  marginRight: '10px',
};

const readMoreButtonBaseStyles = {
  display: 'block',
  width: '100%',
  marginTop: '20px',
  padding: '12px 18px',
  backgroundColor: '#1db8e4',
  color: '#fff',
  borderRadius: '12px',
  textDecoration: 'none',
  transition: 'background-color 0.3s, transform 0.2s',
  fontWeight: '500',
  textAlign: 'center',
  border: 'none',
  cursor: 'pointer',
};

const readMoreButtonHoverStyles = {
  backgroundColor: '#18a4ca',
  transform: 'translateY(-2px)',
};

// --- Component ---

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div style={pageStyles} id="Projects">
      <h2 style={titleStyles}>
        Our <span style={titleSpanStyles}>Projects</span>
      </h2>
      <p style={subtitleStyles}>
        Due to client privacy, only selected work is shown.
      </p>

      <div style={gridStyles}>
        {projects.map((project, index) => {
          const isCardHovered = hoveredCard === index;
          const isButtonHovered = hoveredButton === index;

          return (
            <div
              key={index}
              style={{
                ...cardBaseStyles,
                ...(isCardHovered ? cardHoverStyles : {}),
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                style={cardImageStyles}
              />
              
              <div style={cardContentStyles}>
                <h4 style={cardTitleStyles}>{project.title}</h4>
                
                <div style={techStackContainerStyles}>
                  {project.techStack.split(', ').map((tech) => (
                    <span key={tech} style={techTagStyles}>{tech}</span>
                  ))}
                </div>

                <p style={cardDescriptionStyles}>
                  {project.description}
                </p>

                {/* This spacer div pushes everything below it to the bottom */}
                <div style={spacerStyles} />

                <div style={cardMetadataStyles}>
                  <p style={metadataItemStyles}>
                    <span style={metadataLabelStyles}>Status:</span> {project.status}
                  </p>
                  <p style={metadataItemStyles}>
                    <span style={metadataLabelStyles}>Date:</span> {project.date}
                  </p>
                  <p style={metadataItemStyles}>
                    <span style={metadataLabelStyles}>Type:</span> {project.type}
                  </p>
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  style={{
                    ...readMoreButtonBaseStyles,
                    ...(isButtonHovered ? readMoreButtonHoverStyles : {}),
                  }}
                  onMouseEnter={() => setHoveredButton(index)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Read More →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
import React from 'react';

import fitnessHubImage from '../assets/images/1.png';
import todoAppImage from '../assets/images/6.png';
import brArchitectsImage from '../assets/images/5.png';
import foodloverImage from '../assets/images/2.png';
import pureislamImage from '../assets/images/3.png';
import picPlanetImage from '../assets/images/Screenshot 2024-08-25 152008.png';
import gramture from "../assets/images/1.png"
import ambitious from "../assets/images/Screenshot 2025-06-04 175614.png"

const projects = [
  {
    title: 'Gramture',
    image: gramture,
    techStack: 'React.js, Ant Design, Firebase',
    status: 'Completed',
    role: 'Fullstack Developer',
    date: 'Jan 2024',
    type: 'Education Platform',
  },
  {
    title: 'Ambitious Pk',
    image: ambitious,
    techStack: 'React.js, Ant Design, Firebase',
    status: 'Completed',
    role: 'Fullstack Developer',
    date: 'Jun 2025',
    type: 'Education Platform',
  },
  {
    title: 'Crave Curve',
    image: todoAppImage,
    techStack: 'React, Firebase',
    status: 'Ongoing',
    role: 'Frontend Developer',
    date: 'Feb 2024',
    type: 'Web App',
  },
  {
    title: 'Solid Engineering',
    image: brArchitectsImage,
    techStack: 'React, Node.js, CSS',
    status: 'Completed',
    role: 'Frontend Developer',
    date: 'Oct 2023',
    type: 'Company Website',
  },
  {
    title: 'Foodlover',
    image: foodloverImage,
    techStack: 'HTML, CSS, JavaScript',
    status: 'Completed',
    role: 'Frontend Developer',
    date: 'July 2023',
    type: 'Blog Platform',
  },
  {
    title: 'PureIslam',
    image: pureislamImage,
    techStack: 'Bootstrap, JavaScript, jQuery',
    status: 'Completed',
    role: 'Developer',
    date: 'Aug 2023',
    type: 'Knowledge Portal',
  },
  {
    title: 'Pic Planet',
    image: picPlanetImage,
    techStack: 'HTML, CSS, JavaScript',
    status: 'Completed',
    role: 'UI Designer & Developer',
    date: 'Sep 2023',
    type: 'Gallery App',
    link: '#',
  },
];

const cardWidth = 320; // fixed width of each card in px
const cardGap = 30; // gap between cards in px
const totalCards = projects.length;
const totalWidth = totalCards * (cardWidth + cardGap); // total width of one set of cards

const Projects = () => {
  return (
    <div style={{ backgroundColor: '#040711', padding: '50px 0', overflow: 'hidden' }} id="Projects">
      <h2
        className="section-title text-center mb-4 text-white"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          fontSize: '45px'
        }}
      >
        Our <span style={{ color: 'green' }}>Projects</span>
        <br />
      </h2>
      <p style={{ color: '#aaa', textAlign: 'center', marginBottom: 40 }}>
        Due to client privacy, only selected work is shown.
      </p>

      {/* Container for scrolling */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Scrolling content duplicated for infinite scroll */}
        <div
          className="scrolling-wrapper"
          style={{
            display: 'flex',
            gap: `${cardGap}px`,
            width: `${totalWidth * 2}px`, // twice width because duplicated
            animation: `scroll-left ${totalWidth / 50}s linear infinite`,
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 auto',
                width: `${cardWidth}px`,
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  backgroundImage: 'linear-gradient(145deg, rgba(32, 0, 56, 0.6), rgba(0, 0, 64, 0.4))',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '25px',
                  padding: '25px',
                  color: '#fff',
                  minHeight: '550px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  marginBottom: '30px',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(29, 184, 228, 0.5)';
                  // Pause animation on hover
                  e.currentTarget.parentElement.style.animationPlayState = 'paused';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.35)';
                  // Resume animation on leave
                  e.currentTarget.parentElement.style.animationPlayState = 'running';
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    marginBottom: '15px',
                    border: '2px solid rgba(255,255,255,0.2)',
                  }}
                />
                <h4 style={{ color: '#1db8e4', marginBottom: '10px' }}>{project.title}</h4>
                <p style={{ fontSize: '14px', color: '#eaeaea', lineHeight: '1.5', marginBottom: '10px' }}>
                  {project.description}
                </p>
                <p style={{ fontSize: '13px', color: '#9ecfff', margin: '4px 0' }}>
                  <strong>🛠 Tech Stack:</strong> {project.techStack}
                </p>
                <p style={{ fontSize: '13px', color: '#9ecfff', margin: '4px 0' }}>
                  <strong>📌 Status:</strong> {project.status}
                </p>
                <p style={{ fontSize: '13px', color: '#9ecfff', margin: '4px 0' }}>
                  <strong>👤 Role:</strong> {project.role}
                </p>
                <p style={{ fontSize: '13px', color: '#9ecfff', margin: '4px 0' }}>
                  <strong>📅 Created:</strong> {project.date}
                </p>
                <p style={{ fontSize: '13px', color: '#9ecfff', margin: '4px 0' }}>
                  <strong>📁 Type:</strong> {project.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }

        /* Hide scrollbar for webkit browsers */
        .scrolling-wrapper::-webkit-scrollbar {
          display: none;
        }
        .scrolling-wrapper {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        /* Responsive adjustments */
        @media (max-width: 400px) {
          div[style*="width: 320px"] {
            width: 280px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;

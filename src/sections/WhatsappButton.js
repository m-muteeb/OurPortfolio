// WhatsAppFloatButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppFloatButton = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '100px',
    right: '20px',
    backgroundColor: '#25d366',
    color: 'white',
    borderRadius: '50%',
    padding: '16px',
    zIndex: 1000,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease-in-out',
    textAlign: 'center',
  };

  const iconStyle = {
    display: 'block',
  };

  const hoverStyle = {
    transform: 'scale(1.1)',
  };

  // Optional: Add hover effect via state (inline-only workaround)
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href="https://wa.me/923096829046"
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" style={iconStyle} />
    </a>
  );
};

export default WhatsAppFloatButton;

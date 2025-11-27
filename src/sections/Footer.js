import React from "react";
// ✅ Step 1: Import modern SVG icons from react-icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

// ✅ Step 2: Import the CSS file for styling
import "../scss/_footer.css"

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#Projects" },
    { name: "Services", href: "#Expertise" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Custom Software",
    "E-commerce Solutions",
    "Cloud & DevOps",
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61573819956075",
      icon: <FaFacebookF />,
    },
    {
      href: "https://www.instagram.com/codenexusltd/",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.linkedin.com/company/code-nexus-ltd",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Column 1: Company Info */}
        <div className="footer-column">
          <h3 className="footer-logo">Code Nexus</h3>
          <p className="footer-description">
            We build innovative digital solutions that transform businesses and
            enhance user experiences through cutting-edge technology.
          </p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.icon.type.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>
                  <FaChevronRight className="link-icon" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            {services.map((service, index) => (
              <li key={index}>
                <FaChevronRight className="link-icon" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="contact-info">
            <li>
              <FiMapPin className="contact-icon" />
              <span>5th Street, Faisalabad, Pakistan</span>
            </li>
            <li>
              <FiPhone className="contact-icon" />
              <span>+92 309 6829046</span>
            </li>
            <li>
              <FiMail className="contact-icon" />
              <span>codenexusltd@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} Code Nexus Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import codenexusLogo from "../assets/images/mylogo.png";
import "../scss/_footer.css";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#Projects" },
    { name: "Services", href: "#Expertise" },
    { name: "About Us", href: "#About" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "AI / ML Solutions",
    "UI/UX Design",
    "Custom Software",
    "Cloud & DevOps",
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61573819956075",
      icon: <FaFacebookF />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/codenexusltd/",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/code-nexus-ltd",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-grid">

        {/* Column 1: Brand */}
        <div className="footer-column footer-brand-column">
          <div className="footer-brand">
            <img src={codenexusLogo} alt="Code Nexus" className="footer-logo-img" loading="lazy" />
            <span className="footer-brand-name">Code Nexus</span>
          </div>
          <p className="footer-description">
            Enterprise-grade software solutions that transform businesses through cutting-edge technology, strategic innovation, and engineering excellence.
          </p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
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

        {/* Column 4: Contact & Offices */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="contact-info">
            <li>
              <FiMapPin className="contact-icon" />
              <div className="contact-detail">
                <span className="office-label">Pakistan Office</span>
                <span>Business Incubation Center, University of Agriculture, Faisalabad</span>
              </div>
            </li>
            <li>
              <FiMapPin className="contact-icon" />
              <div className="contact-detail">
                <span className="office-label">Headquarters</span>
                <span>Dawami, Riyadh, Saudi Arabia</span>
              </div>
            </li>
            <li>
              <FiPhone className="contact-icon" />
              <span>+92 309 3885154</span>
            </li>
            <li>
              <FiMail className="contact-icon" />
              <span>codenexusltd@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} Code Nexus Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
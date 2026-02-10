import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/#hero" },
    { name: "About", to: "/#About" },
    { name: "Projects", to: "/#Projects" },
    { name: "Expertise", to: "/#Expertise" },
    { name: "Contact", to: "/#contact" },
    { name: "Idea2Impact", to: "/submitidea" },
    { name: "Careers", to: "/careers" },
  ];

  // Menu variants for smooth animation
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`custom-navbar ${isScrolled ? "scrolled" : ""}`}
      >
        <Container className="d-flex justify-content-between align-items-center h-100">
          <Link to="/#hero" className="brand-logo text-decoration-none">
            Code<span className="highlight">Nexus</span>
          </Link>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="nav-link-custom"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className={`menu-toggle d-lg-none ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </Container>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="mobile-menu-overlay"
          >
            <div className="mobile-links">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={linkVariants}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="mobile-link"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%) !important;
          width: 90%;
          max-width: 1200px;
          height: 70px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(14, 165, 233, 0.1);
          border-radius: 50px;
          z-index: 1000;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .custom-navbar.scrolled {
          top: 10px;
          width: 95%;
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(14, 165, 233, 0.15);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .brand-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: 0.5px;
        }

        .highlight {
          color: #0ea5e9;
        }

        .nav-link-custom {
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 5px 0;
        }

        .nav-link-custom:hover {
          color: #0ea5e9;
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #0ea5e9;
          transition: width 0.3s ease;
        }

        .nav-link-custom:hover::after {
          width: 100%;
        }

        /* Mobile Toggle */
        .menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          width: 30px;
          height: 20px;
          position: relative;
          z-index: 1002;
        }

        .bar {
          display: block;
          width: 100%;
          height: 2px;
          background: #0f172a;
          position: absolute;
          transition: all 0.3s ease;
        }

        .bar:nth-child(1) { top: 0; }
        .bar:nth-child(2) { top: 50%; transform: translateY(-50%); }
        .bar:nth-child(3) { bottom: 0; }

        .menu-toggle.open .bar:nth-child(1) {
          transform: rotate(45deg);
          top: 9px;
          background: #0f172a;
        }
        .menu-toggle.open .bar:nth-child(2) {
          opacity: 0;
        }
        .menu-toggle.open .bar:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 9px;
          background: #0f172a;
        }

        /* Mobile Menu */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(14, 165, 233, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 35px;
        }

        .mobile-link {
          font-size: 2.2rem;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .mobile-link:hover {
          color: #0f172a;
          transform: scale(1.1);
        }

        @media (max-width: 991px) {
          .custom-navbar {
            width: 95%;
            top: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
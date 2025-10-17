// src/components/Header.js

import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ 1. IMPORT CHANGE: Import HashLink and rename it to Link for a seamless replacement.
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Styles remain the same ---
  const navbarStyle = {
    transition: "all 0.3s ease",
    backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.85)" : "transparent",
    backdropFilter: "blur(10px)",
    padding: "15px 0",
    boxShadow: isScrolled ? "0px 4px 20px rgba(0, 0, 0, 0.5)" : "none",
    zIndex: 10,
    borderBottom: isScrolled ? "1px solid rgba(62, 234, 191, 0.2)" : "none",
  };

  const brandStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    background: "linear-gradient(45deg, #3eeabf, #2a8cff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginLeft: "20px",
    letterSpacing: "1px",
  };

  const navLinkStyle = {
    fontSize: "1rem",
    fontWeight: "500",
    margin: "0 15px",
    color: "#fff",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" style={navbarStyle}>
        <Navbar.Brand as={Link} to="/#hero" style={brandStyle}>
          CodeNexus
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: "#3eeabf" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ marginRight: "20px" }}>
            {/* ✅ 2. NO OTHER CHANGES NEEDED! These links will now work correctly. */}
            {/* The HashLink component intelligently waits for the page to render before scrolling. */}
            <Nav.Link as={Link} to="/#hero" style={navLinkStyle} className="nav-hover">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/#About" style={navLinkStyle} className="nav-hover">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/#Projects" style={navLinkStyle} className="nav-hover">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/#Expertise" style={navLinkStyle} className="nav-hover">
              Expertise
            </Nav.Link>
            <Nav.Link as={Link} to="/#contact" style={navLinkStyle} className="nav-hover">
              Contact
            </Nav.Link>
            {/* This link to a different page will also continue to work as expected. */}
            <Nav.Link as={Link} to="/submitidea" style={navLinkStyle} className="nav-hover">
              Idea2Impact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {/* The style tag can be removed if you handle this CSS globally */}
      <style>
        {`
          .nav-hover:hover {
            color: #3eeabf !important;
            transform: translateY(-2px);
          }
        `}
      </style>
    </>
  );
};

export default Header;
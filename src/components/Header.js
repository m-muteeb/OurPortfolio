import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.png'; // Adjust the path as necessary
// import './Header.css'; // Custom CSS

const Header = () => {
  return (
    <div className="container py-0"
    style={{
      paddingBottom: '0px',}}>
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar px-4 py-0">
      {/* Left: Logo */}
      <a className="navbar-brand fw-bold text-white" href="#">
        <img
          src={logo}// Replace with your logo URL
          alt="Logo"
          className="d-inline-block align-text-top"
          style={{ width: '100px', height: '100px' }}
        />
      </a>

      {/* Mobile Toggler */}
      <button
        className="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Center + Right */}
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        {/* Center: Nav with border radius */}
        <div className="nav-container rounded-pill px-4 py-2 mx-auto d-flex gap-4">
          <a className="nav-link text-white" href="#home">Home</a>
          <a className="nav-link text-white" href="#about">About</a>
          <a className="nav-link text-white" href="#blogs">Blogs</a>
          <a className="nav-link text-white" href="#contact">Contact Us</a>
        </div>

        {/* Right: Buttons */}
        <div className="d-flex gap-2">
          <button className="btn btn-primary text-white rounded-pill">Let's Build Together</button>
          <button className="btn btn-outline-light rounded-pill">Sign Up</button>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;
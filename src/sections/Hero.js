import React from 'react';
import hero from '../assets/images/hero.png'; // Adjust the path as necessary

const Hero = () => {
  return (
    <section
      className="hero-container"
      style={{
        padding: '10px 64px',
     
      }}
    >
      <div className="hero-content ">
        <h1 className="mb-5">Welcome to Code Nexus Creating Outstanding Website</h1>
        <p className="text-white text-center">
          From generating complex algorithms to simple AI-driven tools, we offer cutting-edge
        </p>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// --- Enhanced Data with Initials for Avatars ---
const testimonials = [
  {
    name: "Syed Arfat Haider",
    initials: "SH",
    feedback:
      "The web application was delivered on time and exceeded all our expectations. The attention to detail was impeccable. Highly recommend!",
    project: "Hospital Management System",
  },
  {
    name: "Habib Ahmad Khan",
    initials: "HK",
    feedback:
      "An absolutely creative and precise execution on the Gramture project. The team's communication and skill are top-notch. Excellent work!",
    project: "Gramture Branding",
  },
  {
    name: "Mr. Joseph",
    initials: "MJ",
    feedback:
      "Our fitness hub website is now a central part of our business, thanks to the amazing, user-friendly design. A truly great job!",
    project: "Fitness Hub Web App",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // --- Advanced navigation function to handle animations ---
  const goToIndex = useCallback((index) => {
    // Prevent re-triggering animation if it's already running or index is the same
    if (isAnimating || index === currentIndex) return;

    setIsAnimating(true);

    // Set a timeout that matches the duration of the 'out' animation
    setTimeout(() => {
      setCurrentIndex(index);
      // The 'isAnimating' state will be set to false by the animationend event
    }, 400); // Animation duration is 0.4s
  }, [isAnimating, currentIndex]);


  // --- Auto-play timer ---
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      goToIndex((currentIndex + 1) % testimonials.length);
    }, 5000); // Increased duration for better readability

    return () => clearInterval(interval);
  }, [isHovered, currentIndex, goToIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>

        <div
          className="testimonial-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="quote-mark">“</div>
          <div className="avatar">{currentTestimonial.initials}</div>
          
          <div
            className={`testimonial-content ${isAnimating ? "fade-out" : "fade-in"}`}
            onAnimationEnd={() => {
              if (isAnimating) {
                setIsAnimating(false);
              }
            }}
          >
            <p className="feedback-text">
                {currentTestimonial.feedback}
            </p>
            <h4 className="client-name">— {currentTestimonial.name}</h4>
            <p className="project-name">
              Project: {currentTestimonial.project}
            </p>
          </div>
        </div>

        {/* --- Navigation Dots --- */}
        <div className="dots-container">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => goToIndex(index)}
              className={`dot ${currentIndex === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* --- CSS Styles - Moved from inline for better readability and management --- */}
      <style>
        {`
        .testimonial-section {
          background-image: linear-gradient(145deg, #1a0e2e, #1a1a3a);
          padding: 100px 0;
          color: #fff;
          text-align: center;
          overflow: hidden;
          font-family: 'Poppins', sans-serif;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 50px;
          font-weight: 700;
          color: #ffffff;
        }

        .testimonial-card {
          max-width: 700px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 25px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          padding: 60px 40px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          position: relative;
          transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
          color: #e0e0e0;
          perspective: 1000px; /* For 3D hover effect */
        }
        
        .testimonial-card:hover {
          transform: scale(1.05) rotateX(5deg) rotateY(-5deg);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
        }

        .avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(145deg, #8a2be2, #4a00e0);
          color: #fff;
          font-size: 2rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          border: 4px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.7);
        }
        
        .quote-mark {
          position: absolute;
          top: 15px;
          left: 20px;
          font-size: 10rem;
          color: rgba(255, 255, 255, 0.05);
          font-family: 'Georgia', serif;
          z-index: -1;
        }

        .feedback-text {
          font-size: 1.1rem;
          font-style: italic;
          line-height: 1.6;
          margin-bottom: 25px;
          min-height: 100px; /* Prevent layout shift */
        }

        .client-name {
          font-weight: 700;
          font-size: 1.25rem;
          color: #f0e68c; /* Khaki color for highlight */
          margin-bottom: 5px;
        }

        .project-name {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .dots-container {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          gap: 15px;
        }

        .dot {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background-color: #ffffff;
          transform: scale(1.3);
          box-shadow: 0 0 10px #fff;
        }

        /* --- Animation Classes --- */
        .testimonial-content {
          opacity: 1;
        }
        
        .fade-out {
          animation: slideOutLeft 0.4s ease-out forwards;
        }
        
        .fade-in {
          animation: slideInRight 0.4s ease-in forwards;
        }

        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-30px); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        `}
      </style>
    </section>
  );
};

export default TestimonialSection;
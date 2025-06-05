import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/_feedback.scss"; // Optional for custom styles

const testimonials = [
  {
    name: "Syed Arfat Haider",
    feedback:
      "Good experience. The web application was delivered on time and exceeded expectations. Highly recommend!",
    project: "Web Application",
  },
  {
    name: "Habib Ahmad Khan",
    feedback:
      "The Gramture project was completed with creativity and precision. Excellent work!",
    project: "Gramture",
  },
  {
    name: "MR. Joseph",
    feedback:
      "The fitness hub website looks amazing and is very user-friendly. Great job!",
    project: "Fitness Hub",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      style={{
    
         backgroundImage: 'linear-gradient(145deg, rgba(32, 0, 56, 0.6), rgba(0, 0, 64, 0.4))',
        padding: "80px 0",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <h2 style={{ fontSize: "2.0rem", marginBottom: "40px", fontWeight: "bold" }}>
           What Our Clients Say
        </h2>

        <div
          className="testimonial-card"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "25px",
            backdropFilter: "blur(20px)",
            padding: "40px 30px",
            boxShadow: "0 0 30px rgba(255,255,255,0.2)",
            position: "relative",
            transition: "all 0.5s ease-in-out",
            color: "#ffffff",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="testimonial-text"
            style={{
              opacity: 1,
              animation: "fadeSlide 0.8s ease-in-out",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "10px" }}>💬</div>
            <p
              style={{
                fontSize: "18px",
                fontStyle: "italic",
                color: "#f8faff",
                marginBottom: "20px",
              }}
            >
              “{testimonials[currentIndex].feedback}”
            </p>
            <h4 style={{ fontWeight: "bold", fontSize: "20px", color: "#ffed4b" }}>
              — {testimonials[currentIndex].name}
            </h4>
            <p style={{ fontSize: "14px", color: "#ffe0f0" }}>
              Project: {testimonials[currentIndex].project}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
            gap: "12px",
          }}
        >
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => goToIndex(index)}
              style={{
                height: "12px",
                width: "12px",
                borderRadius: "50%",
                backgroundColor: currentIndex === index ? "#ffffff" : "#cccccc",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                boxShadow: currentIndex === index ? "0 0 10px #fff" : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Keyframe animation */}
      <style>
        {`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
    </section>
  );
};

export default TestimonialSection;

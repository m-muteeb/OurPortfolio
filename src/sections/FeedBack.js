import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined, UserOutlined, CommentOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/_feedback.scss"; 

const testimonials = [
  {
    name: "Joseph",
    feedback: "Good experience. The web application was delivered on time and exceeded expectations. Highly recommend!",
    project: "Web Application"
  },
  {
    name: "Umair Ahmad",
    feedback: "The food lover project was completed with creativity and precision. Excellent work!",
    project: "Food Lover"
  },
  {
    name: "Ismael Sekhani",
    feedback: "The fitness hub website looks amazing and is very user-friendly. Great job!",
    project: "Fitness Hub"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Adjusted interval to 2 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="testimonial-section">
      <div className="container text-center">
        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item ${index === currentIndex ? "active" : ""}`}
              style={{ 
                display: index === currentIndex ? "block" : "none", // Ensure only the active testimonial is visible
                transition: "opacity 0.5s ease-in-out" // Smooth transition effect
              }}
            >
              <UserOutlined style={{ fontSize: "5rem", color: "white" }} />
              <h3>{testimonial.name}</h3>
              <p className="text-white">{testimonial.feedback}</p>
              <CommentOutlined style={{ fontSize: "2rem", color: "white" }} />
            </div>
          ))}
        </div>
        <div className="arrows">
          <LeftOutlined onClick={goToPrevious} className="prev" />
          <RightOutlined onClick={goToNext} className="next" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

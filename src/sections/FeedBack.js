import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../scss/_feedback.scss";

const testimonials = [
  {
    name: "Syed Arfat Haider",
    initials: "SH",
    feedback:
      "The web application was delivered on time and exceeded all our expectations. The attention to detail was impeccable. Highly recommend!",
    project: "Ambitious Education",
    rating: 5,
    role: "CEO, Ambitious Education"
  },
  {
    name: "Habib Ahmad Khan",
    initials: "HK",
    feedback:
      "An absolutely creative and precise execution on the Gramture project. The team's communication and skill are top-notch. Excellent work!",
    project: "Gramture Branding",
    rating: 5,
    role: "Founder, Gramture"
  },
  {
    name: "Mr. Joseph",
    initials: "MJ",
    feedback:
      "Our fitness hub website is now a central part of our business, thanks to the amazing, user-friendly design. A truly great job!",
    project: "Fitness Hub Web App",
    rating: 5,
    role: "Director, FitLife"
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const goToIndex = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => paginate(1), 6000);
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      filter: "blur(5px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      filter: "blur(5px)",
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <section className="feedback-section" id="Testimonials">
      <div className="feedback-bg-glow"></div>
      <Container>
        {/* Header */}
        <div className="section-header text-center mb-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-uppercase text-sky fw-bold letter-spacing-2 mb-2"
          >
            Client Stories
          </motion.p>
          <motion.h2
            className="display-4 fw-bold text-dark"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by <span className="text-gradient">Visionaries</span>
          </motion.h2>
          <div className="divider mx-auto"></div>
        </div>

        {/* Main Content */}
        <div
          className="testimonial-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons - Absolute centered vertically */}
          <button className="nav-btn prev" onClick={() => paginate(-1)} aria-label="Previous">
            <LeftOutlined />
          </button>
          <button className="nav-btn next" onClick={() => paginate(1)} aria-label="Next">
            <RightOutlined />
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="testimonial-card-premium"
            >
              <div className="quote-icon-large">
                <i className="fa fa-quote-left"></i>
              </div>

              <div className="card-content">
                {/* Stars Removed as requested */}

                <p className="feedback-text-premium">
                  "{currentTestimonial.feedback}"
                </p>

                <div className="client-footer mt-5">
                  <div className="avatar-premium">
                    {currentTestimonial.initials}
                  </div>
                  <div className="client-info">
                    <h4 className="name">{currentTestimonial.name}</h4>
                    <span className="role">{currentTestimonial.role}</span>
                    <span className="project">{currentTestimonial.project}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="dots-premium mt-5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`dot-p ${currentIndex === index ? "active" : ""}`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div className="dot-fill"></div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
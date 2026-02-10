import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import '../scss/_contacts.scss';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onFinish = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_lqbbxck',
        'template_nfmpk4u',
        event.target,
        'V1Hvi4cubJIA5VZyV'
      );
      setSuccess(true);
      event.target.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-uppercase text-sky fw-bold letter-spacing-2 mb-2 small"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            className="display-5 fw-bold text-dark mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Contact <span className="text-gradient">Us</span>
          </motion.h2>
          <p className="text-muted mb-0">We would love to hear from you!</p>
          <div className="divider mx-auto mt-3"></div>
        </div>

        <Row className="g-5">
          {/* Contact Info Card */}
          <Col lg={5}>
            <motion.div
              className="info-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="info-title">Let's Talk</h4>
              <p className="info-desc">
                Have a project in mind? Reach out and let's build something amazing together.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <span className="label">Phone</span>
                    <a href="tel:+923093885154" className="value">+92 309 3885154</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <span className="label">Email</span>
                    <a href="mailto:codenexusltd@gmail.com" className="value">codenexusltd@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-box">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <span className="label">Location</span>
                    <span className="value">Dawami, Riyadh, Saudi Arabia, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/company/code-nexus-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61573819956075" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://wa.me/923093885154" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <motion.div
              className="form-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="form-title">Send Us a Message</h4>

              {success && (
                <div className="success-message">
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={onFinish}>
                <Row className="g-3">
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" id="name" placeholder="John Doe" required />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input type="email" name="email" id="email" placeholder="john@example.com" required />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" name="subject" id="subject" placeholder="How can we help?" required />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <button type="submit" className="submit-btn" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </Col>
                </Row>
              </form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;

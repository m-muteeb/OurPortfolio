import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';  

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        'service_lqbbxck',    // replace with your EmailJS Service ID
        'template_nfmpk4u',   // replace with your EmailJS Template ID
        event.target,
        'V1Hvi4cubJIA5VZyV'        // replace with your EmailJS User ID (public key)
      );

      alert('Your message has been sent. We will contact you soon.');
      event.target.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      id="contact"
      className="container-fluid min-vh-100 py-5" 
      style={{ background: '#040711', color: '#f1f1f1' }}
    >
      <div className="text-center mb-5 animate__animated animate__fadeInDown">
        <h1 className="display-4 fw-bold text-white">Contact Us</h1>
        <p className="lead text-light">We would love to hear from you!</p>
      </div>

      <div
        className="row mx-auto shadow-lg rounded-4 overflow-hidden animate__animated animate__fadeInUp"
        style={{
          maxWidth: '1000px',
          background: 'rgba(255, 255, 255, 0.07)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Contact Info */}
        <div className="col-md-5 p-4 text-white d-flex flex-column justify-content-between" style={{ backgroundColor: '#1f2a40' }}>
          <div>
            <h4 className="fw-bold mb-4 text-white">Get in Touch</h4>
            <p><FontAwesomeIcon icon={faPhone} className="me-2" /> +92 3096829046</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="me-2 text-white" />codenexusltd@gmail.com</p>

            {/* Social Icons */}
            <div className="mt-4 d-flex gap-4 fs-4">
              <a href="https://www.linkedin.com/company/code-nexus-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }} className="hover-effect">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573819956075" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2' }} className="hover-effect">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://wa.me/923096829046" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }} className="hover-effect">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7 p-5 text-white">
          <h4 className="fw-bold mb-4 text-white">Send Us a Message</h4>
          <form onSubmit={onFinish}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-light">Your Name</label>
              <input type="text" name="name" id="name" className="form-control bg-white bg-opacity-25 text-white border-0" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-light">Your Email</label>
              <input type="email" name="email" id="email" className="form-control bg-white bg-opacity-25 text-white border-0" required />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label text-light">Subject</label>
              <input type="text" name="subject" id="subject" className="form-control bg-white bg-opacity-25 text-white border-0" required />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label text-light">Message</label>
              <textarea name="message" id="message" rows="4" className="form-control bg-white bg-opacity-25 text-white border-0" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

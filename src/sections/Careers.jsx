import React, { useState, useEffect } from 'react';
import { supabase } from '../sections/supabaseClient';
import Header from './Header';
import Footer from '../sections/Footer';
import { motion, AnimatePresence } from 'framer-motion';

import './Careers.css';

const Careers = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState({ type: '', message: '' });

    // Form State
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        portfolioLink: '',
        coverLetter: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleApplyClick = (role) => {
        setSelectedRole(role);
        setShowModal(true);
        setFeedback({ type: '', message: '' });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            portfolioLink: '',
            coverLetter: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFeedback({ type: '', message: '' });

        if (!formData.fullName || !formData.email || !formData.phone) {
            setFeedback({ type: 'error', message: 'ERROR: Required fields missing.' });
            setLoading(false);
            return;
        }

        const applicationData = {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            position: selectedRole,
            portfolio_link: formData.portfolioLink,
            cover_letter: formData.coverLetter
        };

        try {
            const { error } = await supabase.from('careers').insert([applicationData]);

            if (error) throw error;

            setFeedback({ type: 'success', message: 'SUCCESS: Transmission Received.' });

            setTimeout(() => {
                handleCloseModal();
            }, 2000);

        } catch (error) {
            console.error('Error submitting application:', error);
            setFeedback({ type: 'error', message: `FATAL: ${error.message}` });
        } finally {
            setLoading(false);
        }
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="careers-page-wrapper">
            {/* HERO SECTION */}
            <section className="careers-hero position-relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                <div className="hero-background">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                    <div className="grid-overlay"></div>
                </div>

                <div className="container position-relative z-2">
                    <div className="row align-items-center">
                        <div className="col-lg-7 text-center text-lg-start">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                                }}
                            >
                                <motion.h1 
                                    className="display-title mb-4 fw-bold"
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                                    style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.1, color: '#fff' }}
                                >
                                    Shape the <br />
                                    <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #00f3ff 0%, #bc13fe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                        Digital Frontier
                                    </span>
                                </motion.h1>

                                <motion.h2 
                                    className="h3 text-light mb-4 fw-light"
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                                >
                                    Join our elite team of <span style={{ color: '#00f3ff' }}>Innovators</span>
                                </motion.h2>

                                <motion.p 
                                    className="lead text-gray mb-5 mx-auto mx-lg-0" 
                                    style={{ maxWidth: '600px', color: '#a1a1aa', fontSize: '1.2rem' }}
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                                >
                                    At CodeNexus, we don't just write code; we engineer the future. 
                                    Collaborate on groundbreaking projects and accelerate your career in a 
                                    culture of excellence.
                                </motion.p>

                                <motion.div 
                                    className="cta-group d-flex justify-content-center justify-content-lg-start gap-3"
                                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                                >
                                    <button 
                                        className="btn-primary-glow"
                                        onClick={() => document.querySelector('.missions-section').scrollIntoView({ behavior: 'smooth' })}
                                        style={{
                                            background: 'linear-gradient(90deg, #bc13fe, #00f3ff)',
                                            border: 'none',
                                            padding: '15px 40px',
                                            color: '#fff',
                                            borderRadius: '50px',
                                            fontWeight: '600',
                                            fontSize: '1.1rem',
                                            boxShadow: '0 10px 30px rgba(188, 19, 254, 0.3)'
                                        }}
                                    >
                                        View Openings
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="col-lg-5 position-relative mt-5 mt-lg-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="visual-container text-center"
                            >
                                <div className="hero-visual-glow" style={{
                                    position: 'relative',
                                    width: '300px',
                                    height: '300px',
                                    margin: '0 auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <motion.div 
                                        className="ring ring-1"
                                        style={{
                                            position: 'absolute', width: '100%', height: '100%',
                                            border: '2px solid rgba(0, 243, 255, 0.3)', borderRadius: '50%',
                                            borderTopColor: '#00f3ff'
                                        }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.div 
                                        className="ring ring-2"
                                        style={{
                                            position: 'absolute', width: '80%', height: '80%',
                                            border: '2px solid rgba(188, 19, 254, 0.3)', borderRadius: '50%',
                                            borderBottomColor: '#bc13fe'
                                        }}
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    />
                                    <div className="icon-center" style={{ fontSize: '5rem', color: '#fff', zIndex: 2 }}>
                                        <i className="fa fa-rocket"></i>
                                    </div>
                                    <div className="glow-core" style={{
                                        position: 'absolute', width: '150px', height: '150px',
                                        background: 'radial-gradient(circle, rgba(0, 243, 255, 0.4), transparent)',
                                        filter: 'blur(40px)'
                                    }}></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <motion.div 
                    className="scroll-indicator"
                    style={{
                        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', opacity: 0.7
                    }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                   
              
                </motion.div>
            </section>

            <Header />

            {/* CULTURE SECTION */}
            <section className="culture-section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <h2 className="section-title">The Nexus DNA</h2>
                    <div className="culture-grid">
                        <motion.div className="culture-card" variants={itemVariants}>
                            <div className="culture-icon"><i className="fa fa-bolt"></i></div>
                            <h3>Innovation First</h3>
                            <p>We don't just follow trends; we set them. We push the boundaries of what's possible with code.</p>
                        </motion.div>
                        <motion.div className="culture-card" variants={itemVariants}>
                            <div className="culture-icon"><i className="fa fa-diamond"></i></div>
                            <h3>Pixel Perfection</h3>
                            <p>Good enough is not enough. We obsess over every pixel, every interaction, every line of code.</p>
                        </motion.div>
                        <motion.div className="culture-card" variants={itemVariants}>
                            <div className="culture-icon"><i className="fa fa-globe"></i></div>
                            <h3>Global Impact</h3>
                            <p>We build software that matters. Solutions that scale. Systems that change lives.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* PERKS SECTION */}
            <section className="perks-section">
                <div className="perks-container">
                    <div className="perk-pill"><i className="fa fa-wifi"></i> Remote-First Culture</div>
                    <div className="perk-pill"><i className="fa fa-graduation-cap"></i> Elite Mentorship</div>
                    <div className="perk-pill"><i className="fa fa-rocket"></i> Cutting-Edge Tech Stack</div>
                    <div className="perk-pill"><i className="fa fa-users"></i> Collaborative Growth</div>
                    <div className="perk-pill"><i className="fa fa-coffee"></i> Flexible Hours</div>
                </div>
            </section>

            {/* MISSIONS SECTION */}
            <section className="missions-section">
                <motion.div
                    className="mission-board"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <h2 className="section-title">Open Missions</h2>

                    <div className="no-jobs-banner">
                        <i className="fa fa-exclamation-triangle"></i> No Full-Time Operative Roles Available.
                    </div>

                    {/* Mission 1 */}
                    <motion.div className="mission-card" variants={itemVariants}>
                        <div className="mission-header">
                            <h3 className="mission-title">Operation: Viral Growth</h3>
                            <div className="mission-tags">
                                <span className="tag freshers">Digital Marketing Intern</span>
                                <span className="tag mentorship">Mentorship-Focused</span>
                            </div>
                        </div>
                        <p className="mission-desc">
                            Master the art of digital presence. Execute high-impact campaigns, analyze data streams, and drive exponential growth.
                        </p>
                        <div className="mission-action">
                            <button className="btn-apply" onClick={() => handleApplyClick('Digital Marketing Intern')}>
                                Initialize Application
                            </button>
                        </div>
                    </motion.div>

                    {/* Mission 2 */}
                    <motion.div className="mission-card" variants={itemVariants}>
                        <div className="mission-header">
                            <h3 className="mission-title">Operation: Sentient Web</h3>
                            <div className="mission-tags">
                                <span className="tag freshers">React JS AI Developer</span>
                                <span className="tag mentorship">Mentorship-Focused</span>
                            </div>
                        </div>
                        <p className="mission-desc">
                            Build the interface of tomorrow. Integrate AI agents into React applications and create fluid, intelligent user experiences.
                        </p>
                        <div className="mission-action">
                            <button className="btn-apply" onClick={() => handleApplyClick('React JS AI Developer')}>
                                Initialize Application
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <div className="modal-title-group">
                                    <h2>Initialize Sequence</h2>
                                    <span className="modal-subtitle">{selectedRole}</span>
                                </div>
                                <button className="close-btn" onClick={handleCloseModal}>
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="application-form">
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Operative Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Enter full designation"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Comms Channel (Email)</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="secure@nexus.com"
                                        />
                                    </div>
                                </div>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Signal Frequency (Phone)</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Portfolio Uplink</label>
                                        <input
                                            type="url"
                                            name="portfolioLink"
                                            value={formData.portfolioLink}
                                            onChange={handleInputChange}
                                            placeholder="https://..."
                                        />
                                    </div>
                                </div>
                                <div className="form-group full-width">
                                    <label>Mission Statement (Cover Letter)</label>
                                    <textarea
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={handleInputChange}
                                        rows="4"
                                        placeholder="Brief us on your capabilities..."
                                    ></textarea>
                                </div>

                                {feedback.message && (
                                    <div className={`feedback-message ${feedback.type}`}>
                                        {feedback.message}
                                    </div>
                                )}

                                <div className="modal-footer">
                                    <button type="button" className="btn-cancel" onClick={handleCloseModal}>
                                        Abort
                                    </button>
                                    <button type="submit" className="btn-submit" disabled={loading}>
                                        {loading ? 'TRANSMITTING...' : 'EXECUTE UPLOAD'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Careers;

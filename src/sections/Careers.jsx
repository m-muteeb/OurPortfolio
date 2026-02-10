import React, { useState, useEffect } from 'react';
import { supabase } from '../sections/supabaseClient';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import './Services/services.css';
import './Careers.css';

const Careers = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState({ type: '', message: '' });

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
        setFormData({ fullName: '', email: '', phone: '', portfolioLink: '', coverLetter: '' });
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
            setFeedback({ type: 'error', message: 'Please fill out all required fields.' });
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
            setFeedback({ type: 'success', message: 'Your application has been submitted successfully.' });
            setTimeout(() => { handleCloseModal(); }, 2000);
        } catch (error) {
            console.error('Error submitting application:', error);
            setFeedback({ type: 'error', message: `Submission failed: ${error.message}` });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="service-wrapper light-theme">
            <Header />
            <main className="service-main">
                <div className="service-container">

                    {/* HERO */}
                    <section className="careers-hero-section animate-in">
                        <div className="careers-hero-content">
                            <span className="careers-badge">We Are Hiring</span>
                            <h1 className="hero-title">
                                Build the Future <br />
                                <span className="hero-title-accent">With Code Nexus</span>
                            </h1>
                            <p className="hero-subtitle">
                                Join our team of engineers, designers, and strategists working on products that impact thousands of users across Pakistan. We value excellence, ownership, and continuous growth.
                            </p>
                            <div className="careers-hero-stats">
                                <div className="careers-stat">
                                    <span className="careers-stat-value">75+</span>
                                    <span className="careers-stat-label">Projects Delivered</span>
                                </div>
                                <div className="careers-stat-divider"></div>
                                <div className="careers-stat">
                                    <span className="careers-stat-value">2</span>
                                    <span className="careers-stat-label">Open Positions</span>
                                </div>
                                <div className="careers-stat-divider"></div>
                                <div className="careers-stat">
                                    <span className="careers-stat-value">100%</span>
                                    <span className="careers-stat-label">Remote Friendly</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* WHY CODE NEXUS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.15s' }}>
                        <h2 className="headline-accent">Why Code Nexus</h2>
                        <div className="content-card">
                            <p className="text-light">
                                Code Nexus is not just a workplace — it is an ecosystem designed for ambitious professionals who want to build meaningful software. We provide the technical challenges, mentorship, and creative freedom that accelerate your career trajectory. Every team member contributes directly to products that serve real users and solve real problems.
                            </p>
                            <p className="text-light" style={{ marginTop: '15px' }}>
                                Whether you are a seasoned developer or a fresh graduate with a hunger to learn, Code Nexus offers a meritocratic environment where your contributions are recognized and your growth is prioritized. We believe in building teams, not just filling positions.
                            </p>
                        </div>
                    </section>

                    {/* OUR CULTURE */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent centered-headline">Our Culture</h2>
                        <p className="text-light" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px auto' }}>
                            The principles that define how we work, collaborate, and grow together as a team.
                        </p>
                        <div className="grid-overview">
                            <div className="process-step-card careers-culture-card">
                                <h4>Innovation First</h4>
                                <p className="text-light">
                                    We do not follow trends — we set them. Every project is an opportunity to push boundaries and explore what technology can achieve when ambition meets execution.
                                </p>
                            </div>
                            <div className="process-step-card careers-culture-card">
                                <h4>Craft and Precision</h4>
                                <p className="text-light">
                                    Good enough is not our standard. We obsess over clean code, pixel-perfect interfaces, and seamless user experiences that reflect our commitment to quality at every level.
                                </p>
                            </div>
                            <div className="process-step-card careers-culture-card">
                                <h4>Impact at Scale</h4>
                                <p className="text-light">
                                    We build software that matters — solutions deployed to real users solving real problems. Every line of code we write is measured by the value it creates for the end user.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* GROWTH OPPORTUNITIES */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">Growth Opportunities</h2>
                        <div className="content-card">
                            <div className="growth-grid">
                                <div className="growth-item">
                                    <div className="growth-number">01</div>
                                    <div className="growth-info">
                                        <h4>Mentorship-Driven Development</h4>
                                        <p className="text-light">Work directly with senior engineers and industry professionals who provide hands-on guidance, code reviews, and career coaching tailored to your individual growth path.</p>
                                    </div>
                                </div>
                                <div className="growth-item">
                                    <div className="growth-number">02</div>
                                    <div className="growth-info">
                                        <h4>Real-World Project Exposure</h4>
                                        <p className="text-light">No mock projects or busywork. From day one, you contribute to live products with real users, real deadlines, and real impact — building a portfolio that speaks for itself.</p>
                                    </div>
                                </div>
                                <div className="growth-item">
                                    <div className="growth-number">03</div>
                                    <div className="growth-info">
                                        <h4>Cutting-Edge Tech Stack</h4>
                                        <p className="text-light">Work with modern tools and frameworks including React, Next.js, Firebase, Supabase, AI/ML integrations, and n8n automation — staying ahead of industry standards.</p>
                                    </div>
                                </div>
                                <div className="growth-item">
                                    <div className="growth-number">04</div>
                                    <div className="growth-info">
                                        <h4>Certification and Recognition</h4>
                                        <p className="text-light">Receive official experience certificates, recommendation letters, and LinkedIn endorsements that validate your contributions and strengthen your professional profile.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* WHAT WE OFFER */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.35s' }}>
                        <h2 className="headline-accent centered-headline">What We Offer</h2>
                        <div className="perks-grid">
                            <div className="perk-card">
                                <span className="perk-label">Remote-First Culture</span>
                                <p className="text-light">Work from anywhere with flexible schedules that respect your productivity rhythms.</p>
                            </div>
                            <div className="perk-card">
                                <span className="perk-label">Collaborative Environment</span>
                                <p className="text-light">Daily standups, pair programming sessions, and open communication channels across teams.</p>
                            </div>
                            <div className="perk-card">
                                <span className="perk-label">Flexible Working Hours</span>
                                <p className="text-light">Results matter more than hours logged. We trust our team to manage their own time effectively.</p>
                            </div>
                            <div className="perk-card">
                                <span className="perk-label">Performance-Based Growth</span>
                                <p className="text-light">Clear pathways from intern to full-time based on measurable contributions and demonstrated skills.</p>
                            </div>
                        </div>
                    </section>

                    {/* OPEN POSITIONS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Open Positions</h2>
                        <p className="text-light" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 20px auto' }}>
                            We are currently accepting applications for the following internship roles. Full-time positions are not available at this time.
                        </p>

                        <div className="no-fulltime-notice">
                            No full-time positions are currently available.
                        </div>

                        {/* Position 1 */}
                        <motion.div
                            className="position-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="position-header">
                                <div>
                                    <h3 className="position-title">Digital Marketing Intern</h3>
                                    <p className="position-subtitle">Operation: Viral Growth</p>
                                </div>
                                <div className="position-tags">
                                    <span className="position-tag internship">Internship</span>
                                    <span className="position-tag mentorship">Mentorship-Focused</span>
                                </div>
                            </div>
                            <p className="text-light position-desc">
                                Master the art of digital presence and data-driven marketing. Execute high-impact campaigns across social media, content platforms, and SEO channels. Analyze audience insights, create compelling content strategies, and drive measurable growth for Code Nexus and its client projects.
                            </p>
                            <div className="position-footer">
                                <div className="position-details">
                                    <span className="detail-tag">Remote</span>
                                    <span className="detail-tag">3-6 Months</span>
                                    <span className="detail-tag">Flexible Hours</span>
                                </div>
                                <button className="btn-apply-light" onClick={() => handleApplyClick('Digital Marketing Intern')}>
                                    Apply Now
                                </button>
                            </div>
                        </motion.div>

                        {/* Position 2 */}
                        <motion.div
                            className="position-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="position-header">
                                <div>
                                    <h3 className="position-title">React JS AI Developer</h3>
                                    <p className="position-subtitle">Operation: Sentient Web</p>
                                </div>
                                <div className="position-tags">
                                    <span className="position-tag internship">Internship</span>
                                    <span className="position-tag mentorship">Mentorship-Focused</span>
                                </div>
                            </div>
                            <p className="text-light position-desc">
                                Build the interface of tomorrow. Integrate AI agents and intelligent automation into React-based applications. Create fluid, responsive user experiences powered by machine learning models, natural language processing, and modern web technologies.
                            </p>
                            <div className="position-footer">
                                <div className="position-details">
                                    <span className="detail-tag">Remote</span>
                                    <span className="detail-tag">3-6 Months</span>
                                    <span className="detail-tag">AI / ML Focus</span>
                                </div>
                                <button className="btn-apply-light" onClick={() => handleApplyClick('React JS AI Developer')}>
                                    Apply Now
                                </button>
                            </div>
                        </motion.div>
                    </section>

                </div>
            </main>

            {/* APPLICATION MODAL */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="careers-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            className="careers-modal-content"
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="careers-modal-header">
                                <div>
                                    <h2>Apply for Position</h2>
                                    <span className="careers-modal-role">{selectedRole}</span>
                                </div>
                                <button className="careers-close-btn" onClick={handleCloseModal}>x</button>
                            </div>

                            <form onSubmit={handleSubmit} className="careers-form">
                                <div className="careers-form-grid">
                                    <div className="careers-form-group">
                                        <label>Full Name *</label>
                                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required placeholder="Your full name" />
                                    </div>
                                    <div className="careers-form-group">
                                        <label>Email Address *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div className="careers-form-grid">
                                    <div className="careers-form-group">
                                        <label>Phone Number *</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+92 300 0000000" />
                                    </div>
                                    <div className="careers-form-group">
                                        <label>Portfolio / LinkedIn</label>
                                        <input type="url" name="portfolioLink" value={formData.portfolioLink} onChange={handleInputChange} placeholder="https://..." />
                                    </div>
                                </div>
                                <div className="careers-form-group">
                                    <label>Cover Letter</label>
                                    <textarea name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} rows="4" placeholder="Tell us about yourself and why you are a great fit..."></textarea>
                                </div>

                                {feedback.message && (
                                    <div className={`careers-feedback ${feedback.type}`}>
                                        {feedback.message}
                                    </div>
                                )}

                                <div className="careers-modal-footer">
                                    <button type="button" className="btn-modal-cancel" onClick={handleCloseModal}>Cancel</button>
                                    <button type="submit" className="btn-modal-submit" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Submit Application'}
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

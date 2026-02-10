import React, { useEffect } from 'react';
import { FaArrowLeft, FaBook, FaLaptopCode, FaUserGraduate, FaCertificate, FaTasks } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import '../Services/services.css'; // Reusing services CSS for consistent UI
import heroVideo from '../../assets/ambitiousvideo1.mp4';
import featureVideo from '../../assets/ambitiousvideo2.mp4';

const AmbitiousCaseStudy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-wrapper light-theme">
            <HashLink to="/#Projects" className="floating-button floating-back-button" aria-label="Back to projects" smooth>
                <FaArrowLeft />
            </HashLink>
            <Header />
            <main className="service-main">
                <div className="service-container">
                    {/* HERO SECTION - SPLIT LAYOUT */}
                    <section className="hero-split-layout animate-in">
                        <div className="hero-split-text">
                            <h1 className="hero-title">
                                Ambitious Pk: <br /><span className="hero-title-accent">The Future of Digital Learning</span>
                            </h1>
                            <p className="hero-subtitle">
                                A comprehensive Learning Management System empowering students with access to 5000+ notes, online test series, and a robust certification platform.
                            </p>
                        </div>
                        <div className="hero-split-video">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="hero-video-transparent"
                            >
                                <source src={heroVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    {/* PROBLEM & SOLUTION */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">The Challenge & Solution</h2>
                        <div className="content-card">
                            <div className="grid-overview">
                                <div className="overview-item full-width-mobile">
                                    <h3>🚫 The Problem</h3>
                                    <p>Students often struggle to find reliable, organized study materials. Quality notes are scattered across various platforms, and there is a lack of centralized testing and certification systems.</p>
                                </div>
                                <div className="overview-item full-width-mobile">
                                    <h3>✅ The Solution</h3>
                                    <p><b>Ambitious Pk</b> centralizes education. A dual-platform (Web & Mobile) solution where students can download notes, take MCQ tests, manage profiles, and earn verified certificates.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* KEY FEATURES */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">Key Capabilities</h2>
                        <div className="content-card">
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check"><FaBook /></span> <b>Extensive Library:</b> Access to over 5,000+ curated study notes and resources.</li>
                                <li><span className="icon-list-check"><FaLaptopCode /></span> <b>Online Test Series:</b> Robust MCQ engine for practice and assessment exams.</li>
                                <li><span className="icon-list-check"><FaUserGraduate /></span> <b>Student Profiles:</b> Personalized dashboards tracking progress, downloads, and test results.</li>
                                <li><span className="icon-list-check"><FaCertificate /></span> <b>Certification System:</b> Automated certificate generation upon successful course/test completion.</li>
                                <li><span className="icon-list-check"><FaTasks /></span> <b>Notes Management:</b> Seamless upload, categorization, and retrieval system for administrators.</li>
                            </ul>
                        </div>
                    </section>

                    {/* FEATURE VIDEO */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Platform Tour</h2>
                        <div className="video-container-large" style={{ marginTop: '30px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: '100%', display: 'block' }}
                            >
                                <source src={featureVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    {/* PROCESS FLOW */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent centered-headline">How It Works</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Explore & Download</h4>
                                <p className="text-light">
                                    Students browse the vast library of notes, filtered by subject, grade, and topic, for instant PDF download.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>2. Take Tests</h4>
                                <p className="text-light">
                                    Users participate in scheduled or practice MCQ-based tests to assess their knowledge and preparation.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>3. Track Progress</h4>
                                <p className="text-light">
                                    The system automatically grades tests, updates student profiles, and highlights areas for improvement.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>4. Get Certified</h4>
                                <p className="text-light">
                                    Upon passing threshold scores, verifiable certificates are awarded to validate the student's achievement.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AmbitiousCaseStudy;

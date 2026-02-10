import React, { useEffect } from 'react';
import { FaArrowLeft, FaCheck, FaRocket, FaClock, FaCogs } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import '../Services/services.css'; // Reusing services CSS for consistent UI
import heroVideo from '../../assets/testnologyvideo1.mp4';
import featureVideo from '../../assets/testnolgoyvideo2.mp4'; // Note: matches actual filename opacity

const TestnologyCaseStudy = () => {
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
                                Testnology: <br /><span className="hero-title-accent">AI-Powered Automated Testing</span>
                            </h1>
                            <p className="hero-subtitle">
                                Revolutionizing assessment creation by generating comprehensive tests from 3 different sources in just 5 seconds, saving educators countless hours.
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
                                    <p>Manual test generation is time-consuming and prone to repetition. Educators spend hours creating high-quality quizzes and exams, limiting time for student interaction.</p>
                                </div>
                                <div className="overview-item full-width-mobile">
                                    <h3>✅ The Solution</h3>
                                    <p>A web and mobile app that auto-generates tests with <b>41 distinct features</b> in under <b>5 seconds</b>. Utilizing AI to process data from Text, PDF, or Topic inputs.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* KEY FEATURES */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">Key Capabilities</h2>
                        <div className="content-card">
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check"><FaRocket /></span> <b>Rapid Generation:</b> Create full-length tests from any source material in less than 5 seconds.</li>
                                <li><span className="icon-list-check"><FaCogs /></span> <b>41+ Test Features:</b> Multiple question types including MCQs, True/False, Fill in Blanks, and more.</li>
                                <li><span className="icon-list-check"><FaClock /></span> <b>AI Scheduling:</b> Intelligent test scheduling and reminder system for students and teachers.</li>
                                <li><span className="icon-list-check"><FaCheck /></span> <b>Multi-Source Input:</b> Generate content from direct text input, PDF documents, or specific topics.</li>
                                <li><span className="icon-list-check"><FaCheck /></span> <b>Cross-Platform:</b> Seamless experience across both Web and Mobile applications.</li>
                            </ul>
                        </div>
                    </section>

                    {/* FEATURE VIDEO */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Platform Demo</h2>
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
                                <h4>1. Input Source</h4>
                                <p className="text-light">
                                    User provides input via Text, PDF upload, or selects a specific Topic.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>2. AI Processing</h4>
                                <p className="text-light">
                                    Our advanced AI engine analyzes the content and extracts key concepts and questions.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>3. Test Generation</h4>
                                <p className="text-light">
                                    The system formats questions into 41+ different styles and compiles the final test.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>4. Analysis & Results</h4>
                                <p className="text-light">
                                    Tests are deployed, taken, and instantly graded with detailed performance analytics.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* USE CASE DIAGRAMS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent">System Architecture</h2>
                        <div className="content-card">
                            <p className="text-light">
                                The Testnology architecture is built on a robust microservices framework. The Use Case model distinguishes between Admin, Teacher, and Student roles, ensuring secure and streamlined access to relevant features.
                                <br /><br />
                                <b>Core Modules:</b>
                                <br />• <b>Authentication Service:</b> Secure login/signup via Firebase.
                                <br />• <b>Generator Engine:</b> Python/Node.js based NLP processing for question extraction.
                                <br />• <b>Scheduler:</b> Cron-based job management for test availability.
                                <br />• <b>Analytics Dashboard:</b> Real-time visualization of student performance.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TestnologyCaseStudy;

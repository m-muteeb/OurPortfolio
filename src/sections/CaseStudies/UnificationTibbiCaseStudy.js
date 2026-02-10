import React, { useEffect } from 'react';
import { FaArrowLeft, FaUserMd, FaCalendarAlt, FaShoppingCart, FaComments, FaGlobe } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import '../Services/services.css'; // Reusing services CSS for consistent UI
import heroVideo from '../../assets/unificationtibbivideo2.mp4';
import featureVideo from '../../assets/unificationtibbivideo1.mp4';

const UnificationTibbiCaseStudy = () => {
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
                                Unification Tibbi: <br /><span className="hero-title-accent">Connecting Healers Nationwide</span>
                            </h1>
                            <p className="hero-subtitle">
                                An extensive intercommunication platform uniting over 16,000 Homeopathic doctors across Pakistan, facilitating commerce, events, and professional networking.
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
                                    <p>The Homeopathic community in Pakistan was fragmented. Doctors lacked a centralized platform to communicate, share knowledge, access medicines/books, and organize professional gatherings.</p>
                                </div>
                                <div className="overview-item full-width-mobile">
                                    <h3>✅ The Solution</h3>
                                    <p>A unified digital ecosystem. We built a robust web application that serves as a social network, marketplace, and event hub, bringing <b>16,000+ doctors</b> under one digital roof.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* KEY FEATURES */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">Key Capabilities</h2>
                        <div className="content-card">
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check"><FaUserMd /></span> <b>Massive Network:</b> Database and networking features supporting over 16,000 registered doctors.</li>
                                <li><span className="icon-list-check"><FaCalendarAlt /></span> <b>Events Management:</b> Comprehensive tools for organizing, promoting, and managing medical seminars and workshops.</li>
                                <li><span className="icon-list-check"><FaShoppingCart /></span> <b>E-Commerce Store:</b> Dedicated marketplace for Tibb medicines and medical literature (Books).</li>
                                <li><span className="icon-list-check"><FaComments /></span> <b>Intercommunication:</b> Real-time chat and forums for professional discussion and case sharing.</li>
                                <li><span className="icon-list-check"><FaGlobe /></span> <b>National Reach:</b> specific features designed to serve doctors across all provinces of Pakistan.</li>
                            </ul>
                        </div>
                    </section>

                    {/* FEATURE VIDEO */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Platform Overview</h2>
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
                        <h2 className="headline-accent centered-headline">Ecosystem Flow</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Connect</h4>
                                <p className="text-light">
                                    Doctors register and create professional profiles, instantly connecting with the nationwide directory of peers.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>2. Collaborate</h4>
                                <p className="text-light">
                                    Through forums and direct messaging, practitioners discuss complex cases and share treatment methodologies.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>3. Equip</h4>
                                <p className="text-light">
                                    The integrated store allows for easy purchasing of essential medicines and educational books, delivered to their clinics.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>4. Gather</h4>
                                <p className="text-light">
                                    The foundation organizes large-scale events, managed entirely through the platform from ticketing to attendance.
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

export default UnificationTibbiCaseStudy;

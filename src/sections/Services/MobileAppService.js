import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';
import mobileAppVideo from '../../assets/mobileapp.mp4';

const MobileAppService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-wrapper light-theme">
            {/* Floating Back Button */}
            <HashLink
                to="/#Expertise"
                className="floating-button floating-back-button"
                aria-label="Back to services"
                smooth
            >
                <FaArrowLeft />
            </HashLink>

            <Header />

            <main className="service-main">
                <div className="service-container">
                    {/* HERO SECTION - SPLIT LAYOUT */}
                    <section className="hero-split-layout animate-in">
                        <div className="hero-split-text">
                            <h1 className="hero-title">
                                Mobile App Development: <br /><span className="hero-title-accent">Native & Cross-Platform Excellence</span>
                            </h1>
                            <p className="hero-subtitle">
                                From concept to launch, we build stunning, high-performance mobile applications that captivate users and drive business growth across iOS, Android, and cross-platform ecosystems.
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
                                <source src={mobileAppVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    {/* SERVICE OVERVIEW */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Service Overview</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                In today's mobile-first world, a powerful app is essential for business success. Our mobile app development service delivers enterprise-grade applications that combine stunning design with flawless functionality. We specialize in native iOS and Android development, as well as cross-platform solutions using React Native and Flutter, ensuring your app reaches the widest possible audience while maintaining exceptional performance and user experience.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item">
                                    <h3>Platforms</h3>
                                    <p>iOS, Android, Cross-Platform</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Timeline</h3>
                                    <p>8-16 Weeks</p>
                                </div>
                                <div className="overview-item">
                                    <h3>App Types</h3>
                                    <p>Consumer, Enterprise, E-commerce</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Post-Launch</h3>
                                    <p>Maintenance & Updates</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* WHAT WE DELIVER */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent">What We Deliver</h2>
                        <div className="content-card">
                            <p className="text-light">
                                Our comprehensive mobile app development service includes:
                            </p>
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Native iOS Development:</b> Swift/SwiftUI apps optimized for iPhone and iPad with perfect App Store compliance.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Native Android Development:</b> Kotlin/Java apps designed for seamless Google Play integration.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Cross-Platform Solutions:</b> React Native and Flutter apps for simultaneous iOS/Android deployment.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>UI/UX Design:</b> Intuitive, beautiful interfaces that follow platform-specific guidelines.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Backend Integration:</b> Secure APIs, cloud services, and database architecture.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>App Store Optimization:</b> Strategic ASO for maximum visibility and downloads.</li>
                            </ul>
                        </div>
                    </section>

                    {/* OUR PROCESS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent centered-headline">Our Development Process</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Discovery & Planning</h4>
                                <p className="text-light">
                                    We start with comprehensive stakeholder interviews to understand your vision, target audience, and business goals. Through competitive analysis and market research, we identify opportunities and define a clear product roadmap. This phase includes feature prioritization, platform selection (native vs. cross-platform), and creating detailed wireframes.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.6s' }}>
                                <h4>2. Design & Prototyping</h4>
                                <p className="text-light">
                                    Our designers craft pixel-perfect mockups that bring your vision to life. We create interactive prototypes for user testing, ensuring every interaction feels natural and intuitive. Design systems are established to maintain consistency across screens, with careful attention to iOS Human Interface Guidelines and Material Design principles.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.7s' }}>
                                <h4>3. Development & Integration</h4>
                                <p className="text-light">
                                    Using agile sprints, we build your app feature by feature, ensuring code quality through continuous integration and automated testing. Backend services are integrated seamlessly, with robust security measures and scalable architecture. Real-time collaboration keeps you informed of progress at every milestone.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.8s' }}>
                                <h4>4. Testing & Launch</h4>
                                <p className="text-light">
                                    Rigorous QA testing across devices ensures flawless performance. We handle App Store and Google Play submissions, including all required assets and compliance documentation. Post-launch monitoring identifies and resolves any issues immediately, with continuous optimization based on user feedback and analytics.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* TECH STACK */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.9s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>
                                We leverage cutting-edge technologies to build robust, scalable mobile applications:
                            </p>
                            <div>
                                <span className="tech-badge">Swift & SwiftUI</span>
                                <span className="tech-badge">Kotlin & Jetpack Compose</span>
                                <span className="tech-badge">React Native</span>
                                <span className="tech-badge">Flutter</span>
                                <span className="tech-badge">Firebase</span>
                                <span className="tech-badge">AWS Mobile</span>
                                <span className="tech-badge">GraphQL & REST APIs</span>
                                <span className="tech-badge">Redux & MobX</span>
                            </div>
                        </div>
                    </section>

                    {/* WHY CHOOSE US */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.0s' }}>
                        <h2 className="headline-accent">Why Choose Our Mobile App Service</h2>
                        <div className="content-card">
                            <p className="text-light">
                                We stand out in mobile app development through:
                            </p>
                            <ul className="styled-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Platform Expertise:</b> Deep knowledge of iOS and Android ecosystems with certified developers.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>User-Centric Design:</b> Every interaction is crafted for maximum engagement and conversion.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Performance Optimization:</b> Lightning-fast load times and smooth animations on all devices.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Security First:</b> Bank-level encryption and compliance with GDPR, HIPAA, and industry standards.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Scalable Architecture:</b> Built to handle growth from hundreds to millions of users.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Continuous Support:</b> Ongoing maintenance, updates, and feature enhancements post-launch.</li>
                            </ul>
                        </div>
                    </section>

                    {/* IDEAL FOR */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.1s' }}>
                        <h2 className="headline-accent">Perfect For</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>
                                Our mobile app development service is ideal for:
                            </p>
                            <ul className="styled-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Startups</b> launching innovative consumer or B2B apps</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>E-commerce businesses</b> expanding to mobile channels</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Enterprises</b> building internal tools and productivity apps</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Healthcare providers</b> creating HIPAA-compliant patient portals</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Fintech companies</b> developing secure banking and payment solutions</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Content creators</b> building engaging media and social platforms</li>
                            </ul>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MobileAppService;

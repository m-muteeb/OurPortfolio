import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';
import webDevVideo from '../../assets/web.mp4';

const WebDevService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-wrapper light-theme">
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
                                Web Development: <br /><span className="hero-title-accent">Enterprise-Grade Digital Solutions</span>
                            </h1>
                            <p className="hero-subtitle">
                                From responsive websites to complex web applications, we build scalable, secure, and lightning-fast digital experiences that drive business growth and user engagement.
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
                                <source src={webDevVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    {/* OVERVIEW */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Service Overview</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                Your website is often the first point of contact for potential customers. We create web solutions that make a lasting impression. Our expertise spans full-stack development, e-commerce platforms, and progressive web apps (PWAs), ensuring your digital presence is not just beautiful, but also robust, secure, and optimized for search engines.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item">
                                    <h3>Focus</h3>
                                    <p>Performance & Scale</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Timeline</h3>
                                    <p>6-14 Weeks</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Tech</h3>
                                    <p>React, Next.js, Node</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Support</h3>
                                    <p>24/7 Monitoring</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* WHAT WE DELIVER */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">What We Deliver</h2>
                        <div className="content-card">
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Responsive Websites:</b> Mobile-first designs that look perfect on every device and screen size.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>E-commerce Platforms:</b> Fully-featured online stores with payment gateways and inventory management.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Web Applications:</b> Custom SaaS platforms, dashboards, and business tools built with modern frameworks.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>CMS Integration:</b> Headless CMS solutions for easy content management and dynamic updates.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>API Development:</b> RESTful and GraphQL APIs for seamless third-party integrations.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Progressive Web Apps:</b> Offline-capable PWAs that deliver app-like experiences in the browser.</li>
                            </ul>
                        </div>
                    </section>

                    {/* PROCESS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Our Development Process</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Requirements & Strategy</h4>
                                <p className="text-light">
                                    Deep dive into your business goals, target audience, and technical requirements. We conduct stakeholder interviews, competitive analysis, and define a comprehensive project scope with clear milestones and deliverables.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>2. Architecture & Design</h4>
                                <p className="text-light">
                                    Create scalable system architecture and stunning UI/UX designs. We develop wireframes, high-fidelity mockups, and interactive prototypes, selecting the optimal tech stack for performance and maintainability.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>3. Development & Testing</h4>
                                <p className="text-light">
                                    Agile development sprints with continuous integration and deployment. Comprehensive testing including unit, integration, and end-to-end tests ensures rock-solid reliability and performance across all browsers.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>4. Deployment & Support</h4>
                                <p className="text-light">
                                    Seamless deployment to cloud infrastructure with CI/CD pipelines. Ongoing monitoring, performance optimization, security updates, and feature enhancements ensure your web presence stays cutting-edge.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* TECH STACK */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>
                                Modern, battle-tested technologies for enterprise-grade solutions:
                            </p>
                            <div>
                                <span className="tech-badge">React.js & Next.js</span>
                                <span className="tech-badge">Node.js & Express</span>
                                <span className="tech-badge">Vue.js & Nuxt.js</span>
                                <span className="tech-badge">TypeScript</span>
                                <span className="tech-badge">MongoDB & PostgreSQL</span>
                                <span className="tech-badge">AWS & Azure</span>
                                <span className="tech-badge">Docker & Kubernetes</span>
                                <span className="tech-badge">GraphQL & REST</span>
                            </div>
                        </div>
                    </section>

                    {/* WHY CHOOSE US */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent">Why Choose Our Web Development Service</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li>**Performance First:** Optimized for Core Web Vitals ensuring lightning-fast load times and SEO success.</li>
                                <li>**Security Hardened:** OWASP compliance, SSL encryption, and regular security audits protect your data.</li>
                                <li>**Scalable Architecture:** Built to handle traffic spikes and business growth without breaking a sweat.</li>
                                <li>**SEO Optimized:** Server-side rendering, structured data, and technical SEO best practices built-in.</li>
                                <li>**Accessibility Compliant:** WCAG 2.1 AA standards ensuring your web app is usable by everyone.</li>
                                <li>**Cross-Browser Compatible:** Flawless experience across Chrome, Safari, Firefox, and Edge.</li>
                            </ul>
                        </div>
                    </section>

                    {/* IDEAL FOR */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.7s' }}>
                        <h2 className="headline-accent">Perfect For</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li>**Enterprises** needing custom web applications and portals</li>
                                <li>**E-commerce businesses** launching or scaling online stores</li>
                                <li>**SaaS companies** building subscription-based platforms</li>
                                <li>**Agencies** requiring white-label development partners</li>
                                <li>**Startups** creating MVPs and product prototypes</li>
                                <li>**Businesses** modernizing legacy systems with new web interfaces</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default WebDevService;

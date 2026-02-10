import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';
import saasVideo from '../../assets/saas.mp4';

const SaaSService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-wrapper light-theme">
            <HashLink to="/#Expertise" className="floating-button floating-back-button" aria-label="Back to services" smooth>
                <FaArrowLeft />
            </HashLink>
            <Header />
            <main className="service-main">
                <div className="service-container">
                    {/* HERO SECTION - SPLIT LAYOUT */}
                    <section className="hero-split-layout animate-in">
                        <div className="hero-split-text">
                            <h1 className="hero-title">
                                SaaS Development: <br /><span className="hero-title-accent">Subscription-Ready Platforms</span>
                            </h1>
                            <p className="hero-subtitle">
                                Build scalable, cloud-native SaaS applications with robust multi-tenant architecture, secure billing, and seamless integrations that drive recurring revenue and growth.
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
                                <source src={saasVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Service Overview</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                We transform ideas into fully-featured subscription platforms. Our end-to-end SaaS development covers everything from multi-tenant architecture and secure payment gateways to user analytics and admin dashboards. We ensure your platform is scalable, secure, and ready for enterprise adoption.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item"><h3>Model</h3><p>Multi-Tenant</p></div>
                                <div className="overview-item"><h3>Timeline</h3><p>12-24 Weeks</p></div>
                                <div className="overview-item"><h3>Billing</h3><p>Stripe / PayPal</p></div>
                                <div className="overview-item"><h3>Scale</h3><p>Auto-Scaling Cloud</p></div>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">What We Deliver</h2>
                        <div className="content-card">
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Multi-Tenant Architecture:</b> Secure data isolation with efficient resource sharing across customers.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Subscription Management:</b> Flexible billing, tiered pricing, trial periods, and usage tracking.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>User Authentication:</b> SSO, OAuth, SAML integration for enterprise customers.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Analytics Dashboard:</b> Real-time metrics on user engagement, revenue, and feature adoption.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>API Ecosystem:</b> RESTful/GraphQL APIs for third-party integrations and webhooks.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Admin Portal:</b> Comprehensive control panel for customer management and support.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Our Development Process</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Strategy & Specs</h4>
                                <p className="text-light">
                                    We start by defining your target audience, pricing models, and key features. We create detailed technical specifications for multi-tenancy, security, and scalability.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>2. Architecture & Design</h4>
                                <p className="text-light">
                                    Designing a robust cloud architecture. We create intuitive UI/UX designs for both the customer-facing application and the administrative backend.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>3. MVP Development</h4>
                                <p className="text-light">
                                    Rapidly building the core product with essential features. We integrate payment gateways, set up user management, and deploy the initial version for beta testing.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>4. Scale & Optimize</h4>
                                <p className="text-light">
                                    Based on user feedback, we iterate and enhance the platform. We implement advanced features, optimize performance, and ensure the infrastructure scales with your user base.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>Enterprise SaaS technologies:</p>
                            <div>
                                <span className="tech-badge">Next.js & React</span>
                                <span className="tech-badge">Node.js & Python</span>
                                <span className="tech-badge">PostgreSQL & MongoDB</span>
                                <span className="tech-badge">Stripe & PayPal</span>
                                <span className="tech-badge">AWS & Google Cloud</span>
                                <span className="tech-badge">Redis & ElasticSearch</span>
                                <span className="tech-badge">Docker & Kubernetes</span>
                                <span className="tech-badge">Segment & Mixpanel</span>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent">Why Choose Our SaaS Service</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><b>SaaS Expertise:</b> Deep experience building subscription platforms across various industries.</li>
                                <li><b>Revenue Optimization:</b> Built-in analytics and A/B testing to maximize conversion and retention.</li>
                                <li><b>Enterprise Ready:</b> SOC 2 compliance, audit logs, and advanced security for corporate clients.</li>
                                <li><b>Scalable from Day One:</b> Architecture designed to handle rapid user growth without re-platforming.</li>
                                <li><b>Integration Ecosystem:</b> Pre-built connectors for popular business tools and APIs.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.7s' }}>
                        <h2 className="headline-accent">Perfect For</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><b>Entrepreneurs</b> launching B2B or B2C SaaS products</li>
                                <li><b>Agencies</b> offering white-label SaaS solutions to clients</li>
                                <li><b>Businesses</b> transitioning from licensed software to subscription models</li>
                                <li><b>Startups</b> building vertical SaaS for niche markets</li>
                                <li><b>Enterprises</b> creating internal platforms with multi-department access</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SaaSService;

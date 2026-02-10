import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';
import uiuxVideo from '../../assets/uiux.mp4';

const UIUXService = () => {
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
                                UI/UX Design: <br /><span className="hero-title-accent">User-Centered Digital Experiences</span>
                            </h1>
                            <p className="hero-subtitle">
                                Create intuitive, beautiful interfaces that delight users and drive conversions through data-driven design, comprehensive user research, and pixel-perfect execution.
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
                                <source src={uiuxVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Service Overview</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                Great design isn't just about aesthetics—it's about solving user problems and achieving business goals. Our UI/UX design service combines user research, interaction design, and visual artistry to create digital experiences that users love and businesses profit from.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item"><h3>Approach</h3><p>User-Centered Design</p></div>
                                <div className="overview-item"><h3>Timeline</h3><p>4-10 Weeks</p></div>
                                <div className="overview-item"><h3>Deliverables</h3><p>Wireframes to Prototypes</p></div>
                                <div className="overview-item"><h3>Tools</h3><p>Figma, Adobe XD</p></div>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">What We Deliver</h2>
                        <div className="content-card">
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>User Research:</b> Interviews, surveys, and usability testing to understand your users' needs and pain points.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Information Architecture:</b> Sitemaps and user flows that create logical, intuitive navigation structures.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Wireframes & Prototypes:</b> Low and high-fidelity mockups with interactive prototypes for testing.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Visual Design:</b> Pixel-perfect UI designs with comprehensive design systems and style guides.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Usability Testing:</b> Iterative testing with real users to validate and refine design decisions.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Design Handoff:</b> Developer-ready assets, specifications, and design tokens for seamless implementation.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Our Design Process</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Discovery & Research</h4>
                                <p className="text-light">
                                    Comprehensive user research including stakeholder interviews, competitive analysis, and persona development. We identify user goals, pain points, and opportunities through data collection and analysis.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>2. Ideation & Wireframing</h4>
                                <p className="text-light">
                                    Collaborative ideation sessions generate creative solutions. Low-fidelity wireframes map out information architecture and user flows. Rapid prototyping allows for quick iteration before visual design begins.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>3. Visual Design</h4>
                                <p className="text-light">
                                    High-fidelity mockups bring the interface to life with color, typography, and imagery. Comprehensive design systems ensure consistency. Interactive prototypes demonstrate animations and micro-interactions.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>4. Testing & Iteration</h4>
                                <p className="text-light">
                                    Usability testing with target users identifies friction points. A/B testing validates design decisions with data. Continuous refinement based on feedback ensures optimal user experience before development.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Design Tools & Deliverables</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>Industry-leading design tools:</p>
                            <div>
                                <span className="tech-badge">Figma</span>
                                <span className="tech-badge">Adobe XD</span>
                                <span className="tech-badge">Sketch</span>
                                <span className="tech-badge">Adobe Creative Suite</span>
                                <span className="tech-badge">Principle & ProtoPie</span>
                                <span className="tech-badge">InVision</span>
                                <span className="tech-badge">Zeplin & Avocode</span>
                                <span className="tech-badge">Hotjar & UserTesting</span>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent">Why Choose Our UI/UX Service</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Data-Driven Design:</b> Every decision backed by user research and analytics, not guesswork.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Conversion Focused:</b> Designs optimized for engagement, retention, and revenue generation.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Accessibility First:</b> WCAG 2.1 AA compliance ensures inclusivity for all users.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Responsive Excellence:</b> Pixel-perfect designs across mobile, tablet, and desktop.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Design Systems:</b> Scalable component libraries that accelerate future development.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.7s' }}>
                        <h2 className="headline-accent">Perfect For</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Startups</b> creating MVPs that wow investors and early users</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>E-commerce</b> businesses optimizing checkout flows and product pages</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>SaaS companies</b> improving onboarding and reducing churn</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Enterprises</b> redesigning legacy applications for modern users</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Agencies</b> needing white-label design services for clients</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default UIUXService;

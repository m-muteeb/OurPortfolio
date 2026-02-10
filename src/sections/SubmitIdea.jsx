import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Services/services.css';
import './SubmitIdea.css';

const SubmitIdea = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="service-wrapper light-theme" id="submitidea">
            <Header />
            <main className="service-main">
                <div className="service-container">

                    {/* HERO SECTION */}
                    <section className="idea-hero-section animate-in">
                        <div className="idea-hero-content">
                            <span className="idea-badge">Idea2Impact</span>
                            <h1 className="hero-title">
                                Where Ideas Become <br />
                                <span className="hero-title-accent">Market-Defining Products</span>
                            </h1>
                            <p className="hero-subtitle">
                                Code Nexus's flagship innovation program that empowers visionaries to transform raw concepts into fully-realized, scalable software solutions — backed by mentorship, development resources, and strategic partnership.
                            </p>
                            <div className="idea-hero-stats">
                                <div className="hero-stat">
                                    <span className="hero-stat-value">50+</span>
                                    <span className="hero-stat-label">Submissions Received</span>
                                </div>
                                <div className="hero-stat-divider"></div>
                                <div className="hero-stat">
                                    <span className="hero-stat-value">3</span>
                                    <span className="hero-stat-label">Projects Selected</span>
                                </div>
                                <div className="hero-stat-divider"></div>
                                <div className="hero-stat">
                                    <span className="hero-stat-value">2025</span>
                                    <span className="hero-stat-label">Cohort Year</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ABOUT THE PROGRAM */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.15s' }}>
                        <h2 className="headline-accent">About the Program</h2>
                        <div className="content-card">
                            <p className="text-light">
                                Idea2Impact is Code Nexus's premier innovation accelerator designed to identify, evaluate, and incubate the most promising software ideas from emerging talent across Pakistan. The program provides a comprehensive ecosystem — from initial concept validation and feasibility analysis to full-stack development, mentorship, and go-to-market strategy.
                            </p>
                            <p className="text-light" style={{ marginTop: '15px' }}>
                                Each submission is rigorously evaluated on a 100-point scale across five dimensions: <b>Innovation & Originality</b>, <b>Technical Feasibility</b>, <b>Market Potential</b>, <b>Scalability</b>, and <b>Presentation Quality</b>. The top-scoring ideas receive full development support, strategic mentorship, and a pathway to launch under the Code Nexus ecosystem.
                            </p>
                        </div>
                    </section>

                    {/* THE CATALYST ECOSYSTEM */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">The Catalyst Ecosystem</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card idea-ecosystem-card">
                                <h4>Elite Mentorship</h4>
                                <p className="text-light">
                                    Gain unparalleled access to a curated network of industry leaders, serial entrepreneurs, and domain-specific experts who are personally invested in your success and growth trajectory.
                                </p>
                            </div>
                            <div className="process-step-card idea-ecosystem-card">
                                <h4>Revenue Architecture</h4>
                                <p className="text-light">
                                    From concept to cash flow. We architect sustainable monetization models, subscription frameworks, and go-to-market strategies that transform innovative ideas into profitable, scalable ventures.
                                </p>
                            </div>
                            <div className="process-step-card idea-ecosystem-card">
                                <h4>Velocity Engine</h4>
                                <p className="text-light">
                                    Leverage our proprietary growth frameworks, market-entry strategies, and extensive professional network to achieve exponential traction, user acquisition, and product-market fit.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* THE ASCENT PROTOCOL */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent centered-headline">The Ascent Protocol</h2>
                        <p className="text-light" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px auto' }}>
                            Our structured six-phase journey takes your idea from raw concept to market-ready product.
                        </p>
                        <div className="grid-overview idea-process-grid">
                            <div className="process-step-card idea-step">
                                <div className="idea-step-number">01</div>
                                <h4>Submit Blueprint</h4>
                                <p className="text-light">
                                    Articulate your vision through our detailed submission portal with a clear problem statement and proposed solution architecture.
                                </p>
                            </div>
                            <div className="process-step-card idea-step">
                                <div className="idea-step-number">02</div>
                                <h4>Deep Dive Analysis</h4>
                                <p className="text-light">
                                    Our panel of experts assesses your idea across innovation, technical feasibility, market disruption potential, and scalability metrics.
                                </p>
                            </div>
                            <div className="process-step-card idea-step">
                                <div className="idea-step-number">03</div>
                                <h4>Alliance Proposal</h4>
                                <p className="text-light">
                                    Present your refined vision to our leadership board and secure a strategic partnership with clearly aligned objectives.
                                </p>
                            </div>
                            <div className="process-step-card idea-step">
                                <div className="idea-step-number">04</div>
                                <h4>Forge Partnership</h4>
                                <p className="text-light">
                                    Formalize the alliance — defining shared ownership, development milestones, and mutual success criteria for the engagement.
                                </p>
                            </div>
                            <div className="process-step-card idea-step">
                                <div className="idea-step-number">05</div>
                                <h4>Incubation and Build</h4>
                                <p className="text-light">
                                    Access our full development ecosystem — engineering resources, infrastructure, and design capabilities — to architect and build your product.
                                </p>
                            </div>
                            <div className="process-step-card idea-step">
                                <div className="idea-step-number">06</div>
                                <h4>Market Launch and Scale</h4>
                                <p className="text-light">
                                    Deploy to production and drive adoption through our professional network, growth marketing, and strategic distribution channels.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 2025 WINNERS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">2025 Cohort Winners</h2>
                        <p className="text-light" style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px auto' }}>
                            After rigorous evaluation of over 50 submissions, these three exceptional projects were selected for full incubation and development under the Code Nexus ecosystem.
                        </p>

                        {/* Winner 1 */}
                        <div className="winner-card winner-gold">
                            <div className="winner-rank">
                                <span className="rank-position">1st</span>
                                <span className="rank-score">87 / 100</span>
                            </div>
                            <div className="winner-details">
                                <h3 className="winner-name">Maria Noor</h3>
                                <h4 className="winner-project-title">Auto AI/ML Engineer</h4>
                                <p className="text-light">
                                    An intelligent automation platform that eliminates the most time-consuming bottlenecks in the machine learning pipeline. The system provides end-to-end automated data provisioning, cleaning, preprocessing, and feature engineering — enabling data scientists to focus on model architecture and strategy rather than repetitive data preparation tasks. The platform leverages rule-based and AI-driven techniques to detect anomalies, handle missing values, normalize datasets, and generate production-ready data pipelines with minimal manual intervention.
                                </p>
                                <div className="winner-tags">
                                    <span className="winner-tag">Artificial Intelligence</span>
                                    <span className="winner-tag">Machine Learning</span>
                                    <span className="winner-tag">Data Engineering</span>
                                    <span className="winner-tag">Automation</span>
                                </div>
                            </div>
                        </div>

                        {/* Winner 2 */}
                        <div className="winner-card winner-silver">
                            <div className="winner-rank">
                                <span className="rank-position">2nd</span>
                                <span className="rank-score">78 / 100</span>
                            </div>
                            <div className="winner-details">
                                <h3 className="winner-name">Muhammad Nouman</h3>
                                <h4 className="winner-project-title">Enterprise Team Management Software</h4>
                                <p className="text-light">
                                    A comprehensive enterprise-grade team management platform designed to streamline workforce coordination, project tracking, and organizational communication at scale. The system features intelligent task assignment algorithms, real-time progress dashboards, performance analytics, resource allocation optimization, and cross-departmental collaboration tools — purpose-built for mid-to-large enterprises managing distributed teams across multiple projects and business units.
                                </p>
                                <div className="winner-tags">
                                    <span className="winner-tag">Enterprise Software</span>
                                    <span className="winner-tag">Project Management</span>
                                    <span className="winner-tag">Team Collaboration</span>
                                    <span className="winner-tag">Analytics</span>
                                </div>
                            </div>
                        </div>

                        {/* Winner 3 */}
                        <div className="winner-card winner-bronze">
                            <div className="winner-rank">
                                <span className="rank-position">3rd</span>
                                <span className="rank-score">75 / 100</span>
                            </div>
                            <div className="winner-details">
                                <h3 className="winner-name">Maryam Nadeem</h3>
                                <h4 className="winner-project-title">Auto Jaw Scan</h4>
                                <p className="text-light">
                                    A pioneering medical imaging solution that uses deep learning models to analyze dental X-ray images with clinical-grade accuracy. The AI-powered system automatically detects jaw abnormalities, identifies potential pathologies, measures bone density variations, and generates comprehensive diagnostic reports — assisting dental professionals in making faster, more accurate treatment decisions. The platform is designed to integrate seamlessly with existing radiology workflows and DICOM-compatible imaging hardware.
                                </p>
                                <div className="winner-tags">
                                    <span className="winner-tag">Healthcare AI</span>
                                    <span className="winner-tag">Medical Imaging</span>
                                    <span className="winner-tag">Deep Learning</span>
                                    <span className="winner-tag">Diagnostics</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* EVALUATION CRITERIA */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Evaluation Criteria</h2>
                        <div className="content-card">
                            <div className="criteria-grid">
                                <div className="criteria-item">
                                    <div className="criteria-weight">35%</div>
                                    <h4>Innovation and Originality</h4>
                                    <p className="text-light">Uniqueness of the concept, creative problem-solving approach, and differentiation from existing market solutions.</p>
                                </div>
                                <div className="criteria-item">
                                    <div className="criteria-weight">25%</div>
                                    <h4>Technical Feasibility</h4>
                                    <p className="text-light">Viability of the proposed tech stack, architecture clarity, and realistic implementation timeline within given constraints.</p>
                                </div>
                                <div className="criteria-item">
                                    <div className="criteria-weight">20%</div>
                                    <h4>Market Potential</h4>
                                    <p className="text-light">Target audience clarity, addressable market size, competitive landscape analysis, and monetization viability.</p>
                                </div>
                                <div className="criteria-item">
                                    <div className="criteria-weight">20%</div>
                                    <h4>Scalability</h4>
                                    <p className="text-light">Growth potential, infrastructure scalability, and the ability to expand into adjacent markets or user segments.</p>
                                </div>
                               
                            </div>
                        </div>
                    </section>

                    {/* SUBMISSION STATUS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }} id="submission-form">
                        <h2 className="headline-accent centered-headline">Submissions</h2>
                        <div className="content-card idea-closed-card">
                            <div className="idea-closed-content">
                                <span className="closed-status-badge">Closed</span>
                                <h3>Submissions for Idea2Impact 2025 are now closed.</h3>
                                <p className="text-light">
                                    Thank you for the overwhelming response. The 2025 cohort has been finalized and the selected projects are currently in active development. Follow Code Nexus on social media to stay informed about the next cohort opening and partnership opportunities.
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

export default SubmitIdea;
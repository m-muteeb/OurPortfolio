import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';
import marketingVideo from '../../assets/digitalmarrketing.mp4';

const DigitalMarketingService = () => {
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
                                Digital Marketing: <br /><span className="hero-title-accent">Data-Driven Growth Strategies</span>
                            </h1>
                            <p className="hero-subtitle">
                                Accelerate your business growth with comprehensive digital marketing strategies that combine SEO, content marketing, paid advertising, and analytics to maximize ROI and customer acquisition.
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
                                <source src={marketingVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Service Overview</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                Our digital marketing service is built on data analytics and proven strategies. We don't just create campaigns—we build growth engines that continuously optimize for conversions, ROI, and brand awareness. From SEO and content marketing to PPC and social media, we handle every aspect of your digital presence.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item"><h3>Channels</h3><p>Multi-Channel Strategy</p></div>
                                <div className="overview-item"><h3>Timeline</h3><p>3-6 Months</p></div>
                                <div className="overview-item"><h3>Focus</h3><p>ROI & Conversions</p></div>
                                <div className="overview-item"><h3>Reporting</h3><p>Real-Time Analytics</p></div>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">What We Deliver</h2>
                        <div className="content-card">
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>SEO Optimization:</b> Technical SEO, on-page optimization, and link building to dominate organic search results.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Content Marketing:</b> Strategic content creation including blogs, video, and infographics that drive engagement.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>PPC Advertising:</b> Google Ads, Facebook Ads, and LinkedIn campaigns optimized for maximum ROAS.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Social Media:</b> Organic and paid social strategies across Instagram, LinkedIn, Twitter, and TikTok.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Email Marketing:</b> Automated nurture sequences, newsletters, and retention campaigns.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Analytics & Reporting:</b> Comprehensive dashboards tracking KPIs, attribution, and customer journey insights.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Our Marketing Process</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Strategy & Research</h4>
                                <p className="text-light">
                                    Comprehensive market research, competitor analysis, and customer persona development. Define clear KPIs, budget allocation, and channel mix strategy based on your business goals and target audience behavior.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>2. Campaign Development</h4>
                                <p className="text-light">
                                    Create compelling ad copy, landing pages, and creative assets. Set up tracking pixels, conversion funnels, and attribution models. Launch coordinated campaigns across selected channels with A/B testing from day one.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>3. Optimization & Scaling</h4>
                                <p className="text-light">
                                    Continuous monitoring and optimization based on real-time performance data. Adjust bids, targeting, and creative elements to improve ROI. Scale winning campaigns while pruning underperformers.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>4. Reporting & Growth</h4>
                                <p className="text-light">
                                    Weekly and monthly performance reports with actionable insights. Attribution analysis shows which channels drive the most valuable customers. Strategic recommendations for long-term growth and market expansion.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Marketing Tools & Platforms</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>Industry-leading marketing stack:</p>
                            <div>
                                <span className="tech-badge">Google Ads & Analytics</span>
                                <span className="tech-badge">Facebook Ads Manager</span>
                                <span className="tech-badge">SEMrush & Ahrefs</span>
                                <span className="tech-badge">HubSpot & Mailchimp</span>
                                <span className="tech-badge">Hootsuite & Buffer</span>
                                <span className="tech-badge">Google Tag Manager</span>
                                <span className="tech-badge">Hotjar & Crazy Egg</span>
                                <span className="tech-badge">Canva & Adobe Creative Suite</span>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent">Why Choose Our Digital Marketing Service</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Performance Focused:</b> Every dollar spent is tracked, measured, and optimized for maximum ROI.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Full-Funnel Strategy:</b> From awareness to conversion and retention, we optimize every stage.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Transparent Reporting:</b> Real-time dashboards with no vanity metrics—only numbers that matter.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Industry Expertise:</b> Proven strategies across B2B, B2C, SaaS, e-commerce, and local businesses.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Agile Execution:</b> Rapid testing and iteration based on data, not assumptions.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.7s' }}>
                        <h2 className="headline-accent">Perfect For</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Startups</b> needing fast customer acquisition and brand awareness</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>E-commerce</b> businesses scaling revenue through multi-channel campaigns</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>SaaS companies</b> optimizing conversion funnels and reducing CAC</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Local businesses</b> dominating local search and Google Maps</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>B2B companies</b> generating qualified leads through LinkedIn and content marketing</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Enterprises</b> expanding into new markets with data-driven strategies</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DigitalMarketingService;

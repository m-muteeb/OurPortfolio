import React, { useEffect } from 'react'; // ✅ 1. Import useEffect

// ✅ Import your new asset
import craveCurveImage from '../../assets/images/unnamed (3).jpg';

// ✅ Import shared layout components
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';

// ✅ Import the new components and CSS


import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import './ambitious.css'; // ✅ Reusing the same CSS file

const CraveCurveCase = () => {

    // ✅ 2. This effect scrolls to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // The empty array [] ensures this runs only once when the component mounts

    return (
        // The main wrapper class is controlled by the imported CSS
        <div className="case-study-wrapper">

            {/* --- FLOATING BUTTONS --- */}

            {/* Floating Back to Portfolio Button */}
            <HashLink
                to="/#Projects"
                className="floating-button floating-back-button"
                aria-label="Back to projects"
                smooth
            >
                <FaArrowLeft />
            </HashLink>

           

            {/* --- HEADER --- */}
            <Header />

            {/* --- MAIN CONTENT --- */}
            <main className="case-study-main">
                <div className="case-study-container">

                    {/* HERO SECTION */}
                    <section className="animate-in" style={{ textAlign: 'center' }}>
                        <h1 className="hero-title">
                            Personalized Dining, Simplified Management: <br /><span className="hero-title-accent">The Crave Curve Restaurant App</span>
                        </h1>
                        <p className="hero-subtitle">
                            A multi-restaurant web application offering AI-driven menu suggestions, deep customer customization, and comprehensive expense management for owners.
                        </p>
                    </section>

                    {/* PROJECT OVERVIEW */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Project Overview & Context</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                The modern dining experience demands more than just good food; it requires personalization and efficiency. "Crave Curve" emerged as a solution to empower both restaurant owners and customers. For owners, it provides robust admin dashboards, sales tracking, and expense management. For customers, it offers an unprecedented level of dish customization (minus ingredients they dislike) and AI-driven suggestions based on available inventory, bridging the gap between desire and operational reality.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item">
                                    <h3>Project Type</h3>
                                    <p>Multi-Restaurant Web Application with AI</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Industry</h3>
                                    <p>Food & Beverage (Restaurant Tech)</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Our Role</h3>
                                    <p>Lead Full-Stack Development Team & AI Architect</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Timeline</h3>
                                    <p>6 Months</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* PROBLEM STATEMENT */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">The Core Problem: Misaligned Expectations & Operational Gaps</h2>
                        <div className="content-card">
                            <p className="text-light">
                                Existing restaurant platforms and traditional dining models faced several critical issues:
                            </p>
                            <ul className="styled-list text-light">
                                <li>**Limited Customization:** Customers often couldn't easily modify dishes (e.g., "no mayonnaise"), leading to dissatisfaction or order errors.</li>
                                <li>**Inventory Waste:** Restaurants struggled to utilize ingredients efficiently, often leading to waste or inability to suggest dishes based on what's available.</li>
                                <li>**Operational Blind Spots:** Owners lacked integrated tools for real-time sales, inventory, and expense management across multiple locations.</li>
                                <li>**Lack of Personalized Discovery:** Customers had no intelligent way to find new dishes or customize existing ones beyond basic options.</li>
                                <li>**Inefficient Order Processing:** Manual communication for custom orders increased the risk of mistakes and slowed down kitchen operations.</li>
                            </ul>
                        </div>
                    </section>

                    {/* SOLUTION & FEATURE OVERVIEW IMAGE */}
                    <div className="showcase-image-container animate-in" style={{ animationDelay: '0.4s' }}>
                        <img 
                            src={craveCurveImage} 
                            alt="Crave Curve Restaurant App showcase with AI suggestions" 
                            className="showcase-image"
                        />
                    </div>

                    {/* OUR ROLE & CONTRIBUTIONS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Our Role & Core Contributions</h2>
                        <div className="content-card">
                            <p className="text-light">
                                As the Lead Full-Stack Development and AI Architecture team, we designed and built Crave Curve to be a comprehensive, intelligent solution for the restaurant industry.
                            </p>
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> **Multi-Tenant Architecture:** Built a robust system to host and manage multiple independent restaurants, each with its own admin.</li>
                                <li><span className="icon-list-check">&#10003;</span> **AI-Driven Menu Suggestions:** Developed AI logic to suggest dishes based on current inventory and customer preferences.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Advanced Customization Engine:** Engineered a system allowing customers to "minus" ingredients and dynamically rebuild orders.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Comprehensive Admin Dashboards:** Created detailed dashboards for sales, inventory, expense tracking, and order management.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Customer Dashboards:** Intuitive interfaces for order tracking, preference management, and personalized recommendations.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Secure Payment & Order Processing:** Integrated reliable payment gateways and streamlined order fulfillment workflows.</li>
                            </ul>
                        </div>
                    </section>

                    {/* OUR PROCESS: DETAILED BREAKDOWN */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent centered-headline">Our Development Process: From Concept to Culinary Innovation</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Discovery & Research</h4>
                                <p className="text-light">
                                    We interviewed numerous restaurant owners and customers. The "minus an ingredient" feature was a direct result of observing customer frustration. Owners highlighted the struggle with ingredient waste and needing better expense tracking. This revealed a dual-user problem requiring a holistic solution.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.7s' }}>
                                <h4>2. Architecture & Design</h4>
                                <p className="text-light">
                                    A robust microservice architecture was designed. One service handled customer orders and AI recommendations, while another focused on restaurant operations (inventory, expenses). Database schema was meticulously planned to support complex ingredient relationships and dynamic pricing.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.8s' }}>
                                <h4>3. Development & Implementation</h4>
                                <p className="text-light">
                                    We built the front-end using React.js, focusing on a fluid, intuitive ordering experience. The AI 'Chef' module (Python-based) was integrated to cross-reference customer preferences with real-time ingredient availability to suggest dishes. The customization engine dynamically adjusted pricing and preparation instructions for the kitchen.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.9s' }}>
                                <h4>4. Testing & Iteration</h4>
                                <p className="text-light">
                                    Extensive beta testing with local restaurants highlighted the need for clearer communication for custom orders sent to the kitchen. We iterated on the kitchen-facing display to make customized instructions unambiguous, significantly reducing errors and improving efficiency.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* TECH STACK */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.0s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>
                                Crave Curve was built with a modern, scalable, and AI-ready tech stack to handle complex data and real-time interactions.
                            </p>
                            <div>
                                <span className="tech-badge">React.js (Customer/Admin Frontends)</span>
                                <span className="tech-badge">Node.js / Express.js (Backend APIs)</span>
                                <span className="tech-badge">Python (AI/Recommendation Engine)</span>
                                <span className="tech-badge">PostgreSQL / MongoDB (Database)</span>
                                <span className="tech-badge">Firebase Authentication</span>
                                <span className="tech-badge">Stripe / PayPal (Payment Gateway)</span>
                                <span className="tech-badge">AWS EC2 / GCP Cloud Run (Deployment)</span>
                                <span className="tech-badge">Custom CSS Modules</span>
                            </div>
                        </div>
                    </section>

                    {/* QUANTIFIABLE IMPACT & RESULTS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.1s' }}>
                        <h2 className="headline-accent">Impact & Measurable Results</h2>
                        <div className="content-card">
                            <p className="text-light">
                                Crave Curve delivered significant value to both restaurant partners and their customers:
                            </p>
                            <ul className="styled-list text-light impact-list">
                                <li>**30% Reduction in Food Waste:** AI suggestions based on inventory significantly improved ingredient utilization for restaurants.</li>
                                <li>**Increased Customer Satisfaction:** The "minus ingredient" feature was highly praised, leading to fewer complaints and more unique orders.</li>
                                <li>**Enhanced Operational Efficiency:** Integrated admin dashboards streamlined sales tracking, inventory management, and expense reporting.</li>
                                <li>**Faster Order Processing:** Clear customization instructions sent directly to the kitchen reduced manual communication and errors.</li>
                                <li>**New Revenue Streams:** Restaurants could intelligently promote dishes made with surplus ingredients, creating dynamic specials.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing">
      <h2 className="headline-accent centered-headline">Project Evolution: The S-Curve Roadmap</h2>
      <p className="text-light" style={{ textAlign: 'center', maxWidth: '800px', margin: '20px auto 40px auto' }}>
        Our journey follows a strategic S-curve, marking phases from stabilization to growth and future innovation.
      </p>

      <div className="amb-scurve-container">
        <div className="amb-scurve-line"></div>

        {/* Phase 1 */}
        <div className="amb-roadmap-point">
          <div className="amb-roadmap-indicator"></div>
          <div className="amb-roadmap-content animate-in" style={{ animationDelay: '1.3s' }}>
            <h4>Phase 1: Foundation & Stabilization</h4>
            <p>Initial focus on replacing WhatsApp, establishing secure content storage, and launching core student & teacher portals.</p>
            <span className="amb-status-badge completed">Completed</span>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="amb-roadmap-point amb-roadmap-point-left">
          <div className="amb-roadmap-indicator"></div>
          <div className="amb-roadmap-content animate-in" style={{ animationDelay: '1.4s' }}>
            <h4>Phase 2: Premium Institution Integration</h4>
            <p>Deployment of dynamic PDF branding feature, enhancing value for partner institutions and securing new alliances.</p>
            <span className="amb-status-badge completed">Completed</span>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="amb-roadmap-point">
          <div className="amb-roadmap-indicator"></div>
          <div className="amb-roadmap-content animate-in" style={{ animationDelay: '1.5s' }}>
            <h4>Phase 3: Engagement & Analytics</h4>
            <p>Online test-taking modules, progress dashboards for students, and analytics for teachers.</p>
            <span className="amb-status-badge inprogress">In Progress</span>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="amb-roadmap-point amb-roadmap-point-left">
          <div className="amb-roadmap-indicator"></div>
          <div className="amb-roadmap-content animate-in" style={{ animationDelay: '1.6s' }}>
            <h4>Phase 4: Mobile & Accessibility</h4>
            <p>Developing iOS/Android apps and enhancing accessibility for diverse learners.</p>
            <span className="amb-status-badge future">Future</span>
          </div>
        </div>

        {/* Phase 5 */}
        <div className="amb-roadmap-point">
          <div className="amb-roadmap-indicator"></div>
          <div className="amb-roadmap-content animate-in" style={{ animationDelay: '1.7s' }}>
            <h4>Phase 5: AI & Collaborative Learning</h4>
            <p>Integration of AI study recommendations, interactive forums, and collaborative tools.</p>
            <span className="amb-status-badge future">Future</span>
          </div>
        </div>
      </div>
    </section>
                    {/* REFLECTIONS & FUTURE GROWTH */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.8s' }}>
                        <h2 className="headline-accent">Reflections & Future Vision</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>
                                Crave Curve demonstrated the profound impact of combining advanced AI with granular user control. The challenge was balancing complex customization with operational simplicity for restaurants. By focusing on both the customer's desire for a perfect meal and the owner's need for efficient management, we created a truly unique solution.
                            </p>
                            <p className="text-light">
                                The future of Crave Curve lies in even deeper AI integration, making it a predictive partner for restaurants—from optimizing menus to managing supply chains, ultimately enhancing the dining experience for everyone.
                            </p>
                        </div>
                    </section>

                </div>
            </main>

            {/* --- FOOTER --- */}
            <Footer />
        </div>
    );
};

export default CraveCurveCase;
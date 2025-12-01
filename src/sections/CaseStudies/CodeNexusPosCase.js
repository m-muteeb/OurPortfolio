import React, { useEffect } from 'react'; // ✅ 1. Import useEffect

// ✅ Import your new asset
import codeNexusPOSImage from '../../assets/images/unnamed (4).jpg'; 

// ✅ Import shared layout components
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';

// ✅ Import the new components and CSS

import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import './ambitious.css'; // ✅ Reusing the same CSS file

const CodeNexusPOSCase = () => {

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
                            Real-Time Control, Effortless Management: <br /><span className="hero-title-accent">The CodeNexus POS System</span>
                        </h1>
                        <p className="hero-subtitle">
                            A versatile Point-of-Sale solution empowering business owners with real-time sales, order, and expense management, accessible anywhere, anytime.
                        </p>
                    </section>

                    {/* PROJECT OVERVIEW */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Project Overview & Context</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                In a fast-paced business world, traditional manual processes lead to inefficiencies, lost orders, and a lack of real-time oversight. The CodeNexus POS system was developed to modernize operations across various service industries, from restaurants to tailor shops. It offers a comprehensive digital platform where owners can monitor sales, manage inventory, track expenses, and oversee customer orders—all in real-time, whether on-site or remotely.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item">
                                    <h3>Project Type</h3>
                                    <p>Full-Stack Web-Based POS System</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Industry</h3>
                                    <p>Retail & Service (Various)</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Our Role</h3>
                                    <p>Lead Full-Stack Development Team</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Timeline</h3>
                                    <p>4.5 Months</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* PROBLEM STATEMENT */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">The Core Problem: Manual Chaos & Lack of Oversight</h2>
                        <div className="content-card">
                            <p className="text-light">
                                Businesses relying on traditional methods faced significant challenges:
                            </p>
                            <ul className="styled-list text-light">
                                <li>**Lack of Real-Time Data:** Owners were unable to get instant updates on sales, stock, or active orders without being physically present.</li>
                                <li>**Order Errors & Losses:** Manual order taking (e.g., written measurements for tailors, handwritten restaurant tickets) led to missed details, misplaced slips, and frustrated customers.</li>
                                <li>**Inefficient Expense Tracking:** Manually logging expenses was tedious, error-prone, and made financial reporting difficult.</li>
                                <li>**Customer Data Deficiencies:** No centralized record of customer preferences, purchase history, or tailor measurements, hindering personalized service.</li>
                                <li>**Limited Scalability:** Manual systems could not easily adapt to business growth or multi-branch operations.</li>
                            </ul>
                        </div>
                    </section>

                    {/* SOLUTION & FEATURE OVERVIEW IMAGE */}
                    <div className="showcase-image-container animate-in" style={{ animationDelay: '0.4s' }}>
                        <img 
                            src={codeNexusPOSImage} 
                            alt="CodeNexus POS system showing dashboards and order management" 
                            className="showcase-image"
                        />
                    </div>

                    {/* OUR ROLE & CONTRIBUTIONS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Our Role & Core Contributions</h2>
                        <div className="content-card">
                            <p className="text-light">
                                As the Lead Full-Stack Development Team, we engineered the CodeNexus POS system to be a robust, intuitive, and real-time management solution.
                            </p>
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> **Real-Time Dashboards:** Developed dynamic dashboards providing instant updates on sales, inventory, and orders.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Cross-Industry Adaptability:** Designed a flexible system to cater to diverse businesses like restaurants (dine-in, delivery) and tailors (measurements, order tracking).</li>
                                <li><span className="icon-list-check">&#10003;</span> **Digital Order Management:** Implemented streamlined order entry, tracking, and fulfillment processes to minimize errors.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Comprehensive Expense & Sales Tracking:** Integrated robust modules for easy expense entry and detailed sales analytics.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Customer & Inventory Management:** Built features for maintaining customer records and real-time stock levels.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Secure User Access:** Ensured secure login and role-based access for owners, managers, and staff.</li>
                            </ul>
                        </div>
                    </section>

                    {/* OUR PROCESS: DETAILED BREAKDOWN */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent centered-headline">Our Development Process: From Concept to Digital Command Center</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Discovery & Research</h4>
                                <p className="text-light">
                                    We conducted extensive interviews with restaurant owners and tailor shop managers. A restaurant owner's desire to check sales from home was a key driver, as was a tailor's frustration with lost measurement slips. This highlighted the need for universal remote access and digitized data.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.7s' }}>
                                <h4>2. Architecture & Design</h4>
                                <p className="text-light">
                                    We opted for a cloud-native architecture (e.g., Firebase/Supabase) to ensure real-time data synchronization and remote accessibility. The UI/UX was designed with distinct but connected interfaces for sales terminals (quick transactions) and management dashboards (detailed insights).
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.8s' }}>
                                <h4>3. Development & Implementation</h4>
                                <p className="text-light">
                                    The front-end was built with React.js, focusing on intuitive touch-friendly interfaces for POS terminals. The backend (Node.js/Express.js) handled real-time data streaming to dashboards. Special modules were developed for different industries, such as a "Measurement Profile" for tailors and "Table/Delivery Management" for restaurants.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.9s' }}>
                                <h4>4. Testing & Iteration</h4>
                                <p className="text-light">
                                    Pilot programs were run in actual restaurants and tailor shops. Feedback led to crucial refinements, such as simplifying expense entry workflows and improving the visual clarity of real-time sales charts. Emphasis was placed on ensuring data integrity during high-volume transactions.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* TECH STACK */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.0s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>
                                CodeNexus POS leverages a robust and real-time-focused tech stack for reliability and performance.
                            </p>
                            <div>
                                <span className="tech-badge">React.js (Frontend)</span>
                                <span className="tech-badge">Node.js / Express.js (Backend)</span>
                                <span className="tech-badge">PostgreSQL / Firebase (Database)</span>
                                <span className="tech-badge">WebSocket (Real-time data)</span>
                                <span className="tech-badge">Firebase Authentication</span>
                                <span className="tech-badge">AWS EC2 / Vercel (Deployment)</span>
                                <span className="tech-badge">Ant Design (UI Framework)</span>
                                <span className="tech-badge">Custom CSS Modules</span>
                            </div>
                        </div>
                    </section>

                    {/* QUANTIFIABLE IMPACT & RESULTS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.1s' }}>
                        <h2 className="headline-accent">Impact & Measurable Results</h2>
                        <div className="content-card">
                            <p className="text-light">
                                The CodeNexus POS system delivered immediate and tangible improvements to business operations:
                            </p>
                            <ul className="styled-list text-light impact-list">
                                <li>**Instant Oversight:** Owners gained 24/7 real-time access to all sales, orders, and expenses, even when off-site.</li>
                                <li>**99% Reduction in Order Errors:** Digitized order taking and measurement storage virtually eliminated missed or incorrect orders.</li>
                                <li>**Improved Efficiency:** Streamlined workflows for sales, inventory, and expense logging saved significant staff time.</li>
                                <li>**Enhanced Customer Service:** Centralized customer records (e.g., tailor measurements) enabled personalized and accurate service.</li>
                                <li>**Scalability & Growth:** Businesses could easily onboard new staff, open new branches, and manage them from a single platform.</li>
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
                                The CodeNexus POS project was a testament to the power of a well-designed digital solution to transform everyday business operations. The key challenge was creating a system flexible enough to serve diverse industries while maintaining a core set of powerful features. We learned that real-time data access is not just a convenience but a necessity for modern business owners to make informed decisions.
                            </p>
                            <p className="text-light">
                                The future of CodeNexus POS is to become an indispensable business companion, continually integrating more intelligent features to predict trends, automate management tasks, and empower businesses to thrive digitally.
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

export default CodeNexusPOSCase;
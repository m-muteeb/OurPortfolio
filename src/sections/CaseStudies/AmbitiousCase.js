import React, { useEffect } from 'react'; // ✅ 1. Import useEffect

// ✅ Import your assets
import ambitiousImage from '../../assets/images/unnamed.jpg';

// ✅ Import shared layout components
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';

// ✅ Import the new components and CSS


import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import './ambitious.css'; // ✅ Import the separated CSS file

const AmbitiousCase = () => {

    // ✅ 2. Add this effect to scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // The empty array [] ensures this runs only once when the component mounts

    return (
        // The main wrapper class is now controlled by AmbitiousCase.css
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
                            Pioneering Digital Education: <br /><span className="hero-title-accent">Ambitious Education System</span>
                        </h1>
                        <p className="hero-subtitle">
                            A comprehensive case study on developing a robust, centralized platform that revolutionized content management and delivery for a leading educational institution.
                        </p>
                    </section>

                    {/* PROJECT OVERVIEW */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Project Overview & Context</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                The Ambitious Education System, a rapidly expanding educational provider, faced escalating challenges in managing and distributing its vast library of educational content. The existing reliance on informal communication channels like WhatsApp groups led to severe operational inefficiencies and security vulnerabilities. This project aimed to establish a dedicated, secure, and professional digital infrastructure to streamline content delivery, enhance user experience, and support strategic partnerships.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item">
                                    <h3>Project Type</h3>
                                    <p>Full-Stack Web Application</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Industry</h3>
                                    <p>Education Technology (EdTech)</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Our Role</h3>
                                    <p>Lead Full-Stack Development Team</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Timeline</h3>
                                    <p>3 Months (April - June 2025)</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* PROBLEM STATEMENT */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">The Core Problem: Digital Disarray</h2>
                        <div className="content-card">
                            <p className="text-light">
                                Before this initiative, Ambitious Education System's digital operations were characterized by:
                            </p>
                            <ul className="styled-list text-light">
                                <li>**Content Fragmentation:** Educational notes and test papers were scattered across numerous WhatsApp groups, leading to version control issues and difficulty in locating the latest materials.</li>
                                <li>**Lack of Security & Access Control:** There was no robust mechanism to manage who could access specific content, posing significant data security risks and preventing controlled distribution.</li>
                                <li>**Inefficient Administration:** Manual distribution of materials through chat groups consumed an inordinate amount of administrative time and resources.</li>
                                <li>**Suboptimal Brand Presentation:** Partner institutions lacked the ability to brand downloaded tests, diminishing the perceived value and professionalism of Ambitious Education System's offerings.</li>
                                <li>**Poor User Experience:** Students found it challenging to navigate through numerous chat messages to find their relevant study materials, impacting their learning efficiency.</li>
                            </ul>
                        </div>
                    </section>

                    {/* SOLUTION & FEATURE OVERVIEW IMAGE (Improved Styling) */}
                    <div className="showcase-image-container animate-in" style={{ animationDelay: '0.4s' }}>
                        <img 
                            src={ambitiousImage} 
                            alt="Ambitious Education System platform showcase" 
                            className="showcase-image" // This class handles the "no-crop" styling
                        />
                    </div>

                    {/* OUR ROLE & CONTRIBUTIONS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Our Role & Core Contributions</h2>
                        <div className="content-card">
                            <p className="text-light">
                                As the Lead Full-Stack Development Team, we spearheaded the technical strategy, architecture design, and end-to-end development of the Ambitious Education System platform. Our responsibilities encompassed:
                            </p>
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> **Architectural Design:** Laying out the scalable and secure system architecture.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Front-End Development:** Building responsive, intuitive user interfaces for all user roles using React.js.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Back-End & Database Management:** Implementing robust server-side logic and database solutions with Firebase.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Key Feature Development:** Innovating the dynamic PDF branding module.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Security Implementation:** Ensuring data integrity and user authentication protocols.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Deployment & Optimization:** Managing the deployment pipeline and ensuring optimal performance.</li>
                            </ul>
                        </div>
                    </section>

                    {/* OUR PROCESS: DETAILED BREAKDOWN */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent centered-headline">Our Development Process: From Concept to Launch</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Discovery & Research</h4>
                                <p className="text-light">
                                    Our team initiated with in-depth interviews with management, teachers, and a sample of students to gather core requirements and identify primary pain points. We performed a competitive analysis of existing EdTech platforms to identify best practices and potential differentiators. The key insight was the overwhelming need for a centralized, secure repository and automated branding.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.7s' }}>
                                <h4>2. Architecture & Design</h4>
                                <p className="text-light">
                                    We developed a modular system architecture, separating concerns for scalability. We designed intuitive user flows for student content access, teacher uploads, and institution management. Our team crafted wireframes and high-fidelity mockups focusing on a clean, responsive UI with Ant Design components to ensure a consistent and modern aesthetic.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.8s' }}>
                                <h4>3. Development & Implementation</h4>
                                <p className="text-light">
                                    We built the interactive front-end with React.js, leveraging component-based architecture for maintainability. We integrated Firebase for robust authentication and a flexible Firestore NoSQL database for content storage. Our team developed a dedicated Node.js microservice to handle dynamic PDF generation and custom branding, a crucial feature for premium partners.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.9s' }}>
                                <h4>4. Testing & Iteration</h4>
                                <p className="text-light">
                                    We conducted extensive unit and integration testing to identify and rectify bugs. We performed User Acceptance Testing (UAT) with key stakeholders, gathering feedback on usability and functionality. Our team iterated rapidly on design and features based on real-world usage data, ensuring the platform met and exceeded expectations.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* TECH STACK */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.0s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>
                                The platform was built using a modern, scalable tech stack, ensuring high performance, security, and maintainability.
                            </p>
                            <div>
                                <span className="tech-badge">React.js (Frontend)</span>
                                <span className="tech-badge">Firebase Authentication</span>
                                <span className="tech-badge">Firestore Database</span>
                                <span className="tech-badge">Node.js (for PDF Microservice)</span>
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
                                The launch of the Ambitious Education System platform yielded significant, measurable improvements:
                            </p>
                            <ul className="styled-list text-light impact-list">
                                <li>**90% Reduction in Administrative Time:** Automated content distribution and management drastically cut down manual efforts.</li>
                                <li>**Enhanced Security & Control:** Centralized access management eliminated unauthorized sharing and improved data integrity.</li>
                                <li>**Increased Partner Satisfaction:** The dynamic branding feature was highly praised, strengthening institutional partnerships.</li>
                                <li>**Improved Student Engagement:** Students reported easier access and better organization of study materials, contributing to a more focused learning environment.</li>
                                <li>**Scalable Infrastructure:** The new system is built to easily accommodate future growth in users and content without major re-architecture.</li>
                            </ul>
                        </div>
                    </section>

                    {/* S-CURVE ROADMAP */}
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
                                This project was a testament to our team's agile development methodology and user-centric approach. Overcoming the initial challenges of content fragmentation has successfully positioned Ambitious Education System as a digital leader in its domain. Looking forward, the platform is poised for continuous innovation, with plans to integrate advanced AI features, expand into new educational verticals, and further personalize the learning experience. The robust architecture ensures it's not just a solution for today but a foundational component for tomorrow's evolving educational landscape.
                            </p>
                            <p className="text-light">
                                Our experience on this project reinforced the power of a well-defined process and the profound impact technology can have when tailored to solve real-world problems collaboratively.
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

export default AmbitiousCase;
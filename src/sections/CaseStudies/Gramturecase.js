import React, { useEffect } from 'react'; // ✅ 1. Import useEffect

// ✅ Import your new asset
import gramtureImage from '../../assets/images/unnamed1.jpg'; // 

// ✅ Import shared layout components
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';

// ✅ Import the new components and CSS

import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import './ambitious.css'; // ✅ You can reuse the same CSS file

const GramtureCase = () => {

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
                            Mastering English in Pakistan: <br /><span className="hero-title-accent">The Gramture Platform</span>
                        </h1>
                        <p className="hero-subtitle">
                            A case study on building Pakistan's first concept-based English learning platform, transforming physical notes into an interactive digital ecosystem with live tests and professional support.
                        </p>
                    </section>

                    {/* PROJECT OVERVIEW */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Project Overview & Context</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                Gramture was founded to fill a critical gap in the Pakistani education market: the lack of a dedicated, concept-based platform for learning English. While many resources exist, none offered a holistic, logic-based approach. The project's goal was to transition Gramture from a physical-first model (printing notes) to a scalable digital platform, offering class notes, live MCQ tests, past papers, and a unique discussion forum with qualified professionals.
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
                                    <p>4 Months (May - August 2025)</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* PROBLEM STATEMENT */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">The Core Problem: Physical Limitations & Wasted Resources</h2>
                        <div className="content-card">
                            <p className="text-light">
                                Before its digital transformation, Gramture operated manually, which was highly inefficient and unscalable:
                            </p>
                            <ul className="styled-list text-light">
                                <li>**Resource Drain:** Significant costs and logistical overhead were spent on physically printing and distributing notes.</li>
                                <li>**No Centralization:** Students had no single source of truth for class notes, past tests, or updates, leading to confusion.</li>
                                <li>**Lack of Interaction:** There was no structured way for students to ask questions or discuss problems with qualified professionals, limiting deep concept-building.</li>
                                <li>**No Progress Tracking:** It was impossible to measure student performance, engagement, or concept mastery through static, physical papers.</li>
                                <li>**Unscalable Model:** The physical model fundamentally limited Gramture's reach and ability to grow its student base across Pakistan.</li>
                            </ul>
                        </div>
                    </section>

                    {/* SOLUTION & FEATURE OVERVIEW IMAGE */}
                    <div className="showcase-image-container animate-in" style={{ animationDelay: '0.4s' }}>
                        <img 
                            src={gramtureImage} 
                            alt="Gramture English learning platform showcase" 
                            className="showcase-image"
                        />
                    </div>

                    {/* OUR ROLE & CONTRIBUTIONS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Our Role & Core Contributions</h2>
                        <div className="content-card">
                            <p className="text-light">
                                As the Lead Full-Stack Development Team, we spearheaded the technical strategy, architecture design, and end-to-end development of the Gramture platform. Our responsibilities encompassed:
                            </p>
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> **Architectural Design:** Laying out a scalable, secure system for managing users, notes, tests, and forum data.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Front-End Development:** Building responsive, intuitive user interfaces for all user roles (student, professional, admin) using React.js.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Back-End & Database Management:** Implementing robust server-side logic and database solutions with Firebase/Supabase.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Key Feature Development:** Innovating the live MCQ test engine and the real-time student discussion forum.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Security Implementation:** Ensuring data integrity and user authentication protocols for students and professionals.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Deployment & Optimization:** Managing the deployment pipeline and ensuring optimal performance for a growing user base.</li>
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
                                    We began with deep dives into the Pakistani EdTech landscape, confirming the gap for a concept-based English tool. Stakeholder interviews with Gramture's founders defined the core user journey. The key insight was the "Student Discussion Forum" would be the major differentiator, requiring real-time interaction with verified professionals.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.7s' }}>
                                <h4>2. Architecture & Design</h4>
                                <p className="text-light">
                                    We designed a modular architecture using Firebase, with distinct Firestore collections for users, notes (by class), tests (MCQs, past papers), and forum threads/replies. We crafted wireframes focusing on a clean, distraction-free learning environment, ensuring the test-taking and forum interfaces were intuitive and responsive.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.8s' }}>
                                <h4>3. Development & Implementation</h4>
                                <p className="text-light">
                                    We built the front-end with React.js and Ant Design for a polished UI. The live MCQ module was built with state management to handle timers, instant feedback, and score calculation. For the discussion forum, we used Firebase Realtime Database or Firestore listeners to ensure a live, chat-like experience for students and professionals.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.9s' }}>
                                <h4>4. Testing & Iteration</h4>
                                <p className="text-light">
                                    We conducted extensive testing on the MCQ engine to ensure grading accuracy and cheat prevention. User Acceptance Testing (UAT) focused heavily on the forum, refining the process for professionals to "approve" answers. Feedback led to the addition of a "Certificate of Completion" feature upon passing a final test.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* TECH STACK */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.0s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>
                                The platform was built using a modern, scalable tech stack, ensuring high performance, real-time features, and maintainability.
                            </p>
                            <div>
                                <span className="tech-badge">React.js (Frontend)</span>
                                <span className="tech-badge">Firebase Authentication</span>
                                <span className="tech-badge">Firestore Database</span>
                                <span className="tech-badge">Firebase Realtime Database (for Forum)</span>
                                <span className="tech-badge">Firebase Storage (for Notes/PDFs)</span>
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
                                The launch of the Gramture platform digitally transformed the business and created a new standard for English learning in Pakistan:
                            </p>
                            <ul className="styled-list text-light impact-list">
                                <li>**100% Elimination of Printing Costs:** Transitioned all content to a digital format, removing physical resource waste.</li>
                                <li>**First-Mover Advantage:** Established Gramture as the first dedicated, concept-based English learning platform in the region.</li>
                                <li>**Centralized Knowledge Hub:** All notes, past papers, and tests are now organized and accessible 24/7 to all students.</li>
                                <li>**Increased Student Engagement:** The discussion forum became the most active feature, with students receiving verified answers from professionals, building a strong community.</li>
                                <li>**Scalable Infrastructure:** The digital platform is now ready to scale and accept thousands of new students across the country without proportional increases in cost.</li>
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
                                This project was a powerful example of digital transformation. By deeply understanding the core problem—a lack of conceptual learning and community—we built a platform that directly addressed those needs. Gramture is now positioned as a pioneer in the Pakistani EdTech space. The future vision is to expand this model, integrating AI-driven feedback and personalized learning paths, making it the undeniable standard for mastering English in Pakistan.
                            </p>
                            <p className="text-light">
                                Our experience on this project reinforced the importance of building a strong community feature (the forum) as a key differentiator, turning a simple content portal into a living ecosystem.
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

export default GramtureCase;
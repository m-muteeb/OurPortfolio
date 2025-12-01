import React, { useEffect } from 'react'; // ✅ 1. Import useEffect

// ✅ Import your new asset
import testnologyImage from '../../assets/images/unnamed (2).jpg'; // ❗ UPDATE THIS PATH

// ✅ Import shared layout components
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';

// ✅ Import the new components and CSS

import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import './ambitious.css'; // ✅ Reusing the same CSS file

const TestnologyCase = () => {

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

            {/* New Scroll to Top Button */}
          
            {/* --- HEADER --- */}
            <Header />

            {/* --- MAIN CONTENT --- */}
            <main className="case-study-main">
                <div className="case-study-container">

                    {/* HERO SECTION */}
                    <section className="animate-in" style={{ textAlign: 'center' }}>
<h1 className="hero-title">
    Revolutionizing Assessments: <br /><span className="hero-title-accent">The Testnology Platform</span>
</h1>
<p className="hero-subtitle">
    A case study on an AI-powered assessment and scheduling platform that empowers educators to create quality tests in seconds, not hours.
</p>
                    </section>

                    {/* PROJECT OVERVIEW */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
<h2 className="headline-accent">Project Overview & Context</h2>
<div className="content-card">
    <p className="text-light" style={{ marginBottom: '30px' }}>
        For schools, academies, and colleges, test creation and exam scheduling represent a massive, time-consuming administrative burden. Teachers spend countless hours manually creating tests, often of low quality, while administrators struggle with complex scheduling. "Testnology" was designed as the ultimate solution: a game-changing platform that uses AI to generate high-quality tests in a few clicks, complete with an AI-powered schedule maker and automated daily reminders.
    </p>
    <div className="grid-overview">
        <div className="overview-item">
            <h3>Project Type</h3>
            <p>Full-Stack AI Web Application</p>
        </div>
        <div className="overview-item">
            <h3>Industry</h3>
            <p>Education Technology (EdTech)</p>
        </div>
        <div className="overview-item">
            <h3>Official Partner</h3>
            <p>Ambitious Education System</p>
        </div>
        <div className="overview-item">
            <h3>Timeline</h3>
            <p>5 Months</p>
        </div>
    </div>
</div>
                    </section>
                    
                    {/* PROBLEM STATEMENT */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
<h2 className="headline-accent">The Core Problem: The Manual "Test Treadmill"</h2>
<div className="content-card">
    <p className="text-light">
        Educational institutions were trapped in an inefficient, manual workflow for assessments:
    </p>
    <ul className="styled-list text-light">
        <li>**Enormous Time Sink:** Teachers reported spending 5-10 hours *per week* just on creating, formatting, and proofreading tests.</li>
        <li>**Inconsistent Quality:** Manual creation often leads to repetitive questions, typos, and assessments that don't accurately measure student understanding.</li>
        <li>**Scheduling Chaos:** Manually creating a conflict-free exam schedule for hundreds of students across multiple subjects is a logistical nightmare.</li>
        <li>**Communication Gaps:** A lack of an automated system for test reminders meant students often missed or were unprepared for daily assessments.</li>
        <li>**Burnout:** Valuable educator time was being spent on low-impact administrative work instead of on teaching and student development.</li>
    </ul>
</div>
                    </section>

                    {/* SOLUTION & FEATURE OVERVIEW IMAGE */}
                    <div className="showcase-image-container animate-in" style={{ animationDelay: '0.4s' }}>
<img 
    src={testnologyImage} 
    alt="Testnology AI test generation platform showcase" 
    className="showcase-image"
/>
                    </div>

                    {/* OUR ROLE & CONTRIBUTIONS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
<h2 className="headline-accent">Our Role & Core Contributions</h2>
<div className="content-card">
    <p className="text-light">
        As the Lead Full-Stack and AI Integration team, we architected and built the entire Testnology platform from the ground up, in close partnership with Ambitious Education System.
    </p>
    <ul className="icon-list text-light">
        <li><span className="icon-list-check">&#10003;</span> **Architectural Design:** Building a scalable system for question banks, user roles (teacher, admin, student), and AI microservices.</li>
        <li><span className="icon-list-check">&#10003;</span> **AI Integration:** Implementing and fine-tuning AI models for high-quality, curriculum-aware test question generation (MCQs, Short Q/A, etc.).</li>
        <li><span className="icon-list-check">&#10003;</span> **Core Feature Development:** Building the "one-click" test generator and the constraint-based AI Schedule Maker.</li>
        <li><span className="icon-list-check">&#10003;</span> **Back-End Development:** Creating secure APIs and database logic (using Firebase/Supabase) to manage all platform data.</li>
        <li><span className="icon-list-check">&#10003;</span> **Front-End Development:** Designing a clean, intuitive React interface for teachers to easily generate, customize, and schedule tests.</li>
        <li><span className="icon-list-check">&#10003;</span> **Notification System:** Implementing the automated reminder system for daily tests via email and app notifications.</li>
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
            We shadowed teachers and administrators at our partner, Ambitious, to map their exact assessment workflow. The key insight was that scheduling was as big a pain point as test creation itself. This discovery elevated the "AI Schedule Maker" from a nice-to-have to a core, critical feature.
        </p>
    </div>
    <div className="process-step-card" style={{ animationDelay: '0.7s' }}>
        <h4>2. Architecture & Design</h4>
        <p className="text-light">
            We designed a microservice architecture. A primary React/Firebase app would handle the UI and core data, while a separate Python service would manage the AI-intensive tasks of test generation and schedule optimization. This ensured the main app remained fast and responsive.
        </p>
    </div>
    <div className="process-step-card" style={{ animationDelay: '0.8s' }}>
        <h4>3. Development & Implementation</h4>
        <p className="text-light">
            We built the React front-end with a focus on a simple 3-step wizard for test creation (Select Subject → Choose Topics → Generate). We trained the AI on curriculum data provided by Ambitious to ensure high-quality, relevant questions. The scheduler was built using a constraint-satisfaction algorithm.
        </p>
    </div>
    <div className="process-step-card" style={{ animationDelay: '0.9s' }}>
        <h4>4. Testing & Iteration</h4>
        <p className="text-light">
            UAT was conducted with Ambitious teachers. Initial AI tests were good, but we iterated by adding "Difficulty" and "Question Type" controls. This gave teachers the fine-tuned control they needed, moving the product from a novelty to an indispensable tool.
        </p>
    </div>
</div>
                    </section>

                    {/* TECH STACK */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.0s' }}>
<h2 className="headline-accent">Technology Stack</h2>
<div className="content-card">
    <p className="text-light" style={{ marginBottom: '20px' }}>
        The platform uses a cutting-edge, AI-first tech stack chosen for performance, scalability, and rapid development.
    </p>
    <div>
        <span className="tech-badge">React.js (Frontend)</span>
        <span className="tech-badge">Node.js (Backend)</span>
        <span className="tech-badge">Python (for AI Microservice)</span>
        <span className="tech-badge">OpenAI API (Test Generation)</span>
        <span className="tech-badge">Firebase/Supabase (Database)</span>
        <span className="tech-badge">Firebase Authentication</span>
        <span className="tech-badge">Firebase Cloud Messaging (Reminders)</span>
        <span className="tech-badge">Ant Design (UI Framework)</span>
    </div>
</div>
                    </section>

                    {/* QUANTIFIABLE IMPACT & RESULTS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.1s' }}>
<h2 className="headline-accent">Impact & Measurable Results</h2>
<div className="content-card">
    <p className="text-light">
        The launch of Testnology provided immediate and transformative results for partner institutions:
    </p>
    <ul className="styled-list text-light impact-list">
        <li>**95% Reduction in Test Creation Time:** What previously took teachers hours can now be accomplished in under two minutes.</li>
        <li>**100% Automated Scheduling:** The AI schedule maker successfully automated the entire exam scheduling process, eliminating all conflicts and errors.</li>
        <li>**Improved Test Quality:** AI generation, guided by teacher controls, produced a wider variety of high-quality, concept-focused questions.</li>
        <li>**Streamlined Operations:** Automated daily reminders drastically reduced administrative overhead and improved student preparedness.</li>
        <li>**Successful Partner Rollout:** The platform was successfully adopted by our official partner, Ambitious Education System, setting the standard for institutional efficiency.</li>
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
        Testnology was a complex project that successfully merged a practical SaaS application with advanced AI. The key learning was that for AI to be truly useful in EdTech, it must solve a real, tangible, and time-consuming problem. It's not just about AI; it's about applying AI to the *right* problem.
    </p>
    <p className="text-light">
        By automating the most tedious parts of an educator's job—test creation and scheduling—Testnology has proven to be a true "game-changer," allowing teachers to return to their primary passion: teaching.
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

export default TestnologyCase;
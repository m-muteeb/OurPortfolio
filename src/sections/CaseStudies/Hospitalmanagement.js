import React, { useEffect } from 'react'; // ✅ 1. Import useEffect

// ✅ Import your new asset
import hospitalManagementImage from '../../assets/images/unnamed (5).jpg'; 

// ✅ Import shared layout components
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';

// ✅ Import the new components and CSS
import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import './ambitious.css'; // ✅ Reusing the same CSS file

const HospitalManagementCase = () => {

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
                            Streamlining Healthcare Operations: <br /><span className="hero-title-accent">The Modern Hospital Management System</span>
                        </h1>
                        <p className="hero-subtitle">
                            A comprehensive digital platform for seamless patient, record, and staff management, providing real-time data to reception, doctors, and administration.
                        </p>
                    </section>

                    {/* PROJECT OVERVIEW */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Project Overview & Context</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                Efficient management of patient data, appointments, medical records, and hospital resources is paramount for quality healthcare. This Hospital Management System (HMS) was developed to replace fragmented, manual processes with a unified, real-time digital solution. It empowers receptionists, multiple doctors, and administrators with specialized dashboards to manage patient journeys from admission to discharge, ensuring accuracy, accessibility, and improved patient care.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item">
                                    <h3>Project Type</h3>
                                    <p>Full-Stack Enterprise Web Application</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Industry</h3>
                                    <p>Healthcare & Medical IT</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Our Role</h3>
                                    <p>Lead Full-Stack Development Team & System Architect</p>
                                </div>
                                <div className="overview-item">
                                    <h3>Timeline</h3>
                                    <p>7 Months</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* PROBLEM STATEMENT */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">The Core Problem: Data Silos & Operational Bottlenecks</h2>
                        <div className="content-card">
                            <p className="text-light">
                                Before implementing a digital HMS, hospitals faced critical challenges that impacted patient care and operational efficiency:
                            </p>
                            <ul className="styled-list text-light">
                                <li>**Fragmented Patient Records:** Paper-based records or disparate digital systems led to difficulty in accessing complete patient histories, causing delays and potential errors in diagnosis.</li>
                                <li>**Inefficient Appointment & Scheduling:** Manual booking processes often resulted in double-bookings, long wait times, and poor resource allocation (doctors, rooms).</li>
                                <li>**Lack of Real-Time Information:** Receptionists couldn't instantly see doctor availability, patient status, or bed occupancy, leading to communication breakdowns.</li>
                                <li>**Billing & Expense Errors:** Manual billing processes were prone to errors, slow, and lacked integration with treatment records.</li>
                                <li>**Security & Compliance Risks:** Paper records are vulnerable to loss, damage, and unauthorized access, posing significant data security and regulatory compliance issues.</li>
                                <li>**Poor Resource Management:** Difficulty tracking medical supplies, equipment, and staff shifts.</li>
                            </ul>
                        </div>
                    </section>

                    {/* SOLUTION & FEATURE OVERVIEW IMAGE */}
                    <div className="showcase-image-container animate-in" style={{ animationDelay: '0.4s' }}>
                        <img 
                            src={hospitalManagementImage} 
                            alt="Hospital Management System dashboard showing patient records and appointments" 
                            className="showcase-image"
                        />
                    </div>

                    {/* OUR ROLE & CONTRIBUTIONS */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Our Role & Core Contributions</h2>
                        <div className="content-card">
                            <p className="text-light">
                                As the Lead Full-Stack Development Team, we designed and built a robust Hospital Management System (HMS) that centralized data and streamlined workflows across all hospital departments.
                            </p>
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> **Role-Based Dashboards:** Developed specialized interfaces for Reception, Doctors, and Administration, each with relevant functionalities.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Real-Time Patient Record Management:** Implemented secure digital storage and instant access to patient histories, diagnoses, and treatment plans.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Appointment & Scheduling Module:** Built an intuitive system for booking, rescheduling, and managing appointments for multiple doctors.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Integrated Billing & Pharmacy Module:** Developed seamless integration for billing, prescriptions, and pharmacy inventory.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Staff & Resource Management:** Features for managing doctor schedules, nurse shifts, and hospital bed occupancy.</li>
                                <li><span className="icon-list-check">&#10003;</span> **Robust Security & Data Privacy:** Implemented industry-standard encryption, access controls, and audit trails to ensure HIPAA/GDPR compliance.</li>
                            </ul>
                        </div>
                    </section>

                    {/* OUR PROCESS: DETAILED BREAKDOWN */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent centered-headline">Our Development Process: Building a Healthier Digital Future</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Discovery & Research</h4>
                                <p className="text-light">
                                    We conducted extensive consultations with hospital administrators, doctors, nurses, and receptionists. The overwhelming need for a "single source of truth" for patient data and efficient appointment booking became the core focus, alongside strict security requirements.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.7s' }}>
                                <h4>2. Architecture & Design</h4>
                                <p className="text-light">
                                    A secure, scalable, and modular architecture was designed, separating concerns for patient data, scheduling, billing, and inventory. User flows were meticulously crafted for each role to ensure intuitive navigation and minimize training time.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.8s' }}>
                                <h4>3. Development & Implementation</h4>
                                <p className="text-light">
                                    We utilized React.js for highly responsive and user-friendly frontends, with Node.js/Express.js for secure backend APIs and PostgreSQL for a robust, relational database. Emphasis was placed on developing robust encryption and access control mechanisms from day one.
                                </p>
                            </div>
                            <div className="process-step-card" style={{ animationDelay: '0.9s' }}>
                                <h4>4. Testing & Iteration</h4>
                                <p className="text-light">
                                    Rigorous testing included functional, security, and performance tests. Beta trials in a medical clinic led to crucial UI improvements for faster patient check-ins and clearer doctor's notes templates, ensuring clinical usability and adoption.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* TECH STACK */}
                    <section className="animate-in section-spacing" style={{ animationDelay: '1.0s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>
                                The HMS was built using a robust, enterprise-grade tech stack prioritizing data security, scalability, and real-time performance.
                            </p>
                            <div>
                                <span className="tech-badge">React.js (Frontend)</span>
                                <span className="tech-badge">Node.js / Express.js (Backend)</span>
                                <span className="tech-badge">PostgreSQL (Primary Database)</span>
                                <span className="tech-badge">AWS/Azure (Cloud Infrastructure)</span>
                                <span className="tech-badge">JWT (Authentication/Authorization)</span>
                                <span className="tech-badge">Socket.io (Real-time updates)</span>
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
                                The implementation of the Hospital Management System led to profound improvements in hospital operations and patient care:
                            </p>
                            <ul className="styled-list text-light impact-list">
                                <li>**80% Reduction in Patient Check-in Time:** Streamlined digital registration and appointment verification.</li>
                                <li>**Elimination of Lost Records:** All patient data is securely stored and instantly accessible, drastically reducing errors.</li>
                                <li>**Improved Doctor Efficiency:** Real-time access to patient history and lab results allowed doctors to make faster, more informed decisions.</li>
                                <li>**Optimized Resource Allocation:** Better management of appointments, beds, and staff schedules reduced wait times and operational bottlenecks.</li>
                                <li>**Enhanced Data Security & Compliance:** Met stringent regulatory requirements for patient data privacy.</li>
                                <li>**Seamless Billing & Pharmacy Integration:** Reduced billing errors and faster prescription fulfillment.</li>
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
                                Developing the Hospital Management System was a deeply impactful project, highlighting the critical importance of accuracy and real-time data in healthcare. The primary challenge was balancing complex medical workflows with a user-friendly interface for diverse staff roles. We learned that meticulous planning for data security and regulatory compliance is non-negotiable in this sector.
                            </p>
                            <p className="text-light">
                                The future of this HMS is to evolve into a truly intelligent healthcare ecosystem, leveraging AI to enhance diagnostic support, personalize treatment plans, and continually optimize hospital operations, ultimately contributing to better patient outcomes.
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

export default HospitalManagementCase;
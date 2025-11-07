import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../sections/supabaseClient';
import { sendProjectEmail } from './emailService'; // Import the email service
import './SubmitIdea.css';

// Import shared components
import Header from './Header';
import Footer from '../sections/Footer';

const SubmitIdea = () => {
    // --- State for the enhanced form ---
    const [teamLeadName, setTeamLeadName] = useState('');
    const [teamLeadContact, setTeamLeadContact] = useState('');
    const [projectCategory, setProjectCategory] = useState('');
    const [problemStatement, setProblemStatement] = useState('');
    const [projectIdea, setProjectIdea] = useState(''); // Solution
    const [techStack, setTechStack] = useState('');

    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState({ type: '', message: '' });

    const roadmapPathRef = useRef(null);

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Specific logic for SVG path animation
                    if (entry.target.classList.contains('roadmap-section') && roadmapPathRef.current) {
                        const path = roadmapPathRef.current;
                        const length = path.getTotalLength();
                        path.style.strokeDasharray = length;
                        path.style.strokeDashoffset = length;
                        path.getBoundingClientRect(); // Trigger reflow
                        path.style.transition = 'stroke-dashoffset 3s ease-in-out';
                        path.style.strokeDashoffset = '0';
                    }
                }
            });
        }, { threshold: 0.15 });

        const targets = document.querySelectorAll('.section');
        targets.forEach(target => observer.observe(target));

        return () => targets.forEach(target => observer.unobserve(target));
    }, []);

    // --- Form helper functions ---
    const addTeamMember = () => {
        if (teamMembers.length < 2) {
            setTeamMembers([...teamMembers, { name: '', contact: '' }]);
        }
    };

    const removeTeamMember = (index) => {
        setTeamMembers(teamMembers.filter((_, i) => i !== index));
    };

    const handleMemberChange = (index, event) => {
        const values = [...teamMembers];
        values[index][event.target.name] = event.target.value;
        setTeamMembers(values);
    };

    // --- Main submission handler ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFeedback({ type: '', message: '' });

        if (!teamLeadName || !teamLeadContact || !projectCategory || !problemStatement || !projectIdea) {
            setFeedback({ type: 'error', message: 'Please fill out all required fields.' });
            setLoading(false);
            return;
        }

        // Prepare data object for Supabase and EmailJS
        const projectData = {
            team_lead_name: teamLeadName,
            team_lead_contact: teamLeadContact,
            project_category: projectCategory,
            problem_statement: problemStatement,
            project_idea: projectIdea,
            tech_stack: techStack,
            team_members: teamMembers.filter(member => member.name && member.contact),
        };

        // 1. Insert data into the database
        const { error } = await supabase.from('projects').insert([projectData]);

        setLoading(false);

        if (error) {
            setFeedback({ type: 'error', message: `Submission failed: ${error.message}` });
        } else {
            // 2. On successful submission, show feedback and send email
            setFeedback({ type: 'success', message: 'Your vision has been received. Welcome to the future.' });
            
            // Send email confirmation in the background
            sendProjectEmail(projectData).catch(err => {
                // Log email errors for debugging, but don't bother the user
                console.error("Email confirmation failed to send:", err);
            });

            // 3. Reset the form
            setTeamLeadName('');
            setTeamLeadContact('');
            setProjectCategory('');
            setProblemStatement('');
            setProjectIdea('');
            setTechStack('');
            setTeamMembers([]);
        }
    };

    return (
        <div className="page-wrapper" id="submitidea">
            <Header />

            {/* Section 1: Hero */}
            <section className="idea-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Idea2 <span>Impact</span></h1>
                    <p className="hero-slogan">We don't just take ideas; we forge futures. Partner with us to transform your groundbreaking concept into a market-defining reality.</p>
                    <div className="hero-cta-container" style={{ marginTop: '25px' }}>
                        <a href="#submission-form" className="hero-cta">Launch Your Mission</a>
                    </div>
                </div>
            </section>

            {/* Section 2: The Catalyst Ecosystem */}
            <section className="ecosystem-section section">
                <h2 className="section-heading">The Catalyst Ecosystem</h2>
                <div className="ecosystem-grid">
                    <div className="ecosystem-card">
                        <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L4 5v6a8 8 0 0 0 8 8 8 8 0 0 0 8-8V5l-8-3z"></path><path d="M12 22v-6a4 4 0 0 0-4-4H4"></path><path d="M20 8h-4a4 4 0 0 0-4 4v6"></path></svg></div>
                        <div className="card-content">
                            <h3>Elite Mentorship</h3>
                            <p>Gain unparalleled access to a curated network of industry titans, serial entrepreneurs, and domain experts committed to your success.</p>
                        </div>
                    </div>
                    <div className="ecosystem-card">
                        <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
                        <div className="card-content">
                            <h3>Revenue Architecture</h3>
                            <p>From concept to cash flow. We specialize in transforming groundbreaking ideas into profitable ventures through expert monetization strategies.</p>
                        </div>
                    </div>
                    <div className="ecosystem-card">
                        <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg></div>
                        <div className="card-content">
                            <h3>Velocity Engine</h3>
                            <p>Leverage our proprietary growth frameworks, market-entry strategies, and extensive network to achieve exponential traction and scale.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Curved Roadmap */}
            <section className="roadmap-section section">
                <h2 className="section-heading">The Ascent Protocol</h2>
                <div className="roadmap-container">
                    <svg className="roadmap-path" width="202" height="1089" viewBox="0 0 202 1089" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={roadmapPathRef} d="M101 0V66.5C101 99.6878 1 113.5 1 154.5V230.5C1 271.5 101 285.312 101 318.5V404.5C101 437.688 201 451.5 201 492.5V568.5C201 609.5 101 623.312 101 656.5V742.5C101 775.688 1 789.5 1 830.5V906.5C1 947.5 101 961.312 101 994.5V1089" stroke="url(#paint0_linear_1_2)" strokeWidth="3"/>
                        <defs><linearGradient id="paint0_linear_1_2" x1="101" y1="0" x2="101" y2="1089" gradientUnits="userSpaceOnUse"><stop stopColor="#7249F8"/><stop offset="1" stopColor="#E040FB"/></linearGradient></defs>
                    </svg>
                    
                    <div className="roadmap-item roadmap-item--left" style={{marginTop: '50px'}}><div className="roadmap-milestone">1</div><div className="roadmap-content"><h3 className="text-white">1. Submit Blueprint</h3><p>Articulate your vision through our detailed submission portal.</p></div></div>
                    <div className="roadmap-item roadmap-item--right" style={{marginTop: '150px'}}><div className="roadmap-milestone">2</div><div className="roadmap-content"><h3 className="text-white">2. Deep Dive Analysis</h3><p>Our experts assess your idea for market disruption and scalability.</p></div></div>
                    <div className="roadmap-item roadmap-item--left" style={{marginTop: '150px'}}><div className="roadmap-milestone">3</div><div className="roadmap-content"><h3 className="text-white">3. Alliance Proposal</h3><p>Present your vision to our board and secure a strategic partnership.</p></div></div>
                    <div className="roadmap-item roadmap-item--right" style={{marginTop: '150px'}}><div className="roadmap-milestone">4</div><div className="roadmap-content"><h3 className="text-white">4. Forge Partnership</h3><p>Formalize our alliance, aligning goals for mutual, exponential success.</p></div></div>
                    <div className="roadmap-item roadmap-item--left" style={{marginTop: '150px'}}><div className="roadmap-milestone">5</div><div className="roadmap-content"><h3 className="text-white">5. Incubation & Build</h3><p>Access our full ecosystem of resources to architect your product.</p></div></div>
                    <div className="roadmap-item roadmap-item--right" style={{marginTop: '150px'}}><div className="roadmap-milestone">6</div><div className="roadmap-content"><h3 className="text-white">6. Market Launch & Scale</h3><p>Deploy and dominate, leveraging our network for unstoppable growth.</p></div></div>
                </div>
            </section>
            
            {/* Section 4: Submission Form */}
           <section className="section closed-section">
  <div className="submit-idea-container" id="submission-form">
    <div className="form-card-wide">
      <div className="form-header">
        <p className="closed-text mt-4">
          The submissions for <strong>IDEA2IMPACT 2025</strong> are now closed.
        </p>
      </div>
    </div>
  </div>
</section>


            <Footer />
        </div>
    );
};

export default SubmitIdea;
import React, { useState, useRef, useEffect } from 'react';
import './ChatAgent.css';

// ============================================
// CODE NEXUS KNOWLEDGE BASE
// ============================================
const KNOWLEDGE_BASE = {
    company: {
        name: "Code Nexus",
        tagline: "Enterprise Software Solutions",
        description: "Code Nexus is a leading software development company specializing in enterprise-grade web applications, artificial intelligence solutions, and custom software architecture. We build innovative digital solutions that transform businesses and enhance user experiences through cutting-edge technology.",
        founded: "2024",
        email: "codenexusltd@gmail.com",
        phone: "+92 309 3885154",
        website: "codenexusltd.netlify.app",
        offices: [
            { label: "Pakistan Office", address: "Business Incubation Center, University of Agriculture, Faisalabad, Pakistan" },
            { label: "Headquarters", address: "Dawami, Riyadh, Saudi Arabia" }
        ],
        social: {
            facebook: "https://www.facebook.com/profile.php?id=61573819956075",
            instagram: "https://www.instagram.com/codenexusltd/",
            linkedin: "https://www.linkedin.com/company/code-nexus-ltd"
        }
    },

    services: [
        { name: "Web Development", desc: "Full-stack web applications built with React, Next.js, and modern frameworks. From landing pages to complex enterprise platforms." },
        { name: "Mobile App Development", desc: "Cross-platform mobile applications using React Native and Flutter for iOS and Android." },
        { name: "AI / ML Solutions", desc: "Artificial intelligence and machine learning integration including NLP, computer vision, and intelligent automation." },
        { name: "Agentic AI", desc: "Building autonomous AI agents using n8n, LangChain, and custom automation workflows for business process automation." },
        { name: "UI/UX Design", desc: "User-centered design with wireframing, prototyping, and full visual design for web and mobile interfaces." },
        { name: "Custom Software", desc: "Tailored software solutions designed to meet specific business requirements and operational needs." },
        { name: "Cloud & DevOps", desc: "Cloud infrastructure, CI/CD pipelines, containerization, and deployment automation using AWS, Firebase, and Supabase." },
        { name: "IoT Solutions", desc: "Internet of Things development including hardware integration, sensor networks, and real-time data monitoring." },
        { name: "SaaS Development", desc: "Software-as-a-Service platform development with subscription management, multi-tenancy, and scalable architecture." },
        { name: "Digital Marketing", desc: "SEO, social media marketing, content strategy, and data-driven campaign management to grow your digital presence." },
        { name: "E-commerce Solutions", desc: "Online store development with payment integration, inventory management, and order processing systems." }
    ],

    team: {
        leadership: [
            { name: "Muteeb Ramzan", role: "Founder & CEO", bio: "Leading the team to build scalable and meaningful software solutions. Passionate about startups and enterprise-grade applications.", linkedin: "https://www.linkedin.com/in/muteebramzan/", github: "https://github.com/m-muteeb" },
            { name: "Dr. M. Zeeshan Asif", role: "Chief Advisor", bio: "Bridging academia and industry with strategic insights rooted in deep technical knowledge.", linkedin: "https://www.linkedin.com/in/muhammad-zeeshan-asif-922a5742/" }
        ],
        members: [
            { name: "Tauseef Haider", role: "Team Lead" },
            { name: "Laiba Sarwar", role: "Business & HR" },
            { name: "Rayyan", role: "Full Stack Developer" },
            { name: "Usama", role: "Frontend Developer" },
            { name: "Hadia Ajmal", role: "Designer" },
            { name: "Hafiz Zubair", role: "Security" }
        ]
    },

    projects: [
        { name: "Testnology", type: "Case Study", desc: "A comprehensive educational testing and assessment platform with automated grading, performance analytics, and student management." },
        { name: "Ambitious PK", type: "Case Study", desc: "An e-learning platform featuring notes management, test series, and student certification system for academic excellence." },
        { name: "Unification Tibbi Foundation", type: "Case Study", desc: "A healthcare management platform with doctor network, e-commerce for medical supplies, and event management capabilities." },
        { name: "CraveCurve", type: "Web App", desc: "A food ordering and restaurant management platform." },
        { name: "Gramture", type: "Web App", desc: "A social media and content platform." },
        { name: "Code Nexus POS", type: "Web App", desc: "A point-of-sale system for retail businesses." },
        { name: "Hospital Management System", type: "Web App", desc: "A comprehensive hospital management and patient records system." }
    ],

    careers: {
        openPositions: [
            { title: "Digital Marketing Intern", type: "Internship", duration: "3-6 Months", location: "Remote", desc: "Execute high-impact digital marketing campaigns, analyze audience insights, and drive measurable growth." },
            { title: "React JS AI Developer", type: "Internship", duration: "3-6 Months", location: "Remote", focus: "AI/ML", desc: "Build intelligent React applications with AI agent integration, NLP, and modern web technologies." }
        ],
        perks: ["Remote-First Culture", "Elite Mentorship", "Cutting-Edge Tech Stack", "Flexible Hours", "Certification & Recognition", "Real-World Project Exposure"],
        noFullTime: true
    },

    idea2impact: {
        description: "Code Nexus's flagship innovation accelerator that empowers visionaries to transform raw concepts into fully-realized, scalable software solutions — backed by mentorship, development resources, and strategic partnership.",
        status: "Submissions for 2025 are closed.",
        winners: [
            { rank: "1st", name: "Maria Noor", score: "87/100", project: "Auto AI/ML Engineer", desc: "Automated data provisioning, cleaning, preprocessing, and feature engineering platform." },
            { rank: "2nd", name: "Muhammad Nouman", score: "78/100", project: "Enterprise Team Management Software", desc: "Comprehensive team management platform with task assignment, dashboards, and performance analytics." },
            { rank: "3rd", name: "Maryam Nadeem", score: "75/100", project: "Auto Jaw Scan", desc: "AI-powered dental X-ray analysis using deep learning for clinical-grade diagnostics." }
        ]
    },

    techStack: ["React", "Next.js", "Node.js", "Firebase", "Supabase", "MongoDB", "PostgreSQL", "Python", "TensorFlow", "n8n", "Flutter", "React Native", "AWS", "Docker", "Figma"]
};

// ============================================
// MATCHING ENGINE
// ============================================
function findBestResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|assalam|salam|aoa|greetings|good\s*(morning|evening|afternoon))/.test(msg)) {
        return `Hello! Welcome to Code Nexus. I'm here to help you learn about our services, team, projects, careers, and more. What would you like to know?`;
    }

    // Thanks / Bye
    if (/^(thanks|thank you|bye|goodbye|see you|take care)/.test(msg)) {
        return `Thank you for reaching out! If you have more questions, feel free to ask anytime. You can also email us at ${KNOWLEDGE_BASE.company.email} or call ${KNOWLEDGE_BASE.company.phone}.`;
    }

    // Contact / Phone / Email / Address / Location
    if (/contact|phone|call|email|mail|reach|address|location|office|where|headquarter|riyadh|faisalabad|saudi|pakistan/.test(msg)) {
        const offices = KNOWLEDGE_BASE.company.offices.map(o => `${o.label}: ${o.address}`).join('\n');
        return `Here is our contact information:\n\nPhone: ${KNOWLEDGE_BASE.company.phone}\nEmail: ${KNOWLEDGE_BASE.company.email}\n\nOffice Locations:\n${offices}\n\nYou can also connect with us on LinkedIn, Facebook, or Instagram.`;
    }

    // Services
    if (/service|what.*(do|offer|provide|build)|capability|solution|expertise/.test(msg)) {
        const serviceList = KNOWLEDGE_BASE.services.map(s => `- ${s.name}`).join('\n');
        return `Code Nexus offers a comprehensive range of software services:\n\n${serviceList}\n\nWould you like details about any specific service?`;
    }

    // Individual service queries
    for (const service of KNOWLEDGE_BASE.services) {
        const words = service.name.toLowerCase().split(/[\s\/&]+/);
        if (words.some(w => w.length > 2 && msg.includes(w))) {
            return `${service.name}: ${service.desc}\n\nWould you like to discuss a project or learn about our other services?`;
        }
    }

    // Team / Who / People
    if (/team|who.*work|people|member|employee|staff|founder|ceo|advisor|lead/.test(msg)) {
        const leaders = KNOWLEDGE_BASE.team.leadership.map(l => `- ${l.name} — ${l.role}`).join('\n');
        const members = KNOWLEDGE_BASE.team.members.map(m => `- ${m.name} — ${m.role}`).join('\n');
        return `Our team at Code Nexus:\n\nLeadership:\n${leaders}\n\nCore Team:\n${members}\n\nWould you like to know more about any team member?`;
    }

    // Specific leader queries
    if (/muteeb/.test(msg)) {
        const l = KNOWLEDGE_BASE.team.leadership[0];
        return `${l.name} is the ${l.role} of Code Nexus. ${l.bio}\n\nLinkedIn: ${l.linkedin}\nGitHub: ${l.github}`;
    }
    if (/zeeshan/.test(msg)) {
        const l = KNOWLEDGE_BASE.team.leadership[1];
        return `${l.name} is the ${l.role} at Code Nexus. ${l.bio}\n\nLinkedIn: ${l.linkedin}`;
    }

    // Projects / Portfolio / Case Studies
    if (/project|portfolio|case.?study|work|built|developed|client/.test(msg)) {
        const projectList = KNOWLEDGE_BASE.projects.map(p => `- ${p.name} (${p.type}): ${p.desc}`).join('\n');
        return `Here are our featured projects:\n\n${projectList}\n\nWould you like to learn more about any specific project?`;
    }

    // Individual project queries
    for (const project of KNOWLEDGE_BASE.projects) {
        if (msg.includes(project.name.toLowerCase())) {
            return `${project.name} (${project.type}): ${project.desc}\n\nVisit our website to see the full case study.`;
        }
    }

    // Careers / Jobs / Hiring / Internship
    if (/career|job|hiring|hire|intern|position|work.*with|join|opening|vacanc|apply|application/.test(msg)) {
        const positions = KNOWLEDGE_BASE.careers.openPositions.map(p => `- ${p.title} (${p.type}, ${p.duration}, ${p.location})`).join('\n');
        const perks = KNOWLEDGE_BASE.careers.perks.join(', ');
        return `We are currently hiring!\n\nOpen Positions:\n${positions}\n\nNote: Full-time positions are not available at this time.\n\nPerks: ${perks}\n\nVisit our Careers page to apply.`;
    }

    // Idea2Impact
    if (/idea.?2.?impact|idea.*impact|innovation|accelerator|submit.*idea|winner/.test(msg)) {
        const winners = KNOWLEDGE_BASE.idea2impact.winners.map(w => `- ${w.rank}: ${w.name} (${w.score}) — ${w.project}`).join('\n');
        return `Idea2Impact is ${KNOWLEDGE_BASE.idea2impact.description}\n\nStatus: ${KNOWLEDGE_BASE.idea2impact.status}\n\n2025 Winners:\n${winners}\n\nFollow us on social media for updates about the next cohort.`;
    }

    // Tech Stack
    if (/tech|stack|technolog|framework|language|tool|react|next|node|python|firebase|supabase/.test(msg)) {
        return `Our Technology Stack:\n\n${KNOWLEDGE_BASE.techStack.join(', ')}\n\nWe choose the best tools for each project based on requirements, scalability, and performance needs.`;
    }

    // Pricing / Cost / Quote
    if (/price|pricing|cost|quote|budget|how much|rate|charge|fee|afford|expensive|cheap/.test(msg)) {
        return `Our pricing depends on the scope, complexity, and timeline of each project. We offer competitive rates and flexible engagement models.\n\nTo get a custom quote, please contact us:\nEmail: ${KNOWLEDGE_BASE.company.email}\nPhone: ${KNOWLEDGE_BASE.company.phone}\n\nWe'd love to discuss your project requirements.`;
    }

    // About / Company / Who are you
    if (/about|company|who.*are|tell.*about|what.*is.*code.?nexus|overview|introduction/.test(msg)) {
        return `${KNOWLEDGE_BASE.company.description}\n\nFounded: ${KNOWLEDGE_BASE.company.founded}\nHeadquarters: Dawami, Riyadh, Saudi Arabia\nPakistan Office: Business Incubation Center, University of Agriculture, Faisalabad\n\nWe have delivered 75+ projects and continue to grow our portfolio across web, mobile, AI, and enterprise solutions.`;
    }

    // Social Media
    if (/social|facebook|instagram|linkedin|follow/.test(msg)) {
        return `Connect with us on social media:\n\nFacebook: ${KNOWLEDGE_BASE.company.social.facebook}\nInstagram: ${KNOWLEDGE_BASE.company.social.instagram}\nLinkedIn: ${KNOWLEDGE_BASE.company.social.linkedin}`;
    }

    // Process / How do you work
    if (/process|how.*work|workflow|methodology|approach|step|phase/.test(msg)) {
        return `Our Development Process:\n\n1. Discovery & Planning — Understanding your requirements, goals, and target audience\n2. Design & Architecture — Wireframing, prototyping, and system architecture design\n3. Development & Integration — Agile development with regular progress updates\n4. Testing & QA — Rigorous testing across devices, performance, and security\n5. Deployment & Launch — Production deployment with monitoring and optimization\n6. Support & Maintenance — Ongoing support, updates, and feature enhancements\n\nWe follow agile methodology with sprint-based development cycles.`;
    }

    // Timeline / How long
    if (/timeline|how long|duration|deadline|time.*take|deliver/.test(msg)) {
        return `Project timelines vary based on complexity:\n\n- Landing Pages: 1-2 weeks\n- Web Applications: 4-12 weeks\n- Mobile Applications: 6-16 weeks\n- Enterprise Solutions: 3-6 months\n- AI/ML Integration: Depends on data and model complexity\n\nWe provide detailed timelines during the project scoping phase. Contact us at ${KNOWLEDGE_BASE.company.email} to discuss your project.`;
    }

    // Fallback
    return `I appreciate your question! While I may not have a specific answer for that, I can help you with:\n\n- Our services and capabilities\n- Team information\n- Projects and case studies\n- Careers and open positions\n- Contact details and office locations\n- Idea2Impact program\n- Technology stack and process\n- Pricing and timelines\n\nOr feel free to reach out directly at ${KNOWLEDGE_BASE.company.email} or call ${KNOWLEDGE_BASE.company.phone}.`;
}

// ============================================
// CHAT AGENT COMPONENT
// ============================================
const ChatAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'agent', text: 'Hello! I\'m the Code Nexus assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const userMsg = { role: 'user', text: trimmed };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate a natural delay
        setTimeout(() => {
            const response = findBestResponse(trimmed);
            setMessages(prev => [...prev, { role: 'agent', text: response }]);
            setIsTyping(false);
        }, 600 + Math.random() * 400);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                className={`chat-toggle-btn ${isOpen ? 'chat-toggle-active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Chat with us"
            >
                {isOpen ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    {/* Header */}
                    <div className="chat-header">
                        <div className="chat-header-info">
                            <div className="chat-avatar">CN</div>
                            <div>
                                <div className="chat-header-title">Code Nexus</div>
                                <div className="chat-header-status">Online</div>
                            </div>
                        </div>
                        <button className="chat-close-btn" onClick={() => setIsOpen(false)} aria-label="Close chat">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="chat-messages">
                        {messages.map((msg, i) => (
                            <div key={i} className={`chat-message ${msg.role}`}>
                                {msg.role === 'agent' && <div className="msg-avatar">CN</div>}
                                <div className="msg-bubble">
                                    {msg.text.split('\n').map((line, j) => (
                                        <React.Fragment key={j}>
                                            {line}
                                            {j < msg.text.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="chat-message agent">
                                <div className="msg-avatar">CN</div>
                                <div className="msg-bubble typing-indicator">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="chat-input-area">
                        <input
                            ref={inputRef}
                            type="text"
                            className="chat-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message..."
                        />
                        <button className="chat-send-btn" onClick={handleSend} disabled={!input.trim()} aria-label="Send message">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatAgent;

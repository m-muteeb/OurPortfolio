import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';
import agenticVideo from '../../assets/agentic.mp4';

const AgenticAIService = () => {
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
                                Agentic AI Solutions: <br /><span className="hero-title-accent">Autonomous Intelligence</span>
                            </h1>
                            <p className="hero-subtitle">
                                Deploy intelligent AI agents that autonomously execute complex workflows, make data-driven decisions, and enhance productivity across your organization with cutting-edge machine learning.
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
                                <source src={agenticVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Service Overview</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                Agentic AI represents the next frontier of artificial intelligence—systems that can reason, plan, and act autonomously to achieve complex goals. We build custom AI agents that integrate seamlessly into your workflows, automating decision-making, optimizing processes, and providing intelligent assistance at scale.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item"><h3>Capability</h3><p>Autonomous Task Execution</p></div>
                                <div className="overview-item"><h3>Timeline</h3><p>10-18 Weeks</p></div>
                                <div className="overview-item"><h3>Models</h3><p>GPT-4, Claude, LLaMA</p></div>
                                <div className="overview-item"><h3>Integration</h3><p>Custom AI Workflows</p></div>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">What We Deliver</h2>
                        <div className="content-card">
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Intelligent Agents:</b> Custom AI agents that execute multi-step workflows autonomously with minimal human oversight.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>NLP Systems:</b> Advanced natural language understanding for chatbots, document analysis, and conversational AI.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Decision Automation:</b> AI-powered systems that make complex decisions based on business rules and data patterns.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Predictive Analytics:</b> Machine learning models for forecasting, anomaly detection, and trend analysis.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Knowledge Management:</b> RAG (Retrieval-Augmented Generation) systems for intelligent document search and synthesis.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Agent Orchestration:</b> Multi-agent systems where specialized AI agents collaborate to solve complex problems.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Our Development Process</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Use Case Discovery</h4>
                                <p className="text-light">
                                    Identify high-value automation opportunities within your workflows. Analyze data availability, define success metrics, and design agent architectures that align with business objectives. Feasibility assessment ensures realistic expectations.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>2. Model Selection & Training</h4>
                                <p className="text-light">
                                    Choose optimal LLMs (GPT-4, Claude, custom models) and fine-tune on your domain-specific data. Implement prompt engineering, few-shot learning, and retrieval systems. Establish evaluation frameworks for accuracy and reliability.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>3. Agent Development</h4>
                                <p className="text-light">
                                    Build autonomous agents with tool usage, memory systems, and error handling. Integrate with your existing tools, databases, and APIs. Implement human-in-the-loop safeguards for critical decisions.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>4. Deployment & Monitoring</h4>
                                <p className="text-light">
                                    Deploy agents with comprehensive logging and performance monitoring. Continuous feedback loops improve agent behavior over time. Regular audits ensure alignment with ethical AI principles and business goals.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>Cutting-edge AI technologies:</p>
                            <div>
                                <span className="tech-badge">OpenAI GPT-4 & GPT-4o</span>
                                <span className="tech-badge">Anthropic Claude</span>
                                <span className="tech-badge">LangChain & LlamaIndex</span>
                                <span className="tech-badge">Vector Databases (Pinecone, Weaviate)</span>
                                <span className="tech-badge">TensorFlow & PyTorch</span>
                                <span className="tech-badge">Hugging Face Transformers</span>
                                <span className="tech-badge">AutoGen & CrewAI</span>
                                <span className="tech-badge">Prompt Flow</span>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent">Why Choose Our Agentic AI Service</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Domain Expertise:</b> Proven experience deploying AI agents across customer service, data analysis, and workflow automation.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Responsible AI:</b> Ethical AI practices with bias detection, explainability, and human oversight mechanisms.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Cost Efficiency:</b> Optimize token usage and model selection to minimize operational costs.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Integration Excellence:</b> Seamless integration with existing systems, CRMs, and data warehouses.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Continuous Learning:</b> Agents improve over time through reinforcement learning and feedback incorporation.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.7s' }}>
                        <h2 className="headline-accent">Perfect For</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Customer Support</b> teams automating tier-1 inquiries with intelligent chatbots</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Sales Teams</b> leveraging AI for lead qualification and personalized outreach</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Data Analysts</b> needing automated insights and report generation</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Legal & Compliance</b> teams processing and analyzing large document volumes</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Research Organizations</b> automating literature reviews and data synthesis</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Operations Teams</b> optimizing complex scheduling and resource allocation</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AgenticAIService;

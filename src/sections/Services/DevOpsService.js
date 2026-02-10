import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';
import devOpsVideo from '../../assets/devops.mp4';

const DevOpsService = () => {
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
                                DevOps Services: <br /><span className="hero-title-accent">Continuous Delivery Excellence</span>
                            </h1>
                            <p className="hero-subtitle">
                                Accelerate software delivery with automated CI/CD pipelines, infrastructure as code, and cloud-native architectures that ensure reliability, security, and rapid iteration.
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
                                <source src={devOpsVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Service Overview</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                Our DevOps service transforms your software delivery process from manual deployments to fully automated, self-healing infrastructure. We implement best practices in continuous integration, deployment automation, monitoring, and incident response to minimize downtime and maximize development velocity.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item"><h3>Focus</h3><p>CI/CD & Automation</p></div>
                                <div className="overview-item"><h3>Timeline</h3><p>6-12 Weeks</p></div>
                                <div className="overview-item"><h3>Platforms</h3><p>AWS, Azure, GCP</p></div>
                                <div className="overview-item"><h3>Goal</h3><p>Zero-Downtime Deployments</p></div>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">What We Deliver</h2>
                        <div className="content-card">
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>CI/CD Pipelines:</b> Automated testing, building, and deployment workflows using GitLab CI, GitHub Actions, or Jenkins.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Infrastructure as Code:</b> Terraform and CloudFormation templates for reproducible, version-controlled infrastructure.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Container Orchestration:</b> Kubernetes and Docker implementations for scalable, portable applications.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Monitoring & Alerting:</b> Comprehensive observability with Prometheus, Grafana, and ELK stack.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Security Automation:</b> Vulnerability scanning, secrets management, and compliance-as-code.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Disaster Recovery:</b> Automated backups, failover strategies, and incident response playbooks.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Our Implementation Process</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Assessment & Planning</h4>
                                <p className="text-light">
                                    Audit existing infrastructure and deployment processes. Identify bottlenecks, security risks, and opportunities for automation. Create a phased roadmap for DevOps transformation aligned with business goals.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>2. Pipeline & Infrastructure Setup</h4>
                                <p className="text-light">
                                    Build CI/CD pipelines with automated testing and deployment stages. Implement infrastructure as code for consistent environment provisioning. Containerize applications for portability and scalability.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>3. Monitoring & Security</h4>
                                <p className="text-light">
                                    Deploy comprehensive monitoring, logging, and alerting systems. Implement security best practices including secrets management, network policies, and automated vulnerability scanning. Establish SLAs and incident response procedures.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>4. Optimization & Training</h4>
                                <p className="text-light">
                                    Tune performance, optimize costs, and establish self-healing mechanisms. Train your team on DevOps tools and practices. Provide ongoing support and continuous improvement recommendations.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>Modern DevOps toolchain:</p>
                            <div>
                                <span className="tech-badge">Docker & Kubernetes</span>
                                <span className="tech-badge">Terraform & Ansible</span>
                                <span className="tech-badge">GitHub Actions & GitLab CI</span>
                                <span className="tech-badge">AWS/Azure/GCP</span>
                                <span className="tech-badge">Prometheus & Grafana</span>
                                <span className="tech-badge">ELK Stack</span>
                                <span className="tech-badge">ArgoCD & Helm</span>
                                <span className="tech-badge">SonarQube & Trivy</span>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent">Why Choose Our DevOps Service</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Faster Time to Market:</b> Reduce deployment cycles from weeks to minutes with automated pipelines.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Higher Reliability:</b> Achieve 99.9%+ uptime with auto-scaling and self-healing infrastructure.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Cost Optimization:</b> Right-size resources and eliminate waste with intelligent monitoring.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Security Hardening:</b> Shift-left security with automated vulnerability detection and compliance checks.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Team Empowerment:</b> Knowledge transfer and training ensure your team owns the DevOps culture.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.7s' }}>
                        <h2 className="headline-accent">Perfect For</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>SaaS companies</b> needing rapid, reliable deployments</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Enterprises</b> modernizing legacy infrastructure</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Startups</b> establishing DevOps culture from day one</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Agencies</b> managing multiple client deployments</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>E-commerce</b> requiring zero-downtime releases during peak seasons</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DevOpsService;

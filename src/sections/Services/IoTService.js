import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import './services.css';
import iotVideo from '../../assets/iot.mp4';

const IoTService = () => {
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
                                IoT Solutions: <br /><span className="hero-title-accent">Connecting the Physical & Digital</span>
                            </h1>
                            <p className="hero-subtitle">
                                Bridge the gap between hardware and software with intelligent IoT ecosystems. We build secure, real-time control systems that harness the power of connected devices to drive efficiency and innovation.
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
                                <source src={iotVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.2s' }}>
                        <h2 className="headline-accent">Service Overview</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '30px' }}>
                                The Internet of Things is transforming industries by making operations smarter. We provide end-to-end IoT development, covering everything from firmware and edge computing to cloud dashboards and data analytics. Whether for smart homes, industrial automation, or wearable tech, we create secure, scalable networks that deliver actionable insights.
                            </p>
                            <div className="grid-overview">
                                <div className="overview-item"><h3>Connectivity</h3><p>MQTT, BLE, Zigbee</p></div>
                                <div className="overview-item"><h3>Timeline</h3><p>12-24 Weeks</p></div>
                                <div className="overview-item"><h3>Scale</h3><p>Proprietary & Industrial</p></div>
                                <div className="overview-item"><h3>Security</h3><p>End-to-End Encryption</p></div>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.3s' }}>
                        <h2 className="headline-accent">Capabilities</h2>
                        <div className="content-card">
                            <ul className="icon-list text-light">
                                <li><span className="icon-list-check">&#10003;</span> <b>Firmware Development:</b> Optimized C/C++ code for ESP32, STM32, and Arduino microcontrollers.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Cloud Connectivity:</b> Secure integration with AWS IoT, Google Cloud IoT, and Azure IoT Hub.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Real-Time Dashboards:</b> Interactive web and mobile apps for device monitoring and control.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>Edge Computing:</b> Processing data locally on devices to reduce latency and bandwidth usage.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>OTA Updates:</b> Robust mechanisms for remote firmware updates and device management.</li>
                                <li><span className="icon-list-check">&#10003;</span> <b>M2M Communication:</b> Enabling seamless communication between devices without human intervention.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.4s' }}>
                        <h2 className="headline-accent centered-headline">Our Development Process</h2>
                        <div className="grid-overview" style={{ marginTop: '30px' }}>
                            <div className="process-step-card">
                                <h4>1. Hardware & Scope Check</h4>
                                <p className="text-light">
                                    Assess hardware requirements and select optimal sensors, microcontrollers, and communication protocols. We define the system architecture to ensure hardware and software compatibility.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>2. Prototyping</h4>
                                <p className="text-light">
                                    Developing functional Proof of Concepts (PoC) to validate sensor data accuracy and connectivity. This phase involves breadboarding, basic firmware, and initial cloud connections.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>3. Full-Scale Development</h4>
                                <p className="text-light">
                                    Designing custom PCBs, writing production-grade firmware, and building the full cloud infrastructure. We implement robust security protocols and stress-test the system.
                                </p>
                            </div>
                            <div className="process-step-card">
                                <h4>4. Testing & Deployment</h4>
                                <p className="text-light">
                                    Rigorous field testing to ensure reliability in real-world conditions. We deploy user interfaces, configure final cloud environments, and support the hardware manufacturing rollout.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.5s' }}>
                        <h2 className="headline-accent">Technology Stack</h2>
                        <div className="content-card">
                            <p className="text-light" style={{ marginBottom: '20px' }}>
                                Robust protocols and platforms for connected ecosystems:
                            </p>
                            <div>
                                <span className="tech-badge">C/C++ & Python</span>
                                <span className="tech-badge">MQTT & CoAP & HTTP</span>
                                <span className="tech-badge">AWS IoT Core</span>
                                <span className="tech-badge">FreeRTOS</span>
                                <span className="tech-badge">Raspberry Pi & ESP32</span>
                                <span className="tech-badge">LoraWAN & Zigbee</span>
                                <span className="tech-badge">InfluxDB & Grafana</span>
                                <span className="tech-badge">Docker</span>
                            </div>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.6s' }}>
                        <h2 className="headline-accent">Why Choose Our IoT Service</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><b>Hardware-Software Synergy:</b> We understand both electronics and cloud code, bridging the gap perfectly.</li>
                                <li><b>Security at Core:</b> Implementing TLS, device certificates, and secure boot to prevent hacks.</li>
                                <li><b>Scalable Infrastructure:</b> Architectures that support thousands of concurrent device connections.</li>
                                <li><b>Real-Time Responsiveness:</b> Sub-second latency for critical control and monitoring applications.</li>
                                <li><b>Industry Agnostic:</b> Solutions tailored for agriculture, manufacturing, healthcare, and consumer tech.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="animate-in section-spacing" style={{ animationDelay: '0.7s' }}>
                        <h2 className="headline-accent">Perfect For</h2>
                        <div className="content-card">
                            <ul className="styled-list text-light">
                                <li><b>Smart Home</b> product manufacturers</li>
                                <li><b>Industrial 4.0</b> factories automation</li>
                                <li><b>AgriTech</b> smart farming solutions</li>
                                <li><b>Wearable Health</b> device companies</li>
                                <li><b>Logistics</b> asset tracking and fleet management</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default IoTService;

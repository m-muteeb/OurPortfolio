import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../scss/_process.scss";

const steps = [
    {
        icon: "fa-search",
        title: "Discovery",
        desc: "We dive deep into your vision, understanding your goals, audience, and challenges to build a solid foundation.",
    },
    {
        icon: "fa-map-o",
        title: "Strategy",
        desc: "We craft a roadmap and high-fidelity designs that blend aesthetics with intuitive user experience.",
    },
    {
        icon: "fa-paint-brush",
        title: "Design",
        desc: "Our designers create intuitive, engaging, and beautiful interfaces. We focus on user journey mapping.",
    },
    {
        icon: "fa-code",
        title: "Development",
        desc: "Our engineers build scalable, clean, and efficient code, transforming designs into a powerful reality.",
    },
    {
        icon: "fa-check-circle-o",
        title: "Quality Assurance",
        desc: "We rigorously test every feature to eliminate bugs. Quality is non-negotiable.",
    },
    {
        icon: "fa-rocket",
        title: "Launch & Scale",
        desc: "We deploy with precision and provide ongoing support to help your product grow and evolve.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProcessSection = () => {
    return (
        <section className="process-section-simple" id="Process">
            <Container>
                {/* Header */}
                <div className="section-header text-center mb-5">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-uppercase text-sky fw-bold letter-spacing-2 mb-2"
                    >
                        How We Work
                    </motion.p>
                    <motion.h2
                        className="display-4 fw-bold text-dark"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Our <span className="text-gradient">Process</span>
                    </motion.h2>
                    <div className="divider mx-auto"></div>
                </div>

                <motion.div
                    className="process-grid-simple"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {steps.map((step, index) => (
                        <motion.div key={index} className="process-card-simple" variants={itemVariants}>
                            <div className="icon-wrapper-simple">
                                <i className={`fa ${step.icon}`}></i>
                            </div>
                            <h3 className="process-title-simple">{step.title}</h3>
                            <p className="process-desc-simple">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};

export default ProcessSection;

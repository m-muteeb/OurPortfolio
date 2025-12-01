// src/components/ExpertiseDetail.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LaptopOutlined,
  ApiOutlined,
  SearchOutlined,
  CodeOutlined,
  RobotOutlined,
  CloudServerOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const cardData = [
  {
    id: 1,
    icon: <LaptopOutlined style={{ fontSize: 50, color: "#1db8e4" }} />,
    title: "WEB DEVELOPMENT",
    description:
      "We specialize in building responsive, fast, and scalable web applications using modern technologies like React, Node.js, and Next.js. Our process focuses on high performance, accessibility, and top-tier design aesthetics.",
  },
  {
    id: 2,
    icon: <RobotOutlined style={{ fontSize: 50, color: "#1db8e4" }} />,
    title: "AI SOLUTIONS",
    description:
      "We deliver AI-powered solutions ranging from chatbots and image recognition to predictive analytics. Our AI systems help automate business processes and create intelligent decision-making pipelines.",
  },
  {
    id: 3,
    icon: <SearchOutlined style={{ fontSize: 50, color: "#1db8e4" }} />,
    title: "SEO & DIGITAL MARKETING",
    description:
      "Boost your brand visibility with targeted SEO and digital marketing campaigns. We craft strategies that convert through data-driven optimization and analytics.",
  },
  {
    id: 4,
    icon: <ApiOutlined style={{ fontSize: 50, color: "#1db8e4" }} />,
    title: "API DEVELOPMENT",
    description:
      "Our RESTful and GraphQL API services ensure secure, reliable, and lightning-fast data integration across platforms and systems.",
  },
  {
    id: 5,
    icon: <CloudServerOutlined style={{ fontSize: 50, color: "#1db8e4" }} />,
    title: "CLOUD SERVICES",
    description:
      "Migrate, deploy, and scale with confidence. Our cloud experts leverage AWS, Azure, and GCP to build robust, cost-efficient architectures.",
  },
  {
    id: 6,
    icon: <CodeOutlined style={{ fontSize: 50, color: "#1db8e4" }} />,
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description:
      "We develop customized ERP, CRM, and enterprise-level systems tailored specifically to your operational needs.",
  },
];

const ExpertiseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = cardData.find((item) => item.id === Number(id));

  if (!service)
    return (
      <div className="text-center text-white mt-20">Service not found 😢</div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen text-white p-8"
      style={{
        background:
          "linear-gradient(135deg, rgba(18,31,90,1) 0%, rgba(8,16,40,1) 100%)",
      }}
    >
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer mb-6 flex items-center gap-2 text-[#1db8e4] font-semibold hover:underline"
      >
        <ArrowLeftOutlined /> Back to Services
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          background: "rgba(255,255,255,0.1)",
          padding: "40px",
          borderRadius: "20px",
          maxWidth: "700px",
          textAlign: "center",
          boxShadow: "0 10px 50px rgba(0,0,0,0.4)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mb-4 flex justify-center">{service.icon}</div>
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg leading-relaxed text-gray-200">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ExpertiseDetail;

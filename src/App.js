import React, { useState, useEffect } from "react";
import "./App.css"; // Main CSS
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FirebaseProvider } from "./firebase/FirebaseContext";
import { Modal, Button } from "react-bootstrap"; // Bootstrap Modal
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "font-awesome/css/font-awesome.min.css"; // Font Awesome CSS
import Lenis from "lenis";

// Pages & Sections
import Home from "./pages/Home";
import Submitidea from "./sections/SubmitIdea";
import Careers from "./sections/Careers";
import Projectwall from "./sections/ProjectsWall";
import ExpertiseDetail from "./sections/ExpertiseDetail.js";
import AmbitiousCase from "./sections/CaseStudies/AmbitiousCase.js";
import GramtureCase from "./sections/CaseStudies/Gramturecase.js";
import TestnologyCase from "./sections/CaseStudies/Testnologycase.js";
import CraveCurveCase from "./sections/CaseStudies/CraveCurveCase.js";
import CodeNexusPOSCase from "./sections/CaseStudies/CodeNexusPosCase.js";
import HospitalManagementCase from "./sections/CaseStudies/Hospitalmanagement.js";

const App = () => {
  // State to control popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Premium smooth feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Show modal on page load & auto-close after 5 seconds
  useEffect(() => {
    setShowPopup(true);
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  // Function to close modal
  const handleClose = () => setShowPopup(false);

  return (
    <FirebaseProvider>
      <Router>



        {/* --------------------- */}
        {/* Main Routes */}
        {/* --------------------- */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submitidea" element={<Submitidea />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/projectwall" element={<Projectwall />} />
          <Route path="/expertisedetail/:id" element={<ExpertiseDetail />} />
          <Route path="/projects/ambitious-pk" element={<AmbitiousCase />} />
          <Route path="/projects/gramture" element={<GramtureCase />} />
          <Route path="/projects/testonology" element={<TestnologyCase />} />
          <Route path="/projects/crave-curve" element={<CraveCurveCase />} />
          <Route path="/projects/pos-system" element={<CodeNexusPOSCase />} />
          <Route path="/projects/hospital-system" element={<HospitalManagementCase />} />
        </Routes>
      </Router>
    </FirebaseProvider>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import "./App.css"; // Main CSS
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FirebaseProvider } from "./firebase/FirebaseContext";
import { Modal, Button } from "react-bootstrap"; // Bootstrap Modal
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "font-awesome/css/font-awesome.min.css"; // Font Awesome CSS

// Pages & Sections
import Home from "./pages/Home";
import Submitidea from "./sections/SubmitIdea";
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
        {/* Launch Popup Modal */}
        {/* --------------------- */}
        <Modal
          show={showPopup}
          onHide={handleClose}
          centered
          backdrop="static" // Prevent closing on outside click
          keyboard={false} // Prevent closing with ESC key
          contentClassName="launch-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontWeight: "600", fontSize: "1.3rem" }}>
              Idea2Impact
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
              Transform your ideas into real-world impact. Submit your innovative ideas and be part of the change.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/submitidea">
              <Button
                variant="primary"
                onClick={handleClose} // Close modal immediately when clicked
                style={{
                  backgroundColor: "#1db8e4",
                  borderColor: "#1db8e4",
                  fontWeight: "500",
                  padding: "8px 20px",
                  borderRadius: "8px",
                }}
              >
                Submit Your Idea
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>

        {/* --------------------- */}
        {/* Main Routes */}
        {/* --------------------- */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submitidea" element={<Submitidea />} />
          <Route path="/projectwall" element={<Projectwall />} />
          <Route path="/expertisedetail/:id" element={<ExpertiseDetail />} />
          <Route path="/projects/ambitious-pk" element={<AmbitiousCase />} />
          <Route path="/projects/gramture" element={<GramtureCase />} />
          <Route path="/projects/testonology" element={<TestnologyCase />} />
          <Route path="/projects/crave-curve" element={<CraveCurveCase />} />
          <Route path="/projects/pos-system" element={<CodeNexusPOSCase />} />
          <Route path="/projects/hospital-managment" element={<HospitalManagementCase />} />
        </Routes>
      </Router>
    </FirebaseProvider>
  );
};

export default App;

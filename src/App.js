import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FirebaseProvider } from "./firebase/FirebaseContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Lenis from "lenis";

// ─── Pages ───────────────────────────────────────────────
import Home from "./pages/Home";

// ─── Sections (Standalone Pages) ─────────────────────────
import Submitidea from "./sections/SubmitIdea";
import Careers from "./sections/Careers";
import Projectwall from "./sections/ProjectsWall";
import ExpertiseDetail from "./sections/ExpertiseDetail";
import ChatAgent from "./sections/ChatAgent";

// ─── Case Studies ────────────────────────────────────────
import TestnologyCase from "./sections/CaseStudies/TestnologyCaseStudy";
import AmbitiousCaseStudy from "./sections/CaseStudies/AmbitiousCaseStudy";
import UnificationTibbiCaseStudy from "./sections/CaseStudies/UnificationTibbiCaseStudy";

// ─── Service Pages ───────────────────────────────────────
import MobileAppService from "./sections/Services/MobileAppService";
import WebDevService from "./sections/Services/WebDevService";
import IoTService from "./sections/Services/IoTService";
import SaaSService from "./sections/Services/SaaSService";
import DevOpsService from "./sections/Services/DevOpsService";
import AgenticAIService from "./sections/Services/AgenticAIService";
import UIUXService from "./sections/Services/UIUXService";
import DigitalMarketingService from "./sections/Services/DigitalMarketingService";

const App = () => {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.2,
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

  return (
    <FirebaseProvider>
      <Router>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/submitidea" element={<Submitidea />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/projectwall" element={<Projectwall />} />
          <Route path="/expertisedetail/:id" element={<ExpertiseDetail />} />

          {/* Case Studies */}
          <Route path="/case-study/testnology" element={<TestnologyCase />} />
          <Route path="/case-study/ambitious-pk" element={<AmbitiousCaseStudy />} />
          <Route path="/case-study/unification-tibbi" element={<UnificationTibbiCaseStudy />} />

          {/* Service Pages */}
          <Route path="/services/mobile-app" element={<MobileAppService />} />
          <Route path="/services/web-development" element={<WebDevService />} />
          <Route path="/services/iot-solutions" element={<IoTService />} />
          <Route path="/services/saas-development" element={<SaaSService />} />
          <Route path="/services/devops" element={<DevOpsService />} />
          <Route path="/services/agentic-ai" element={<AgenticAIService />} />
          <Route path="/services/uiux-design" element={<UIUXService />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingService />} />
        </Routes>

        {/* Global Components */}
        <ChatAgent />
      </Router>
    </FirebaseProvider>
  );
};

export default App;


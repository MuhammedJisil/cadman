import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import PrivacyPolicy from "./components/PrivacyPolicy";

// main navigations
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Training from "./components/pages/Training";
import ContactUs from "./components/pages/ContactUs";

// services
import SecurityServices from "./components/services/SecurityServices";
import FacilityManagement from "./components/services/FacilityManagement";
import PestControl from "./components/services/PestControl";
import CCTVSecurity from "./components/services/CCTVSecurity";
import MEPServices from "./components/services/MEPServices";
import FireSafety from "./components/services/FireSafety";

//operations
import EmergencyEscalation from "./components/operations/EmergencyEscalation";
import HowWeWork from "./components/operations/HowWeWork";
import Recruitment from "./components/operations/Recruitment";
import ServiceGuarantee from "./components/operations/ServiceGuarantee";
import StatutoryCompliance from "./components/operations/StatutoryCompliance";

import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <ScrollToTopButton />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Service Routes */}
          <Route path="/services/security" element={<SecurityServices />} />
          <Route
            path="/services/facility-management"
            element={<FacilityManagement />}
          />
          <Route path="/services/pest-control" element={<PestControl />} />
          <Route path="/services/cctv-security" element={<CCTVSecurity />} />
          <Route path="/services/mep" element={<MEPServices />} />
          <Route path="/services/fire-safety" element={<FireSafety />} />

          {/* Operations Routes */}
          <Route path="/operations/how-we-work" element={<HowWeWork />} />
          <Route path="/operations/recruitment" element={<Recruitment />} />
          <Route
            path="/operations/emergency-escalation"
            element={<EmergencyEscalation />}
          />
          <Route
            path="/operations/compliance"
            element={<StatutoryCompliance />}
          />
          <Route
            path="/operations/service-guarantee"
            element={<ServiceGuarantee />}
          />

          {/* 404 Route */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

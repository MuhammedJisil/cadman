import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";

// main navigations
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Training from "./components/pages/Training";
import Operations from "./components/pages/Operations";
import ContactUs from "./components/pages/ContactUs";


// services
import SecurityServices from './components/services/SecurityServices';
import FacilityManagement from './components/services/FacilityManagement';
import PestControl from './components/services/PestControl';
import CCTVSecurity from './components/services/CCTVSecurity';
import MEPServices from './components/services/MEPServices';
import FireSafety from './components/services/FireSafety';


import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/operations" element={<Operations />} />
           <Route path="/contact" element={<ContactUs />} />

          

           {/* Service Routes */}
          <Route path="/services/security" element={<SecurityServices />} />
          <Route path="/services/facility-management" element={<FacilityManagement />} />
          <Route path="/services/pest-control" element={<PestControl />} />
          <Route path="/services/cctv-security" element={<CCTVSecurity />} />
          <Route path="/services/mep" element={<MEPServices />} />
          <Route path="/services/fire-safety" element={<FireSafety />} />
    
    {/* 404 Route */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

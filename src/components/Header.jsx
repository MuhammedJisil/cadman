import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeMenu, setActiveMenu] = useState("HOME");
  const location = useLocation();

  // Update active menu based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveMenu("HOME");
    } else if (path === "/about") {
      setActiveMenu("ABOUT US");
    } else if (path.startsWith("/services/")) {
      setActiveMenu("SERVICES");
    } else if (path === "/training") {
      setActiveMenu("TRAINING");
    } else if (path.startsWith("/operations/")) {
      setActiveMenu("OPERATIONS");
    } else if (path === "/contact") {
      setActiveMenu("CONTACT");
    }
  }, [location]);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Close dropdowns when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setOpenDropdown(null);
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
          * {
            font-family: 'Roboto Condensed', sans-serif;
          }
        `}
      </style>

      {/* Top Bar - Blue Section (Full Width) - Hidden on Mobile */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 pb-12 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 pt-4 flex justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Cadman Security Service"
              className="h-14 w-auto"
            />
            <div>
              <div className="text-white text-2xl font-bold tracking-tight">
                CADMAN
              </div>
              <div className="text-amber-500 text-xs tracking-widest">
                SECURITY SERVICE
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-amber-500 p-2 rounded">
                <Phone size={18} className="text-white" />
              </div>
              <div className="text-white">
                <div className="text-xs opacity-90">On-Call Service 24/7</div>
                <div className="font-semibold">(+62) 888-800-212</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-amber-500 p-2 rounded">
                <Mail size={18} className="text-white" />
              </div>
              <div className="text-white">
                <div className="text-xs opacity-90">Email Address</div>
                <div className="font-semibold">SUPPORT@YOURMAIL.TLD</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        {/* Blue Section with Logo */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 pt-3 pb-6">
          <div className="flex items-center justify-center gap-3">
            <img
              src="/logo.png"
              alt="Cadman Security Service"
              className="h-10 w-auto"
            />
            <div>
              <div className="text-white text-lg font-bold tracking-tight">
                CADMAN
              </div>
              <div className="text-amber-500 text-xs tracking-widest">
                SECURITY SERVICE
              </div>
            </div>
          </div>
        </div>

        {/* Navy Blue Navigation Bar with Hamburger and Social Icons */}
        <div className="-mt-4 px-4">
          <div className="bg-gray-900 flex items-center justify-between px-4 py-2.5 shadow-lg">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:text-amber-500 transition"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Facebook
                size={18}
                className="text-white cursor-pointer hover:text-amber-500 transition"
              />
              <Twitter
                size={18}
                className="text-white cursor-pointer hover:text-amber-500 transition"
              />
              <Youtube
                size={18}
                className="text-white cursor-pointer hover:text-amber-500 transition"
              />
              <Instagram
                size={18}
                className="text-white cursor-pointer hover:text-amber-500 transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <div className="hidden lg:block -mt-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-900 flex items-center justify-between shadow-lg">
            {/* Navigation Links */}
            <nav className="flex items-center">
              <Link
                to="/"
                onClick={() => setActiveMenu("HOME")}
                className={`px-8 py-6 font-semibold transition ${
                  activeMenu === "HOME"
                    ? "bg-amber-500 text-white"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                HOME
              </Link>
              <Link
                to="/about"
                onClick={() => setActiveMenu("ABOUT US")}
                className={`px-6 py-6 font-semibold transition ${
                  activeMenu === "ABOUT US"
                    ? "bg-amber-500 text-white"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                ABOUT US
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setActiveMenu("SERVICES")}
                  className={`px-6 py-6 font-semibold transition flex items-center gap-1 ${
                    activeMenu === "SERVICES"
                      ? "bg-amber-500 text-white"
                      : "text-white hover:bg-gray-800"
                  }`}
                >
                  SERVICES <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link
                    to="/services/security"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    Security Services
                  </Link>
                  <Link
                    to="/services/facility-management"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    Complete Facility Management
                  </Link>
                  <Link
                    to="/services/pest-control"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    Pest Control Services
                  </Link>
                  <Link
                    to="/services/cctv-security"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    CCTV & Electronic Security
                  </Link>
                  <Link
                    to="/services/mep"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    MEP Services
                  </Link>
                  <Link
                    to="/services/fire-safety"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100"
                  >
                    Fire & Safety Services
                  </Link>
                </div>
              </div>

              <Link
                to="/training"
                onClick={() => setActiveMenu("TRAINING")}
                className={`px-6 py-6 font-semibold transition ${
                  activeMenu === "TRAINING"
                    ? "bg-amber-500 text-white"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                TRAINING
              </Link>
              {/* Operations Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => setActiveMenu("OPERATIONS")}
                  className={`px-6 py-6 font-semibold transition flex items-center gap-1 ${
                    activeMenu === "OPERATIONS"
                      ? "bg-amber-500 text-white"
                      : "text-white hover:bg-gray-800"
                  }`}
                >
                  OPERATIONS <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link
                    to="/operations/how-we-work"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    How We Work
                  </Link>
                  <Link
                    to="/operations/recruitment"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    Recruitment Process
                  </Link>
                  <Link
                    to="/operations/emergency-escalation"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    Emergency Escalation Matrix
                  </Link>
                  <Link
                    to="/operations/compliance"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    Statutory Compliance
                  </Link>
                  <Link
                    to="/operations/service-guarantee"
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100"
                  >
                    Service Guarantee
                  </Link>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setActiveMenu("CONTACT")}
                className={`px-6 py-6 font-semibold transition ${
                  activeMenu === "CONTACT"
                    ? "bg-amber-500 text-white"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                CONTACT
              </Link>
            </nav>

            {/* Social Media Links */}
            <div className="flex gap-4 pr-6">
              <Facebook
                size={20}
                className="text-white cursor-pointer hover:text-amber-500 transition"
              />
              <Twitter
                size={20}
                className="text-white cursor-pointer hover:text-amber-500 transition"
              />
              <Youtube
                size={20}
                className="text-white cursor-pointer hover:text-amber-500 transition"
              />
              <Instagram
                size={20}
                className="text-white cursor-pointer hover:text-amber-500 transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900">
          <nav className="flex flex-col">
            <Link
              to="/"
              onClick={() => {
                setActiveMenu("HOME");
                setIsMobileMenuOpen(false);
              }}
              className={`px-6 py-4 font-semibold ${
                activeMenu === "HOME" ? "bg-amber-500 text-white" : "text-white"
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              onClick={() => {
                setActiveMenu("ABOUT US");
                setIsMobileMenuOpen(false);
              }}
              className={`px-6 py-4 font-semibold ${
                activeMenu === "ABOUT US"
                  ? "bg-amber-500 text-white"
                  : "text-white"
              }`}
            >
              ABOUT US
            </Link>

            {/* Services Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown("SERVICES")}
                className={`w-full text-left px-6 py-4 font-semibold flex items-center justify-between ${
                  activeMenu === "SERVICES"
                    ? "bg-amber-500 text-white"
                    : "text-white"
                }`}
              >
                SERVICES{" "}
                <ChevronDown
                  size={16}
                  className={
                    openDropdown === "SERVICES"
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>
              {openDropdown === "SERVICES" && (
                <div className="bg-white">
                  <Link
                    to="/services/security"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-8 py-3 text-gray-800 border-b"
                  >
                    Security Services
                  </Link>
                  <Link
                    to="/services/facility-management"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-8 py-3 text-gray-800 border-b"
                  >
                    Complete Facility Management
                  </Link>
                  <Link
                    to="/services/pest-control"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-8 py-3 text-gray-800 border-b"
                  >
                    Pest Control Services
                  </Link>
                  <Link
                    to="/services/cctv-security"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-8 py-3 text-gray-800 border-b"
                  >
                    CCTV & Electronic Security
                  </Link>
                  <Link
                    to="/services/mep"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-8 py-3 text-gray-800 border-b"
                  >
                    MEP Services
                  </Link>
                  <Link
                    to="/services/fire-safety"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-8 py-3 text-gray-800"
                  >
                    Fire & Safety Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/training"
              onClick={() => {
                setActiveMenu("TRAINING");
                setIsMobileMenuOpen(false);
              }}
              className={`px-6 py-4 font-semibold ${
                activeMenu === "TRAINING"
                  ? "bg-amber-500 text-white"
                  : "text-white"
              }`}
            >
              TRAINING
            </Link>
            {/* Operations Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("OPERATIONS")}
                className={`w-full text-left px-6 py-4 font-semibold flex items-center justify-between ${
                  activeMenu === "OPERATIONS"
                    ? "bg-amber-500 text-white"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                OPERATIONS{" "}
                <ChevronDown
                  size={16}
                  className={
                    openDropdown === "OPERATIONS"
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>
              {openDropdown === "OPERATIONS" && (
                <div className="bg-white">
                  <Link
                    to="/operations/how-we-work"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    How We Work
                  </Link>
                  <Link
                    to="/operations/recruitment"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    Recruitment Process
                  </Link>
                  <Link
                    to="/operations/emergency-escalation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    Emergency Escalation Matrix
                  </Link>
                  <Link
                    to="/operations/compliance"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b"
                  >
                    Statutory Compliance
                  </Link>
                  <Link
                    to="/operations/service-guarantee"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-gray-800 hover:bg-gray-100"
                  >
                    Service Guarantee
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => {
                setActiveMenu("CONTACT");
                setIsMobileMenuOpen(false);
              }}
              className={`px-6 py-4 font-semibold ${
                activeMenu === "CONTACT"
                  ? "bg-amber-500 text-white"
                  : "text-white"
              }`}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

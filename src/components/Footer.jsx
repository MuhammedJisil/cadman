import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
          * {
            font-family: 'Roboto Condensed', sans-serif;
          }
        `}
      </style>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Cadman Security Service"
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-bold tracking-tight">CADMAN</div>
                <div className="text-amber-500 text-xs tracking-widest">
                  SECURITY SERVICE
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing professional security and facility management solutions
              with excellence and integrity since our establishment.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded hover:bg-amber-500 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded hover:bg-amber-500 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded hover:bg-amber-500 transition"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded hover:bg-amber-500 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/training"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  Training
                </Link>
              </li>
              <li>
                <Link
                  to="/operations"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  Operations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/security"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  Security Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/facility-management"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  Facility Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/pest-control"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  Pest Control
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cctv-security"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  CCTV & Electronic Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mep"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  MEP Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/fire-safety"
                  className="text-gray-400 hover:text-amber-500 transition flex items-center gap-2 text-sm"
                >
                  <ChevronRight size={16} className="text-amber-500" />
                  Fire & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-amber-500 p-2 rounded mt-1">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">
                    Address
                  </div>
                  <p className="text-gray-400 text-sm">
                    123 Security Boulevard, Business District, City 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-amber-500 p-2 rounded mt-1">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">
                    Phone
                  </div>
                  <p className="text-gray-400 text-sm">(+62) 888-800-212</p>
                  <p className="text-gray-400 text-sm">24/7 On-Call Service</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-amber-500 p-2 rounded mt-1">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase mb-1">
                    Email
                  </div>
                  <p className="text-gray-400 text-sm">support@yourmail.tld</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Cadman Security Service. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

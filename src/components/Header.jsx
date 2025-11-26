
import React, { useState } from 'react';
import { Phone, Mail, Facebook, Twitter, Youtube, Instagram, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeMenu, setActiveMenu] = useState('HOME');

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

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
              <div className="text-white text-2xl font-bold tracking-tight">CADMAN</div>
              <div className="text-amber-500 text-xs tracking-widest">SECURITY SERVICE</div>
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
      <div className="lg:hidden bg-gray-900 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Cadman Security Service" 
            className="h-10 w-auto"
          />
          <div>
            <div className="text-white text-lg font-bold tracking-tight">CADMAN</div>
            <div className="text-amber-500 text-xs tracking-widest">SECURITY SERVICE</div>
          </div>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Bar - Desktop */}
      <div className="hidden lg:block -mt-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-900 flex items-center justify-between shadow-lg">
            {/* Navigation Links */}
            <nav className="flex items-center">
              <a 
                href="#" 
                onClick={() => setActiveMenu('HOME')}
                className={`px-8 py-6 font-semibold transition ${
                  activeMenu === 'HOME' ? 'bg-amber-500 text-white' : 'text-white hover:bg-gray-800'
                }`}
              >
                HOME
              </a>
              <a 
                href="#" 
                onClick={() => setActiveMenu('ABOUT US')}
                className={`px-6 py-6 font-semibold transition ${
                  activeMenu === 'ABOUT US' ? 'bg-amber-500 text-white' : 'text-white hover:bg-gray-800'
                }`}
              >
                ABOUT US
              </a>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => setActiveMenu('SERVICES')}
                  className={`px-6 py-6 font-semibold transition flex items-center gap-1 ${
                    activeMenu === 'SERVICES' ? 'bg-amber-500 text-white' : 'text-white hover:bg-gray-800'
                  }`}
                >
                  SERVICES <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a href="#" className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b">Single Service</a>
                  <a href="#" className="block px-6 py-4 text-gray-800 hover:bg-gray-100">Pricing Plan</a>
                </div>
              </div>

              <a 
                href="#" 
                onClick={() => setActiveMenu('CASE STUDY')}
                className={`px-6 py-6 font-semibold transition ${
                  activeMenu === 'CASE STUDY' ? 'bg-amber-500 text-white' : 'text-white hover:bg-gray-800'
                }`}
              >
                CASE STUDY
              </a>
              <a 
                href="#" 
                onClick={() => setActiveMenu('CONTACT')}
                className={`px-6 py-6 font-semibold transition ${
                  activeMenu === 'CONTACT' ? 'bg-amber-500 text-white' : 'text-white hover:bg-gray-800'
                }`}
              >
                CONTACT
              </a>
              
              {/* Pages Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => setActiveMenu('PAGES')}
                  className={`px-6 py-6 font-semibold transition flex items-center gap-1 ${
                    activeMenu === 'PAGES' ? 'bg-amber-500 text-white' : 'text-white hover:bg-gray-800'
                  }`}
                >
                  PAGES <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a href="#" className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b">Our Team</a>
                  <a href="#" className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b">FAQ</a>
                  <a href="#" className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b">Blog</a>
                  <a href="#" className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b">Single Blog</a>
                  <a href="#" className="block px-6 py-4 text-gray-800 hover:bg-gray-100">404 Page</a>
                </div>
              </div>
            </nav>

            {/* Social Media Links */}
            <div className="flex gap-4 pr-6">
              <Facebook size={20} className="text-white cursor-pointer hover:text-amber-500 transition" />
              <Twitter size={20} className="text-white cursor-pointer hover:text-amber-500 transition" />
              <Youtube size={20} className="text-white cursor-pointer hover:text-amber-500 transition" />
              <Instagram size={20} className="text-white cursor-pointer hover:text-amber-500 transition" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900">
          <nav className="flex flex-col">
            <a 
              href="#" 
              onClick={() => { setActiveMenu('HOME'); setIsMobileMenuOpen(false); }}
              className={`px-6 py-4 font-semibold ${
                activeMenu === 'HOME' ? 'bg-amber-500 text-white' : 'text-white'
              }`}
            >
              HOME
            </a>
            <a 
              href="#" 
              onClick={() => { setActiveMenu('ABOUT US'); setIsMobileMenuOpen(false); }}
              className={`px-6 py-4 font-semibold ${
                activeMenu === 'ABOUT US' ? 'bg-amber-500 text-white' : 'text-white'
              }`}
            >
              ABOUT US
            </a>
            
            {/* Services Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('SERVICES')}
                className={`w-full text-left px-6 py-4 font-semibold flex items-center justify-between ${
                  activeMenu === 'SERVICES' ? 'bg-amber-500 text-white' : 'text-white'
                }`}
              >
                SERVICES <ChevronDown size={16} className={openDropdown === 'SERVICES' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {openDropdown === 'SERVICES' && (
                <div className="bg-white">
                  <a href="#" className="block px-8 py-3 text-gray-800 border-b">Single Service</a>
                  <a href="#" className="block px-8 py-3 text-gray-800">Pricing Plan</a>
                </div>
              )}
            </div>

            <a 
              href="#" 
              onClick={() => { setActiveMenu('CASE STUDY'); setIsMobileMenuOpen(false); }}
              className={`px-6 py-4 font-semibold ${
                activeMenu === 'CASE STUDY' ? 'bg-amber-500 text-white' : 'text-white'
              }`}
            >
              CASE STUDY
            </a>
            <a 
              href="#" 
              onClick={() => { setActiveMenu('CONTACT'); setIsMobileMenuOpen(false); }}
              className={`px-6 py-4 font-semibold ${
                activeMenu === 'CONTACT' ? 'bg-amber-500 text-white' : 'text-white'
              }`}
            >
              CONTACT
            </a>
            
            {/* Pages Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('PAGES')}
                className={`w-full text-left px-6 py-4 font-semibold flex items-center justify-between ${
                  activeMenu === 'PAGES' ? 'bg-amber-500 text-white' : 'text-white'
                }`}
              >
                PAGES <ChevronDown size={16} className={openDropdown === 'PAGES' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {openDropdown === 'PAGES' && (
                <div className="bg-white">
                  <a href="#" className="block px-8 py-3 text-gray-800 border-b">Our Team</a>
                  <a href="#" className="block px-8 py-3 text-gray-800 border-b">FAQ</a>
                  <a href="#" className="block px-8 py-3 text-gray-800 border-b">Blog</a>
                  <a href="#" className="block px-8 py-3 text-gray-800 border-b">Single Blog</a>
                  <a href="#" className="block px-8 py-3 text-gray-800">404 Page</a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Social Media */}
          <div className="flex gap-6 px-6 py-4 border-t border-gray-700">
            <Facebook size={24} className="text-white cursor-pointer hover:text-amber-500 transition" />
            <Twitter size={24} className="text-white cursor-pointer hover:text-amber-500 transition" />
            <Youtube size={24} className="text-white cursor-pointer hover:text-amber-500 transition" />
            <Instagram size={24} className="text-white cursor-pointer hover:text-amber-500 transition" />
          </div>
        </div>
      )}
    </header>
  );
};


export default Header;
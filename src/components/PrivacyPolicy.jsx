import React, { useState, useEffect } from "react";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "information-collect",
      title: "1. Information We Collect",
      icon: FileText,
      subsections: [
        {
          title: "1.1 Personal Information",
          content: "We may collect the following personal details:",
          list: [
            "Name",
            "Email Address",
            "Phone Number",
            "Company/Organization Name",
            "Address / Location Details",
            "Job Title / Department",
            "Service Requirements or Enquiries",
          ],
        },
        {
          title: "1.2 Technical Information",
          list: [
            "IP Address",
            "Browser Type",
            "Device Details",
            "Pages Visited",
            "Cookies & Tracking Data",
          ],
        },
        {
          title: "1.3 Service-Related Information",
          list: [
            "Site Deployment Information",
            "Incident Reports",
            "Access/Visitor Logs",
            "CCTV/Surveillance Data (only if authorized by client)",
            "Staff Attendance & Deployment Records",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      icon: Eye,
      content: "We use your information to:",
      list: [
        "Provide security and facility services",
        "Respond to enquiries and prepare quotations",
        "Improve website and service quality",
        "Maintain security reports and logs",
        "Coordinate operational support",
        "Send service updates or alerts",
        "Comply with legal requirements",
      ],
    },
    {
      id: "google-data",
      title: "3. Google-Friendly Data Usage",
      icon: Shield,
      content: "Our website may use:",
      list: ["Google Analytics", "Google Ads Tracking", "Remarketing pixels"],
      note: "These tools help analyze performance and improve user experience. We do not sell your data.",
    },
    {
      id: "sharing",
      title: "4. Information Sharing",
      icon: Lock,
      content: "We may share your information only with:",
      list: [
        "Internal employees",
        "Service delivery partners",
        "IT hosting providers",
        "Legal authorities (only when required)",
      ],
      note: "We do not share your data with external marketers.",
    },
    {
      id: "security",
      title: "5. Data Protection & Security",
      icon: Shield,
      content: "We implement strict security measures such as:",
      list: [
        "Secure servers",
        "Encrypted data storage",
        "Access-controlled systems",
        "Regular audits",
      ],
    },
    {
      id: "cookies",
      title: "6. Cookies & Tracking",
      icon: Eye,
      content: "Cookies may be used to:",
      list: [
        "Enhance browsing experience",
        "Analyze website traffic",
        "Improve ads and analytics",
      ],
      note: "You may disable cookies through your browser.",
    },
    {
      id: "rights",
      title: "7. Your Rights",
      icon: FileText,
      content: "You may:",
      list: [
        "Access your data",
        "Update or correct your information",
        "Request deletion",
        "Restrict use",
        "Opt-out of marketing",
      ],
      note: "To exercise your rights, contact us at: info@cadmansecurity.com",
    },
    {
      id: "retention",
      title: "8. Data Retention",
      icon: Lock,
      content: "We retain data only as long as necessary for:",
      list: [
        "Service delivery",
        "Legal and compliance purposes",
        "Operational requirements",
      ],
    },
    {
      id: "third-party",
      title: "9. Third-Party Links",
      icon: Shield,
      content:
        "Our website may contain external links. We are not responsible for their privacy policies.",
    },
    {
      id: "children",
      title: "10. Children's Privacy",
      icon: Shield,
      content:
        "Our services are not intended for children under 13. We do not knowingly collect data from children.",
    },
    {
      id: "updates",
      title: "11. Policy Updates",
      icon: FileText,
      content:
        "We may update this policy periodically. The revised version will be posted here with the updated date.",
    },
  ];

  return (
    <>
      <SEO
        title="Cadman Privacy Policy – Data Protection & User Rights"
        description="Read Cadman's Privacy Policy to understand how we collect, use, safeguard, and protect your personal information across our security, facility management, and manpower services."
      />

      <div className="relative w-full overflow-hidden bg-gray-50">
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
          * {
            font-family: 'Roboto Condensed', sans-serif;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
        `}
        </style>

        {/* Hero Section */}
        <div className="relative h-[560px] w-full bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gray-800"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 pt-48 pb-32 lg:pt-56 lg:pb-40 md:pt-44 md:pb-24">
            <div
              className={`max-w-3xl ${
                isLoaded ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-amber-500" />
                <span className="text-amber-500 font-semibold text-lg">
                  PRIVACY & SECURITY
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Cadman Security Services Private Limited is committed to
                protecting your privacy and ensuring the security of your
                personal information.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
                <div>
                  <span className="font-semibold text-amber-500">
                    Effective Date:
                  </span>{" "}
                  25th Nov 2025
                </div>
                <div>
                  <span className="font-semibold text-amber-500">
                    Last Updated:
                  </span>{" "}
                  25th Nov 2025
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <p className="text-gray-700 leading-relaxed">
                By accessing our website or services, you agree to the terms
                described in this Privacy Policy. We handle your data with
                utmost care and transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="border-l-4 border-amber-500 p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                          {section.title}
                        </h2>

                        {section.subsections ? (
                          <div className="space-y-6">
                            {section.subsections.map((sub, subIndex) => (
                              <div key={subIndex}>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                  {sub.title}
                                </h3>
                                {sub.content && (
                                  <p className="text-gray-700 mb-3">
                                    {sub.content}
                                  </p>
                                )}
                                {sub.list && (
                                  <ul className="space-y-2">
                                    {sub.list.map((item, itemIndex) => (
                                      <li
                                        key={itemIndex}
                                        className="flex items-start gap-3"
                                      >
                                        <ChevronRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                          {item}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>
                            {section.content && (
                              <p className="text-gray-700 mb-4">
                                {section.content}
                              </p>
                            )}
                            {section.list && (
                              <ul className="space-y-2 mb-4">
                                {section.list.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start gap-3"
                                  >
                                    <ChevronRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {section.note && (
                              <div className="bg-amber-50 p-4 mt-4 border-l-2 border-amber-500">
                                <p className="text-gray-800 font-medium">
                                  {section.note}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-300">
                For any privacy-related concerns, please contact:
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Cadman Security Services Private Limited
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-amber-500 font-semibold mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:9945230206"
                      className="text-white hover:text-amber-500 transition"
                    >
                      +91-9945230206
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-amber-500 font-semibold mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:info@cadmansecurity.com"
                      className="text-white hover:text-amber-500 transition"
                    >
                      info@cadmansecurity.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:col-span-2">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-amber-500 font-semibold mb-1">
                      Address
                    </div>
                    <p className="text-white">
                      #106, 1st Floor, 40 Feet Road, Manjunathnagar,
                      <br />
                      West of Chord Road, Bangalore – 560010
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://www.cadmansecurity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 transition font-semibold"
                >
                  🌐 www.cadmansecurity.com
                </a>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg"
              >
                Contact Us Directly
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

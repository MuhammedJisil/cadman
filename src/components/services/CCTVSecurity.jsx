import React, { useState, useEffect, useRef } from "react";
import {
  Camera,
  Shield,
  Lock,
  Eye,
  Smartphone,
  Wifi,
  Bell,
  Monitor,
  Server,
  Fingerprint,
  Radio,
  Activity,
  CheckCircle,
  Award,
  Clock,
  ShieldCheck,
  Zap,
  Building2,
  Factory,
  Home,
  Store,
  Globe,
  AlertCircle,
  Video,
  HardDrive,
} from "lucide-react";
import { Link } from "react-router-dom";

const CCTVSecurity = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observers = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      const element = sectionRefs.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections((prev) => ({ ...prev, [key]: true }));
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const securityServices = [
    {
      icon: Camera,
      title: "CCTV Supply, Installation & AMC",
      description:
        "Complete CCTV solutions with supply, professional installation, and comprehensive annual maintenance contracts",
    },
    {
      icon: Video,
      title: "IP Cameras, NVR, DVR Setup",
      description:
        "Advanced IP camera systems with network video recorders and digital video recorders for optimal surveillance",
    },
    {
      icon: Lock,
      title: "Access Control System & Biometrics",
      description:
        "Secure access management with biometric authentication, card readers, and advanced entry control systems",
    },
    {
      icon: Smartphone,
      title: "Video Door Phones",
      description:
        "Modern video intercom systems for enhanced entrance security and visitor management",
    },
    {
      icon: Shield,
      title: "Boom Barriers & Gate Automation",
      description:
        "Automated gate and barrier systems for controlled vehicle access and parking management",
    },
    {
      icon: Bell,
      title: "Fire Alarm Panel Integration",
      description:
        "Integrated fire alarm systems with central monitoring and emergency response coordination",
    },
  ];

  const automationServices = [
    {
      icon: Home,
      title: "Home & Office Automation",
      description:
        "Smart automation solutions for lighting, climate control, and appliance management",
      features: [
        "Smart Lighting Control",
        "Climate Management",
        "Voice Integration",
      ],
    },
    {
      icon: Wifi,
      title: "IT Networking & Wi-Fi Setup",
      description:
        "Professional network infrastructure with high-speed Wi-Fi deployment and management",
      features: ["Network Design", "Wi-Fi Coverage", "Security Protocols"],
    },
    {
      icon: Monitor,
      title: "Remote Monitoring Systems",
      description:
        "24/7 remote surveillance with real-time alerts and cloud-based monitoring platforms",
      features: ["Live Streaming", "Mobile Access", "Cloud Storage"],
    },
    {
      icon: Activity,
      title: "Command Center Operations",
      description:
        "Centralized security operations center for comprehensive facility monitoring and response",
      features: [
        "Multi-site Monitoring",
        "Incident Management",
        "Analytics Dashboard",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Professionals",
      description:
        "Experienced security technicians with industry certifications and proven expertise",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock monitoring and emergency response for critical security systems",
    },
    {
      icon: ShieldCheck,
      title: "Advanced Technology",
      description:
        "Latest surveillance and automation technology with AI-powered analytics",
    },
    {
      icon: Zap,
      title: "Rapid Installation",
      description:
        "Quick and professional installation with minimal disruption to operations",
    },
    {
      icon: Globe,
      title: "Remote Access",
      description:
        "Secure remote monitoring from anywhere with mobile and web applications",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality checks ensuring optimal system performance",
    },
  ];

  const applicationAreas = [
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "Office complexes, corporate parks, and business centers",
    },
    {
      icon: Factory,
      title: "Industrial Facilities",
      description: "Manufacturing plants, warehouses, and production units",
    },
    {
      icon: Home,
      title: "Residential Complexes",
      description: "Apartments, villas, and gated communities",
    },
    {
      icon: Store,
      title: "Retail & Hospitality",
      description: "Shopping malls, hotels, and service establishments",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-50">
      <style>
        {`
          @keyframes slideInFromRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes slideInFromLeft {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          .animate-slide-right { animation: slideInFromRight 1s ease-out forwards; }
          .animate-slide-left { animation: slideInFromLeft 1s ease-out forwards; }
          .animate-fade { animation: fadeIn 1.5s ease-out forwards; }
          .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
          .animate-scale { animation: scaleIn 0.8s ease-out forwards; }

          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-800 { animation-delay: 0.8s; }
        `}
      </style>

      {/* Hero Section */}
      <div className="relative h-[560px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cctv_hero.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-48 pb-32 lg:pt-56 lg:pb-40 md:pt-44 md:pb-24">
          <div className="max-w-3xl">
            <div
              className={`flex items-center gap-3 mb-4 ${
                isLoaded ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <div className="h-0.5 w-16 bg-amber-500"></div>
              <span className="text-amber-500 italic text-lg">
                Smart Surveillance & Automation Solutions
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              CCTV & Electronic Security Systems
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-400" : "opacity-0"
              }`}
            >
              Comprehensive security and automation solutions with advanced
              surveillance technology, access control systems, and intelligent
              building automation.
            </p>
          </div>
        </div>
      </div>

      {/* Security Services */}
      <div
        ref={(el) => (sectionRefs.current["security"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                SECURITY SYSTEMS
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["security"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Advanced Surveillance Solutions
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["security"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              State-of-the-art CCTV systems, access control, and integrated
              security infrastructure for complete protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 group ${
                  visibleSections["security"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automation Services */}
      <div
        ref={(el) => (sectionRefs.current["automation"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Smartphone className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                AUTOMATION & MONITORING
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["automation"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Smart Automation & Control Systems
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["automation"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Intelligent building automation with IT networking, remote
              monitoring, and centralized command center operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["automation"] ? "animate-scale" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div
        ref={(el) => (sectionRefs.current["technology"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["technology"]
                  ? "animate-slide-left"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  TECHNOLOGY FEATURES
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cutting-Edge Security Technology
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our security systems leverage the latest technology including
                AI-powered analytics, cloud storage, and mobile integration for
                comprehensive protection.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      HD & 4K Surveillance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Crystal-clear video quality with high-resolution cameras
                      for detailed monitoring
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HardDrive className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Cloud & Local Storage
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Flexible storage options with cloud backup and on-premise
                      recording
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      AI Motion Detection
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Intelligent alerts with facial recognition and behavioral
                      analysis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Fingerprint className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Biometric Integration
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fingerprint and facial recognition for secure access
                      control
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${
                visibleSections["technology"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }`}
            >
              <img
                src="/cctv-1.jpeg"
                alt="Security Technology"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Application Areas */}
      <div
        ref={(el) => (sectionRefs.current["areas"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                APPLICATION AREAS
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-4 ${
                visibleSections["areas"] ? "animate-fade" : "opacity-0"
              }`}
            >
              We Secure Every Sector
            </h2>
            <p
              className={`text-gray-300 max-w-2xl mx-auto ${
                visibleSections["areas"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Comprehensive security solutions across commercial, industrial,
              residential, and retail sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationAreas.map((area, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 hover:bg-gray-750 transition-all duration-300 border-l-4 border-amber-500 ${
                  visibleSections["areas"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-400 text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        ref={(el) => (sectionRefs.current["why"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                WHY CHOOSE US
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["why"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Your Trusted Security Partner
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["why"] ? "animate-fade delay-200" : "opacity-0"
              }`}
            >
              Experience comprehensive security management with certified
              professionals, advanced technology, and guaranteed protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  visibleSections["why"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring seamless installation and optimal
              security coverage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Site Survey</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of premises and security requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">System Design</h3>
              <p className="text-gray-600 text-sm">
                Customized security solution with optimal camera placement and
                coverage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">
                Professional installation by certified technicians with minimal
                disruption
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Training & Support
              </h3>
              <p className="text-gray-600 text-sm">
                User training and ongoing support with AMC services
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cctv-footer.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Premises Today
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get advanced security solutions with smart surveillance, access
            control, and 24/7 monitoring for complete peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg flex items-center justify-center"
            >
              REQUEST CONSULTATION
            </Link>

            <a
              href="tel:9945230206"
              className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition text-lg flex items-center justify-center"
            >
              CALL NOW: 9945230206
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCTVSecurity;

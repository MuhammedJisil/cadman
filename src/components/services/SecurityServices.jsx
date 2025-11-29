import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Users,
  Eye,
  AlertTriangle,
  Lock,
  Radio,
  Car,
  UserCheck,
  Search,
  FileSearch,
  Zap,
  Clock,
  Award,
  CheckCircle,
  Camera,
  Bell,
  Activity,
  Map,
  ShieldCheck,
  UserSquare2,
  Siren,
  Target,
} from "lucide-react";

const SecurityServices = () => {
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

  const manpowerServices = [
    {
      icon: Users,
      title: "Security Guards",
      description: "Male & Female security personnel trained to highest standards",
    },
    {
      icon: ShieldCheck,
      title: "Security Supervisors",
      description: "Experienced supervisors for operational oversight and coordination",
    },
    {
      icon: Award,
      title: "Senior Security Officers",
      description: "Elite officers with advanced training and leadership capabilities",
    },
    {
      icon: UserSquare2,
      title: "PSO / Bodyguards",
      description: "Personal security officers for executive and VIP protection",
    },
    {
      icon: Shield,
      title: "Bouncers",
      description: "Professional crowd control and venue security specialists",
    },
    {
      icon: Siren,
      title: "Armed Guards / Gunmen",
      description: "Licensed armed security for high-risk environments",
    },
    {
      icon: Award,
      title: "Ex-Servicemen Force",
      description: "Disciplined veterans bringing military-grade security expertise",
    },
    {
      icon: Users,
      title: "Lady Security Force",
      description: "Specialized female security for malls, corporates, and hospitals",
    },
    {
      icon: Car,
      title: "Traffic Marshals",
      description: "Parking controllers and traffic management professionals",
    },
  ];

  const specializedServices = [
    {
      icon: Zap,
      title: "Rapid Response Team (RRT)",
      description: "Immediate emergency response for critical security situations",
      features: ["24/7 Readiness", "Quick Deployment", "Crisis Management"],
    },
    {
      icon: AlertTriangle,
      title: "Quick Reaction Team (QRT)",
      description: "Tactical response force for threat neutralization",
      features: ["Armed Response", "Tactical Training", "Coordinated Action"],
    },
    {
      icon: Clock,
      title: "Night Patrolling",
      description: "Round-the-clock surveillance and surprise security checks",
      features: ["Mobile Patrols", "Surprise Audits", "Perimeter Security"],
    },
    {
      icon: Target,
      title: "Event Security & VIP Protection",
      description: "Comprehensive security solutions for events and dignitaries",
      features: ["Crowd Management", "Access Control", "Executive Protection"],
    },
  ];

  const accessControlServices = [
    {
      icon: Lock,
      title: "Gate & Material Control",
      description: "Stringent monitoring of entry, exit, and material movement",
    },
    {
      icon: Car,
      title: "Vehicle Checking",
      description: "Thorough vehicle inspection and parking management systems",
    },
    {
      icon: UserCheck,
      title: "Visitor Management",
      description: "Digital and manual visitor tracking and authentication",
    },
  ];

  const intelligenceServices = [
    {
      icon: Eye,
      title: "Intelligence Gathering",
      description: "Proactive intelligence collection and threat assessment",
    },
    {
      icon: FileSearch,
      title: "Confidential Investigation",
      description: "Discreet investigation services for sensitive matters",
    },
    {
      icon: Search,
      title: "Theft / Fraud Investigation",
      description: "Professional investigation of internal theft and fraud cases",
    },
    {
      icon: UserCheck,
      title: "Background Verification",
      description: "Comprehensive employee and vendor background checks",
    },
    {
      icon: Search,
      title: "Secret Audits",
      description: "Mystery audits and covert operational assessments",
    },
    {
      icon: Camera,
      title: "Surveillance Monitoring",
      description: "Advanced CCTV monitoring and digital surveillance systems",
    },
  ];

  const complianceServices = [
    {
      icon: FileSearch,
      title: "Security Audit & Risk Assessment",
      description: "Comprehensive evaluation of security vulnerabilities and risks",
    },
    {
      icon: CheckCircle,
      title: "SOP, KPI, SLA Implementation",
      description: "Standard operating procedures and performance metrics",
    },
    {
      icon: Bell,
      title: "Incident Reporting",
      description: "Real-time incident tracking and emergency response protocols",
    },
    {
      icon: Radio,
      title: "Command Center Operations",
      description: "Centralized control room for monitoring and coordination",
    },
    {
      icon: AlertTriangle,
      title: "Crisis Management",
      description: "Strategic crisis response and business continuity support",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "ISO Certified Excellence",
      description: "Multiple ISO certifications ensuring global quality standards",
    },
    {
      icon: Users,
      title: "10,000+ Trained Personnel",
      description: "Largest trained security workforce with continuous skill development",
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock command center and emergency response capability",
    },
    {
      icon: Shield,
      title: "Ex-Military Leadership",
      description: "Operations led by former BSF officers with decades of experience",
    },
    {
      icon: Activity,
      title: "Advanced Technology",
      description: "State-of-the-art surveillance and monitoring systems",
    },
    {
      icon: CheckCircle,
      title: "100% Compliance",
      description: "Full statutory compliance with zero tolerance for violations",
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
      <div className="relative h-120 w-full mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/security_hero.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <div
              className={`flex items-center gap-3 mb-4 ${
                isLoaded ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <div className="h-0.5 w-16 bg-amber-500"></div>
              <span className="text-amber-500 italic text-lg">
                Comprehensive Protection for People, Property & Assets
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              Security Services
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-400" : "opacity-0"
              }`}
            >
              Industry-leading security solutions backed by ISO certifications, 
              ex-military expertise, and 10,000+ trained professionals operating 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Security Manpower Deployment */}
      <div
        ref={(el) => (sectionRefs.current["manpower"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                MANPOWER DEPLOYMENT
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["manpower"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Security Manpower Solutions
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["manpower"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Highly trained security personnel for every requirement – from basic 
              guarding to specialized protection services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manpowerServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 group ${
                  visibleSections["manpower"] ? "animate-slide-up" : "opacity-0"
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

      {/* Specialized Security Services */}
      <div
        ref={(el) => (sectionRefs.current["specialized"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                SPECIALIZED SERVICES
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["specialized"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Elite Security Operations
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["specialized"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Advanced tactical teams and specialized security solutions for 
              high-risk scenarios and critical protection needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["specialized"]
                    ? "animate-scale"
                    : "opacity-0"
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

      {/* Access Control & Visitor Management */}
      <div
        ref={(el) => (sectionRefs.current["access"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["access"] ? "animate-slide-left" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  ACCESS CONTROL
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Access & Visitor Management
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Advanced access control systems ensuring authorized entry while 
                maintaining seamless operations and comprehensive visitor tracking.
              </p>

              <div className="space-y-4">
                {accessControlServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition"
                  >
                    <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`${
                visibleSections["access"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }`}
            >
              <img
                src="/security.jpg"
                alt="Access Control"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence & Investigation */}
      <div
        ref={(el) => (sectionRefs.current["intelligence"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                INTELLIGENCE SERVICES
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-4 ${
                visibleSections["intelligence"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Intelligence & Investigation Services
            </h2>
            <p
              className={`text-gray-300 max-w-2xl mx-auto ${
                visibleSections["intelligence"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Professional investigation services backed by ex-BSF intelligence 
              expertise and advanced surveillance capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intelligenceServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 hover:bg-gray-750 transition-all duration-300 border-l-4 border-amber-500 ${
                  visibleSections["intelligence"]
                    ? "animate-slide-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <service.icon className="w-8 h-8 text-amber-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Compliance & Operations */}
      <div
        ref={(el) => (sectionRefs.current["compliance"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                COMPLIANCE & OPERATIONS
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["compliance"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Security Compliance & Command Operations
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["compliance"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Comprehensive security management with centralized command center 
              operations and complete compliance protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {complianceServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 group ${
                  visibleSections["compliance"] ? "animate-scale" : "opacity-0"
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

          <div className="bg-amber-50 p-8 border-l-4 border-amber-500">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Radio className="w-8 h-8 text-amber-500" />
                Centralized Command Center & Control Room
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our state-of-the-art centralized command center provides 24/7 
                monitoring, coordination, and rapid response capabilities. Equipped 
                with advanced surveillance systems, real-time incident tracking, and 
                emergency communication protocols, our control room ensures seamless 
                security operations across all deployment sites.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Integrated crisis management support enables immediate response to 
                any security situation, with direct communication channels to local 
                authorities and emergency services.
              </p>
            </div>
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
              <Shield className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">WHY CHOOSE US</span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["why"] ? "animate-fade" : "opacity-0"
              }`}
            >
              India's Most Trusted Security Partner
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["why"] ? "animate-fade delay-200" : "opacity-0"
              }`}
            >
              Experience the difference that professional excellence, military 
              expertise, and complete compliance can make
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

      {/* CTA Section */}
      <div className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/security_footer.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Protect What Matters Most
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get a customized security solution backed by ISO certifications, 
            ex-military expertise, and 24/7 operational support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg">
              REQUEST A SECURITY AUDIT
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition text-lg">
              CALL NOW: 1800-XXX-XXXX
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityServices;
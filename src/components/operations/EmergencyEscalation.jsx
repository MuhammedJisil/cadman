import React, { useState, useEffect, useRef } from "react";
import {
  AlertTriangle,
  Shield,
  Users,
  Clock,
  Phone,
  Radio,
  Bell,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Zap,
  UserCheck,
  Building2,
  Activity,
  TrendingUp,
  Eye,
  Target,
  FileCheck,
  Megaphone,
  ShieldCheck,
  UserCog,
  Crown,
} from "lucide-react";

const EmergencyEscalation = () => {
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

  const escalationLevels = [
    {
      level: 1,
      title: "Site Supervisor",
      icon: UserCheck,
      timeline: "Within 5 minutes",
      color: "bg-green-500",
      responsibilities: [
        "First responder to any incident or emergency",
        "Immediate control of the situation",
        "Coordinating with security guards and facility staff",
        "Documenting initial details in the Incident Report",
        "Immediate communication to Site Incharge",
      ],
    },
    {
      level: 2,
      title: "Site Incharge",
      icon: UserCog,
      timeline: "Within 10 minutes",
      color: "bg-blue-500",
      responsibilities: [
        "Assess incident severity",
        "Provide guidance to Site Supervisor",
        "Ensure crowd control, evacuation (if needed)",
        "Update Field Officer",
        "Verify initial reports & photographs",
      ],
    },
    {
      level: 3,
      title: "Field Officer",
      icon: Target,
      timeline: "15-20 minutes after verification",
      color: "bg-indigo-500",
      responsibilities: [
        "Reach the location at the earliest (20-30 min)",
        "Support site team with manpower/resources",
        "Verify the incident details physically",
        "Coordinate with Operations Manager",
        "Ensure compliance with SOP, safety measures",
      ],
    },
    {
      level: 4,
      title: "Operations Manager",
      icon: Activity,
      timeline: "Within 30 minutes",
      color: "bg-purple-500",
      responsibilities: [
        "Take charge of the emergency response",
        "Arrange backup manpower, equipment & support teams",
        "Coordinate with emergency agencies",
        "Communicate updates to AGM & GM",
        "Handle client communication at senior level",
      ],
    },
    {
      level: 5,
      title: "AGM – Operations",
      icon: TrendingUp,
      timeline: "Within 45 minutes",
      color: "bg-orange-500",
      responsibilities: [
        "High-level oversight of incident handling",
        "Ensure protocols and statutory requirements followed",
        "Allocate additional company resources if required",
        "Advise Operations Manager in decision-making",
        "Communicate summary to GM Operations",
      ],
    },
    {
      level: 6,
      title: "GM – Operations",
      icon: Building2,
      timeline: "Within 60 minutes",
      color: "bg-red-500",
      responsibilities: [
        "Strategic command-level oversight",
        "Ensure major operational support",
        "Review incident severity and risk",
        "Provide direction to AGM and Operations Manager",
        "Inform Vice President for critical incidents",
      ],
    },
    {
      level: 7,
      title: "Vice President",
      icon: ShieldCheck,
      timeline: "Within 1-2 hours",
      color: "bg-red-600",
      responsibilities: [
        "Organization-wide response for serious incidents",
        "Coordinate with external stakeholders",
        "Ensure business continuity plan (BCP) is activated",
        "Approve emergency budgets or major decisions",
        "Update CEO",
      ],
    },
    {
      level: 8,
      title: "CEO",
      icon: Megaphone,
      timeline: "Immediate for critical cases",
      color: "bg-red-700",
      responsibilities: [
        "High-level leadership involvement",
        "Provide company-wide direction",
        "Mobilize all required departmental heads",
        "Ensure legal and compliance support",
        "Update Managing Director",
      ],
    },
    {
      level: 9,
      title: "Managing Director",
      icon: Crown,
      timeline: "Level 3 / High Severity",
      color: "bg-red-800",
      responsibilities: [
        "Ultimate authority for the organization",
        "Guide decision-making during severe crises",
        "Ensure client satisfaction and trust maintained",
        "Approve special operations or long-term solutions",
        "Inform Group Chairman",
      ],
    },
    {
      level: 10,
      title: "Group Chairman",
      icon: Crown,
      timeline: "Extreme severity only",
      color: "bg-red-900",
      responsibilities: [
        "Top-most level escalation for critical incidents",
        "Provide strategic corporate direction",
        "Ensure company reputation and stability",
        "Support client relationship at highest level",
      ],
    },
  ];

  const severityLevels = [
    {
      level: "Level 1",
      title: "Low Severity",
      icon: AlertCircle,
      color: "bg-green-500",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      handlers: ["Site Supervisor", "Site Incharge", "Field Officer"],
      examples: [
        "Minor disputes",
        "Small equipment malfunction",
        "Minor first-aid injuries",
      ],
    },
    {
      level: "Level 2",
      title: "Medium Severity",
      icon: AlertTriangle,
      color: "bg-amber-500",
      textColor: "text-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-500",
      handlers: ["Field Officer", "Operations Manager", "AGM Operations"],
      examples: [
        "Theft suspected",
        "Major injury",
        "Fire alarm triggers",
        "Entry/exit violations",
      ],
    },
    {
      level: "Level 3",
      title: "High Severity / Critical",
      icon: Zap,
      color: "bg-red-500",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      handlers: [
        "Operations Manager",
        "GM Operations",
        "VP",
        "CEO",
        "MD",
        "Group Chairman",
      ],
      examples: [
        "Fire outbreak",
        "Major safety breach",
        "Criminal incidents",
        "Life-threatening emergencies",
        "High-value asset damage",
        "Media-sensitive cases",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: Clock,
      title: "Rapid Response",
      description:
        "Structured escalation ensuring immediate action within defined timelines",
    },
    {
      icon: Shield,
      title: "Clear Accountability",
      description:
        "Each level has defined responsibilities and authority for decision-making",
    },
    {
      icon: Radio,
      title: "Continuous Communication",
      description:
        "Seamless information flow from ground level to top management",
    },
    {
      icon: CheckCircle,
      title: "Verified Documentation",
      description:
        "Comprehensive incident reporting and verification at each stage",
    },
    {
      icon: Users,
      title: "Resource Mobilization",
      description:
        "Quick deployment of manpower, equipment, and emergency services",
    },
    {
      icon: FileCheck,
      title: "Compliance Assured",
      description:
        "Adherence to SOPs, safety protocols, and statutory requirements",
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
              "url(https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=1920&q=80)",
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
                Quick Response, Clear Accountability, Continuous Supervision
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              Emergency Escalation Matrix
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-400" : "opacity-0"
              }`}
            >
              Our structured escalation system ensures every incident is handled with
              speed, precision, and accountability—from the first responder to top
              management.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div
        ref={(el) => (sectionRefs.current["features"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                ESCALATION FRAMEWORK
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["features"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Structured Response System
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["features"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              A systematic approach ensuring safety, service continuity, and timely
              resolution at every level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  visibleSections["features"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Escalation Hierarchy */}
      <div
        ref={(el) => (sectionRefs.current["hierarchy"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                10-LEVEL HIERARCHY
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["hierarchy"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Complete Escalation Chain
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["hierarchy"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              From ground-level response to executive oversight—each tier with defined
              roles and timelines
            </p>
          </div>

          <div className="space-y-6">
            {escalationLevels.map((level, index) => (
              <div
                key={index}
                className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 ${
                  visibleSections["hierarchy"] ? "animate-scale" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.08}s`,
                  borderLeftColor: level.color.replace("bg-", "#"),
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Level Badge */}
                  <div className="flex-shrink-0">
                    <div
                      className={`${level.color} w-20 h-20 rounded-lg flex items-center justify-center`}
                    >
                      <level.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-sm font-bold text-gray-500">
                        LEVEL {level.level}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                        {level.title}
                      </h3>
                      <div className="flex items-center gap-2 text-amber-600">
                        <Clock className="w-5 h-5" />
                        <span className="font-semibold">{level.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {level.responsibilities.map((resp, rIndex) => (
                        <div key={rIndex} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Severity Classification */}
      <div
        ref={(el) => (sectionRefs.current["severity"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                INCIDENT CLASSIFICATION
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["severity"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Emergency Severity Levels
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["severity"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Clear classification system for appropriate response and resource
              allocation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {severityLevels.map((severity, index) => (
              <div
                key={index}
                className={`${severity.bgColor} p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 ${severity.borderColor} ${
                  visibleSections["severity"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`${severity.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
                >
                  <severity.icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold ${severity.textColor} mb-2`}>
                    {severity.level}
                  </h3>
                  <p className="text-xl font-semibold text-gray-900">
                    {severity.title}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Handled By:</h4>
                  <div className="flex flex-wrap gap-2">
                    {severity.handlers.map((handler, hIndex) => (
                      <span
                        key={hIndex}
                        className={`px-3 py-1 ${severity.bgColor} ${severity.textColor} text-sm font-medium border ${severity.borderColor}`}
                      >
                        {handler}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {severity.examples.map((example, eIndex) => (
                      <li key={eIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Response Timeline */}
      <div
        ref={(el) => (sectionRefs.current["timeline"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["timeline"] ? "animate-slide-left" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  RAPID RESPONSE
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Time-Bound Action Protocol
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Every second counts in an emergency. Our escalation matrix ensures
                immediate action with clear timelines from first response to executive
                involvement.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      5-Minute Initial Response
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Site supervisor takes immediate control and initiates documentation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      30-Minute Management Activation
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Operations manager coordinates emergency response and resources
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Executive Oversight for Critical Cases
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Senior leadership engagement within 60 minutes for high-severity
                      incidents
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${
                visibleSections["timeline"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Emergency Response Team"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Communication Flow */}
      <div
        ref={(el) => (sectionRefs.current["communication"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`${
                visibleSections["communication"]
                  ? "animate-slide-left"
                  : "opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                alt="Team Communication"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>

            <div
              className={
                visibleSections["communication"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Radio className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  SEAMLESS COORDINATION
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Continuous Communication Chain
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Real-time information flow ensures every stakeholder stays informed and
                coordinated throughout the incident response.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white hover:bg-gray-50 transition shadow">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Instant Alerts
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Automated notification system alerts relevant personnel immediately
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white hover:bg-gray-50 transition shadow">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Documentation at Every Stage
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive incident reporting and verification trail maintained
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white hover:bg-gray-50 transition shadow">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Multi-Channel Communication
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Phone, radio, and digital channels ensure no communication gaps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Response Flow
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic process ensuring every incident is managed efficiently from
              detection to resolution
            </p>
          </div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Incident Detection</h3>
              <p className="text-gray-600 text-sm">
                Immediate identification and assessment of emergency situations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Alert & Escalate</h3>
              <p className="text-gray-600 text-sm">
                Automated notification system activates appropriate response levels
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Team Mobilization</h3>
              <p className="text-gray-600 text-sm">
                Rapid deployment of personnel and resources to incident location
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Resolution & Report</h3>
              <p className="text-gray-600 text-sm">
                Incident resolution with comprehensive documentation and analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-World Application */}
      <div
        ref={(el) => (sectionRefs.current["application"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["application"]
                  ? "animate-slide-left"
                  : "opacity-0"
              }
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="Emergency Command Center"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>

            <div
              className={
                visibleSections["application"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  PROVEN EFFECTIVENESS
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Tested in Real Emergencies
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our escalation matrix has been successfully deployed across hundreds
                of incidents, ensuring minimal impact and maximum safety outcomes.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">
                      Average Response Time: 4 Minutes
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Site supervisors respond within 5 minutes in 95% of incidents
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">
                      98% Incident Resolution Rate
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Effective resolution at appropriate escalation levels
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">
                      Complete Documentation Trail
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Every incident documented with photos, reports, and timelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Overview */}
      <div
        ref={(el) => (sectionRefs.current["benefits"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">KEY BENEFITS</span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["benefits"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Why This System Works
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["benefits"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              A proven framework delivering consistent results across diverse
              emergency scenarios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                visibleSections["benefits"] ? "animate-scale" : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Speed & Efficiency
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Pre-defined response timelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Automated alert mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Immediate resource mobilization</span>
                </li>
              </ul>
            </div>

            <div
              className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                visibleSections["benefits"]
                  ? "animate-scale delay-200"
                  : "opacity-0"
              }`}
            >
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Clear Accountability
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Defined roles at each level</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Decision-making authority specified</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive audit trail</span>
                </li>
              </ul>
            </div>

            <div
              className={`bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                visibleSections["benefits"]
                  ? "animate-scale delay-400"
                  : "opacity-0"
              }`}
            >
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Scalable Response
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Appropriate level for each incident</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Automatic escalation triggers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Executive support when needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Standards */}
      <div
        ref={(el) => (sectionRefs.current["documentation"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["documentation"]
                  ? "animate-slide-left"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  COMPLETE DOCUMENTATION
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Incident Reporting
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every incident is thoroughly documented with detailed reports,
                photographs, timestamps, and action logs ensuring complete
                transparency and compliance.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-6 shadow-lg border-l-4 border-amber-500">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Initial Incident Report
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Site supervisor documents incident details, location, time, and
                    immediate actions taken
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium">
                      Photos Required
                    </span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium">
                      Timestamp
                    </span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium">
                      Witness Details
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Verification Reports
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Field officers verify incident details with additional photos and
                    on-ground assessment
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium">
                      Physical Verification
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium">
                      Updated Photos
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Resolution Documentation
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Final report with actions taken, resources deployed, and outcome
                    analysis
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium">
                      Action Log
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium">
                      Resource Used
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium">
                      Lessons Learned
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${
                visibleSections["documentation"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="Documentation Process"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Training & Preparedness */}
      <div
        ref={(el) => (sectionRefs.current["training"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                TRAINING EXCELLENCE
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["training"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Continuous Training & Drills
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["training"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Regular training programs and mock drills ensure every team member
              knows their role in the escalation matrix
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className={`text-center p-6 bg-gray-50 hover:bg-amber-50 transition-all duration-300 ${
                visibleSections["training"] ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Monthly Drills</h3>
              <p className="text-gray-600 text-sm">
                Regular emergency response drills for all security personnel
              </p>
            </div>

            <div
              className={`text-center p-6 bg-gray-50 hover:bg-amber-50 transition-all duration-300 ${
                visibleSections["training"]
                  ? "animate-slide-up delay-200"
                  : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Communication Training
              </h3>
              <p className="text-gray-600 text-sm">
                Effective communication protocols and reporting procedures
              </p>
            </div>

            <div
              className={`text-center p-6 bg-gray-50 hover:bg-amber-50 transition-all duration-300 ${
                visibleSections["training"]
                  ? "animate-slide-up delay-400"
                  : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Scenario Simulations
              </h3>
              <p className="text-gray-600 text-sm">
                Real-world scenario training for different emergency types
              </p>
            </div>

            <div
              className={`text-center p-6 bg-gray-50 hover:bg-amber-50 transition-all duration-300 ${
                visibleSections["training"]
                  ? "animate-slide-up delay-600"
                  : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Performance Review
              </h3>
              <p className="text-gray-600 text-sm">
                Regular assessment and feedback on emergency response performance
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
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience World-Class Emergency Response
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Our 10-level escalation matrix ensures every incident is handled with
            precision, accountability, and the right level of expertise—from ground
            response to executive oversight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg">
              GET CONSULTATION
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition text-lg">
              DOWNLOAD MATRIX PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyEscalation;
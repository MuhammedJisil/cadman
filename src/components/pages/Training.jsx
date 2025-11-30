import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Users,
  BookOpen,
  Shield,
  Clock,
  CheckCircle,
  Target,
  TrendingUp,
  FileCheck,
  AlertTriangle,
  Eye,
  Radio,
  Zap,
  Wind,
  Droplets,
  HardHat,
  Briefcase,
  Settings,
  Camera,
  Bell,
  UserCheck,
  Activity,
  ClipboardCheck,
  GraduationCap,
  Calendar,
  Star,
  Building2,
  Home,
  Factory,
  Store,
  ShieldCheck,
  Lightbulb,
  Wrench,
  Flame,
  Users2,
  Brain,
  MessageSquare,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const Training = () => {
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

  const trainingFramework = [
    {
      icon: GraduationCap,
      title: "Induction Training",
      description:
        "Basic orientation for all new recruits covering company policies, discipline, and grooming standards",
    },
    {
      icon: ShieldCheck,
      title: "PASARA Compliance Training",
      description:
        "Mandatory modules including discipline, uniform, frisking, access control, and security protocols",
    },
    {
      icon: Target,
      title: "Site-Specific Training",
      description:
        "Customized training as per client SOP, KPI, SLA requirements and site operations",
    },
    {
      icon: Wrench,
      title: "On-the-Job Training (OJT)",
      description:
        "Practical hands-on training in actual site environment for real-world application",
    },
    {
      icon: TrendingUp,
      title: "Monthly Refresher Training",
      description:
        "Regular monthly sessions to reinforce skills and update on new procedures",
    },
    {
      icon: Award,
      title: "Quarterly Skill Enhancement",
      description:
        "Advanced training modules every quarter for continuous skill development",
    },
    {
      icon: CheckCircle,
      title: "Annual Re-certification",
      description:
        "Yearly comprehensive assessment and certification renewal programs",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Preparedness & Mock Drills",
      description:
        "Fire, evacuation, emergency response, CCTV, and incident control simulations",
    },
    {
      icon: Users2,
      title: "Supervisory & Leadership Training",
      description:
        "Specialized programs for Supervisors, Field Officers, and Managers",
    },
  ];

  const coreSecurityWeeks = [
    {
      week: "1",
      topic: "Introduction, discipline, grooming, company policies",
    },
    {
      week: "2",
      topic: "Access control, visitor handling, gate pass & material movement",
    },
    { week: "3", topic: "Patrolling techniques & observation skills" },
    { week: "4", topic: "Vehicle management, parking control" },
    { week: "5", topic: "Basic fire safety & emergency procedures" },
    { week: "6", topic: "Incident reporting, logbook writing, escalation" },
    { week: "7", topic: "Crowd management, dispute handling" },
    { week: "8", topic: "CCTV monitoring basics & surveillance techniques" },
    { week: "9", topic: "Communication skills, phone etiquette" },
    {
      week: "10",
      topic: "Security equipment handling (DFMD, HHMD, Walkie-talkie)",
    },
  ];

  const advancedSecurityWeeks = [
    {
      week: "11",
      topic: "Bomb threat handling & identification of suspicious items",
    },
    { week: "12", topic: "Crisis management & disaster response" },
    { week: "13", topic: "VIP protection basics" },
    { week: "14", topic: "Access card control & biometric attendance" },
    { week: "15", topic: "First aid & lifesaving skills" },
    { week: "16", topic: "Anti-theft protection & loss prevention" },
    { week: "17", topic: "Intelligence gathering techniques" },
    { week: "18", topic: "Conflict resolution & negotiation" },
    { week: "19", topic: "Frisking protocol (male/female)" },
    { week: "20", topic: "Night shift security SOP" },
  ];

  const facilityWeeks = [
    { week: "21", topic: "Housekeeping standards (SOP for dry/wet areas)" },
    { week: "22", topic: "Equipment handling – vacuum, scrubber, jet machine" },
    { week: "23", topic: "Washroom hygiene & maintenance protocol" },
    { week: "24", topic: "Chemical usage & dilution ratios" },
    { week: "25", topic: "Waste management (wet/dry segregation)" },
    { week: "26", topic: "Pantry service etiquette" },
    { week: "27", topic: "Customer service excellence" },
    { week: "28", topic: "Checklist-based operations" },
    { week: "29", topic: "Soft skills & behaviour training" },
    { week: "30", topic: "Deep cleaning procedures (quarterly)" },
  ];

  const mepWeeks = [
    { week: "31", topic: "Basic electrical safety" },
    { week: "32", topic: "Circuit breakers, DB maintenance" },
    { week: "33", topic: "Pump operation, STP/WTP basics" },
    { week: "34", topic: "HVAC basics (AHU, FCU, AC units)" },
    { week: "35", topic: "DG set basics & operation" },
    { week: "36", topic: "Plumbing & leak management" },
    { week: "37", topic: "Asset maintenance checklist" },
    { week: "38", topic: "Energy saving & efficiency tips" },
    { week: "39", topic: "Fire pump room operation" },
    { week: "40", topic: "Preventive Maintenance (PM) Planning" },
  ];

  const consolidatedWeeks = [
    { week: "41", topic: "Service delivery & customer relations" },
    { week: "42", topic: "Grooming, discipline, ethics" },
    { week: "43", topic: "Documentation, reports, MIS" },
    { week: "44", topic: "Site risk assessment" },
    { week: "45", topic: "Fire mock drill (practical)" },
    { week: "46", topic: "Emergency evacuation drill" },
    { week: "47", topic: "Crisis communication training" },
    { week: "48", topic: "Interaction with police, fire dept, BBMP, BWSSB" },
    { week: "49", topic: "Health & safety training (OSHA basics)" },
    { week: "50", topic: "SLA/KPI achievement techniques" },
    { week: "51", topic: "Audit readiness training" },
    { week: "52", topic: "Annual recap, exam, certification & awards" },
  ];

  const securityModules = {
    basic: [
      "Introduction to security profession",
      "Deportment & discipline",
      "Reporting & documentation",
      "Access control",
      "Observation & surveillance",
      "Patrolling methods",
      "Gate operations",
      "Emergency response",
      "Fire safety basics",
    ],
    advanced: [
      "Handling aggressive visitors",
      "Emergency crowd control",
      "Bomb threat & suspicious items",
      "CCTV room control & monitoring SOP",
      "Preventing theft, vandalism & trespassing",
      "Corporate security protocol",
      "VIP escorting",
      "Parking & traffic management",
    ],
    specialized: [
      "Intelligence gathering",
      "Investigation fundamentals",
      "Reporting chain of command",
      "Disaster management",
      "Command & control procedures",
    ],
  };

  const facilityModules = {
    softServices: [
      "Housekeeping SOPs",
      "Daily/weekly/monthly cleaning schedules",
      "Inventory management & chemical control",
      "Equipment operation (scrubber, mops, tools)",
      "Waste management",
      "Pest control basics",
      "Guest relations & etiquette",
    ],
    customerInteraction: [
      "Communication",
      "Complaint handling",
      "Service excellence",
    ],
  };

  const mepModules = {
    electrical: [
      "Basic electrical theory",
      "Safety lockout/tagout",
      "DB maintenance",
      "Power distribution",
      "HT/LT room awareness",
    ],
    mechanical: [
      "HVAC systems",
      "Pump operations",
      "Motors & mechanical parts",
    ],
    plumbing: ["Water line maintenance", "RO plant basics", "WTP/STP overview"],
    fireSafety: [
      "Fire types",
      "Fire extinguisher usage",
      "Fire alarm panel basics",
      "Evacuation routes",
    ],
  };

  const trainers = [
    {
      icon: Shield,
      title: "Ex-Army Officers",
      description: "Military discipline and strategic training expertise",
    },
    {
      icon: Briefcase,
      title: "Industry Experts",
      description: "Seasoned professionals with decades of experience",
    },
    {
      icon: Award,
      title: "Certified Trainers",
      description: "Nationally certified training professionals",
    },
    {
      icon: ClipboardCheck,
      title: "Internal QMS Auditors",
      description: "Quality management system specialists",
    },
    {
      icon: Settings,
      title: "Technical Engineers",
      description: "Expert engineers for technical training",
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "PASARA-Compliant Training Certificate",
      description:
        "Official certification meeting all PASARA guidelines and requirements",
    },
    {
      icon: CheckCircle,
      title: "Annual Competency Certificate",
      description:
        "Yearly certification validating skill proficiency and job readiness",
    },
    {
      icon: Star,
      title: "Special Skill Certificates",
      description:
        "Specialized certifications in CCTV, Fire Safety, Housekeeping, MEP, and more",
    },
  ];

  const trainingInfrastructure = [
    {
      icon: Building2,
      title: "Dedicated Training Rooms",
      description: "Fully equipped classrooms with modern amenities",
    },
    {
      icon: Wrench,
      title: "Practical Demonstration Area",
      description: "Hands-on training zones for real-world practice",
    },
    {
      icon: HardHat,
      title: "Equipment for Training",
      description: "Industry-standard tools and equipment",
    },
    {
      icon: BookOpen,
      title: "Digital Learning Content",
      description: "Interactive e-learning materials and resources",
    },
    {
      icon: Factory,
      title: "Mock Site Setups",
      description: "Simulated work environments for practical training",
    },
  ];

  const whyChooseUs = [
    {
      icon: Calendar,
      title: "52-Week Training Calendar",
      description:
        "Comprehensive annual training program covering all aspects of security, facility, and MEP operations",
    },
    {
      icon: ShieldCheck,
      title: "PASARA Compliant",
      description:
        "100% compliance with PASARA guidelines ensuring legal and professional training standards",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description:
        "Training by Ex-Army Officers, Industry Experts, and Certified Professionals",
    },
    {
      icon: Target,
      title: "Client-Specific Training",
      description:
        "Customized programs aligned with client SOP, KPI, and SLA requirements",
    },
    {
      icon: FileCheck,
      title: "Complete Documentation",
      description:
        "Comprehensive training records, attendance registers, and audit reports",
    },
    {
      icon: TrendingUp,
      title: "Continuous Development",
      description:
        "Monthly refreshers, quarterly enhancements, and annual re-certification programs",
    },
  ];

  const serviceAreas = [
    {
      icon: Shield,
      title: "Security Personnel",
      description: "Guards, Supervisors, Field Officers",
    },
    {
      icon: Home,
      title: "Facility Management",
      description: "Housekeeping, Soft Services Teams",
    },
    {
      icon: Zap,
      title: "MEP Teams",
      description: "Electrical, Mechanical, Plumbing",
    },
    {
      icon: Flame,
      title: "Fire & Safety",
      description: "Fire Guards, ERT, Technicians",
    },
  ];

  return (
    <>
      <SEO
        title="Cadman Training – Professional Security & Skill Development Programs"
        description="Cadman offers structured training programs for security personnel, housekeeping staff, and industrial workforce, ensuring professionalism, safety, and high-quality service delivery."
      />
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
              backgroundImage: "url('/sg-2.jpeg')",
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
                  Training Builds Quality, Quality Builds Trust
                </span>
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                  isLoaded ? "animate-slide-right delay-200" : "opacity-0"
                }`}
              >
                Comprehensive Training & Skill Development
              </h1>

              <p
                className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                  isLoaded ? "animate-fade delay-400" : "opacity-0"
                }`}
              >
                PASARA Guidelines-based training system for Security, Facility
                Management, Housekeeping, MEP & Fire Safety teams with a
                structured 52-Week Annual Calendar.
              </p>
            </div>
          </div>
        </div>

        {/* Training Philosophy */}
        <div
          ref={(el) => (sectionRefs.current["philosophy"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={
                  visibleSections["philosophy"]
                    ? "animate-slide-left"
                    : "opacity-0"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-8 h-8 text-amber-500" />
                  <span className="text-amber-500 font-semibold">
                    OUR PHILOSOPHY
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Training Builds Quality, Quality Builds Trust
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Cadman Security Services Pvt. Ltd., we believe exceptional
                  service begins with exceptional training. Our comprehensive
                  program ensures every team member delivers excellent results
                  from Day 1.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We follow PASARA Guidelines-based training structure, combined
                  with client-specific SOP, KPI, and SLA requirements to ensure
                  our manpower exceeds expectations consistently.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-amber-50">
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      52
                    </div>
                    <div className="text-gray-600 text-sm">
                      Week Training Calendar
                    </div>
                  </div>
                  <div className="text-center p-4 bg-amber-50">
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      100%
                    </div>
                    <div className="text-gray-600 text-sm">
                      PASARA Compliant
                    </div>
                  </div>
                  <div className="text-center p-4 bg-amber-50">
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      9
                    </div>
                    <div className="text-gray-600 text-sm">
                      Training Modules
                    </div>
                  </div>
                  <div className="text-center p-4 bg-amber-50">
                    <div className="text-3xl font-bold text-amber-600 mb-2">
                      360°
                    </div>
                    <div className="text-gray-600 text-sm">
                      Skill Development
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${
                  visibleSections["philosophy"]
                    ? "animate-slide-right delay-200"
                    : "opacity-0"
                }`}
              >
                <img
                  src="/howwework-3.jpeg"
                  alt="Training Session"
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Training Framework */}
        <div
          ref={(el) => (sectionRefs.current["framework"] = el)}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  TRAINING FRAMEWORK
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["framework"] ? "animate-fade" : "opacity-0"
                }`}
              >
                9 Comprehensive Training Modules
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["framework"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Our structured training model ensures complete skill development
                from induction to leadership with continuous improvement
                programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingFramework.map((module, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 group ${
                    visibleSections["framework"]
                      ? "animate-slide-up"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-amber-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <module.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 52 Week Calendar - Core Security */}
        <div
          ref={(el) => (sectionRefs.current["calendar"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  52-WEEK TRAINING CALENDAR
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["calendar"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Structured Annual Training Program
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["calendar"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Each week covers specific modules ensuring 360° development
                across Security, Facility, MEP, and consolidated
                cross-department training
              </p>
            </div>

            {/* Weeks 1-10: Core Security */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Weeks 1-10: Core Security Skills (PASARA Mandatory Modules)
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {coreSecurityWeeks.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gray-50 p-4 border-l-4 border-amber-500 hover:shadow-lg transition ${
                      visibleSections["calendar"]
                        ? "animate-slide-up"
                        : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {item.week}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weeks 11-20: Advanced Security */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Weeks 11-20: Advanced Security Modules
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {advancedSecurityWeeks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 border-l-4 border-amber-500 hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {item.week}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weeks 21-30: Facility */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Home className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Weeks 21-30: Facility & Housekeeping Modules
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {facilityWeeks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 border-l-4 border-amber-500 hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {item.week}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weeks 31-40: MEP */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Weeks 31-40: MEP & Technical Training
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {mepWeeks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 border-l-4 border-amber-500 hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {item.week}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weeks 41-52: Consolidated */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Users2 className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Weeks 41-52: Consolidated Cross-Department Training
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {consolidatedWeeks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 border-l-4 border-amber-500 hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">
                          {item.week}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security Training Modules */}
        <div
          ref={(el) => (sectionRefs.current["security"] = el)}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  SECURITY TRAINING
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900mb-4 ${
                  visibleSections["security"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Complete Security Training Modules
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["security"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                From basic security protocols to specialized Ex-BSF level
                training, covering all aspects of professional security
                operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Modules */}
              <div
                className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["security"] ? "animate-scale" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Basic Security
                  </h3>
                </div>
                <ul className="space-y-3">
                  {securityModules.basic.map((module, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advanced Modules */}
              <div
                className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["security"]
                    ? "animate-scale delay-200"
                    : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Advanced Security
                  </h3>
                </div>
                <ul className="space-y-3">
                  {securityModules.advanced.map((module, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialized Modules */}
              <div
                className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["security"]
                    ? "animate-scale delay-400"
                    : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Ex-BSF Specialized
                  </h3>
                </div>
                <ul className="space-y-3">
                  {securityModules.specialized.map((module, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Management Training */}
        <div
          ref={(el) => (sectionRefs.current["facility"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`${
                  visibleSections["facility"]
                    ? "animate-slide-left"
                    : "opacity-0"
                }`}
              >
                <img
                  src="/pest_control_hero.jpeg"
                  alt="Facility Training"
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>

              <div
                className={
                  visibleSections["facility"]
                    ? "animate-slide-right delay-200"
                    : "opacity-0"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-8 h-8 text-amber-500" />
                  <span className="text-amber-500 font-semibold">
                    FACILITY MANAGEMENT
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Comprehensive Facility Training
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Complete training programs covering housekeeping operations,
                  soft services, customer interaction, and service excellence
                  standards.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      Soft Services Training
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {facilityModules.softServices.map((module, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">
                            {module}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      Customer Interaction Skills
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {facilityModules.customerInteraction.map(
                        (module, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">
                              {module}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MEP Training */}
        <div
          ref={(el) => (sectionRefs.current["mep"] = el)}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  MEP TRAINING
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["mep"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Mechanical, Electrical & Plumbing Training
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["mep"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Technical training programs covering electrical systems,
                mechanical operations, plumbing, and fire safety protocols
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Electrical */}
              <div
                className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["mep"] ? "animate-slide-up" : "opacity-0"
                }`}
              >
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Electrical
                </h3>
                <ul className="space-y-2">
                  {mepModules.electrical.map((module, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 mt-1.5"></div>
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mechanical */}
              <div
                className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["mep"]
                    ? "animate-slide-up delay-200"
                    : "opacity-0"
                }`}
              >
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Mechanical
                </h3>
                <ul className="space-y-2">
                  {mepModules.mechanical.map((module, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 mt-1.5"></div>
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plumbing */}
              <div
                className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["mep"]
                    ? "animate-slide-up delay-400"
                    : "opacity-0"
                }`}
              >
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Plumbing
                </h3>
                <ul className="space-y-2">
                  {mepModules.plumbing.map((module, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 mt-1.5"></div>
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fire & Safety */}
              <div
                className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["mep"]
                    ? "animate-slide-up delay-600"
                    : "opacity-0"
                }`}
              >
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Fire & Safety
                </h3>
                <ul className="space-y-2">
                  {mepModules.fireSafety.map((module, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 mt-1.5"></div>
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Trainers */}
        <div
          ref={(el) => (sectionRefs.current["trainers"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  EXPERT TRAINERS
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["trainers"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Designed & Upgraded By Experts
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["trainers"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Our training system is designed and continuously upgraded by
                highly experienced professionals from diverse backgrounds
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {trainers.map((trainer, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 p-6 text-center hover:shadow-xl transition-all duration-300 group ${
                    visibleSections["trainers"] ? "animate-scale" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <trainer.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    {trainer.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{trainer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Infrastructure */}
        <div
          ref={(el) => (sectionRefs.current["infrastructure"] = el)}
          className="py-20 bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={
                  visibleSections["infrastructure"]
                    ? "animate-slide-left"
                    : "opacity-0"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-amber-500" />
                  <span className="text-amber-500 font-semibold">
                    TRAINING INFRASTRUCTURE
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  World-Class Training Facilities
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  State-of-the-art training infrastructure with dedicated rooms,
                  practical demonstration areas, modern equipment, and digital
                  learning resources.
                </p>

                <div className="space-y-4">
                  {trainingInfrastructure.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition"
                    >
                      <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <facility.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">
                          {facility.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`${
                  visibleSections["infrastructure"]
                    ? "animate-slide-right delay-200"
                    : "opacity-0"
                }`}
              >
                <img
                  src="/training.jpeg"
                  alt="Training Infrastructure"
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div
          ref={(el) => (sectionRefs.current["certifications"] = el)}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  CERTIFICATIONS PROVIDED
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["certifications"]
                    ? "animate-fade"
                    : "opacity-0"
                }`}
              >
                Industry-Recognized Certifications
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["certifications"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                At the end of training cycles, we provide comprehensive
                certifications validating skills and competencies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                    visibleSections["certifications"]
                      ? "animate-scale"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Documentation */}
        <div
          ref={(el) => (sectionRefs.current["documentation"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`${
                  visibleSections["documentation"]
                    ? "animate-slide-left"
                    : "opacity-0"
                }`}
              >
                <img
                  src="/recruitment-1.jpeg"
                  alt="Training Documentation"
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>

              <div
                className={
                  visibleSections["documentation"]
                    ? "animate-slide-right delay-200"
                    : "opacity-0"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="w-8 h-8 text-amber-500" />
                  <span className="text-amber-500 font-semibold">
                    TRAINING DOCUMENTATION
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Complete Training Records
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We maintain comprehensive documentation of all training
                  activities, ensuring transparency and compliance for client
                  audits.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50">
                    <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      Training attendance registers
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50">
                    <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      Monthly training reports
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50">
                    <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      Trainer sign-off records
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50">
                    <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      Photographs/videos of training sessions
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50">
                    <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      Annual training audit reports
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mt-6 italic">
                  All documentation is available for audits by clients
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
                <Star className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  WHY CHOOSE US
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["why"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Your Trusted Training Partner
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["why"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Industry-leading training programs ensuring professionally
                trained, operationally competent, and 100% compliant personnel
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

        {/* Service Areas */}
        <div
          ref={(el) => (sectionRefs.current["areas"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users2 className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  TRAINING FOR ALL TEAMS
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["areas"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Comprehensive Training Across All Departments
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["areas"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Specialized training programs for Security, Facility Management,
                MEP, and Fire & Safety personnel
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 p-8 text-center hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500 ${
                    visibleSections["areas"] ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Outcomes */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Training Outcomes: Excellence Guaranteed
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every deployed personnel is professionally trained and ready to
                deliver exceptional results from Day 1
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 border-l-4 border-amber-500">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-amber-500" />
                  <h3 className="font-bold text-gray-900">
                    Professionally Trained
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Complete mastery of job responsibilities and industry best
                  practices
                </p>
              </div>
              <div className="bg-white p-6 border-l-4 border-amber-500">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-amber-500" />
                  <h3 className="font-bold text-gray-900">
                    Operationally Competent
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Skilled in all operational procedures and technical
                  requirements
                </p>
              </div>

              <div className="bg-white p-6 border-l-4 border-amber-500">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-amber-500" />
                  <h3 className="font-bold text-gray-900">
                    Disciplined & Customer-Friendly
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Professional conduct with excellent customer service
                  orientation
                </p>
              </div>

              <div className="bg-white p-6 border-l-4 border-amber-500">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-amber-500" />
                  <h3 className="font-bold text-gray-900">
                    Technically Strong
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Comprehensive technical knowledge and hands-on expertise
                </p>
              </div>

              <div className="bg-white p-6 border-l-4 border-amber-500">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-amber-500" />
                  <h3 className="font-bold text-gray-900">Emergency Ready</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Prepared to handle all emergency situations with confidence
                </p>
              </div>

              <div className="bg-white p-6 border-l-4 border-amber-500">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-amber-500" />
                  <h3 className="font-bold text-gray-900">100% Compliant</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Fully aligned with client SOP, KPI & SLA requirements
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
              backgroundImage: "url('/recruitment-hero.jpeg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Build Excellence Through Professional Training
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get access to our comprehensive 52-week training program with
              PASARA compliance, expert trainers, and industry-recognized
              certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg flex items-center justify-center"
              >
                REQUEST TRAINING DETAILS
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
    </>
  );
};
export default Training;

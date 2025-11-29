import React, { useState, useEffect, useRef } from "react";
import {
  ClipboardCheck,
  Users,
  FileText,
  Shield,
  Target,
  Calendar,
  BookOpen,
  Settings,
  Activity,
  Headphones,
  TrendingUp,
  CheckCircle,
  Clock,
  Zap,
  Award,
  Eye,
  FileCheck,
  AlertCircle,
  Truck,
  GraduationCap,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Search,
} from "lucide-react";

const HowWeWork = () => {
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

  const workingPrinciples = [
    {
      icon: Shield,
      title: "Professional",
      description: "Highly trained personnel with industry-leading expertise",
    },
    {
      icon: Target,
      title: "Systematic",
      description: "Structured processes ensuring consistent quality delivery",
    },
    {
      icon: Eye,
      title: "Transparent",
      description: "Complete visibility through regular reporting and documentation",
    },
    {
      icon: TrendingUp,
      title: "Result-Driven",
      description: "Focus on measurable outcomes and continuous improvement",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: Search,
      title: "Pre-Quote Survey & Site Audit",
      description: "Comprehensive site assessment including manpower requirements, risk analysis, compliance study, and operational gap identification",
      points: [
        "Manpower requirement assessment",
        "Quality & compliance study",
        "Risk & vulnerability analysis",
        "Snag identification",
      ],
    },
    {
      number: "02",
      icon: Users,
      title: "Understanding Client Requirements",
      description: "Detailed discussion to understand scope, SOP/KPI/SLA requirements, performance expectations, and operational challenges",
      points: [
        "Scope of work definition",
        "SOP/KPI/SLA requirements",
        "Performance expectations",
        "Site layout & security risks",
      ],
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Pre-Transition Planning",
      description: "Complete preparation including manpower structure finalization, document collection, background verification, and training scheduling",
      points: [
        "Manpower deployment structure",
        "Background verification",
        "Site-specific material list",
        "Training program scheduling",
      ],
    },
    {
      number: "04",
      icon: Shield,
      title: "Deploying the Right Manpower",
      description: "Deployment only after recruitment verification, medical clearance, PASARA training, and site-specific orientation",
      points: [
        "Qualification verification",
        "Medical fitness clearance",
        "Background verification",
        "Site-specific orientation",
      ],
    },
    {
      number: "05",
      icon: Settings,
      title: "Transition Execution",
      description: "Complete site takeover with equipment handover, asset register preparation, and daily reporting structure setup",
      points: [
        "Complete site takeover",
        "Equipment & asset handover",
        "Security checklist execution",
        "Emergency setup",
      ],
    },
    {
      number: "06",
      icon: GraduationCap,
      title: "Site-Specific Training",
      description: "Structured induction covering client SOPs, KPI expectations, emergency response, and professional behavior norms",
      points: [
        "Client SOP training",
        "KPI & SLA expectations",
        "Emergency response procedures",
        "Communication protocols",
      ],
    },
    {
      number: "07",
      icon: FileText,
      title: "Documentation & Systems Setup",
      description: "Complete documentation including SOPs, 52-week calendars, KPI standards, checklists, and reporting formats",
      points: [
        "Standard Operating Procedures",
        "52-Week Work & Training Calendar",
        "KPI Standards & SLA Matrix",
        "Monthly Management Reports",
      ],
    },
    {
      number: "08",
      icon: CheckCircle,
      title: "SOP-Based Operations",
      description: "Strict adherence to approved SOPs covering security protocols, facility management, housekeeping, MEP operations, and safety compliance",
      points: [
        "Security protocols",
        "Facility management workflows",
        "MEP operation routines",
        "Emergency plans",
      ],
    },
    {
      number: "09",
      icon: Activity,
      title: "Technology-Enabled Processes",
      description: "Advanced technology integration for HRMS attendance, digital reporting, GPS patrolling, and real-time monitoring",
      points: [
        "HRMS attendance system",
        "Digital activity reports",
        "QR/APP-based monitoring",
        "GPS-enabled patrolling",
      ],
    },
    {
      number: "10",
      icon: Eye,
      title: "Strong Supervision & Monitoring",
      description: "Multi-layer supervision with site supervisors, field officers, area managers, and dedicated audit teams",
      points: [
        "Site supervisors & field officers",
        "Operations managers",
        "Night patrolling team",
        "Surprise inspections",
      ],
    },
    {
      number: "11",
      icon: Truck,
      title: "24/7 Quick Response Team",
      description: "Dedicated QRT with emergency vehicle, replacement manpower, and support within 30-90 minutes",
      points: [
        "Exclusive emergency vehicle",
        "Replacement manpower",
        "Night patrolling officers",
        "30-90 minute response time",
      ],
    },
    {
      number: "12",
      icon: BookOpen,
      title: "Regular Training & Skill Upgradation",
      description: "Continuous training programs including monthly refreshers, quarterly skill training, and annual re-certification",
      points: [
        "Monthly refresher training",
        "Quarterly skill training",
        "Annual re-certification",
        "Fire & evacuation drills",
      ],
    },
    {
      number: "13",
      icon: BarChart3,
      title: "Transparent Documentation & Reporting",
      description: "Complete documentation delivery including MMR reports, daily activity sheets, incident reports, and compliance tracking",
      points: [
        "Monthly Management Reports",
        "Daily activity sheets",
        "Incident & audit reports",
        "Training & attendance updates",
      ],
    },
    {
      number: "14",
      icon: Target,
      title: "Performance Measurement",
      description: "KPI & SLA management evaluating response time, operation quality, compliance, and customer satisfaction",
      points: [
        "Response time tracking",
        "Quality of operations",
        "Compliance to SOPs",
        "Customer satisfaction",
      ],
    },
    {
      number: "15",
      icon: Headphones,
      title: "Client Relationship & Support",
      description: "Strong relationships through weekly reviews, monthly performance assessments, and immediate escalation handling",
      points: [
        "Weekly review meetings",
        "Monthly performance reviews",
        "Direct management access",
        "Continuous feedback",
      ],
    },
    {
      number: "16",
      icon: Lightbulb,
      title: "Continuous Improvement",
      description: "System upgrades through new technologies, updated training modules, audit feedback, and industry standards",
      points: [
        "New technology adoption",
        "Updated training modules",
        "Audit feedback integration",
        "Industry standard compliance",
      ],
    },
  ];

  const whyTrustUs = [
    {
      icon: CheckCircle,
      title: "Proven Methodology",
      description: "Systematic approach tested across hundreds of successful deployments",
    },
    {
      icon: Shield,
      title: "Expert Leadership",
      description: "Strong leadership from security industry experts with decades of experience",
    },
    {
      icon: Activity,
      title: "Technology-Driven",
      description: "Advanced technology integration for efficiency and transparency",
    },
    {
      icon: Clock,
      title: "24/7 QRT Support",
      description: "Round-the-clock monitoring with dedicated quick response team",
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      description: "Complete documentation and regular reporting for full visibility",
    },
    {
      icon: Award,
      title: "Trained Manpower",
      description: "Fully verified, trained, and certified personnel for all services",
    },
    {
      icon: Target,
      title: "SOP/KPI/SLA Based",
      description: "Structured working model ensuring measurable outcomes",
    },
    {
      icon: TrendingUp,
      title: "Quality & Compliance",
      description: "Unwavering focus on quality, safety, and regulatory compliance",
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
              "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)",
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
                Professional | Systematic | Transparent | Result-Driven
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              How We Work
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-400" : "opacity-0"
              }`}
            >
              Our operational model is built on discipline, strong leadership, advanced 
              technology, rigorous supervision, and continuous improvement. Experience 
              seamless service delivery across Security, Facility Management, MEP, 
              Soft Services, Pest Control, and Fire & Safety.
            </p>
          </div>
        </div>
      </div>

      {/* Working Principles */}
      <div
        ref={(el) => (sectionRefs.current["principles"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["principles"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Our Working Principles
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["principles"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Four core principles that define our approach to service excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingPrinciples.map((principle, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 group ${
                  visibleSections["principles"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Steps - First Half */}
      <div
        ref={(el) => (sectionRefs.current["process1"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Settings className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                OUR PROCESS
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["process1"] ? "animate-fade" : "opacity-0"
              }`}
            >
              16-Step Service Excellence Framework
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["process1"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              A systematic approach ensuring quality service delivery from day one
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.slice(0, 8).map((step, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  visibleSections["process1"]
                    ? index % 2 === 0
                      ? "animate-slide-left"
                      : "animate-slide-right"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-12 gap-0">
                  <div className="md:col-span-2 bg-amber-500 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white mb-2">
                        {step.number}
                      </div>
                      <step.icon className="w-12 h-12 text-white mx-auto" />
                    </div>
                  </div>
                  <div className="md:col-span-10 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {step.points.map((point, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{point}</span>
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

      {/* Technology & Systems */}
      <div
        ref={(el) => (sectionRefs.current["technology"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["technology"] ? "animate-slide-left" : "opacity-0"
              }
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Technology Systems"
                className="w-full h-full object-cover shadow-2xl rounded-lg"
              />
            </div>

            <div
              className={
                visibleSections["technology"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  TECHNOLOGY INTEGRATION
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Technology for Seamless Operations
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We leverage cutting-edge technology to enhance efficiency, ensure 
                transparency, and provide real-time visibility across all operations.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Digital Attendance & Reporting
                    </h3>
                    <p className="text-gray-600 text-sm">
                      HRMS attendance system with digital daily activity reports
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      GPS & QR-Based Monitoring
                    </h3>
                    <p className="text-gray-600 text-sm">
                      GPS-enabled patrolling with QR/APP-based checklist monitoring
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Real-Time Dashboard
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Live supervisor dashboard with CCTV-based monitoring support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps - Second Half */}
      <div
        ref={(el) => (sectionRefs.current["process2"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {processSteps.slice(8, 16).map((step, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  visibleSections["process2"]
                    ? index % 2 === 0
                      ? "animate-slide-right"
                      : "animate-slide-left"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-12 gap-0">
                  <div className="md:col-span-2 bg-amber-500 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white mb-2">
                        {step.number}
                      </div>
                      <step.icon className="w-12 h-12 text-white mx-auto" />
                    </div>
                  </div>
                  <div className="md:col-span-10 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {step.points.map((point, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{point}</span>
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

      {/* QRT Section */}
      <div
        ref={(el) => (sectionRefs.current["qrt"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["qrt"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  24/7 SUPPORT
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Quick Response Team Always Ready
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our dedicated QRT ensures uninterrupted service with rapid response 
                capabilities and comprehensive emergency support.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Exclusive Emergency Vehicle
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Fully equipped mobile unit for rapid deployment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      30-90 Minute Response Time
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Guaranteed quick response for all emergency situations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Replacement Manpower
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Immediate backup staff deployment to maintain continuity
                    </p>
                  </div>
                </div>
              </div></div>

            <div
              className={`${
                visibleSections["qrt"]
                  ? "animate-slide-left"
                  : "opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
                alt="Quick Response Team"
                className="w-full h-full object-cover shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Training & Development */}
      <div
        ref={(el) => (sectionRefs.current["training"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["training"] ? "animate-slide-left" : "opacity-0"
              }
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Training Programs"
                className="w-full h-full object-cover shadow-2xl rounded-lg"
              />
            </div>

            <div
              className={
                visibleSections["training"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  TRAINING & DEVELOPMENT
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Continuous Skill Enhancement
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Regular training programs ensuring our personnel stay updated with 
                latest industry standards and best practices.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 hover:bg-amber-50 transition">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Monthly Refreshers
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Regular skill reinforcement sessions
                  </p>
                </div>

                <div className="bg-gray-50 p-4 hover:bg-amber-50 transition">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Quarterly Skills Training
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Advanced competency development
                  </p>
                </div>

                <div className="bg-gray-50 p-4 hover:bg-amber-50 transition">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Annual Re-certification
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Industry compliance verification
                  </p>
                </div>

                <div className="bg-gray-50 p-4 hover:bg-amber-50 transition">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Fire & Safety Drills
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Emergency response preparedness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Clients Trust Us */}
      <div
        ref={(el) => (sectionRefs.current["trust"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                WHY CHOOSE US
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["trust"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Why Clients Trust Our Working Method
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["trust"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Trusted by leading organizations for our systematic approach and 
              commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyTrustUs.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 group ${
                  visibleSections["trust"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documentation Standards */}
      <div
        ref={(el) => (sectionRefs.current["documentation"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                DOCUMENTATION STANDARDS
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["documentation"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Complete Transparency Through Documentation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`bg-gray-50 p-8 hover:shadow-xl transition-all ${
                visibleSections["documentation"]
                  ? "animate-scale"
                  : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Operational Documents
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>Standard Operating Procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>52-Week Work Calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>KPI Standards & SLA Matrix</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>Checklist for All Operations</span>
                </li>
              </ul>
            </div>

            <div
              className={`bg-gray-50 p-8 hover:shadow-xl transition-all ${
                visibleSections["documentation"]
                  ? "animate-scale delay-200"
                  : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Performance Reports
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>Monthly Management Reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>Daily Activity Sheets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>Incident Reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>Audit & Compliance Reports</span>
                </li>
              </ul>
            </div>

            <div
              className={`bg-gray-50 p-8 hover:shadow-xl transition-all ${
                visibleSections["documentation"]
                  ? "animate-scale delay-400"
                  : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Schedules & Plans
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>52-Week Training Calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>PPM Maintenance Schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>Attendance & Shift Reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                  <span>Emergency Response Plans</span>
                </li>
              </ul>
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
              "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Professional Service Excellence
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Partner with Cadman Security Services for systematic, transparent, and 
            result-driven solutions across all your security and facility management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg">
              REQUEST SITE AUDIT
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

export default HowWeWork;
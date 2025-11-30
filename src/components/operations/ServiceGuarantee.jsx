import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Radio,
  Zap,
  Users,
  Eye,
  GraduationCap,
  MessageSquare,
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  ClipboardCheck,
  Headphones,
  TrendingUp,
  Award,
  AlertCircle,
  MapPin,
  Activity,
  BookOpen,
  UserCheck,
  Settings,
  Star,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const ServiceGuarantee = () => {
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

  const serviceGuarantees = [
    {
      number: "1",
      icon: Radio,
      title: "24/7 Centralized Control Room Support",
      description:
        "Fully equipped command center operating round-the-clock with real-time coordination",
      features: [
        "Fully equipped command center operating 24/7",
        "Real-time coordination with sites, supervisors, and field officers",
        "Emergency support activation within minutes",
        "GPS tracking & monitoring of key staff (if applicable)",
      ],
    },
    {
      number: "2",
      icon: Zap,
      title: "Quick Response Team (QRT) & Rapid Response Team (RRT)",
      description:
        "Immediate deployment during emergencies, incidents, conflicts, or manpower shortages",
      features: [
        "Immediate deployment of QRT/RRT during emergencies",
        "Skilled officers trained in emergency handling, fire safety, evacuation",
        "Crisis management and conflict resolution expertise",
        "Support to on-site teams until situation is fully resolved",
      ],
    },
    {
      number: "3",
      icon: Users,
      title: "Event Support from Backend Team",
      description:
        "Dedicated manpower & supervision for corporate events, functions, and VIP visits",
      features: [
        "Dedicated manpower for corporate events and functions",
        "VIP visits and emergency requirements handling",
        "Crowd control and parking management",
        "Access control and VIP protocol handling",
      ],
    },
    {
      number: "4",
      icon: Eye,
      title: "Periodic Site Visits (Routine Supervision)",
      description:
        "Multi-level supervision ensuring quality, discipline, and operational excellence",
      features: [
        "Weekly visits by Field Officers/Area Manager/GM/Sr GM",
        "Bi-weekly supervision by Operations Manager",
        "Monthly audits by AGM/GM Operations",
        "Quarterly inspections by VP/CEO (if required)",
      ],
    },
    {
      number: "5",
      icon: AlertCircle,
      title: "Periodic Night Checking",
      description:
        "Surprise night visits to ensure alertness, discipline, and proper deployment",
      features: [
        "Surprise night visits for alertness verification",
        "Documentation of findings and corrective actions",
        "Immediate escalation to senior management for critical issues",
        "Detailed night checking reports maintained",
      ],
    },
    {
      number: "6",
      icon: GraduationCap,
      title: "Periodic Training Programs",
      description:
        "Comprehensive training calendar with on-site refresher programs and skill development",
      features: [
        "On-site refresher training programs",
        "Fire & safety drills and customer service training",
        "Equipment handling and soft skills development",
        "Weekly toolbox talks and 52-week planned training calendar",
      ],
    },
    {
      number: "7",
      icon: MessageSquare,
      title: "Monthly Review Meetings",
      description:
        "Regular performance reviews covering KPIs, SLAs, and continuous improvement plans",
      features: [
        "Discussion on performance, manpower strength, and improvements",
        "Review of KPI, SLA, attendance, discipline, and quality audits",
        "Submission of improvement plan and action items",
        "Client feedback integration and resolution tracking",
      ],
    },
    {
      number: "8",
      icon: FileText,
      title: "Timely Billing & Documentation",
      description:
        "Punctual invoicing with complete statutory documentation and compliance reports",
      features: [
        "Invoices submitted on or before agreed date",
        "All statutory documents (ESI, EPF, Wage Register, OT, LWF, PT, Insurance)",
        "Training reports, audit reports, and night-checking reports",
        "KPI & MMR submitted monthly without fail",
      ],
    },
    {
      number: "9",
      icon: Calendar,
      title: "Quarterly Meeting with Client & CEO",
      description:
        "High-level strategic discussions on improvements, innovations, and new requirements",
      features: [
        "High-level strategic discussions and planning",
        "Improvements, innovations, and new requirements",
        "Review of performance & client satisfaction score",
        "Long-term partnership development initiatives",
      ],
    },
    {
      number: "10",
      icon: BookOpen,
      title: "SOP-Based Work Assurance",
      description:
        "Every task executed strictly as per approved Standard Operating Procedures",
      features: [
        "Strict adherence to approved Standard Operating Procedures",
        "Daily checklist, logbooks, and PPM schedules maintained",
        "Reporting formats updated accurately and consistently",
        "100% adherence to client's site-specific guidelines",
      ],
    },
    {
      number: "11",
      icon: Target,
      title: "SLA-Based Service Delivery",
      description:
        "Clear service-level commitments with proactive management and penalty avoidance",
      features: [
        "Clear service-level commitments and targets",
        "Monitoring of uptime, response time, quality, and manpower",
        "Penalty avoidance through proactive management",
        "Regular SLA compliance reporting and tracking",
      ],
    },
    {
      number: "12",
      icon: BarChart3,
      title: "KPI Reporting (Periodic)",
      description:
        "Site-specific KPI measurement with performance, discipline, and quality indices",
      features: [
        "Site-specific KPI measurement and analysis",
        "Performance score, discipline score & quality index",
        "Submitted monthly along with MMR",
        "Trend analysis and improvement recommendations",
      ],
    },
    {
      number: "13",
      icon: ClipboardCheck,
      title: "MMR (Monthly Management Report) Submission",
      description:
        "Comprehensive monthly reports covering all operational aspects and compliance data",
      features: [
        "Training data and snag list documentation",
        "Attendance records and night checking reports",
        "Deployment chart and compliance report",
        "Audit findings & improvement plan - submitted on time",
      ],
    },
  ];

  const commitmentHighlights = [
    {
      icon: Clock,
      title: "Zero Downtime",
      description: "Seamless operations with continuous service availability",
    },
    {
      icon: CheckCircle,
      title: "100% SOP Adherence",
      description: "Strict compliance with approved procedures and protocols",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Regular reviews and enhancement initiatives",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Multi-level supervision and quality control systems",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "24/7 tracking and instant response capabilities",
    },
    {
      icon: Award,
      title: "Client Satisfaction",
      description: "Complete satisfaction through proactive service delivery",
    },
  ];

  return (
     <>
      <SEO
        title="Cadman Service Guarantee – Commitment to Quality & Reliability"
        description="Cadman provides a strong service guarantee for security, facility management, and manpower solutions, ensuring consistent quality, reliability, and customer satisfaction for businesses and residential clients."
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
      <div className="relative h-120 w-full mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/sg-hero.jpeg')",
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
                From Cadman Security Services Pvt. Ltd.
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              SERVICE GUARANTEE
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-600" : "opacity-0"
              }`}
            >
              At Cadman Security Services Pvt. Ltd., we guarantee high-quality
              service delivery backed by strong supervision, technology, and a
              disciplined workforce. Our commitment ensures seamless operations,
              zero downtime, and complete client satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Service Delivery Guarantee Header */}
      <div
        ref={(el) => (sectionRefs.current["intro"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                OUR SERVICE DELIVERY GUARANTEE
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["intro"] ? "animate-fade" : "opacity-0"
              }`}
            >
              13 Pillars of Service Excellence
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["intro"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Comprehensive service guarantees covering every aspect of security
              operations, from 24/7 support to detailed reporting and continuous
              improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitmentHighlights.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500 group ${
                  visibleSections["intro"] ? "animate-slide-up" : "opacity-0"
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

      {/* Service Guarantees - Grid Layout */}
      <div
        ref={(el) => (sectionRefs.current["guarantees"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {serviceGuarantees.map((guarantee, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  visibleSections["guarantees"] ? "animate-scale" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Number Badge */}
                  <div className="bg-amber-500 flex items-center justify-center p-8 md:w-32 flex-shrink-0">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white mb-2">
                        {guarantee.number}
                      </div>
                      <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                        <guarantee.icon className="w-6 h-6 text-amber-500" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {guarantee.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {guarantee.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
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

      {/* Technology & Support */}
      <div
        ref={(el) => (sectionRefs.current["tech"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["tech"] ? "animate-slide-left" : "opacity-0"
              }
            >
              <img
                src="/howwework.jpeg"
                alt="Technology Control Room"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>

            <div
              className={
                visibleSections["tech"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  TECHNOLOGY & SUPPORT
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                24/7 Command Center Operations
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our state-of-the-art control room ensures continuous monitoring,
                instant response, and seamless coordination across all
                deployment sites.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Radio className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Real-Time Communication
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Instant coordination with all sites, supervisors, and
                      field officers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">GPS Tracking</h3>
                    <p className="text-gray-400 text-sm">
                      Live location monitoring of key personnel and response
                      teams
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Emergency Activation
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Support deployment within minutes of any emergency alert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supervision Excellence */}
      <div
        ref={(el) => (sectionRefs.current["supervision"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["supervision"]
                  ? "animate-slide-left"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  MULTI-LEVEL SUPERVISION
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Quality Control
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our multi-tier supervision structure ensures consistent quality,
                discipline, and operational excellence at every level.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-amber-50 border-l-4 border-amber-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      Weekly
                    </div>
                    <div className="text-xs text-gray-600">Visits</div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Field Officers / Area Manager / GM / Sr GM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-amber-50 border-l-4 border-amber-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      Bi-Weekly
                    </div>
                    <div className="text-xs text-gray-600">Supervision</div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Operations Manager Reviews
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-amber-50 border-l-4 border-amber-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      Monthly
                    </div>
                    <div className="text-xs text-gray-600">Audits</div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      AGM / GM Operations Audits
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-amber-50 border-l-4 border-amber-500">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">
                      Quarterly
                    </div>
                    <div className="text-xs text-gray-600">Inspections</div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      VP / CEO Strategic Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${
                visibleSections["supervision"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }`}
            >
              <img
                src="/sg.jpeg"
                alt="Quality Supervision"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Reporting Excellence */}
      <div
        ref={(el) => (sectionRefs.current["reporting"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                COMPREHENSIVE REPORTING
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["reporting"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Transparent Performance Tracking
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["reporting"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Detailed monthly reports covering all operational aspects, KPIs,
              compliance, and continuous improvement initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                visibleSections["reporting"] ? "animate-scale" : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                KPI Reporting
              </h3>
              <p className="text-gray-600 mb-4">
                Performance score, discipline score, and quality index measured
                monthly
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium">
                  Performance Metrics
                </span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium">
                  Quality Index
                </span>
              </div>
            </div>

            <div
              className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                visibleSections["reporting"]
                  ? "animate-scale delay-200"
                  : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Monthly Management Report
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive MMR with training data, attendance, and compliance
                updates
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium">
                  Training Data
                </span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium">
                  Audit Findings
                </span>
              </div>
            </div>

            <div
              className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                visibleSections["reporting"]
                  ? "animate-scale delay-400"
                  : "opacity-0"
              }`}
            >
              <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SLA Compliance
              </h3>
              <p className="text-gray-600 mb-4">
                Clear service-level commitments with uptime and response time
                monitoring
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium">
                  Uptime Tracking
                </span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium">
                  Response Time
                </span>
              </div>
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
              className={`${
                visibleSections["training"] ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <img
                src="/sg-2.jpeg"
                alt="Training Programs"
                className="w-full h-full object-cover shadow-2xl"
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
                  CONTINUOUS LEARNING
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                52-Week Training Calendar
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Comprehensive training programs covering fire safety, customer
                service, equipment handling, and professional development
                throughout the year.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      On-Site Refresher Training
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Regular skill enhancement programs conducted at deployment
                      sites
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Fire & Safety Drills
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Mandatory emergency response and evacuation training
                      sessions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Soft Skills Development
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Customer service training and professional communication
                      skills
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-amber-50 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Equipment Handling
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Proper usage and maintenance of security and safety
                      equipment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Excellence Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Excellence Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality at every touchpoint from
              deployment to continuous improvement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Deploy & Monitor</h3>
              <p className="text-gray-600 text-sm">
                Strategic deployment with 24/7 control room monitoring
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Train & Supervise
              </h3>
              <p className="text-gray-600 text-sm">
                Continuous training programs and multi-level supervision
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Measure & Report</h3>
              <p className="text-gray-600 text-sm">
                KPI tracking, SLA monitoring, and detailed monthly reporting
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Review & Improve</h3>
              <p className="text-gray-600 text-sm">
                Regular reviews and continuous improvement initiatives
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Guarantee Statement */}
      <div
        ref={(el) => (sectionRefs.current["final"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`bg-gradient-to-r from-amber-50 to-amber-100 p-12 text-center border-l-8 border-amber-500 ${
              visibleSections["final"] ? "animate-scale" : "opacity-0"
            }`}
          >
            <BadgeCheck className="w-20 h-20 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Ironclad Service Guarantee
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              We stand behind every commitment with complete transparency,
              proactive management, and unwavering dedication to your security
              needs. Our multi-layered supervision, advanced technology, and
              disciplined workforce ensure zero downtime and 100% client
              satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white px-6 py-3 shadow-md">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="font-semibold text-gray-900">
                  Zero Downtime
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 shadow-md">
                <Star className="w-5 h-5 text-amber-500" />
                <span className="font-semibold text-gray-900">
                  100% SOP Compliance
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 shadow-md">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="font-semibold text-gray-900">
                  Complete Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/howwework-3.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Service Excellence with Cadman
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Partner with us for guaranteed service delivery backed by 13
            comprehensive service pillars, advanced technology, and a commitment
            to your complete satisfaction.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg"
          >
            REQUEST SERVICE PROPOSAL
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceGuarantee;

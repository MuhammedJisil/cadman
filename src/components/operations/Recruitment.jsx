import React, { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  Heart,
  Calendar,
  Briefcase,
  ShieldCheck,
  Award,
  Users,
  FileText,
  Shirt,
  Eye,
  BookOpen,
  RefreshCw,
  UserCheck,
  Clock,
  Radio,
  Smartphone,
  Target,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Star,
} from "lucide-react";

const Recruitment = () => {
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

  const recruitmentSteps = [
    {
      icon: GraduationCap,
      title: "Educational Qualification",
      description: "Minimum 10th Pass/SSLC or equivalent required",
      details: [
        "Minimum 10th Pass / SSLC or equivalent",
        "Higher qualification preferred for supervisory roles",
        "Strong communication and writing skills mandatory",
      ],
    },
    {
      icon: Heart,
      title: "Medical & Physical Fitness",
      description: "Comprehensive health and fitness assessment",
      details: [
        "Full body health check-up",
        "Vision and hearing test",
        "Physical endurance and stamina assessment",
        "No chronic illness or physical limitations",
      ],
    },
    {
      icon: Calendar,
      title: "Age Eligibility",
      description: "Age range: 23 to 45 years",
      details: [
        "Acceptable age range: 23 to 45 years",
        "Young, energetic, and disciplined recruits preferred",
        "Higher age relaxation for ex-service personnel",
      ],
    },
    {
      icon: Briefcase,
      title: "Experience Criteria",
      description: "Minimum 2 years for supervisory positions",
      details: [
        "Supervisors must have 2+ years in same position",
        "Advantage for Ex-Army, Ex-BSF, Ex-CISF personnel",
        "Technical experience for facility supervisors",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Background Verification",
      description: "Multi-layer verification process",
      details: [
        "Police verification",
        "Address and identity verification",
        "Criminal record check",
        "Previous employer verification",
        "Reference check",
        "Aadhaar/PAN validation",
      ],
    },
    {
      icon: Award,
      title: "Pre-Deployment Training",
      description: "Specialized training module before deployment",
      details: [
        "Site-specific duties and responsibilities",
        "Client SOP, KPI, SLA awareness",
        "Emergency response procedures",
        "Fire and Safety Training",
        "Access control and visitor management",
        "CCTV monitoring basics",
      ],
    },
  ];

  const trainingModules = [
    {
      icon: Target,
      title: "Site-Specific Training",
      items: [
        "Duties and responsibilities",
        "Client SOP awareness",
        "KPI and SLA understanding",
      ],
    },
    {
      icon: Shield,
      title: "Safety & Security",
      items: [
        "Emergency response procedures",
        "Fire and safety training",
        "Access control systems",
      ],
    },
    {
      icon: Eye,
      title: "Monitoring & Reporting",
      items: [
        "CCTV monitoring basics",
        "Incident reporting",
        "Escalation matrix",
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      items: [
        "Communication etiquette",
        "Professional behavior",
        "Customer service excellence",
      ],
    },
  ];

  const screeningProcess = [
    {
      step: "01",
      title: "Initial Screening",
      description: "Primary evaluation of qualifications and eligibility",
    },
    {
      step: "02",
      title: "Panel Interview",
      description: "Comprehensive interview by HR and Operations team",
    },
    {
      step: "03",
      title: "Behaviour Analysis",
      description: "Assessment of attitude, discipline, and conduct",
    },
    {
      step: "04",
      title: "Skills Assessment",
      description: "Evaluation of technical and soft skills",
    },
    {
      step: "05",
      title: "Final Approval",
      description: "Management review and selection confirmation",
    },
  ];

  const supportFeatures = [
    {
      icon: Shirt,
      title: "Grooming & Uniform Standards",
      description:
        "Zero-compromise grooming norms with proper uniform, daily grooming checks, and weekly inspections",
    },
    {
      icon: Clock,
      title: "Probation & Monitoring",
      description:
        "3-month probation with performance monitoring, surprise audits, and continuous evaluation",
    },
    {
      icon: BookOpen,
      title: "Continuous Training",
      description:
        "Monthly refresher training, fire drills, emergency workshops, and skill upgradation programs",
    },
    {
      icon: RefreshCw,
      title: "Backup & Replacement",
      description:
        "24/7 Quick Response Team with immediate backup personnel and 2-4 hour emergency replacement",
    },
    {
      icon: Radio,
      title: "Leadership Structure",
      description:
        "Multi-level supervision with Field Officers, Area Managers, and Operations Manager",
    },
    {
      icon: Smartphone,
      title: "Technology-Driven",
      description:
        "Digital attendance, HRMS-based management, real-time monitoring, and digital onboarding",
    },
  ];

  const qualityStandards = [
    {
      icon: Star,
      title: "Professionalism",
      description: "Highest standards of professional conduct and service delivery",
    },
    {
      icon: Target,
      title: "Discipline",
      description: "Strict adherence to protocols and organizational values",
    },
    {
      icon: CheckCircle,
      title: "Loyalty",
      description: "Committed and dedicated workforce for long-term partnerships",
    },
    {
      icon: Users,
      title: "Customer-First",
      description: "Client satisfaction at the core of every operation",
    },
    {
      icon: TrendingUp,
      title: "Operational Excellence",
      description: "Continuous improvement and performance optimization",
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Rapid deployment and emergency replacement capabilities",
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
              "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80)",
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
                Rigorous, Transparent & Standardized Process
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              Recruitment & Deployment Process
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-400" : "opacity-0"
              }`}
            >
              Our commitment to quality manpower begins from selection, screening, and 
              training to ensure every deployed personnel meets the highest standards of 
              discipline, professionalism, and service excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Main Recruitment Steps */}
      <div
        ref={(el) => (sectionRefs.current["steps"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <UserCheck className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                RECRUITMENT CRITERIA
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["steps"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Our Selection Standards
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["steps"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Every candidate undergoes a rigorous evaluation process to ensure 
              we deploy only the best qualified and trained personnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recruitmentSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 group ${
                  visibleSections["steps"] ? "animate-scale" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Modules */}
      <div
        ref={(el) => (sectionRefs.current["training"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["training"] ? "animate-slide-left" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  PRE-DEPLOYMENT TRAINING
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Specialized Training Module
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Before deployment, every candidate undergoes comprehensive training 
                covering site-specific duties, safety protocols, monitoring systems, 
                and professional conduct to ensure complete readiness.
              </p>

              <div className="space-y-6">
                {trainingModules.map((module, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 shadow-md hover:shadow-lg transition border-l-4 border-amber-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <module.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">
                          {module.title}
                        </h3>
                        <ul className="space-y-1">
                          {module.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`${
                visibleSections["training"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Training Session"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Screening Process */}
      <div
        ref={(el) => (sectionRefs.current["screening"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                SCREENING PROCESS
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["screening"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Multi-Stage Interview & Assessment
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["screening"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Our comprehensive screening process ensures we select only the best 
              candidates through multiple evaluation stages
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {screeningProcess.map((process, index) => (
              <div
                key={index}
                className={`text-center ${
                  visibleSections["screening"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="bg-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-3xl font-bold text-white">
                      {process.step}
                    </span>
                  </div>
                  {index < screeningProcess.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-amber-200"></div>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Document Verification */}
      <div
        ref={(el) => (sectionRefs.current["documents"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`${
                visibleSections["documents"]
                  ? "animate-slide-left"
                  : "opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="Document Verification"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>

            <div
              className={
                visibleSections["documents"] ? "animate-slide-right delay-200" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  DOCUMENT VERIFICATION
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Complete Documentation
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We maintain strict documentation standards with complete verification 
                of all credentials before deployment. No incomplete documentation is accepted.
              </p>

              <div className="space-y-3">
                {[
                  "Government ID proofs (Aadhaar/PAN)",
                  "Educational certificates",
                  "Police verification",
                  "Medical certificate",
                  "Previous employment documents",
                  "Address verification",
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-750 transition"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-300">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Features */}
      <div
        ref={(el) => (sectionRefs.current["support"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                ONGOING SUPPORT
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["support"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Post-Deployment Excellence
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["support"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Continuous monitoring, training, and support systems to maintain 
              the highest service standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 group ${
                  visibleSections["support"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Standards */}
      <div
        ref={(el) => (sectionRefs.current["quality"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                OUR VALUES
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["quality"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Standards of Excellence
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["quality"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Every personnel deployed carries these core values that define 
              Cadman Security Services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityStandards.map((standard, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  visibleSections["quality"] ? "animate-scale" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition">
                  {standard.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {standard.description}
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
              "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Team of Professionals
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Be part of one of India's most trusted security and facility management 
            companies with comprehensive training, career growth, and professional development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg">
              APPLY NOW
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition text-lg">
              CONTACT HR: 1800-XXX-XXXX
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
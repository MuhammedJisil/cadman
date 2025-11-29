import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  FileCheck,
  Users,
  DollarSign,
  Heart,
  ClipboardCheck,
  Award,
  Clock,
  ShieldCheck,
  CheckCircle,
  FileText,
  Briefcase,
  TrendingUp,
  Lock,
  AlertCircle,
  BookOpen,
  Scale,
  Wallet,
  Building2,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const StatutoryCompliance = () => {
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

  const complianceAreas = [
    {
      icon: Heart,
      title: "ESI (Employees' State Insurance)",
      description:
        "Complete ESI compliance under ESIC Act, 1948 with timely contributions and medical benefits",
      features: [
        "All eligible employees enrolled under ESIC Act, 1948",
        "Monthly ESI contributions deposited on time",
        "ESI smart cards / IP numbers issued to all employees",
        "Medical, sickness, maternity & disability benefits ensured",
        "Records maintained as per ESIC norms",
      ],
    },
    {
      icon: Wallet,
      title: "EPFO (Employees Provident Fund)",
      description:
        "Full PF compliance under EPF & MP Act, 1952 with digital access and regular audits",
      features: [
        "All employees covered under EPF & MP Act, 1952",
        "Monthly PF contributions deposited within statutory timeline",
        "UAN activation and digital passbook access for employees",
        "Grievance handling and PF settlement support",
        "PF records updated and audited regularly",
      ],
    },
    {
      icon: DollarSign,
      title: "Labour Wages Compliance",
      description:
        "Strict adherence to wage laws including minimum wages, bonus, and gratuity payments",
      features: [
        "Minimum Wages Act compliance",
        "Payment of Wages Act & Payment of Bonus Act",
        "Payment of Gratuity Act compliance",
        "Weekly Off, Overtime, and Holiday Wage norms",
        "State-wise Gazette Notifications adherence",
      ],
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description:
        "Comprehensive insurance protection including workmen compensation and accident coverage",
      features: [
        "Workmen Compensation Policy",
        "Group Personal Accident Policy",
        "Third-Party Liability (if required by client)",
        "Fire & Safety insurance (site-specific)",
        "Accidental death & permanent disability coverage",
      ],
    },
  ];

  const wagesBenefits = [
    {
      icon: Clock,
      title: "Timely Salary Payment",
      description: "Salary on or before the 10th of every month",
    },
    {
      icon: FileText,
      title: "Digital Payslips",
      description: "Electronic salary slips for all employees",
    },
    {
      icon: ClipboardCheck,
      title: "Proper Records",
      description: "Attendance and wage registers maintained",
    },
    {
      icon: TrendingUp,
      title: "Overtime Compliance",
      description: "Overtime paid as per legal requirements",
    },
  ];

  const complianceDocuments = [
    { icon: FileCheck, title: "Monthly ESI & PF Challans" },
    { icon: ClipboardCheck, title: "Salary Register (Form 6A / Muster Roll)" },
    { icon: Users, title: "Attendance Register" },
    { icon: Award, title: "Bonus & Gratuity Compliance Records" },
    { icon: Shield, title: "Insurance Policy Copies" },
    { icon: FileText, title: "Employment Contracts" },
    { icon: UserCheck, title: "ID Cards & Police Verification Details" },
    { icon: BookOpen, title: "Training Records and Deployment Sheets" },
  ];

  const additionalCompliance = [
    {
      icon: Lock,
      title: "PSARA License",
      description: "Full compliance for all security operations",
    },
    {
      icon: Scale,
      title: "GST Compliance",
      description: "Timely GST return filing and documentation",
    },
    {
      icon: Building2,
      title: "Shops & Establishment Act",
      description: "Complete registration and compliance",
    },
    {
      icon: Briefcase,
      title: "Contract Labour Act",
      description: "Regulation & Abolition Act compliance",
    },
    {
      icon: Heart,
      title: "Labour Welfare Fund",
      description: "Regular LWF contributions and records",
    },
    {
      icon: DollarSign,
      title: "Professional Tax",
      description: "PT compliance across all states",
    },
  ];

  const commitments = [
    {
      icon: CheckCircle,
      title: "100% Transparency",
      description:
        "Complete transparency in all statutory payments and contributions",
    },
    {
      icon: Clock,
      title: "Timely Submissions",
      description: "On-time submission of all compliance documents and returns",
    },
    {
      icon: AlertCircle,
      title: "Zero Tolerance",
      description: "Zero tolerance policy for any non-compliance issues",
    },
    {
      icon: ShieldCheck,
      title: "Regular Audits",
      description: "Regular internal audits by HR & Compliance team",
    },
    {
      icon: Shield,
      title: "Risk Protection",
      description: "Complete protection from statutory risks & penalties",
    },
    {
      icon: Award,
      title: "Legal Assurance",
      description: "Full legal backing and compliance guarantee",
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
            backgroundImage: "url('/recruitment-1.jpeg')",
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
                100% Legal Compliance & Employee Welfare
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              Statutory & Legal Compliance
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-400" : "opacity-0"
              }`}
            >
              At Cadman Security Services Pvt. Ltd., we strictly follow all
              statutory, legal, and regulatory frameworks mandated by the
              Government of India. We ensure 100% compliance for every employee
              deployed under our services.
            </p>
          </div>
        </div>
      </div>

      {/* Main Compliance Areas */}
      <div
        ref={(el) => (sectionRefs.current["compliance"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                CORE COMPLIANCE AREAS
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["compliance"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Comprehensive Statutory Coverage
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["compliance"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Full compliance with ESI, EPFO, labour wages, and insurance
              regulations ensuring employee welfare and legal protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["compliance"] ? "animate-scale" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {area.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wages & Benefits */}
      <div
        ref={(el) => (sectionRefs.current["wages"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                EMPLOYEE BENEFITS
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["wages"] ? "animate-fade" : "opacity-0"
              }`}
            >
              What All Employees Receive
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["wages"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Guaranteed benefits and timely payments as per statutory
              requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wagesBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 group ${
                  visibleSections["wages"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Documents */}
      <div
        ref={(el) => (sectionRefs.current["documents"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["documents"]
                  ? "animate-slide-left"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  COMPLIANCE DOCUMENTATION
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Documents We Provide to Clients
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Complete documentation and records maintained for full
                transparency and audit readiness. All documents provided on time
                for client review.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {complianceDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 hover:bg-amber-50 transition"
                  >
                    <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <doc.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-semibold">
                        {doc.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`${
                visibleSections["documents"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }`}
            >
              <img
                src="/sc.jpeg"
                alt="Compliance Documentation"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Compliance */}
      <div
        ref={(el) => (sectionRefs.current["additional"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                EXTENDED COMPLIANCE
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-4 ${
                visibleSections["additional"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Additional Statutory Compliance
            </h2>
            <p
              className={`text-gray-300 max-w-2xl mx-auto ${
                visibleSections["additional"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Beyond core requirements, we ensure compliance across all
              applicable laws and regulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCompliance.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 hover:bg-gray-750 transition-all duration-300 border-l-4 border-amber-500 ${
                  visibleSections["additional"]
                    ? "animate-slide-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Commitments */}
      <div
        ref={(el) => (sectionRefs.current["commitments"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                OUR COMMITMENT
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["commitments"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Our Commitment to Clients
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["commitments"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Complete legal protection and compliance guarantee with zero
              tolerance for non-compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  visibleSections["commitments"] ? "animate-scale" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <commitment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Compliance Management Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring complete statutory compliance and
              employee welfare at every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Employee Enrollment
              </h3>
              <p className="text-gray-600 text-sm">
                Complete registration under ESI, EPFO, and all statutory bodies
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Monthly Processing
              </h3>
              <p className="text-gray-600 text-sm">
                Timely salary, PF, ESI payments and documentation maintenance
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Regular Audits</h3>
              <p className="text-gray-600 text-sm">
                Internal compliance audits and record verification processes
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Client Reporting</h3>
              <p className="text-gray-600 text-sm">
                Monthly compliance reports and documentation sharing with
                clients
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
            backgroundImage: "url('/ee-footer.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with 100% Compliant Services
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get complete statutory compliance protection with transparent
            documentation, timely payments, and zero legal risks for your
            organization.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg"
          >
            REQUEST COMPLIANCE AUDIT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatutoryCompliance;

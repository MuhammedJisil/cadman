import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Award,
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  FileCheck,
  AlertCircle,
  Building2,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
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

  const leadership = [
    {
      name: "Mr. N. C. Prakash",
      title: "Founder",
      subtitle: "President – Karnataka Private Security Association",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
      highlights: [
        "Visionary entrepreneur with decades of industry experience",
        "President of Karnataka Private Security Association (KPSA)",
        "Strong connections with Police, Fire & Safety, BBMP, BWSSB",
        "Pioneer in ethical workforce practices and standardized training",
      ],
    },
    {
      name: "Mr. N. P. Harshith",
      title: "Managing Director",
      subtitle: "Bachelor of Engineering",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      highlights: [
        "Young, dynamic leader with technical expertise",
        "Oversees complete security and facility operations",
        "Drives modernization and system improvements",
        "Exceptional client relationship management",
      ],
    },
    {
      name: "Mr. Aiyappa C. P.",
      title: "Chief Executive Officer",
      subtitle: "Former BSF Officer | 20+ Years Service",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      highlights: [
        "Expert in intelligence and investigation operations",
        "Over 20 years of BSF service experience",
        "Transformed operational structure and training systems",
        "Military discipline combined with strategic leadership",
      ],
    },
  ];

  const certifications = [
    "ISO 9001:2008 – Quality Management",
    "ISO 14001 – Environmental Management",
    "ISO 27001 – Information Security",
    "ISO 22000 – Food Safety Management",
    "ISO 45001 – Health & Safety",
    "ISO 20121 – Event Sustainability",
  ];

  const commitments = [
    {
      icon: FileCheck,
      title: "100% Transparency",
      description:
        "Complete transparency in all statutory payments and documentation",
    },
    {
      icon: CheckCircle,
      title: "On-Time Compliance",
      description:
        "Timely submission of all compliance documents without delays",
    },
    {
      icon: AlertCircle,
      title: "Zero Tolerance",
      description:
        "Absolute zero tolerance policy for any non-compliance issues",
    },
    {
      icon: Shield,
      title: "Regular Audits",
      description:
        "Continuous internal audits by dedicated HR & Compliance team",
    },
    {
      icon: Award,
      title: "Risk Protection",
      description: "Complete protection from statutory risks and penalties",
    },
    {
      icon: Briefcase,
      title: "Professional Standards",
      description:
        "Maintaining highest industry standards and ethical practices",
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
            backgroundImage: "url('/recruitment-hero.jpeg')",
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
                Driven by Discipline, Defined by Detection
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              About Us
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-400" : "opacity-0"
              }`}
            >
              One of India's most trusted and fastest-growing Security and
              Facility Management service providers, part of the prestigious
              Wisdom Group of Companies.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div
        ref={(el) => (sectionRefs.current["overview"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["overview"] ? "animate-slide-left" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">WHO WE ARE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Proud Part of the Wisdom Group
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cadman Security Services Pvt. Ltd. is one of the most trusted
                and fastest-growing Security and Facility Management service
                providers in India. As an integral part of the prestigious
                Wisdom Group of Companies, we are guided by the vision and
                leadership of three dynamic leaders shaping the future of the
                security and facility industry with innovation, discipline, and
                service excellence.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-amber-50 p-6 border-l-4 border-amber-500">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    10,000+
                  </div>
                  <div className="text-gray-700">Trained Personnel</div>
                </div>
                <div className="bg-amber-50 p-6 border-l-4 border-amber-500">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    6
                  </div>
                  <div className="text-gray-700">ISO Certifications</div>
                </div>
                <div className="bg-amber-50 p-6 border-l-4 border-amber-500">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    5+
                  </div>
                  <div className="text-gray-700">States Coverage</div>
                </div>
                <div className="bg-amber-50 p-6 border-l-4 border-amber-500">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-700">Operations</div>
                </div>
              </div>
            </div>
            <div
              className={`${
                visibleSections["overview"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }`}
            >
              <img
                src="/sg-hero.jpeg"
                alt="Company Building"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div
        ref={(el) => (sectionRefs.current["leadership"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                OUR LEADERSHIP
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["leadership"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Visionary Leaders Shaping Excellence
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["leadership"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Three dynamic leaders driving innovation, discipline, and service
              excellence across the industry
            </p>
          </div>

          <div className="space-y-16">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex flex-col md:flex gap-12 items-center ${
                  visibleSections["leadership"]
                    ? "animate-slide-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:w-1/3">
                  <div className="relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-96 object-cover shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-amber-400 font-semibold">
                        {leader.title}
                      </p>
                      <p className="text-gray-300 text-sm">{leader.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="bg-white p-8 shadow-lg border-l-4 border-amber-500">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-amber-600 font-semibold mb-4">
                      {leader.title}
                    </p>
                    <div className="space-y-3">
                      {leader.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                          <p className="text-gray-700">{highlight}</p>
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

      {/* Certifications Section */}
      <div
        ref={(el) => (sectionRefs.current["certifications"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                ISO CERTIFIED EXCELLENCE
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-4 ${
                visibleSections["certifications"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Multi-Certified Organization
            </h2>
            <p
              className={`text-gray-300 max-w-2xl mx-auto ${
                visibleSections["certifications"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Committed to global standards of quality, safety, and continual
              improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 border-l-4 border-amber-500 hover:bg-gray-750 transition ${
                  visibleSections["certifications"]
                    ? "animate-slide-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-200 font-medium">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitments Section */}
      <div
        ref={(el) => (sectionRefs.current["commitments"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-8 h-8 text-amber-500" />
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
              Complete compliance, transparency, and protection from statutory
              risks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 hover:shadow-xl transition-all duration-300 group ${
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

          <div className="mt-16 bg-amber-50 p-8 border-l-4 border-amber-500">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Statutory Protection
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Cadman Security Services, we maintain the highest standards
                of statutory compliance. Our dedicated HR & Compliance team
                conducts regular internal audits to ensure that all statutory
                payments are made on time, all documentation is submitted
                properly, and there is zero tolerance for any compliance
                violations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This commitment provides our clients with complete protection
                from statutory risks and penalties, giving them peace of mind to
                focus on their core business operations.
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
            Partner With Leaders in Security & Facility Management
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Experience the difference that visionary leadership, trained
            personnel, and complete compliance can make.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg"
            >
              CONTACT US TODAY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

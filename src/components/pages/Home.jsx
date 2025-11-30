import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Building2,
  Droplet,
  Camera,
  Wrench,
  Flame,
  Award,
  Users,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
  };

  const services = [
    {
      icon: Shield,
      title: "Security Services",
      description:
        "Comprehensive protection with trained guards, armed security, rapid response teams, and 24/7 surveillance.",
      image: "security_card.jpg",
      path: "/services/security",
    },
    {
      icon: Building2,
      title: "Facility Management",
      description:
        "Complete soft and technical facility services including housekeeping, MEP operations, and integrated property management.",
      image: "/fm_footer.jpg",
      path: "/services/facility-management",
    },
    {
      icon: Droplet,
      title: "Pest Control",
      description:
        "Government-approved pest management solutions for cockroaches, termites, rodents, and all types of pests.",
      image: "pest_control.jpg",
      path: "/services/pest-control",
    },
    {
      icon: Camera,
      title: "CCTV & Surveillance",
      description:
        "Smart surveillance systems with IP cameras, access control, and remote monitoring solutions.",
      image: "/cctv_hero.jpeg",
      path: "/services/cctv-security",
    },
    {
      icon: Wrench,
      title: "MEP Services",
      description:
        "Expert mechanical, electrical, and plumbing operations with licensed technicians and preventive maintenance.",
      image: "/mep.jpg",
      path: "/services/mep",
    },
    {
      icon: Flame,
      title: "Fire & Safety",
      description:
        "Complete fire protection with trained fire guards, system maintenance, safety audits, and emergency response.",
      image: "/fireandsafety.jpg",
      path: "/services/fire-safety",
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

  return (
    <>
      <SEO
        title="Cadman – Professional Security & Facility Management Services"
        description="Cadman provides trusted security services, trained manpower, housekeeping, and facility management solutions for companies, industries, and residential complexes."
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
        <div
          className="relative min-h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/security.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative max-w-7xl mx-auto px-6 pt-56 pb-32 lg:pt-64 lg:pb-40 md:pt-52 md:pb-24">
            <div className="max-w-2xl">
              <div
                className={`flex items-center justify-center lg:justify-start gap-3 mb-6 ${
                  isLoaded ? "animate-slide-left" : "opacity-0"
                }`}
              >
                <div className="h-0.5 w-16 bg-amber-500"></div>
                <span className="text-amber-500 italic text-lg">
                  Driven by Discipline, Defined by Detection
                </span>
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${
                  isLoaded ? "animate-slide-right delay-200" : "opacity-0"
                }`}
              >
                CADMAN SECURITY
                <br />
                SERVICES PVT. LTD.
              </h1>

              <p
                className={`text-amber-400 text-xl md:text-2xl mb-4 font-semibold ${
                  isLoaded ? "animate-slide-left delay-400" : "opacity-0"
                }`}
              >
                A Proud Part of the Wisdom Group of Companies
              </p>

              <p
                className={`text-gray-300 text-base md:text-lg mb-8 leading-relaxed ${
                  isLoaded ? "animate-slide-left delay-400" : "opacity-0"
                }`}
              >
                One of India's most trusted and fastest-growing Security and
                Facility Management service providers. With 10,000+ trained
                personnel across South India and Maharashtra, we deliver
                ISO-certified excellence in security, facility management, and
                integrated solutions.
              </p>

              <div
                className={`flex flex-row  gap-4 ${
                  isLoaded ? "animate-fade delay-600" : "opacity-0"
                }`}
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg"
                >
                  GET STARTED
                </Link>

                <Link
                  to="/about"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition"
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/40 to-transparent hidden lg:block pointer-events-none"></div>
        </div>

        {/* About Section */}
        <div
          ref={(el) => (sectionRefs.current["about"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={
                  visibleSections["about"] ? "animate-slide-left" : "opacity-0"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-16 bg-amber-500"></div>
                  <span className="text-amber-500 font-semibold">
                    WHO WE ARE
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Leading Security & Facility Management Provider
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cadman Security Services Pvt. Ltd. is guided by the vision and
                  leadership of Mr. N. C. Prakash (Founder), Mr. N. P. Harshith
                  (Managing Director), and Mr. Aiyappa C. P. (CEO)—three dynamic
                  leaders shaping the future of the security and facility
                  industry with innovation, discipline, and service excellence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Highly Trained Workforce
                      </h4>
                      <p className="text-gray-600">
                        Comprehensive training before deployment with
                        site-specific SOP orientation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Government Relationships
                      </h4>
                      <p className="text-gray-600">
                        Strong connections with Police, Fire & Safety, BBMP,
                        BWSSB, and Pollution Control
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Robust Backend Support
                      </h4>
                      <p className="text-gray-600">
                        24/7 operational excellence with comprehensive backend
                        support staff
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  visibleSections["about"]
                    ? "animate-slide-right delay-200"
                    : "opacity-0"
                }`}
              >
                <img
                  src="/security_hero_1.jpg"
                  alt="Security Team"
                  className="w-full h-96 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div
          ref={(el) => (sectionRefs.current["services"] = el)}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-0.5 w-16 bg-amber-500"></div>
                <span className="text-amber-500 font-semibold">
                  OUR SERVICES
                </span>
                <div className="h-0.5 w-16 bg-amber-500"></div>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["services"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Complete Integrated Solutions
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["services"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                End-to-end services for security, facility management, MEP, CCTV
                surveillance, pest control, and fire safety
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer ${
                    visibleSections["services"]
                      ? "animate-slide-up"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleServiceClick(service.path)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="w-10 h-10 text-amber-500" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-500 transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-amber-500 font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={`${
                  visibleSections["certifications"]
                    ? "animate-slide-left"
                    : "opacity-0"
                }`}
              >
                <img
                  src="/recruitment-1.jpeg"
                  alt="ISO Certifications"
                  className="w-full h-96 object-cover shadow-2xl"
                />
              </div>
              <div
                className={
                  visibleSections["certifications"]
                    ? "animate-slide-right delay-200"
                    : "opacity-0"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-amber-500" />
                  <span className="text-amber-500 font-semibold">
                    ISO CERTIFIED EXCELLENCE
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Multi-Certified Organization
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Committed to global standards of quality and safety with
                  comprehensive certifications reflecting our professionalism
                  and focus on continual improvement.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-800 p-4 border-l-4 border-amber-500"
                    >
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-gray-200">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Section */}
        <div
          ref={(el) => (sectionRefs.current["coverage"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  OUR PRESENCE
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["coverage"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Wide Geographic Coverage
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["coverage"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Operating across South India and expanding nationwide
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  state: "Karnataka",
                  cities: "Bangalore, Mysore, Mangalore",
                  image: "/karnataka.jpeg",
                },
                {
                  state: "Tamil Nadu",
                  cities: "Chennai, Coimbatore, Madurai",
                  image: "/tamilnadu.jpeg",
                },
                {
                  state: "Kerala",
                  cities: "Kochi, Trivandrum, Kozhikode",
                  image: "/kerala.jpeg",
                },
                {
                  state: "Telangana",
                  cities: "Hyderabad, Warangal",
                  image: "/telangana.jpeg",
                },
                {
                  state: "Andhra Pradesh",
                  cities: "Vijayawada, Visakhapatnam",
                  image: "/andrapradesh.jpeg",
                },
                {
                  state: "Maharashtra",
                  cities: "Mumbai, Pune, Nagpur",
                  image: "/maharashtra.jpeg",
                },
              ].map((location, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden shadow-lg group ${
                    visibleSections["coverage"] ? "animate-scale" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.state}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {location.state}
                      </h3>
                      <p className="text-gray-200 text-sm">{location.cities}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Section */}
        <div
          ref={(el) => (sectionRefs.current["training"] = el)}
          className="py-20 bg-amber-500"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={
                  visibleSections["training"]
                    ? "animate-slide-left"
                    : "opacity-0"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-white" />
                  <span className="text-white font-semibold">
                    TRAINING EXCELLENCE
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Advanced Training Model
                </h2>
                <p className="text-gray-900 mb-8 leading-relaxed">
                  Training is our core strength. Every personnel undergoes
                  specialized practical training before deployment, ensuring
                  100% efficiency from day one.
                </p>
                <div className="space-y-3">
                  {[
                    "Site-specific training",
                    "Client-specific SOP orientation",
                    "KPI & SLA understanding",
                    "Emergency response readiness",
                    "Grooming, communication & discipline",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-3"
                    >
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-white font-medium">{item}</span>
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
                  src="/howwework-3.jpeg"
                  alt="Training Program"
                  className="w-full h-96 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/security_footer.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Premises?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today for a comprehensive security and facility
              management solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg"
              >
                GET A QUOTE
              </Link>

              <a
                href="tel:9945230206"
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition text-lg"
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

export default Home;

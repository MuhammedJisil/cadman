import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Bug,
  Home,
  Factory,
  Leaf,
  CheckCircle,
  Droplets,
  Waves,
  Trees,
  Building2,
  ShieldCheck,
  Award,
  Clock,
  Users,
  AlertTriangle,
  Zap,
  ThumbsUp,
  Sprout,
  Wind,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const PestControl = () => {
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

  const residentialServices = [
    {
      icon: Bug,
      title: "General Pest Control (GPC)",
      description:
        "Comprehensive treatment for all common household pests with long-lasting protection",
    },
    {
      icon: Bug,
      title: "Cockroach Management",
      description:
        "Advanced gel-based and spray treatments to eliminate cockroach infestations",
    },
    {
      icon: Target,
      title: "Ant Treatment",
      description:
        "Targeted solutions to eliminate ant colonies and prevent re-infestation",
    },
    {
      icon: Home,
      title: "Bed Bug Treatment",
      description:
        "Heat and chemical treatments to completely eradicate bed bugs from all stages",
    },
    {
      icon: AlertTriangle,
      title: "Rodent Control",
      description:
        "Humane trapping and exclusion methods to eliminate rats and mice",
    },
    {
      icon: Home,
      title: "Wood Borer Treatment",
      description:
        "Specialized wood protection to prevent structural damage from borers",
    },
  ];

  const specializedServices = [
    {
      icon: Shield,
      title: "Termite Control",
      description:
        "Complete termite protection for pre and post construction phases",
      features: [
        "Pre-Construction Treatment",
        "Post-Construction Barrier",
        "Annual Monitoring",
      ],
    },
    {
      icon: Droplets,
      title: "Mosquito Control",
      description:
        "Fogging and larviciding services to eliminate mosquito breeding",
      features: [
        "Outdoor Fogging",
        "Larvicide Application",
        "Breeding Site Treatment",
      ],
    },
    {
      icon: Bug,
      title: "Spider & Lizard Control",
      description:
        "Safe removal and prevention of spiders and lizards from premises",
      features: ["Web Removal", "Entry Point Sealing", "Preventive Spraying"],
    },
    {
      icon: AlertTriangle,
      title: "Snake Prevention",
      description:
        "Comprehensive snake proofing and removal services for safety",
      features: ["Area Assessment", "Exclusion Barriers", "Emergency Removal"],
    },
  ];

  const commercialServices = [
    {
      icon: Factory,
      title: "Industrial Pest Management",
      description:
        "Customized pest control for factories, warehouses, and manufacturing units",
    },
    {
      icon: Building2,
      title: "Commercial Solutions",
      description:
        "Pest management for offices, hotels, restaurants, and retail spaces",
    },
    {
      icon: Trees,
      title: "Garden Pest Control",
      description:
        "Eco-friendly solutions to protect gardens and landscaping from pests",
    },
    {
      icon: Leaf,
      title: "Herbal Pest Control",
      description:
        "Natural, odourless treatments using herbal and organic products",
    },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Government Approved",
      description:
        "All treatments are approved by health authorities and regulatory bodies",
    },
    {
      icon: Leaf,
      title: "Safe & Eco-Friendly",
      description:
        "Child and pet-safe treatments with minimal environmental impact",
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description:
        "Trained and certified pest control technicians with extensive experience",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description:
        "Round-the-clock availability for urgent pest control requirements",
    },
    {
      icon: CheckCircle,
      title: "100% Satisfaction Guarantee",
      description:
        "Free follow-up services if pests return within warranty period",
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description:
        "Latest equipment and scientifically proven pest control methods",
    },
  ];

  const treatmentFeatures = [
    {
      icon: Leaf,
      title: "Odourless Options",
      description:
        "Special formulations that are completely odourless for sensitive environments",
    },
    {
      icon: Sprout,
      title: "Herbal Treatments",
      description:
        "Natural plant-based solutions for those preferring organic pest control",
    },
    {
      icon: Shield,
      title: "Long-Lasting Protection",
      description:
        "Extended warranty periods with preventive maintenance programs",
    },
    {
      icon: ThumbsUp,
      title: "Non-Toxic Formulas",
      description:
        "Safe for children, pets, and elderly with no harmful residues",
    },
  ];

  return (
    <>
      <SEO
        title="Cadman Pest Control Services – Safe & Effective Solutions"
        description="Cadman provides professional pest control services for homes, offices, and commercial spaces, ensuring a safe, hygienic, and pest-free environment."
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
              backgroundImage: "url('/pest_control_hero.jpeg')",
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
                  Government-Approved | Safe | Effective
                </span>
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                  isLoaded ? "animate-slide-right delay-200" : "opacity-0"
                }`}
              >
                Pest Control Services
              </h1>

              <p
                className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                  isLoaded ? "animate-fade delay-400" : "opacity-0"
                }`}
              >
                Complete pest management solutions with eco-friendly treatments,
                certified professionals, and guaranteed results for homes and
                businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Residential Pest Control */}
        <div
          ref={(el) => (sectionRefs.current["residential"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Home className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  RESIDENTIAL SOLUTIONS
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["residential"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Home Pest Control Services
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["residential"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Protect your home and family with safe, effective pest control
                treatments designed for residential environments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {residentialServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 group ${
                    visibleSections["residential"]
                      ? "animate-slide-up"
                      : "opacity-0"
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

        {/* Specialized Services */}
        <div
          ref={(el) => (sectionRefs.current["specialized"] = el)}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  SPECIALIZED TREATMENTS
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                  visibleSections["specialized"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Advanced Pest Management
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["specialized"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Specialized solutions for complex pest problems requiring expert
                knowledge and advanced treatment methods
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
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
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

        {/* Commercial & Industrial */}
        <div
          ref={(el) => (sectionRefs.current["commercial"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
                className={
                  visibleSections["commercial"]
                    ? "animate-slide-left"
                    : "opacity-0"
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <Factory className="w-8 h-8 text-amber-500" />
                  <span className="text-amber-500 font-semibold">
                    COMMERCIAL & INDUSTRIAL
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Business Pest Management Solutions
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Comprehensive pest control programs tailored for commercial
                  and industrial facilities, ensuring compliance and operational
                  excellence.
                </p>

                <div className="space-y-4">
                  {commercialServices.map((service, index) => (
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
                  visibleSections["commercial"]
                    ? "animate-slide-right delay-200"
                    : "opacity-0"
                }`}
              >
                <img
                  src="/pest_control.jpg"
                  alt="Commercial Pest Control"
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Features */}
        <div
          ref={(el) => (sectionRefs.current["features"] = el)}
          className="py-20 bg-gray-900"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  SAFE & EFFECTIVE
                </span>
              </div>
              <h2
                className={`text-3xl md:text-4xl font-bold text-white mb-4 ${
                  visibleSections["features"] ? "animate-fade" : "opacity-0"
                }`}
              >
                Our Treatment Advantages
              </h2>
              <p
                className={`text-gray-300 max-w-2xl mx-auto ${
                  visibleSections["features"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Choose from our range of safe, eco-friendly pest control options
                designed for your peace of mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 p-6 hover:bg-gray-750 transition-all duration-300 border-l-4 border-amber-500 ${
                    visibleSections["features"]
                      ? "animate-slide-up"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <feature.icon className="w-8 h-8 text-amber-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
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
                Your Trusted Pest Control Partner
              </h2>
              <p
                className={`text-gray-600 max-w-2xl mx-auto ${
                  visibleSections["why"]
                    ? "animate-fade delay-200"
                    : "opacity-0"
                }`}
              >
                Experience professional pest management with guaranteed results,
                eco-friendly solutions, and complete customer satisfaction
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

        {/* Process Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Treatment Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach to ensure complete pest elimination and
                prevention
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Inspection</h3>
                <p className="text-gray-600 text-sm">
                  Thorough assessment of pest infestation and affected areas
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Treatment Plan</h3>
                <p className="text-gray-600 text-sm">
                  Customized solution based on pest type and severity
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Application</h3>
                <p className="text-gray-600 text-sm">
                  Safe and effective treatment by certified technicians
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Follow-Up</h3>
                <p className="text-gray-600 text-sm">
                  Regular monitoring and preventive maintenance services
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
              backgroundImage: "url('/pest_control_footer.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Pest-Free Environment Today
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Schedule a free inspection and consultation with our certified
              pest control experts. 100% satisfaction guaranteed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg flex items-center justify-center"
              >
                BOOK FREE INSPECTION
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

export default PestControl;

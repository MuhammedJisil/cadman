import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  Sparkles,
  Wrench,
  Users,
  Droplet,
  Wind,
  Zap,
  Leaf,
  Trash2,
  Car,
  Coffee,
  Building2,
  Clipboard,
  Settings,
  Activity,
  BarChart3,
  Lightbulb,
  Thermometer,
  FileText,
  CheckCircle,
  Target,
  Award,
  Clock,
  Shield,
  Briefcase,
  UserCheck,
  Workflow,
  PieChart,
} from "lucide-react";

const FacilityManagement = () => {
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

  const housekeepingServices = [
    {
      icon: Building2,
      title: "Corporate & Commercial Housekeeping",
      description: "Professional cleaning for offices, corporate buildings, and commercial spaces",
    },
    {
      icon: Home,
      title: "Residential Apartment Housekeeping",
      description: "Comprehensive maintenance for residential complexes and apartments",
    },
    {
      icon: Settings,
      title: "Industrial Housekeeping",
      description: "Specialized cleaning for factories, warehouses, and industrial facilities",
    },
    {
      icon: Activity,
      title: "Hospital, Hotel & Mall Housekeeping",
      description: "Expert cleaning services for healthcare, hospitality, and retail sectors",
    },
    {
      icon: Clock,
      title: "Daily, Weekly & Monthly Maintenance",
      description: "Scheduled cleaning programs tailored to your facility needs",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning & Spring Cleaning",
      description: "Intensive cleaning services for thorough facility sanitization",
    },
    {
      icon: Sparkles,
      title: "Floor Care, Scrubbing & Polishing",
      description: "Professional floor maintenance for all surface types",
    },
    {
      icon: Building2,
      title: "Glass, Façade & High-Rise Cleaning",
      description: "Specialized exterior cleaning for tall buildings and glass structures",
    },
  ];

  const supportStaffServices = [
    {
      icon: UserCheck,
      title: "Facility Supervisors",
      description: "Experienced supervisors for operational oversight",
    },
    {
      icon: Users,
      title: "Housekeeping Supervisors",
      description: "Expert supervision of cleaning operations",
    },
    {
      icon: Briefcase,
      title: "Office Assistants",
      description: "Professional administrative support staff",
    },
    {
      icon: Users,
      title: "Front Office / Reception Staff",
      description: "Trained reception and customer service personnel",
    },
    {
      icon: Coffee,
      title: "Pantry & Café Services",
      description: "Food service and pantry management staff",
    },
    {
      icon: Clipboard,
      title: "Admin Support Staff",
      description: "Comprehensive administrative assistance",
    },
    {
      icon: Building2,
      title: "Lift Operators",
      description: "Trained elevator operation personnel",
    },
    {
      icon: Car,
      title: "Parking Staff & Valet Teams",
      description: "Professional parking management services",
    },
    {
      icon: Car,
      title: "Drivers & Support Boys",
      description: "Reliable transportation and support staff",
    },
  ];

  const specializedSoftServices = [
    {
      icon: Trash2,
      title: "Waste Management & Recycling",
      description: "Comprehensive waste handling and recycling programs",
    },
    {
      icon: Trash2,
      title: "Solid Waste / Wet Waste Handling",
      description: "Segregated waste management solutions",
    },
    {
      icon: Leaf,
      title: "Landscape & Gardening Maintenance",
      description: "Professional landscaping and garden care services",
    },
    {
      icon: Droplet,
      title: "Swimming Pool Maintenance",
      description: "Complete pool cleaning and chemical management",
    },
    {
      icon: Shield,
      title: "Pest Prevention Coordination",
      description: "Coordinated pest control and prevention programs",
    },
    {
      icon: Building2,
      title: "Façade Cleaning (Manual & Cradle)",
      description: "Expert exterior cleaning with specialized equipment",
    },
    {
      icon: Sparkles,
      title: "Carpet, Sofa & Upholstery Shampooing",
      description: "Deep cleaning for furniture and soft furnishings",
    },
    {
      icon: Home,
      title: "Guest House / Hostel / Dormitory Management",
      description: "Complete management of residential facilities",
    },
  ];

  const technicalServices = [
    {
      icon: Zap,
      title: "Electrical Maintenance",
      description: "LT/HT panel maintenance and electrical system care",
    },
    {
      icon: Settings,
      title: "DG Set Operation & AMC",
      description: "Generator operation and annual maintenance contracts",
    },
    {
      icon: Lightbulb,
      title: "UPS, Transformer, DB Panel Maintenance",
      description: "Power backup and distribution system maintenance",
    },
    {
      icon: Wind,
      title: "HVAC System Operation",
      description: "AHU, VRV, and chiller system management",
    },
    {
      icon: Wrench,
      title: "Mechanical Equipment Servicing",
      description: "Comprehensive mechanical system maintenance",
    },
    {
      icon: Droplet,
      title: "Plumbing & Water Supply Services",
      description: "Complete plumbing and water system management",
    },
    {
      icon: Droplet,
      title: "STP / WTP Plant Operation",
      description: "Sewage and water treatment plant operations",
    },
    {
      icon: Settings,
      title: "Building Maintenance Technicians",
      description: "Skilled technicians for facility upkeep",
    },
    {
      icon: Users,
      title: "Multi-skilled Technicians",
      description: "On-demand support for diverse technical needs",
    },
    {
      icon: CheckCircle,
      title: "Preventive & Predictive Maintenance",
      description: "Proactive maintenance to prevent breakdowns",
    },
    {
      icon: Activity,
      title: "Energy Efficiency & Technical Audits",
      description: "Comprehensive audits for optimization",
    },
  ];

  const ifmFeatures = [
    {
      icon: Users,
      title: "Integrated Manpower Solution",
      description: "All facility staff under one unified contract",
    },
    {
      icon: Clipboard,
      title: "Centralized Helpdesk & Ticketing",
      description: "Single point of contact for all facility issues",
    },
    {
      icon: Workflow,
      title: "Smart Facility Operations",
      description: "Technology-driven facility management systems",
    },
    {
      icon: Activity,
      title: "Automation & Digital Monitoring",
      description: "Real-time monitoring and automated systems",
    },
    {
      icon: Target,
      title: "SLA & KPI-driven Performance",
      description: "Measurable service delivery standards",
    },
    {
      icon: BarChart3,
      title: "Monthly Reporting & MIS",
      description: "Detailed performance reports and analytics",
    },
    {
      icon: PieChart,
      title: "Budgeting, Inventory & Vendor Management",
      description: "Complete operational and financial control",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "MEP Experts",
      description: "Technical services managed by qualified mechanical, electrical, and plumbing specialists",
    },
    {
      icon: Shield,
      title: "One Contract Solution",
      description: "Single integrated contract covering all facility management needs",
    },
    {
      icon: Target,
      title: "Cost Control",
      description: "Optimized operations ensuring maximum cost efficiency",
    },
    {
      icon: CheckCircle,
      title: "Quality Improvement",
      description: "Continuous improvement programs for superior service delivery",
    },
    {
      icon: Workflow,
      title: "Seamless Coordination",
      description: "Unified management across all facility services",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock facility management and emergency response",
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
              "url('/support_staff_hero.jpg')",
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
                Total Integrated Facility & Property Management Solutions
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              Complete Facility Management Services
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-400" : "opacity-0"
              }`}
            >
              End-to-end soft and technical facility services to maintain the 
              cleanliness, functionality, and efficiency of your properties.
            </p>
          </div>
        </div>
      </div>

      {/* Housekeeping Services */}
      <div
        ref={(el) => (sectionRefs.current["housekeeping"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                SOFT SERVICES
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["housekeeping"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Housekeeping Services
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["housekeeping"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Professional cleaning and maintenance services for every type of 
              facility and property
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {housekeepingServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 group ${
                  visibleSections["housekeeping"] ? "animate-slide-up" : "opacity-0"
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

      {/* Support Staff Services */}
      <div
        ref={(el) => (sectionRefs.current["support"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                SUPPORT STAFF
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["support"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Support Staff Services
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["support"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Comprehensive manpower solutions for all facility operations and 
              administrative needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportStaffServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  visibleSections["support"]
                    ? "animate-scale"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialized Soft Services */}
      <div
        ref={(el) => (sectionRefs.current["specialized"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Leaf className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                SPECIALIZED SERVICES
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["specialized"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Specialized Soft Services
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["specialized"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Expert services for waste management, landscaping, and specialized 
              facility maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedSoftServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 group ${
                  visibleSections["specialized"]
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

      {/* Technical Facility Services */}
      <div
        ref={(el) => (sectionRefs.current["technical"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                TECHNICAL SERVICES
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-4 ${
                visibleSections["technical"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Technical Facility Services
            </h2>
            <p
              className={`text-gray-300 max-w-2xl mx-auto mb-4 ${
                visibleSections["technical"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Managed by MEP Experts - Comprehensive technical maintenance for 
              all building systems
            </p>
            <p
              className={`text-amber-400 text-sm max-w-xl mx-auto ${
                visibleSections["technical"]
                  ? "animate-fade delay-400"
                  : "opacity-0"
              }`}
            >
              MEP: Mechanical, Electrical & Plumbing Specialists
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 hover:bg-gray-750 transition-all duration-300 border-l-4 border-amber-500 ${
                  visibleSections["technical"]
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

      {/* Integrated Facility Management */}
      <div
        ref={(el) => (sectionRefs.current["ifm"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Workflow className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                INTEGRATED FACILITY MANAGEMENT
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["ifm"] ? "animate-fade" : "opacity-0"
              }`}
            >
              One Contract – All Services Under One Roof
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["ifm"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Cadman's IFM model ensures cost control, quality improvement, and 
              seamless coordination across all services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ifmFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 group ${
                  visibleSections["ifm"] ? "animate-scale" : "opacity-0"
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

          <div className="bg-amber-50 p-8 border-l-4 border-amber-500">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-amber-500" />
                The Cadman IFM Advantage
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Integrated Facility Management model consolidates all your 
                facility services under a single, comprehensive contract. This 
                unified approach eliminates the complexity of managing multiple 
                vendors, reduces administrative overhead, and ensures consistent 
                quality across all operations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With centralized management, digital monitoring, and performance-driven 
                service delivery, Cadman's IFM solution delivers superior cost efficiency, 
                operational excellence, and complete peace of mind for facility owners 
                and managers.
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
              <Award className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">WHY CHOOSE US</span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["why"] ? "animate-fade" : "opacity-0"
              }`}
            >
              India's Premier Facility Management Partner
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["why"] ? "animate-fade delay-200" : "opacity-0"
              }`}
            >
              Experience the difference that integrated management, technical 
              expertise, and quality service can make
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
              "url('/fm_footer.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Facility Management
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get a customized integrated facility management solution with 
            MEP expertise, 24/7 support, and complete operational control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg">
              REQUEST A FACILITY AUDIT
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

export default FacilityManagement;
import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Zap,
  Wrench,
  Droplets,
  Settings,
  Power,
  Wind,
  Gauge,
  Lightbulb,
  Database,
  Boxes,
  Flame,
  CheckCircle,
  Award,
  Clock,
  Users,
  ShieldCheck,
  Activity,
  Cable,
  Cpu,
  Factory,
  Building2,
  CircuitBoard,
  Thermometer,
} from "lucide-react";

const MEPServices = () => {
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

  const electricalServices = [
    {
      icon: Zap,
      title: "Licensed Electricians",
      description: "Certified electricians available for shift-based and general electrical operations",
    },
    {
      icon: CircuitBoard,
      title: "LT/HT Panel Operations",
      description: "Professional operation and maintenance of low tension and high tension electrical panels",
    },
    {
      icon: Power,
      title: "DG & UPS Management",
      description: "Diesel generator and uninterruptible power supply systems operation and maintenance",
    },
    {
      icon: Settings,
      title: "Transformer Maintenance",
      description: "ACB, VCB, and transformer servicing for optimal electrical infrastructure",
    },
    {
      icon: Lightbulb,
      title: "Lighting & Wiring Works",
      description: "Complete lighting installation, cabling, and electrical wiring solutions",
    },
    {
      icon: Gauge,
      title: "Energy Management Systems",
      description: "Advanced energy monitoring and management for efficiency optimization",
    },
  ];

  const mechanicalServices = [
    {
      icon: Wind,
      title: "HVAC Maintenance",
      description: "Comprehensive heating, ventilation, and air conditioning system servicing",
      features: ["Preventive Maintenance", "Emergency Repairs", "Performance Optimization"],
    },
    {
      icon: Thermometer,
      title: "Chiller & AHU Operations",
      description: "Expert management of chillers, air handling units, and VRV/VRF systems",
      features: ["Chiller Operations", "AHU Servicing", "VRV/VRF Systems"],
    },
    {
      icon: Settings,
      title: "Pump & Motor Service",
      description: "Complete maintenance and repair of pumps, motors, and mechanical equipment",
      features: ["Motor Repairs", "Pump Servicing", "Equipment Calibration"],
    },
    {
      icon: Boxes,
      title: "Lift Coordination & Support",
      description: "Lift maintenance coordination and comprehensive support services",
      features: ["Routine Inspections", "Breakdown Support", "Safety Compliance"],
    },
  ];

  const plumbingServices = [
    {
      icon: Droplets,
      title: "Plumbing Maintenance",
      description: "Complete plumbing repairs, installation, and preventive maintenance services",
    },
    {
      icon: Droplets,
      title: "Water Supply Systems",
      description: "Pump room operations and water distribution system management",
    },
    {
      icon: Database,
      title: "Water Treatment Plants",
      description: "STP, WTP, and RO plant operations for clean and safe water supply",
    },
    {
      icon: Droplets,
      title: "Water Tank Cleaning",
      description: "Professional water tank cleaning and sanitization services",
    },
    {
      icon: Wrench,
      title: "Drain Line Services",
      description: "High-pressure jetting and comprehensive drain line maintenance",
    },
    {
      icon: Flame,
      title: "Boiler Operations",
      description: "Boiler and pressure vessel operations with safety compliance",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Licensed and certified MEP professionals with extensive industry experience",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency support for critical MEP systems",
    },
    {
      icon: ShieldCheck,
      title: "Safety Compliance",
      description: "100% adherence to safety standards and regulatory requirements",
    },
    {
      icon: Settings,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs to prevent breakdowns and extend equipment life",
    },
    {
      icon: Activity,
      title: "Energy Efficiency",
      description: "Optimized operations for reduced energy consumption and cost savings",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality checks and performance monitoring at every stage",
    },
  ];

  const operationAreas = [
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "Office complexes, shopping malls, and retail spaces",
    },
    {
      icon: Factory,
      title: "Industrial Facilities",
      description: "Manufacturing plants, warehouses, and production units",
    },
    {
      icon: Building2,
      title: "Residential Complexes",
      description: "Apartments, gated communities, and housing societies",
    },
    {
      icon: Building2,
      title: "Hospitality Sector",
      description: "Hotels, resorts, and service apartments",
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
              "url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80)",
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
                Complete Technical Operations & Maintenance
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              MEP Services
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-400" : "opacity-0"
              }`}
            >
              Comprehensive Mechanical, Electrical & Plumbing solutions with 
              certified technicians, preventive maintenance, and 24/7 emergency support.
            </p>
          </div>
        </div>
      </div>

      {/* Electrical Services */}
      <div
        ref={(el) => (sectionRefs.current["electrical"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                ELECTRICAL SERVICES
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["electrical"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Professional Electrical Operations
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["electrical"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Expert electrical services with licensed technicians for all your 
              power distribution and energy management needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electricalServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 group ${
                  visibleSections["electrical"] ? "animate-slide-up" : "opacity-0"
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

      {/* Mechanical Services */}
      <div
        ref={(el) => (sectionRefs.current["mechanical"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Settings className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                MECHANICAL SERVICES
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["mechanical"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Advanced Mechanical Systems Management
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["mechanical"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Complete mechanical equipment maintenance including HVAC, chillers, 
              pumps, and critical building systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mechanicalServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["mechanical"]
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
                    <p className="text-gray-600 mb-4">{service.description}</p>
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

      {/* Plumbing Services */}
      <div
        ref={(el) => (sectionRefs.current["plumbing"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["plumbing"] ? "animate-slide-left" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  PLUMBING SERVICES
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Plumbing & Water Management
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Comprehensive plumbing solutions including water treatment plants, 
                pump operations, and drainage systems for optimal water management.
              </p>

              <div className="space-y-4">
                {plumbingServices.map((service, index) => (
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
                visibleSections["plumbing"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&q=80"
                alt="Plumbing Services"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Operation Areas */}
      <div
        ref={(el) => (sectionRefs.current["areas"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                SERVICE AREAS
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-4 ${
                visibleSections["areas"] ? "animate-fade" : "opacity-0"
              }`}
            >
              We Serve Multiple Sectors
            </h2>
            <p
              className={`text-gray-300 max-w-2xl mx-auto ${
                visibleSections["areas"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Comprehensive MEP solutions across commercial, industrial, residential, 
              and hospitality sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationAreas.map((area, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-6 hover:bg-gray-750 transition-all duration-300 border-l-4 border-amber-500 ${
                  visibleSections["areas"]
                    ? "animate-slide-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {area.description}
                  </p>
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
              <span className="text-amber-500 font-semibold">WHY CHOOSE US</span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["why"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Your Trusted MEP Service Partner
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["why"] ? "animate-fade delay-200" : "opacity-0"
              }`}
            >
              Experience professional MEP management with certified technicians, 
              preventive maintenance, and guaranteed operational excellence
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

      {/* Service Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic methodology ensuring optimal performance and minimal downtime
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of existing MEP systems and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                Customized maintenance schedule and operational procedures
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">
                Professional service delivery by certified technical teams
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Continuous performance tracking and preventive maintenance
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
              "url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Optimize Your MEP Operations Today
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get expert MEP solutions with certified technicians, preventive maintenance 
            programs, and 24/7 emergency support for uninterrupted operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg">
              REQUEST CONSULTATION
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

export default MEPServices;
import React, { useState, useEffect, useRef } from "react";
import {
  Flame,
  Shield,
  AlertTriangle,
  Users,
  Radio,
  Bell,
  Droplets,
  Eye,
  Lightbulb,
  FileCheck,
  ClipboardCheck,
  Award,
  Clock,
  ShieldCheck,
  Activity,
  CheckCircle,
  Building2,
  Factory,
  Home,
  Store,
  Zap,
  Wind,
  Siren,
  UserCheck,
  Settings,
  HardHat,
  Megaphone,
  CircuitBoard,
} from "lucide-react";
import { Link } from "react-router-dom";

const FireSafety = () => {
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

  const manpowerServices = [
    {
      icon: HardHat,
      title: "Fire Guards",
      description:
        "Trained fire watch personnel for continuous monitoring and immediate response to fire hazards",
    },
    {
      icon: UserCheck,
      title: "Fire Supervisors",
      description:
        "Experienced supervisors managing fire safety operations and coordinating emergency response",
    },
    {
      icon: Settings,
      title: "Fire Technicians",
      description:
        "Certified technicians for fire system maintenance, testing, and repair services",
    },
    {
      icon: Siren,
      title: "Emergency Response Team (ERT)",
      description:
        "Specialized teams trained in fire suppression, evacuation, and emergency medical response",
    },
  ];

  const systemServices = [
    {
      icon: Bell,
      title: "Fire Alarm & Hydrant System Maintenance",
      description:
        "Complete maintenance of fire alarm panels, detection systems, and hydrant networks",
      features: ["Panel Servicing", "Hydrant Testing", "Valve Inspection"],
    },
    {
      icon: Droplets,
      title: "Sprinkler System Testing",
      description:
        "Comprehensive testing and maintenance of automatic sprinkler systems for optimal performance",
      features: ["Flow Testing", "Pressure Checks", "Nozzle Inspection"],
    },
    {
      icon: Eye,
      title: "Smoke Detector Installation & Calibration",
      description:
        "Professional installation, calibration, and maintenance of smoke detection systems",
      features: [
        "Detector Installation",
        "Sensitivity Testing",
        "Battery Replacement",
      ],
    },
    {
      icon: Lightbulb,
      title: "Emergency Light & PA System Checks",
      description:
        "Regular testing of emergency lighting and public address systems for emergency readiness",
      features: [
        "Lighting Tests",
        "PA System Checks",
        "Battery Backup Verification",
      ],
    },
  ];

  const safetySupport = [
    {
      icon: FileCheck,
      title: "Fire Safety Audit",
      description:
        "Comprehensive fire safety audits to ensure compliance with regulations and identify vulnerabilities",
    },
    {
      icon: Users,
      title: "Mock Drills & Evacuation Training",
      description:
        "Regular fire drills and evacuation training programs for staff preparedness and safety awareness",
    },
    {
      icon: Flame,
      title: "Fire Extinguishers Refilling & AMC",
      description:
        "Complete fire extinguisher services including refilling, maintenance, and annual maintenance contracts",
    },
    {
      icon: ClipboardCheck,
      title: "Fire NOC Assistance",
      description:
        "Expert assistance in obtaining Fire No Objection Certificates from authorities",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Professionals",
      description:
        "Trained and certified fire safety personnel with extensive emergency response experience",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Round-the-clock fire safety services and emergency response team availability",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Assured",
      description:
        "100% compliance with fire safety regulations and statutory requirements",
    },
    {
      icon: Activity,
      title: "Regular Inspections",
      description:
        "Scheduled maintenance and testing programs ensuring system reliability",
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description:
        "Quick emergency response with trained ERT teams for fire incidents",
    },
    {
      icon: CheckCircle,
      title: "Quality Standards",
      description:
        "Adherence to national and international fire safety standards and protocols",
    },
  ];

  const serviceAreas = [
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "Office complexes, business parks, and corporate facilities",
    },
    {
      icon: Factory,
      title: "Industrial Facilities",
      description: "Manufacturing plants, warehouses, and production units",
    },
    {
      icon: Home,
      title: "Residential Complexes",
      description: "Apartments, high-rise buildings, and gated communities",
    },
    {
      icon: Store,
      title: "Retail & Hospitality",
      description:
        "Shopping malls, hotels, restaurants, and service establishments",
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
            backgroundImage: "url('/fireandsafety.jpg')",
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
                Complete Fire Protection, Safety Compliance & Manpower
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                isLoaded ? "animate-slide-right delay-200" : "opacity-0"
              }`}
            >
              Fire & Safety Services
            </h1>

            <p
              className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                isLoaded ? "animate-fade delay-400" : "opacity-0"
              }`}
            >
              Comprehensive fire safety solutions with certified personnel,
              advanced fire systems, emergency response teams, and complete
              compliance management.
            </p>
          </div>
        </div>
      </div>

      {/* Fire Manpower */}
      <div
        ref={(el) => (sectionRefs.current["manpower"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                FIRE MANPOWER
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["manpower"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Trained Fire Safety Personnel
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["manpower"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Certified fire safety professionals including guards, supervisors,
              technicians, and emergency response teams for comprehensive
              protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manpowerServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-amber-500 group ${
                  visibleSections["manpower"] ? "animate-slide-up" : "opacity-0"
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

      {/* Fire System Services */}
      <div
        ref={(el) => (sectionRefs.current["systems"] = el)}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CircuitBoard className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                FIRE SYSTEM SERVICES
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["systems"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Advanced Fire Protection Systems
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["systems"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Complete maintenance and testing of fire alarm systems,
              sprinklers, smoke detectors, and emergency equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {systemServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500 ${
                  visibleSections["systems"] ? "animate-scale" : "opacity-0"
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

      {/* Fire Safety Support */}
      <div
        ref={(el) => (sectionRefs.current["support"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={
                visibleSections["support"] ? "animate-slide-left" : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  FIRE SAFETY SUPPORT
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Safety Compliance
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Complete fire safety support including audits, training
                programs, extinguisher services, and Fire NOC assistance for
                regulatory compliance.
              </p>

              <div className="space-y-4">
                {safetySupport.map((service, index) => (
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
                visibleSections["support"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }`}
            >
              <img
                src="/fireandsafety-1.jpg"
                alt="Fire Safety Training"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Preparedness */}
      <div
        ref={(el) => (sectionRefs.current["emergency"] = el)}
        className="py-20 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`${
                visibleSections["emergency"]
                  ? "animate-slide-left"
                  : "opacity-0"
              }`}
            >
              <img
                src="/fireandsafety-2.png"
                alt="Emergency Response"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>

            <div
              className={
                visibleSections["emergency"]
                  ? "animate-slide-right delay-200"
                  : "opacity-0"
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                <span className="text-amber-500 font-semibold">
                  EMERGENCY PREPAREDNESS
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Any Emergency
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our Emergency Response Teams (ERT) are trained to handle fire
                incidents, evacuations, and emergency situations with precision
                and efficiency.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Siren className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Rapid Response Protocol
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Immediate deployment of ERT teams with coordinated
                      emergency response
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Evacuation Management
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Systematic evacuation procedures with trained personnel
                      and clear protocols
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800 hover:bg-gray-750 transition">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Radio className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      24/7 Communication
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Continuous communication channels for immediate alert and
                      coordination
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div
        ref={(el) => (sectionRefs.current["areas"] = el)}
        className="py-20 bg-gray-50"
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
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["areas"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Protecting Multiple Sectors
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["areas"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              Comprehensive fire safety solutions across commercial, industrial,
              residential, and hospitality sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className={`bg-white p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500 ${
                  visibleSections["areas"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        ref={(el) => (sectionRefs.current["why"] = el)}
        className="py-20 bg-white"
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
              Your Trusted Fire Safety Partner
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["why"] ? "animate-fade delay-200" : "opacity-0"
              }`}
            >
              Experience professional fire safety management with certified
              personnel, advanced systems, and guaranteed compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group ${
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
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Safety Management Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring complete fire safety compliance and
              emergency preparedness
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Safety Audit</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive fire safety assessment and risk identification
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">System Setup</h3>
              <p className="text-gray-600 text-sm">
                Installation and configuration of fire detection and suppression
                systems
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Training & Drills
              </h3>
              <p className="text-gray-600 text-sm">
                Regular mock drills and comprehensive staff training programs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">
                Continuous maintenance, monitoring, and compliance management
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
            backgroundImage: "url('/fireandsafety-2.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ensure Complete Fire Safety Compliance
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get comprehensive fire safety solutions with certified personnel,
            advanced systems, emergency response teams, and complete regulatory
            compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg flex items-center justify-center"
            >
              REQUEST FIRE AUDIT
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
  );
};

export default FireSafety;

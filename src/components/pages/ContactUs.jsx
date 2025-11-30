import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  Building2,
  Briefcase,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
} from "lucide-react";
import SEO from "../../components/SEO";

const ContactUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email body with form data
    const emailSubject = encodeURIComponent(
      `Contact Form Submission - ${formData.service}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Company: ${formData.company || "N/A"}\n` +
        `Service Interested In: ${formData.service}\n\n` +
        `Message:\n${formData.message}`
    );

    // Open default email client
    window.location.href = `mailto:info@cadmansecurity.com?subject=${emailSubject}&body=${emailBody}`;

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Cadman Security Services Pvt. Ltd.",
        "106, 1st Floor, 40 Feet Road",
        "Manjunathnagar, West of Chord Road",
        "Bangalore -560010",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Office: +91-9945230206",
        "Mobile: +91-9945230206",
        "Emergency: +91-9945230206",
      ],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@cadmansecurity.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
        "24/7 Emergency Support Available",
      ],
    },
  ];

  const services = [
    "Security Services",
    "Fire & Safety",
    "Facility Management",
    "Housekeeping",
    "Manpower Solutions",
    "Other",
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SEO
        title="Contact Cadman – Reach Our Security & Facility Management Team"
        description="Get in touch with Cadman for security services, manpower solutions, facility management, and training inquiries. We are here to assist businesses, industries, and residential communities."
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
              backgroundImage: "url('/contact-us-hero.jpeg')",
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
                  We're Here to Help
                </span>
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                  isLoaded ? "animate-slide-right delay-200" : "opacity-0"
                }`}
              >
                Get In Touch
              </h1>

              <p
                className={`text-gray-300 text-lg md:text-xl leading-relaxed ${
                  isLoaded ? "animate-fade delay-400" : "opacity-0"
                }`}
              >
                Have questions about our services? Want to discuss your security
                needs? Our team is ready to assist you with customized
                solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div
          ref={(el) => (sectionRefs.current["info"] = el)}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 ${
                    visibleSections["info"] ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 text-sm leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map & Contact Form Section */}
        <div
          ref={(el) => (sectionRefs.current["form"] = el)}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Google Map */}
              <div
                className={`${
                  visibleSections["form"] ? "animate-slide-left" : "opacity-0"
                }`}
              >
                <div className="bg-white p-6 shadow-lg h-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Location
                  </h2>
                  <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.630230151733!2d77.54737797447478!3d12.995486187322085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d90f0086fff%3A0xac48757e9022ad6!2sCadman%20Security%20Servies%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1764422136920!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Cadman Security Services Location"
                    ></iframe>
                  </div>
                  <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Visit Our Office
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Manjunathnagar, West of Chord Road Banglore - 5600010,
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={`${
                  visibleSections["form"]
                    ? "animate-slide-right delay-200"
                    : "opacity-0"
                }`}
              >
                <div className="bg-white p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>

                  {formStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-green-900">Success!</h4>
                        <p className="text-green-700 text-sm">
                          Your message has been sent successfully. We'll get
                          back to you soon!
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-amber-500 focus:outline-none transition"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-amber-500 focus:outline-none transition"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-amber-500 focus:outline-none transition"
                            placeholder="+91-XXXXXXXXXX"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-amber-500 focus:outline-none transition"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Service Interested In *
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-amber-500 focus:outline-none transition appearance-none bg-white"
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Your Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="5"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-amber-500 focus:outline-none transition resize-none"
                          placeholder="Tell us about your requirements..."
                          required
                        ></textarea>
                      </div>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full bg-amber-500 text-white font-semibold py-4 hover:bg-amber-600 transition shadow-lg flex items-center justify-center gap-3 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Connect */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Connect With Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow us on social media for updates, industry insights, and
                company news
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-amber-500 hover:text-white transition-all duration-300 group"
              >
                <Facebook className="w-7 h-7 text-gray-700 group-hover:text-white transition" />
              </a>
              <a
                href="#"
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-amber-500 hover:text-white transition-all duration-300 group"
              >
                <Twitter className="w-7 h-7 text-gray-700 group-hover:text-white transition" />
              </a>
              <a
                href="#"
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-amber-500 hover:text-white transition-all duration-300 group"
              >
                <Linkedin className="w-7 h-7 text-gray-700 group-hover:text-white transition" />
              </a>
              <a
                href="#"
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-amber-500 hover:text-white transition-all duration-300 group"
              >
                <Instagram className="w-7 h-7 text-gray-700 group-hover:text-white transition" />
              </a>
              <a
                href="#"
                className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-amber-500 hover:text-white transition-all duration-300 group"
              >
                <Globe className="w-7 h-7 text-gray-700 group-hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/contact-us-footer.jpeg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get in touch with our team today for customized security and
              facility management solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToTop}
                className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg"
              >
                REQUEST A QUOTE
              </button>
              <button
                onClick={scrollToTop}
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition text-lg"
              >
                SCHEDULE A MEETING
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

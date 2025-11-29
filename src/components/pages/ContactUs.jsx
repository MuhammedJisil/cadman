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
    setFormStatus("success");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    // Clear success message after 5 seconds
    setTimeout(() => setFormStatus(null), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Cadman Security Services Pvt. Ltd.",
        "123 Business Park, Sector 18",
        "Gurugram, Haryana - 122015",
        "India",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Toll Free: 1800-XXX-XXXX",
        "Office: +91-124-XXXXXXX",
        "Mobile: +91-98XXX-XXXXX",
        "Emergency: +91-99XXX-XXXXX",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@cadmansecurity.com",
        "sales@cadmansecurity.com",
        "hr@cadmansecurity.com",
        "support@cadmansecurity.com",
      ],
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

  const branches = [
    {
      city: "Delhi NCR",
      address: "Plot 45, Okhla Industrial Area, New Delhi - 110020",
      phone: "+91-11-XXXXXXXX",
    },
    {
      city: "Mumbai",
      address: "Office 302, Andheri East, Mumbai - 400069",
      phone: "+91-22-XXXXXXXX",
    },
    {
      city: "Bangalore",
      address: "Building 7, Electronic City, Bangalore - 560100",
      phone: "+91-80-XXXXXXXX",
    },
    {
      city: "Chennai",
      address: "Anna Salai Complex, Chennai - 600002",
      phone: "+91-44-XXXXXXXX",
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
      <div className="relative h-96 w-full mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)",
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
              Have questions about our services? Want to discuss your security needs? 
              Our team is ready to assist you with customized solutions.
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
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2958716653505!2d77.08493931508045!3d28.459497982491224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d3e63b0001%3A0x8b068cbb2d9d77c5!2sSector%2018%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
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
                  <h3 className="font-bold text-gray-900 mb-2">Visit Our Office</h3>
                  <p className="text-gray-600 text-sm">
                    123 Business Park, Sector 18, Gurugram, Haryana - 122015, India
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
                        Your message has been sent successfully. We'll get back to you soon!
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

      {/* Branch Offices */}
      <div
        ref={(el) => (sectionRefs.current["branches"] = el)}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-amber-500" />
              <span className="text-amber-500 font-semibold">
                OUR PRESENCE
              </span>
            </div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${
                visibleSections["branches"] ? "animate-fade" : "opacity-0"
              }`}
            >
              Branch Offices Across India
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${
                visibleSections["branches"]
                  ? "animate-fade delay-200"
                  : "opacity-0"
              }`}
            >
              We serve clients across major cities with dedicated offices and support teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500 ${
                  visibleSections["branches"] ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {branch.city}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{branch.address}</p>
                <div className="flex items-center gap-2 text-amber-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">{branch.phone}</span>
                </div>
              </div>
            ))}
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
              Follow us on social media for updates, industry insights, and company news
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
            backgroundImage:
              "url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get in touch with our team today for customized security and facility 
            management solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition shadow-lg text-lg">
              REQUEST A QUOTE
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition text-lg">
              SCHEDULE A MEETING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
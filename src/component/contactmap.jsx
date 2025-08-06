"use client";
import React, { useState } from "react";
import { ChevronDown, MapPin, Phone, Mail, Send } from "lucide-react";

const ContactFAQComponent = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const faqs = [
    {
      question: "What Industries Do You Serve?",
      answer:
        "We cater to automotive, telecom, medical, appliance, and various other industries with customized wiring and electrical solutions.",
    },
    {
      question: "Do You Offer Custom Wiring Solutions?",
      answer:
        "Yes, we specialize in custom wiring solutions tailored to your specific industry requirements and applications.",
    },
    {
      question: "Are Your Products Certified For Quality And Safety?",
      answer:
        "All our products meet industry standards and are certified for quality and safety compliance.",
    },
    {
      question: "How Can I Request A Quote Or Consultation?",
      answer:
        "You can request a quote by filling out our contact form below or reaching out to us directly via phone or email.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-orange-500 text-sm font-medium mb-2 tracking-wide">
              HAVE ANY QUESTION?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions?
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Find answers to common questions about our products, services, and
              processes. If you need more details, feel free to contact us!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform duration-200 flex-shrink-0 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="text-orange-500 text-sm font-medium mb-2 tracking-wide">
              CONTACT US
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get The Right Solution For Your Needs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Powering the future of electric mobility — Webber delivers
              cutting-edge wiring and chip solutions engineered for performance,
              reliability, and scalability. Let's build the next generation of
              EVs together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch With Webber
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions or need a custom solution? Our team is here to
                help! Reach out to us for expert guidance, product inquiries, or
                collaboration opportunities.
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Head Office
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">
                      Office 03 and 04, First Floor, Sai Raj Regency, Pimple
                      Saudagar, Pune, Maharashtra 411 027
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-600">+91 999 999 0794</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-600">
                      sales@shrisaielectroworks.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-600">
                      sandeep@shrisaielectroworks.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Form
              </h3>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      First Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-200"
                      placeholder="Rohit"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Last Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-200"
                      placeholder="Gupta"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Comments / Questions{" "}
                    <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.567!2d73.799!3d18.631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b8a8b8a8a8%3A0x8b8a8b8a8b8a8b8a!2sPimple%20Saudagar%2C%20Pune%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Office Location - Pimple Saudagar, Pune"
              ></iframe>
            </div>
            <div className="p-6 bg-slate-800 text-white">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-sm">
                  Office 03 and 04, First Floor, Sai Raj Regency, Pimple
                  Saudagar, Pune, Maharashtra 411 027
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQComponent;

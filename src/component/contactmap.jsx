// "use client";
// import React, { useState } from "react";
// import {
//   ChevronDown,
//   MapPin,
//   Phone,
//   Mail,
//   Send,
//   Plus,
//   Minus,
// } from "lucide-react";

// const ContactFAQComponent = () => {
//   const [openFAQ, setOpenFAQ] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     comments: "",
//   });
//   const [isHovered, setIsHovered] = useState(false);

//   const faqs = [
//     {
//       question: "What Industries Do You Serve?",
//       answer:
//         "We cater to automotive, telecom, medical, appliance, and various other industries with customized wiring and electrical solutions.",
//     },
//     {
//       question: "Do You Offer Custom Wiring Solutions?",
//       answer:
//         "Yes, we specialize in custom wiring solutions tailored to your specific industry requirements and applications.",
//     },
//     {
//       question: "Are Your Products Certified For Quality And Safety?",
//       answer:
//         "All our products meet industry standards and are certified for quality and safety compliance.",
//     },
//     {
//       question: "How Can I Request A Quote Or Consultation?",
//       answer:
//         "You can request a quote by filling out our contact form below or reaching out to us directly via phone or email.",
//     },
//   ];

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     console.log("Form submitted:", formData);
//     // Handle form submission logic here
//   };

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
//       {/* FAQ Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Side - Enhanced Text */}
//           <div className="sticky top-8">
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-green-400/10 blur-xl rounded-3xl"></div>
//               <div className="relative">
//                 <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-400/10 border border-blue-200/20 mb-6">
//                   <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mr-3 animate-pulse"></div>
//                   <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent text-sm font-medium tracking-wide">
//                     HAVE ANY QUESTION?
//                   </span>
//                 </div>
//                 <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                   Frequently Asked{" "}
//                   <span className="relative">
//                     Questions
//                     <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full transform scale-x-0 animate-pulse"></div>
//                   </span>
//                 </h2>
//                 <p className="text-gray-600 mb-8 text-xl leading-relaxed">
//                   Find answers to common questions about our products, services,
//                   and processes. If you need more details, feel free to contact
//                   us!
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Enhanced FAQs */}
//           <div className="space-y-3">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-blue-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-all duration-300 rounded-2xl"
//                 >
//                   <span className="font-semibold text-gray-900 pr-4 group-hover:text-blue-700 transition-colors duration-300">
//                     {faq.question}
//                   </span>
//                   <div className="relative w-6 h-6 flex-shrink-0">
//                     <Plus
//                       className={`absolute w-6 h-6 text-blue-500 transition-all duration-300 ${
//                         openFAQ === index
//                           ? "opacity-0 rotate-90"
//                           : "opacity-100"
//                       }`}
//                     />
//                     <Minus
//                       className={`absolute w-6 h-6 text-green-500 transition-all duration-300 ${
//                         openFAQ === index
//                           ? "opacity-100 rotate-0"
//                           : "opacity-0 -rotate-90"
//                       }`}
//                     />
//                   </div>
//                 </button>
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     openFAQ === index ? "max-h-96 pb-6" : "max-h-0"
//                   }`}
//                 >
//                   <div className="px-8">
//                     <div className="w-full h-px bg-gradient-to-r from-blue-200 to-green-200 mb-4"></div>
//                     <p className="text-gray-600 leading-relaxed">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200/30 mb-6">
//               <span className="text-blue-600 text-sm font-medium tracking-wide">
//                 CONTACT US
//               </span>
//             </div>
//             <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
//               Get The Right Solution{" "}
//               <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
//                 For Your Needs
//               </span>
//             </h2>
//             <p className="text-gray-600 max-w-4xl mx-auto text-xl leading-relaxed">
//               Powering the future of electric mobility — Webber delivers
//               cutting-edge wiring and chip solutions engineered for performance,
//               reliability, and scalability. Let's build the next generation of
//               EVs together.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-5 gap-12">
//             {/* Contact Info */}
//             <div className="lg:col-span-2">
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-green-400/5 blur-xl rounded-3xl"></div>
//                 <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                     Get In Touch With{" "}
//                     <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
//                       Webber
//                     </span>
//                   </h3>
//                   <p className="text-gray-600 mb-8 leading-relaxed">
//                     Have questions or need a custom solution? Our team is here
//                     to help! Reach out to us for expert guidance, product
//                     inquiries, or collaboration opportunities.
//                   </p>

//                   <div className="space-y-6">
//                     <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
//                       Head Office
//                     </h4>
//                     <div className="space-y-5">
//                       <div className="flex items-start group">
//                         <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
//                           <MapPin className="w-5 h-5 text-blue-600" />
//                         </div>
//                         <span className="text-gray-600 leading-relaxed">
//                           Office 03 and 04, First Floor, Sai Raj Regency, Pimple
//                           Saudagar, Pune, Maharashtra 411 027
//                         </span>
//                       </div>
//                       <div className="flex items-center group">
//                         <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
//                           <Phone className="w-5 h-5 text-blue-600" />
//                         </div>
//                         <span className="text-gray-600">+91 999 999 0794</span>
//                       </div>
//                       <div className="flex items-center group">
//                         <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
//                           <Mail className="w-5 h-5 text-blue-600" />
//                         </div>
//                         <span className="text-gray-600">
//                           sales@shrisaielectroworks.com
//                         </span>
//                       </div>
//                       <div className="flex items-center group">
//                         <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
//                           <Mail className="w-5 h-5 text-blue-600" />
//                         </div>
//                         <span className="text-gray-600">
//                           sandeep@shrisaielectroworks.com
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="lg:col-span-3">
//               <div className="relative">
//                 <div className="absolute -inset-2 bg-black rounded-3xl "></div>
//                 <div className="relative bg-black rounded-3xl p-8 border border-slate-700/50">
//                   <div className="flex items-center mb-8">
//                     <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-2xl flex items-center justify-center mr-4">
//                       <Mail className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white">
//                       Contact Form
//                     </h3>
//                   </div>

//                   <div className="space-y-6">
//                     <div className="grid sm:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <label className="block text-white text-sm font-medium">
//                           First Name <span className="text-red-400">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 rounded-xl bg-white/10 border border-slate-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-white/20 transition-all duration-300"
//                           placeholder="Rohit"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label className="block text-white text-sm font-medium">
//                           Last Name <span className="text-red-400">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           className="w-full px-4 py-3 rounded-xl bg-white/10 border border-slate-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-white/20 transition-all duration-300"
//                           placeholder="Gupta"
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label className="block text-white text-sm font-medium">
//                         Email Address <span className="text-red-400">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 rounded-xl bg-white/10 border border-slate-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-white/20 transition-all duration-300"
//                         placeholder="rohit@example.com"
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label className="block text-white text-sm font-medium">
//                         Comments / Questions{" "}
//                         <span className="text-red-400">*</span>
//                       </label>
//                       <textarea
//                         name="comments"
//                         value={formData.comments}
//                         onChange={handleInputChange}
//                         rows={4}
//                         className="w-full px-4 py-3 rounded-xl bg-white/10 border border-slate-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-white/20 transition-all duration-300 resize-none"
//                         placeholder="Tell us about your requirements..."
//                       ></textarea>
//                     </div>

//                     <button
//                       onClick={handleSubmit}
//                       onMouseEnter={() => setIsHovered(true)}
//                       onMouseLeave={() => setIsHovered(false)}
//                       className="group relative w-full bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center overflow-hidden"
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                       <Send
//                         className={`w-5 h-5 mr-3 transition-transform duration-300 ${
//                           isHovered ? "translate-x-1" : ""
//                         }`}
//                       />
//                       <span className="relative">SEND MESSAGE</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Map Section */}
//       <div className="bg-gradient-to-br from-gray-100 to-slate-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="relative group">
//             <div className="absolute -inset-2 bg-black blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
//               <div className="h-96 w-full relative overflow-hidden">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.567!2d73.799!3d18.631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b8a8b8a8a8%3A0x8b8a8b8a8b8a8b8a!2sPimple%20Saudagar%2C%20Pune%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="w-full h-full transition-all duration-300 group-hover:scale-105"
//                   title="Office Location - Pimple Saudagar, Pune"
//                 ></iframe>
//               </div>
//               <div className="bg-black text-white p-6">
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-2xl flex items-center justify-center mr-4">
//                     <MapPin className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Head Office Location</h4>
//                     <span className="text-sm text-gray-300">
//                       Office 03 and 04, First Floor, Sai Raj Regency, Pimple
//                       Saudagar, Pune, Maharashtra 411 027
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactFAQComponent;

"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Send,
  Plus,
  Minus,
} from "lucide-react";

const ContactFAQComponent = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Enhanced Text */}
          <div className="lg:sticky lg:top-8">
            <div className="relative">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-500/10 to-green-400/10 blur-xl rounded-3xl"></div>
              <div className="relative">
                <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-400/10 border border-blue-200/20 mb-4 md:mb-6">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-blue-500 to-green-400 rounded-full mr-2 md:mr-3 animate-pulse"></div>
                  <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent text-xs md:text-sm font-medium tracking-wide">
                    HAVE ANY QUESTION?
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                  Frequently Asked{" "}
                  <span className="relative">
                    Questions
                    <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-blue-500 to-green-400 rounded-full transform scale-x-0 animate-pulse"></div>
                  </span>
                </h2>
                <p className="text-gray-600 mb-6 md:mb-8 text-base sm:text-lg md:text-xl leading-relaxed">
                  Find answers to common questions about our products, services,
                  and processes. If you need more details, feel free to contact
                  us!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced FAQs */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-100 hover:border-blue-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-all duration-300 rounded-xl md:rounded-2xl"
                >
                  <span className="font-semibold text-gray-900 pr-3 md:pr-4 text-sm sm:text-base group-hover:text-blue-700 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="relative w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                    <Plus
                      className={`absolute w-5 h-5 md:w-6 md:h-6 text-blue-500 transition-all duration-300 ${
                        openFAQ === index
                          ? "opacity-0 rotate-90"
                          : "opacity-100"
                      }`}
                    />
                    <Minus
                      className={`absolute w-5 h-5 md:w-6 md:h-6 text-green-500 transition-all duration-300 ${
                        openFAQ === index
                          ? "opacity-100 rotate-0"
                          : "opacity-0 -rotate-90"
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? "max-h-96 pb-4 md:pb-6" : "max-h-0"
                  }`}
                >
                  <div className="px-4 md:px-6 lg:px-8">
                    <div className="w-full h-px bg-gradient-to-r from-blue-200 to-green-200 mb-3 md:mb-4"></div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-blue-100/50 border border-blue-200/30 mb-4 md:mb-6">
              <span className="text-blue-600 text-xs md:text-sm font-medium tracking-wide">
                CONTACT US
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              Get The Right Solution{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                For Your Needs
              </span>
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
              Powering the future of electric mobility — Webber delivers
              cutting-edge wiring and chip solutions engineered for performance,
              reliability, and scalability. Let's build the next generation of
              EVs together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-500/5 to-green-400/5 blur-xl rounded-2xl md:rounded-3xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                    Get In Touch With{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                      Webber
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
                    Have questions or need a custom solution? Our team is here
                    to help! Reach out to us for expert guidance, product
                    inquiries, or collaboration opportunities.
                  </p>

                  <div className="space-y-4 md:space-y-6">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
                      Head Office
                    </h4>
                    <div className="space-y-4 md:space-y-5">
                      <div className="flex items-start group">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-600 text-sm md:text-base leading-relaxed">
                          Office 03 and 04, First Floor, Sai Raj Regency, Pimple
                          Saudagar, Pune, Maharashtra 411 027
                        </span>
                      </div>
                      <div className="flex items-center group">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-600 text-sm md:text-base">
                          +91 999 999 0794
                        </span>
                      </div>
                      <div className="flex items-center group">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-600 text-sm md:text-base">
                          sales@shrisaielectroworks.com
                        </span>
                      </div>
                      <div className="flex items-center group">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-600 text-sm md:text-base">
                          sandeep@shrisaielectroworks.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute -inset-1 md:-inset-2 bg-black rounded-2xl md:rounded-3xl"></div>
                <div className="relative bg-black rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-700/50">
                  <div className="flex items-center mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Contact Form
                    </h3>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label className="block text-white text-xs md:text-sm font-medium">
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-white/10 border border-slate-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-white/20 transition-all duration-300 text-sm md:text-base"
                          placeholder="Rohit"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-white text-xs md:text-sm font-medium">
                          Last Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-white/10 border border-slate-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-white/20 transition-all duration-300 text-sm md:text-base"
                          placeholder="Gupta"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-white text-xs md:text-sm font-medium">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-white/10 border border-slate-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-white/20 transition-all duration-300 text-sm md:text-base"
                        placeholder="rohit@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-white text-xs md:text-sm font-medium">
                        Comments / Questions{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-white/10 border border-slate-600/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-white/20 transition-all duration-300 resize-none text-sm md:text-base"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSubmit}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="group relative w-full bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl transition-all duration-300 flex items-center justify-center overflow-hidden text-sm md:text-base"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <Send
                        className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 transition-transform duration-300 ${
                          isHovered ? "translate-x-1" : ""
                        }`}
                      />
                      <span className="relative">SEND MESSAGE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Map Section */}
      <div className="bg-gradient-to-br from-gray-100 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="relative group">
            <div className="absolute -inset-1 md:-inset-2 bg-black blur-xl rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-200/50">
              <div className="h-64 sm:h-72 md:h-80 lg:h-96 w-full relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.567!2d73.799!3d18.631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b8a8b8a8a8%3A0x8b8a8b8a8b8a8b8a!2sPimple%20Saudagar%2C%20Pune%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full transition-all duration-300 group-hover:scale-105"
                  title="Office Location - Pimple Saudagar, Pune"
                ></iframe>
              </div>
              <div className="bg-black text-white p-4 md:p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">
                      Head Office Location
                    </h4>
                    <span className="text-xs md:text-sm text-gray-300">
                      Office 03 and 04, First Floor, Sai Raj Regency, Pimple
                      Saudagar, Pune, Maharashtra 411 027
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQComponent;

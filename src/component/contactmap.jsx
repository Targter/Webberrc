'use client'
import React, { useState } from 'react'
import { Mail, MapPin, Clock, Send } from 'lucide-react'

const ContactMap = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', location: '', message: '' })
  }

  const glowWrapper =
    'group relative border-2 border-gray-200 rounded-3xl p-8 transition-all duration-300 hover:border-transparent hover:shadow-xl overflow-hidden'

  const glowEffect = `
    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0
    before:absolute before:top-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-yellow-400 before:via-purple-500 before:to-gray-300 before:group-hover:w-full before:transition-all before:duration-1000 before:delay-100
    after:absolute after:top-0 after:right-0 after:w-0.5 after:h-0 after:bg-gradient-to-b after:from-gray-300 after:via-purple-500 after:to-yellow-400 after:group-hover:h-full after:transition-all after:duration-1000 after:delay-400
    [&::after]:absolute [&::after]:bottom-0 [&::after]:right-0 [&::after]:w-0 [&::after]:h-0.5 [&::after]:bg-gradient-to-l [&::after]:from-yellow-400 [&::after]:via-purple-500 [&::after]:to-gray-300 group-hover:[&::after]:w-full group-hover:[&::after]:transition-all group-hover:[&::after]:duration-1000 group-hover:[&::after]:delay-700
    [&::before]:absolute [&::before]:bottom-0 [&::before]:left-0 [&::before]:w-0.5 [&::before]:h-0 [&::before]:bg-gradient-to-t [&::before]:from-gray-300 [&::before]:via-purple-500 [&::before]:to-yellow-400 group-hover:[&::before]:h-full group-hover:[&::before]:transition-all group-hover:[&::before]:duration-1000 group-hover:[&::before]:delay-1000
  `

  return (
    <div className="w-full mx-auto py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT: Contact Info */}
          <div className={`${glowWrapper}`}>
            <div className={glowEffect}></div>

            <div className="relative z-10 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">GET IN TOUCH WITH US</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Reach out to us for inquiries, support, or partnership opportunities. We're here to assist you!
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">You can email us here</p>
                      <p className="text-gray-900 font-medium">hello@webberchips.com</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5 text-teal-600 transform rotate-45" />
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Locations</p>
                      <p className="text-gray-900 font-medium">Get Directions</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5 text-teal-600 transform rotate-45" />
                  </div>
                </div>

                {/* Pickup */}
                <div className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Fast & Easy Laundry Pickup</p>
                      <p className="text-gray-900 font-medium">Schedule A pickup</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Send className="w-5 h-5 text-teal-600 transform rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className={`${glowWrapper}`}>
            <div className={glowEffect}></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">SEND US A MESSAGE</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Use our convenient contact form to reach out with questions, feedback, or collaboration inquiries.
                </p>
              </div>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200 text-lg"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200 text-lg"
              />

              <div className="relative">
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200 text-lg appearance-none cursor-pointer"
                >
                  <option value="">Select Location</option>
                  <option value="pune">Pune</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                </select>
                <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="6"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200 text-lg resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl text-lg"
              >
                <Send className="w-5 h-5" />
                <span>Submit</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactMap

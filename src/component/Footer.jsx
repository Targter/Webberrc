"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const bmsProducts = [
    {
      name: 'WBMS-SW-32S Contactor',
      description: 'For standalone & stackable architectures',
      category: 'low',
      documentUrl: "/pdata/WBMS-SW-32S-Contactor v3.0 (1).pdf"
    },
    {
      name: 'WBMS-SWLT 20S 60A',
      description: 'For onroad & battery safety',
      category: 'low',
      documentUrl: "/pdata/WBMS-SWLT-20S-60A v3.0 (1).pdf"
    },
    {
      name: 'WBMS-SWLT 16S 100A',
      description: 'For cost-competitive mobility applications',
      category: 'low',
      documentUrl: "/pdata/WBMS-SWLT-16S-100A v3.0 (1).pdf"
    },
    {
      name: 'WBMS-SW-16S Contactor',
      description: 'For cost-competitive mobility applications',
      category: 'low',
      documentUrl: "/pdata/WBMS-SWLT 16S 100A.pdf"
    },
    {
      name: 'WBMS-SW 16S 60/80A',
      description: 'For cost-competitive mobility applications',
      category: 'low',
      documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf"
    }
  ];

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo & Branding */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Logo - Larger */}
            <div className="mb-4">
              <img src="/logo/webber-logo.png" alt="Webber Electro Corp Logo" className="h-20 w-auto" />
            </div>
            
            {/* Bharat Ka BMS Badge */}
            <div className="max-w-xs">
              <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">BHARAT KA BMS</span>
              </div>
            </div>
          </div>

          {/* BMS Products */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-6">BMS Products</h3>
            <ul className="space-y-4">
              {bmsProducts.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.documentUrl} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blogs</a></li>
              <li><a href="/Media" className="text-gray-400 hover:text-white transition-colors duration-200">Media</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Investor Relations</a></li>
            </ul>
          </div>

          {/* More */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-6">More</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Ongoing Developments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Webber Ecosystem</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-12"></div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Pune Office */}
          <div>
            <h4 className="text-white font-semibold mb-4">Pune Office</h4>
            <address className="text-gray-400 text-sm leading-relaxed not-italic">
              Plot No 4/25, Sector 10<br />
              PCNTDA, Bhosari<br />
              Pune, Maharashtra 411026
            </address>
          </div>

          {/* Gurugram Office */}
          <div>
            <h4 className="text-white font-semibold mb-4">Gurugram Office</h4>
            <address className="text-gray-400 text-sm leading-relaxed not-italic">
              DLF Corporate Green, Tower 1<br />
              Unit no: 711, Sector 74A<br />
              Gurugram 122004
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-8 border-t border-gray-800">
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/webber-electrocorp/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/webberelectro?igsh=bTNyZnJlZjJhamp1&utm_source=qr" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
            <p className="text-gray-500 text-sm">
               Webber Elctro Corp Inc. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">Privacy policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">Terms and conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
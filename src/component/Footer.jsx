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
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 pt-12 pb-6 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
        {/* Contact Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>
                Mumbai, India
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-orange-500" />
              <span>+91 999 999 0794</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-orange-500" />
              <span>chip@webber.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-orange-500" />
              <span>chip@webber.com</span>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            {/* <li><a href="#" className="hover:text-white">Certifications</a></li> */}
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Logo + Social Media */}
        <div className="flex flex-col items-center md:items-end justify-between h-full">
          {/* Placeholder for Logo */}
          <div className="mb-6">
            <img src="/logo/webber-logo.png" alt="Company Logo" className="h-12 w-auto" />
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Webber Electro Corp. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
          {/* <a href="#" className="hover:text-white">Accessibility</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

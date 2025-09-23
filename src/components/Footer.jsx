import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-primary-green mb-4">
              AMA KANDHAMAL
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for fast and reliable delivery services. We bring your essentials to your doorstep in just 20-30 minutes, ensuring convenience and quality in every order.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-green transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-green transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-green transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-green transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary-green transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary-green transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-green transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-300 hover:text-primary-green transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-green transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-green mr-3" />
                <span className="text-gray-300">support@amakandhamal.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-green mr-3" />
                <span className="text-gray-300">+91 12345 67890</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-green mr-3 mt-1" />
                <span className="text-gray-300">
                  123 Delivery Street<br />
                  Kandhamal, Odisha 762001<br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-600 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Download Our App</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="flex items-center bg-black border border-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </button>
              
              <button className="flex items-center bg-black border border-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Play Store
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 AMA KANDHAMAL. All rights reserved. Made with ❤️ for fast delivery.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="AMA KANDHAMAL" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary-green transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary-green transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary-green transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="#careers"
              className="text-gray-700 hover:text-primary-green transition-colors font-medium"
            >
              Careers
            </a>
          </nav>

          {/* Language and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-primary-green transition-colors">
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">EN</span>
            </button>
            <button className="bg-primary-green text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors">
              LOGIN
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-primary-green hover:text-primary-green transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-green transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-primary-green transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-primary-green transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-green transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#careers"
                className="block px-3 py-2 text-gray-700 hover:text-primary-green transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </a>
              <div className="px-3 py-2 space-y-2">
                <button className="w-full bg-primary-green text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary-green transition-colors">
                  LOGIN
                </button>
                <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-primary-green hover:text-primary-green transition-colors">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

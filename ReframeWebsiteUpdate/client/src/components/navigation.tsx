import { useState } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold text-neutral">Reframe</span>
              <span className="text-sm text-secondary ml-2">MHS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/about" className="text-neutral hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServiceDropdownOpen(true)}
                onMouseLeave={() => setIsServiceDropdownOpen(false)}
              >
                <button className="text-neutral hover:text-primary px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Services <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                {isServiceDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                    <div className="py-2">
                      <Link href="/services/technical-consultation" className="block px-4 py-3 text-sm text-neutral hover:bg-gray-50 hover:text-primary border-b border-gray-100">
                        <div className="font-medium">Technical Consultation & Support</div>
                        <div className="text-xs text-gray-500 mt-1">For Corporations and NGOs</div>
                      </Link>
                      <Link href="/services/empowerment-hub" className="block px-4 py-3 text-sm text-neutral hover:bg-gray-50 hover:text-primary border-b border-gray-100">
                        <div className="font-medium">Empowerment Hub & Training</div>
                        <div className="text-xs text-gray-500 mt-1">Long-term and short-term programs</div>
                      </Link>
                      <Link href="/services/mental-health-lab" className="block px-4 py-3 text-sm text-neutral hover:bg-gray-50 hover:text-primary border-b border-gray-100">
                        <div className="font-medium">Mental Health Lab</div>
                        <div className="text-xs text-gray-500 mt-1">Research and collaboration</div>
                      </Link>
                      <Link href="/services/translation" className="block px-4 py-3 text-sm text-neutral hover:bg-gray-50 hover:text-primary">
                        <div className="font-medium">Professional Translation</div>
                        <div className="text-xs text-gray-500 mt-1">Mental health materials</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="text-neutral hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Contact Us
              </Link>
              <Link href="/login" className="text-neutral hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                Login
              </Link>
              <button className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent transition-colors">
                AR-Eng
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral hover:text-primary p-2"
            >
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-neutral hover:text-primary">
                About
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-neutral mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <Link href="/services/technical-consultation" className="block text-sm text-gray-600 hover:text-primary">
                    Technical Consultation
                  </Link>
                  <Link href="/services/empowerment-hub" className="block text-sm text-gray-600 hover:text-primary">
                    Empowerment Hub
                  </Link>
                  <Link href="/services/mental-health-lab" className="block text-sm text-gray-600 hover:text-primary">
                    Mental Health Lab
                  </Link>
                  <Link href="/services/translation" className="block text-sm text-gray-600 hover:text-primary">
                    Translation Services
                  </Link>
                </div>
              </div>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-neutral hover:text-primary">
                Contact Us
              </Link>
              <Link href="/login" className="block px-3 py-2 text-base font-medium text-neutral hover:text-primary">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

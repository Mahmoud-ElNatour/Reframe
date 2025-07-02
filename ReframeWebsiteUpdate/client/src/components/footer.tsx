import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-neutral text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold">Reframe MHS</span>
            </div>
            <p className="text-gray-400">
              Unlocking the innate potential and resilience within each person and group across the Middle East.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/technical-consultation" className="hover:text-white transition-colors">Technical Consultation</Link></li>
              <li><Link href="/services/empowerment-hub" className="hover:text-white transition-colors">Training Programs</Link></li>
              <li><Link href="/services/mental-health-lab" className="hover:text-white transition-colors">Mental Health Lab</Link></li>
              <li><Link href="/services/translation" className="hover:text-white transition-colors">Translation Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/research" className="hover:text-white transition-colors">Research Papers</Link></li>
              <li><Link href="/materials" className="hover:text-white transition-colors">Training Materials</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors">Assessment Tools</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Reframe MHS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

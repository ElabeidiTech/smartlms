import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="w-6 h-6" />
              <span className="text-lg font-bold">LMS</span>
            </div>
            <p className="text-gray-400 text-sm">Modern learning management for modern education</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">System Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Accessibility</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © 2024 LMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

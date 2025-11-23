import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Menu, X, Home, BookOpen, LayoutDashboard, LogOut } from 'lucide-react';

export default function Navbar({ isAuthenticated = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center space-x-3">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-xl font-bold text-gray-900">LMS</div>
              <div className="text-xs text-gray-500 hidden sm:block">Learning Management System</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          {isAuthenticated ? (
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link to="/courses" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <BookOpen className="w-4 h-4" />
                <span>Courses</span>
              </Link>
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <Link to="/login" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                Sign In
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="block text-gray-600 hover:text-gray-900">Dashboard</Link>
                <Link to="/courses" className="block text-gray-600 hover:text-gray-900">Courses</Link>
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="#features" className="block text-gray-600">Features</a>
                <a href="#about" className="block text-gray-600">About</a>
                <Link to="/login" className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-center">
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
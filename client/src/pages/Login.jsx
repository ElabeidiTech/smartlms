import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function Login({ setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add real authentication logic here
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Campus LMS</span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            {isLogin ? 'Sign in to access your courses' : 'Join your institution'}
          </p>
        </div>

        <div className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="John Doe"
              />
            </div>
          )}

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student/Staff ID</label>
              <input 
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="S12345678"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="you@college.edu"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="••••••••"
            />
          </div>

          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Forgot password?
              </a>
            </div>
          )}

          <button 
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </div>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

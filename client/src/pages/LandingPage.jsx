import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, FileText, Calendar, Users } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Course Management",
      description: "Create and organize courses, modules, and learning materials efficiently"
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "Assignments & Grading",
      description: "Submit assignments, provide feedback, and track grades seamlessly"
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      title: "Calendar & Schedule",
      description: "Stay organized with integrated calendars and deadline tracking"
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      title: "Collaboration Tools",
      description: "Discussion forums, group projects, and peer interactions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isAuthenticated={false} />

      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                Modern Learning Platform
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Streamline Your Academic Experience
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                A comprehensive learning management system designed for colleges and universities. Manage courses, assignments, grades, and collaboration in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/login"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-center"
                >
                  Get Started
                </Link>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition font-medium">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=500&fit=crop" 
                alt="Students learning"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Academic Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to enhance teaching and learning experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

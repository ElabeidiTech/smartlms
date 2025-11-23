import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Search, Filter, Clock, Users, Star } from 'lucide-react';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('enrolled');
  const [searchQuery, setSearchQuery] = useState('');

  const enrolledCourses = [
    {
      id: 1,
      name: "Computer Science 101",
      code: "CS101",
      instructor: "Dr. John Smith",
      progress: 75,
      students: 45,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Data Structures",
      code: "CS201",
      instructor: "Prof. Sarah Johnson",
      progress: 60,
      students: 38,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Web Development",
      code: "CS301",
      instructor: "Dr. Michael Chen",
      progress: 85,
      students: 52,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Database Systems",
      code: "CS202",
      instructor: "Prof. Emily Davis",
      progress: 50,
      students: 41,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop"
    }
  ];

  const availableCourses = [
    {
      id: 5,
      name: "Machine Learning",
      code: "CS401",
      instructor: "Dr. Robert Wilson",
      students: 35,
      rating: 4.9,
      duration: "12 weeks",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Mobile App Development",
      code: "CS302",
      instructor: "Prof. Lisa Anderson",
      students: 42,
      rating: 4.8,
      duration: "10 weeks",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop"
    },
    {
      id: 7,
      name: "Cloud Computing",
      code: "CS402",
      instructor: "Dr. James Martinez",
      students: 30,
      rating: 4.7,
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop"
    }
  ];

  const filteredEnrolledCourses = enrolledCourses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAvailableCourses = availableCourses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isAuthenticated={true} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
          <p className="text-gray-600">Manage and explore your courses</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('enrolled')}
                className={`pb-4 px-1 border-b-2 font-medium transition ${
                  activeTab === 'enrolled'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Enrolled Courses ({enrolledCourses.length})
              </button>
              <button
                onClick={() => setActiveTab('available')}
                className={`pb-4 px-1 border-b-2 font-medium transition ${
                  activeTab === 'available'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Available Courses ({availableCourses.length})
              </button>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        {activeTab === 'enrolled' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEnrolledCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
                <img src={course.image} alt={course.name} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {course.code}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-gray-900">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'available' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAvailableCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
                <img src={course.image} alt={course.name} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                      {course.code}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <button className="w-full bg-white border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition font-medium">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {activeTab === 'enrolled' && filteredEnrolledCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search query</p>
          </div>
        )}

        {activeTab === 'available' && filteredAvailableCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses available</h3>
            <p className="text-gray-600">Check back later for new courses</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Calendar, FileText, Clock, TrendingUp, Bell } from 'lucide-react';

export default function Dashboard() {
  const courses = [
    { id: 1, name: "Computer Science 101", code: "CS101", progress: 75, nextClass: "Mon 10:00 AM" },
    { id: 2, name: "Data Structures", code: "CS201", progress: 60, nextClass: "Tue 2:00 PM" },
    { id: 3, name: "Web Development", code: "CS301", progress: 85, nextClass: "Wed 11:00 AM" },
    { id: 4, name: "Database Systems", code: "CS202", progress: 50, nextClass: "Thu 3:00 PM" }
  ];

  const upcomingAssignments = [
    { id: 1, title: "Data Structures Assignment 3", course: "CS201", dueDate: "Tomorrow", priority: "high" },
    { id: 2, title: "Web Dev Project Phase 2", course: "CS301", dueDate: "3 days", priority: "medium" },
    { id: 3, title: "Database Design Document", course: "CS202", dueDate: "1 week", priority: "low" }
  ];

  const recentAnnouncements = [
    { id: 1, course: "CS101", title: "Quiz scheduled for next week", time: "2 hours ago" },
    { id: 2, course: "CS301", title: "Project guidelines updated", time: "5 hours ago" },
    { id: 3, course: "CS202", title: "Lab session moved to Friday", time: "1 day ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isAuthenticated={true} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Student!</h1>
          <p className="text-gray-600">Here's what's happening with your courses today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Enrolled Courses</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">4</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Assignments Due</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">3</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Upcoming Classes</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">2</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Average Grade</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">85%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* My Courses */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">My Courses</h2>
              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{course.name}</h3>
                        <p className="text-sm text-gray-600">{course.code}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Next class</p>
                        <p className="text-sm font-medium text-gray-900">{course.nextClass}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 ml-4">{course.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Assignments */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Assignments</h2>
              <div className="space-y-3">
                {upcomingAssignments.map(assignment => (
                  <div key={assignment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        assignment.priority === 'high' ? 'bg-red-500' : 
                        assignment.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <div>
                        <p className="font-medium text-gray-900">{assignment.title}</p>
                        <p className="text-sm text-gray-600">{assignment.course}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{assignment.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Announcements</h2>
                <Bell className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {recentAnnouncements.map(announcement => (
                  <div key={announcement.id} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{announcement.title}</p>
                        <p className="text-xs text-gray-600 mt-1">{announcement.course}</p>
                        <p className="text-xs text-gray-500 mt-1">{announcement.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">This Week</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">MON</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">CS101 Lecture</p>
                    <p className="text-xs text-gray-600">10:00 AM - 11:30 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-green-600">TUE</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">CS201 Lab</p>
                    <p className="text-xs text-gray-600">2:00 PM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-purple-600">WED</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">CS301 Workshop</p>
                    <p className="text-xs text-gray-600">11:00 AM - 12:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
import React from 'react';
import { BookOpen, Users, Award, TrendingUp, Play, Star, Clock } from 'lucide-react';

const HeroSection = () => {
  const featuredCourses = [
    {
      title: "React Basics",
      instructor: "Mokbul Hasan",
      image: "https://i.ibb.co/pXqjH3v/react-basics.jpg",
      enrolled: 1200
    },
    {
      title: "Firebase Auth",
      instructor: "Anika Rahman",
      image: "https://i.ibb.co/9vKqN2L/firebase-auth.jpg",
      enrolled: 850
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
                <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                Trusted by 50,000+ Students
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Master Modern
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mt-2">
                Web Development
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
              Learn from industry experts with hands-on projects. Build real-world applications with React, Node.js, Firebase and more. Start your coding journey today.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white hover:bg-gray-100 text-indigo-600 font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
                <Play className="w-5 h-5" />
                Explore Courses
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 font-bold px-8 py-4 rounded-lg text-lg transition-all">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white border-opacity-20">
              <div>
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-purple-200">Online Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">50K+</div>
                <div className="text-sm text-purple-200">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">100+</div>
                <div className="text-sm text-purple-200">Expert Instructors</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Courses */}
          <div className="relative">
            <div className="space-y-4">
              {featuredCourses.map((course, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all transform hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                      <p className="text-purple-200 text-sm mb-2">by {course.instructor}</p>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {course.enrolled}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                          4.8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 rounded-full p-4 shadow-2xl animate-bounce">
                <div className="text-center">
                  <div className="font-bold text-2xl">6+</div>
                  <div className="text-xs font-semibold">Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white bg-opacity-10 backdrop-blur-sm border-t border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Expert Teachers</h3>
              <p className="text-sm text-purple-200">Learn from industry professionals</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Play className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Video Lessons</h3>
              <p className="text-sm text-purple-200">High-quality video content</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Certificates</h3>
              <p className="text-sm text-purple-200">Earn verified certificates</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Lifetime Access</h3>
              <p className="text-sm text-purple-200">Learn at your own pace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
import React from 'react';
import { BookOpen, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const LearningPath = () => {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn React from scratch with simple examples.",
      instructor: "Mokbul Hasan",
      duration: "5 hours",
      lessonsCount: 3,
      enrolled: false,
      price: 49,
      image: "https://i.ibb.co/pXqjH3v/react-basics.jpg",
      learning: [
        "Understand React fundamentals",
        "Create components",
        "Use props and state"
      ]
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      description: "JS basics for modern web development.",
      instructor: "Rifat Hossain",
      duration: "4 hours",
      lessonsCount: 4,
      enrolled: false,
      price: 45,
      image: "https://i.ibb.co/7XmKfJw/javascript-fundamentals.jpg",
      learning: [
        "Variables & data types",
        "Functions",
        "Loops & conditions"
      ]
    },
    {
      id: 5,
      title: "React Router",
      description: "Navigation and routing in React apps.",
      instructor: "Sabbir Ahmed",
      duration: "2 hours",
      lessonsCount: 2,
      enrolled: true,
      price: 29,
      image: "https://i.ibb.co/4PqW9Ls/react-router.jpg",
      learning: [
        "Routing basics",
        "Dynamic routes",
        "Private routes"
      ]
    },
    {
      id: 4,
      title: "Node.js Intro",
      description: "Backend development with Node.js.",
      instructor: "Tania Islam",
      duration: "3 hours",
      lessonsCount: 3,
      enrolled: false,
      price: 42,
      image: "https://i.ibb.co/8dTyH5R/nodejs-intro.jpg",
      learning: [
        "Node.js fundamentals",
        "Server concepts",
        "Basic API creation"
      ]
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
            Your Learning Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Learning Path
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our structured learning path from beginner to advanced. Master modern web development step by step.
          </p>
        </div>

        {/* Learning Path Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <svg className="w-full h-full" style={{position: 'absolute'}}>
              <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5"/>
            </svg>
          </div>

          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border border-gray-100 overflow-hidden relative"
            >
              {/* Step Number Badge */}
              <div className="absolute top-4 left-4 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10 shadow-lg">
                {index + 1}
              </div>

              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {course.enrolled && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Enrolled
                  </div>
                )}
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  <span>by {course.instructor}</span>
                </div>

                {/* Course Info */}
                <div className="flex items-center gap-6 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.lessonsCount} lessons</span>
                  </div>
                </div>

                {/* What You'll Learn */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {course.learning.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-indigo-600">
                    ${course.price}
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center gap-2 group">
                    {course.enrolled ? 'Continue' : 'Enroll Now'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Complete the Full Path
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Finish all courses to become a full-stack web developer. Get certified and boost your career!
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
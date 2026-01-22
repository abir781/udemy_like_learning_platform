import React from 'react';
import { Award, Users, Video, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience. Our instructors are passionate about teaching and dedicated to your success.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "High-Quality Content",
      description: "Access premium video lessons with hands-on projects. Every course is carefully crafted with clear explanations and practical examples.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Active Community",
      description: "Join 50,000+ students worldwide. Get support, share knowledge, and collaborate with fellow learners on your coding journey.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Career Growth",
      description: "Build job-ready skills with real-world projects. Get certified and advance your career with in-demand technologies like React, Node.js, and more.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best learning experience with quality content, expert guidance, and continuous support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
            >
              {/* Icon with Gradient */}
              <div className={`bg-gradient-to-br ${feature.color} w-20 h-20 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who are already learning and growing their skills with us.
            </p>
            <button className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
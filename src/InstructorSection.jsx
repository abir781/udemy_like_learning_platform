import React, { useState } from 'react';
import { Award, BookOpen, Users, Star, Linkedin, Twitter, Github } from 'lucide-react';

const InstructorSection = () => {
  const [activeInstructor, setActiveInstructor] = useState(0);

  const instructors = [
    {
      id: 1,
      name: "Mokbul Hasan",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      experience: "8+ Years",
      specialization: "React & Frontend Development",
      bio: "Passionate about teaching React and modern web technologies. Has trained over 5,000 students and worked with top tech companies.",
      courses: 15,
      students: 12000,
      rating: 4.9,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Anika Rahman",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      experience: "6+ Years",
      specialization: "Firebase & Backend",
      bio: "Expert in cloud technologies and authentication systems. Loves simplifying complex backend concepts for students.",
      courses: 12,
      students: 8500,
      rating: 4.8,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Rifat Hossain",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      experience: "10+ Years",
      specialization: "JavaScript & Algorithms",
      bio: "Full-stack developer with a passion for clean code and problem-solving. Mentored hundreds of developers.",
      courses: 18,
      students: 15000,
      rating: 4.9,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 4,
      name: "Tania Islam",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      experience: "7+ Years",
      specialization: "Node.js & API Development",
      bio: "Backend specialist who believes in hands-on learning. Worked on enterprise-level applications and open-source projects.",
      courses: 14,
      students: 9800,
      rating: 4.8,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Meet Our Expert Instructors
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry professionals with years of real-world experience
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Instructor List - Left Side */}
          <div className="lg:col-span-1 space-y-4">
            {instructors.map((instructor, index) => (
              <div
                key={instructor.id}
                onClick={() => setActiveInstructor(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeInstructor === index
                    ? 'bg-white shadow-xl border-2 border-indigo-500 scale-105'
                    : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={instructor.photo}
                    alt={instructor.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900">
                      {instructor.name}
                    </h3>
                    <p className="text-sm text-indigo-600 font-semibold">
                      {instructor.specialization}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{instructor.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Instructor Details - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header with Gradient */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={instructors[activeInstructor].photo}
                    alt={instructors[activeInstructor].name}
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-xl"
                  />
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-3xl font-bold mb-2">
                      {instructors[activeInstructor].name}
                    </h3>
                    <p className="text-xl text-purple-100 mb-2">
                      {instructors[activeInstructor].specialization}
                    </p>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">
                        {instructors[activeInstructor].experience} Experience
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-6 justify-center md:justify-start">
                  <a
                    href={instructors[activeInstructor].social.linkedin}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={instructors[activeInstructor].social.twitter}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={instructors[activeInstructor].social.github}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Bio & Stats */}
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">About</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {instructors[activeInstructor].bio}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {instructors[activeInstructor].courses}
                    </div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {(instructors[activeInstructor].students / 1000).toFixed(1)}K
                    </div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {instructors[activeInstructor].rating}
                    </div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-6 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                  View All Courses by {instructors[activeInstructor].name.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
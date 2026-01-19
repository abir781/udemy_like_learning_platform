import React from "react";
import { Link } from "react-router";


const Navbar = () => {
  return (
    <nav className="bg-[#1a3631] shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold text-white">
        MyApp
      </div>

      {/* Navigation Links - Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link 
          to="/" 
          className="text-white hover:text-emerald-300 font-semibold text-lg transition"
        >
          Home
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <Link 
          to="/login" 
          className="px-5 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition font-medium"
        >
          Login
        </Link>

        <Link 
          to="/signup" 
          className="px-5 py-2 bg-teal-400 text-gray-900 rounded-lg hover:bg-teal-300 transition font-medium"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { use } from "react";
import { Link } from "react-router";
import { Authcontext } from "./Authcontext";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";


const Navbar = () => {
  const {user, loading, setloading,role} = use(Authcontext);

  console.log(role);

  const makeLogout=()=>{
     setloading(true);
    return signOut(auth);
  }
  console.log(user);
  return (
    <nav className="bg-[#1a3631] shadow-md px-20 py-4 flex justify-between items-center">
      {/* Logo / Brand */}

     
      <div className="text-2xl font-bold text-white">
        MyApp
      </div>

      {/* Navigation Links - Centered */}
     <div className="absolute left-1/2 transform -translate-x-1/2">
  <ul className="flex gap-6 Courses">
    <li>
      <Link 
        to="/" 
        className="text-white hover:text-emerald-300 font-semibold text-lg transition"
      >
        Home
      </Link>
    </li>
    <li>
      <Link 
        to="/courses" 
        className="text-white hover:text-emerald-300 font-semibold text-lg transition"
      >
        Courses
      </Link>

    </li>

     {role === "teacher" && (
        <Link 
        to="/coursecreate"
         className="text-white hover:text-emerald-300 font-semibold text-lg transition"
        >Teacher Dashboard</Link>
      )}
     <li>
      
      
    </li>
  </ul>
</div>

      {/* Auth Buttons */}
      {
        user ? <>

          <button
  onClick={makeLogout}
  className="px-5 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition font-medium"
>
  Logout
</button>
        
        </>
              

          
        :
        <>

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

       
             
        
        
        </>
        

      
        
      }
     
    </nav>
  );
};

export default Navbar;
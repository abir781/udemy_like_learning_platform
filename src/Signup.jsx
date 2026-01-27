import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';
import { auth } from './firebase.config';
import { toast } from 'sonner';

const Signup = () => {
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("it's working");
        const email = e.target.cross.value;
        const password = e.target.broad.value;
        const usernamed = e.target.username.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res);
                toast.success("Signup successful");
                console.log(res.user);
                updateProfile(res.user, {
                    displayName:usernamed
                }).then(()=>{
                    console.log("it's working", res.user);

                      fetch("http://localhost:3000/userrolewithdata", {
                       method: "POST",
                       headers: { "Content-Type": "application/json" },
                       body: JSON.stringify({ username: res.user.displayName, email:res.user.email }),
                      })
                         .then(res => res.json())
                         .then(data => console.log("Server response:", data));

                }).catch(error=>{
                    console.log(error)
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
       <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md w-[350px]">
    <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
    <form onSubmit={handlesubmit} className="space-y-4">
      
      {/* Username / Display Name */}
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="w-full h-12 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        required
      />

      {/* Email */}
      <input
        type="email"
        name="cross"
        placeholder="Email"
        className="w-full h-12 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        required
      />

      {/* Password */}
      <input
        type="password"
        name="broad"
        placeholder="Password"
        className="w-full h-12 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        required
      />

      <button
        type="submit"
        className="w-full py-3 bg-amber-400 rounded-md text-white font-semibold hover:bg-amber-500 transition-colors"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>

    );
};

export default Signup;

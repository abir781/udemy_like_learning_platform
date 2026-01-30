import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';


const Authprovider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [useremail, setuseremail] = useState(null);
     const [role, setRole] = useState(null);

    console.log(user?.email)

     console.log(useremail);

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        
        setloading(false);

       
    })
    return ()=>{
          unSubscribe();
    }

    },[])

     useEffect(() => {
    if (!user?.email) return;

    const fetchToken = async () => {
      try {
        const res = await fetch("http://localhost:3000/gettoken", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        });

        const data = await res.json();

        // 🧾 Save token
        localStorage.setItem("token", data.token);

        // 🎭 Save role
        console.log(role);
        setRole(data.role);
      } catch (err) {
        console.error("Token fetch failed:", err);
      }
    };

    fetchToken();
  }, [user]);
   
    return (
       <Authcontext.Provider value={{user, loading,setloading, useremail,setuseremail}}>
         {children}
       </Authcontext.Provider>
      
    );
};

export default Authprovider;
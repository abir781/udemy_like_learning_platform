// import React, { useEffect, useState } from 'react';
// import { Authcontext } from './Authcontext';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase.config';


// const Authprovider = ({children}) => {
    
//     const [user, setUser] = useState(null);
//     const [loading, setloading] = useState(true);
//     const [useremail, setuseremail] = useState(null);
//      const [role, setRole] = useState(null);

//      console.log(user);

//     // console.log(user?.email)

//      console.log(useremail);

//     useEffect(()=>{
//        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
//         setUser(currentUser);
        
//         setloading(false);

       
//     })
//     return ()=>{
//           unSubscribe();
//     }

//     },[])

//      useEffect(() => {
//     if (!user?.email) return;

//     const fetchToken = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/gettoken", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email: user.email }),
//         });

//         const data = await res.json();

//         // 🧾 Save token
//         localStorage.setItem("token", data.token);

//         // 🎭 Save role
//         console.log(role);
//         setRole(data.role);
//       } catch (err) {
//         console.error("Token fetch failed:", err);
//       }
//     };

//     fetchToken();
//   }, [user]);
   
//     return (
//        <Authcontext.Provider value={{user, loading,setloading, useremail,setuseremail,role}}>
//          {children}
//        </Authcontext.Provider>
      
//     );
// };

// export default Authprovider;


import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';

const Authprovider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [useremail, setuseremail] = useState(null);
    const [role, setRole] = useState(null);

    console.log(user);
    console.log(useremail);
    console.log("Current Role:", role);

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        
        // যদি user না থাকে তাহলে loading false করুন
        if (!currentUser) {
          setloading(false);
          setRole(null);
        }
       });
       
       return ()=>{
          unSubscribe();
       }
    },[])

    useEffect(() => {
      if (!user?.email) return;

      const fetchToken = async () => {
        try {
          const res = await fetch("http://localhost:5000/gettoken", {
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
          console.log("Role from server:", data.role);
          setRole(data.role);
          
          // ✅ Role set হওয়ার পর loading false করুন
          setloading(false);
          
        } catch (err) {
          console.error("Token fetch failed:", err);
          setloading(false); // Error এর ক্ষেত্রেও loading false করুন
        }
      };

      fetchToken();
    }, [user]);
   
    return (
       <Authcontext.Provider value={{user, loading, setloading, useremail, setuseremail, role}}>
         {children}
       </Authcontext.Provider>
    );
};

export default Authprovider;


// import React, { useEffect, useState } from 'react';
// import { Authcontext } from './Authcontext';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase.config';

// const Authprovider = ({children}) => {
    
//     const [user, setUser] = useState(null);
//     const [loading, setloading] = useState(true);
//     const [useremail, setuseremail] = useState(null);
//     const [role, setRole] = useState(null);
//     const [roleLoading, setRoleLoading] = useState(false); // নতুন state

//     console.log(user);
//     console.log(useremail);
//     console.log("Current Role:", role);

//     useEffect(()=>{
//        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
//         setUser(currentUser);
        
//         // যদি user না থাকে তাহলে loading false করুন
//         if (!currentUser) {
//           setloading(false);
//           setRole(null);
//         }
//        });
       
//        return ()=>{
//           unSubscribe();
//        }
//     },[])

//     useEffect(() => {
//       if (!user?.email) return;

//       const fetchToken = async () => {
//         setRoleLoading(true); // Role fetch শুরু হচ্ছে
//         try {
//           const res = await fetch("http://localhost:5000/gettoken", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email: user.email }),
//           });

//           const data = await res.json();

//           // 🧾 Save token
//           localStorage.setItem("token", data.token);

//           // 🎭 Save role
//           console.log("Role from server:", data.role);
//           setRole(data.role);
          
//         } catch (err) {
//           console.error("Token fetch failed:", err);
//         } finally {
//           setRoleLoading(false); // Role fetch শেষ
//           setloading(false);
//         }
//       };

//       fetchToken();
//     }, [user]);
   
//     return (
//        <Authcontext.Provider value={{user, loading: loading || roleLoading, setloading, useremail, setuseremail, role}}>
//          {children}
//        </Authcontext.Provider>
//     );
// };

// export default Authprovider;


// import React, { useEffect, useState } from 'react';
// import { Authcontext } from './Authcontext';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase.config';

// const Authprovider = ({children}) => {
    
//     const [user, setUser] = useState(null);
//     const [loading, setloading] = useState(true);
//     const [useremail, setuseremail] = useState(null);
//     const [role, setRole] = useState(localStorage.getItem('userRole')); // localStorage থেকে initial value

//     console.log(user);
//     console.log(useremail);
//     console.log("Current Role:", role);

//     useEffect(()=>{
//        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
//         setUser(currentUser);
        
//         // যদি user না থাকে
//         if (!currentUser) {
//           setloading(false);
//           setRole(null);
//           localStorage.removeItem('userRole'); // localStorage clear করুন
//           localStorage.removeItem('token');
//         }
//        });
       
//        return ()=>{
//           unSubscribe();
//        }
//     },[])

//     useEffect(() => {
//       if (!user?.email) return;

//       const fetchToken = async () => {
//         try {
//           const res = await fetch("http://localhost:5000/gettoken", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email: user.email }),
//           });

//           const data = await res.json();

//           // 🧾 Save token
//           localStorage.setItem("token", data.token);

//           // 🎭 Save role in both state and localStorage
//           console.log("Role from server:", data.role);
//           setRole(data.role);
//           localStorage.setItem('userRole', data.role);
          
//           setloading(false);
          
//         } catch (err) {
//           console.error("Token fetch failed:", err);
//           setloading(false);
//         }
//       };

//       fetchToken();
//     }, [user]);
   
//     return (
//        <Authcontext.Provider value={{user, loading, setloading, useremail, setuseremail, role}}>
//          {children}
//        </Authcontext.Provider>
//     );
// };

// export default Authprovider;
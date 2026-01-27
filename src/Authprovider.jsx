import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';


const Authprovider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [useremail, setuseremail] = useState(null);

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
   
    return (
       <Authcontext.Provider value={{user, loading,setloading, useremail,setuseremail}}>
         {children}
       </Authcontext.Provider>
      
    );
};

export default Authprovider;
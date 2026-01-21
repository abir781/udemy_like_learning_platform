import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';


const Authprovider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

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
       <Authcontext.Provider value={{user, loading,setloading}}>
         {children}
       </Authcontext.Provider>
      
    );
};

export default Authprovider;
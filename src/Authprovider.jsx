import React, { useEffect } from 'react';
import { Authcontext } from './Authcontext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';


const Authprovider = ({children}) => {
    const c=54;

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      console.log("it's just me and no one is allowed here", currentUser);
       
    })
    return ()=>{
          unSubscribe();
    }

    },[])
   
    return (
       <Authcontext.Provider value={{c}}>
         {children}
       </Authcontext.Provider>
      
    );
};

export default Authprovider;
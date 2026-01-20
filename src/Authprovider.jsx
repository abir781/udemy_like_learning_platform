import React from 'react';
import { Authcontext } from './Authcontext';


const Authprovider = ({children}) => {
    const c=54;
    return (
       <Authcontext.Provider value={{c}}>
         {children}
       </Authcontext.Provider>
      
    );
};

export default Authprovider;
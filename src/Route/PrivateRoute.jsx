import React, { use } from 'react';
import { Authcontext } from '../Authcontext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}= use(Authcontext);
     if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    const location=useLocation();

       if(!user){
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;
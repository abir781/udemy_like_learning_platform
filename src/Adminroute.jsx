import React from 'react';
import { useContext } from 'react';
import { Authcontext } from './Authcontext';
import { Navigate } from 'react-router';

const Adminroute = ({ children }) => {
  const { user, role, loading } = useContext(Authcontext);

  console.log("=== Admin Route Debug ===");
  console.log("User:", user?.email);
  console.log("Role:", role);
  console.log("Loading:", loading);

  if (loading) return <p>Checking permission...</p>;

  if (!user || role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default Adminroute;

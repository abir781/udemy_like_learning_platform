import { use, useContext } from "react";

import { Authcontext } from "./Authcontext"; 
import { Navigate } from "react-router";

const TeacherRoute = ({ children }) => {
  const { user, role, loading } = use(Authcontext);

  if (loading) return <p>Checking permission...</p>;

  if (!user || role !== "teacher") {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default TeacherRoute;

import React from "react";

import { FaUsers, FaChalkboardTeacher, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";

const AdminLayout = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
      isActive ? "bg-indigo-500 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 font-bold text-xl text-indigo-600 border-b">
          Admin Panel
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavLink to="/admin" className={linkClass}>
            <FaHome /> Dashboard
          </NavLink>
          <NavLink to="/admin/approval" className={linkClass}>
            <FaChalkboardTeacher /> Admin Approval
          </NavLink>
          {/* <NavLink to="/admin/users" className={linkClass}>
            <FaUsers /> Users
          </NavLink> */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

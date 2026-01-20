import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import { Toaster } from 'sonner';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster richColors position="top-right"></Toaster>
        </div>
    );
};

export default Root;
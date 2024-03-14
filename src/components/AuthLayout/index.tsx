import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
                <h1 className="text-xl font-bold text-center">Easygenerator</h1>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;

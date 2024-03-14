import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const OverviewPage = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/auth/login');
    };
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            localStorage.removeItem('token');
            navigate('/auth/login');
        }
    }, [navigate]);
    return (_jsxs("div", { className: "bg-gray-50 min-h-screen", children: [_jsxs("div", { className: "flex justify-between items-center bg-white p-4 shadow-md", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-xl font-semibold", children: "Easygenerator" }), ' '] }), _jsx("div", { children: _jsx("button", { onClick: handleLogOut, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Logout" }) })] }), _jsxs("div", { className: "pt-5 text-center", children: [_jsx("h3", { className: "text-2xl font-medium", children: "Welcome to the application." }), ' '] })] }));
};
export default OverviewPage;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
const AuthLayout = () => {
    return (_jsx("div", { className: "flex justify-center items-center min-h-screen", children: _jsxs("div", { className: "w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg", children: [_jsx("h1", { className: "text-xl font-bold text-center", children: "Easygenerator" }), _jsx(Outlet, {})] }) }));
};
export default AuthLayout;

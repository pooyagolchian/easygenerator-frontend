import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import AuthLayout from "./components/AuthLayout";
import LoginPage from "./Pages/LoginPage";
import OverviewPage from "./Pages/OverviewPage";

const App = () => {
    return (

            <Routes>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                </Route>
                <Route path="/overview" element={<OverviewPage />} />
                <Route path="/" element={<Navigate replace to="/auth/login" />} />
            </Routes>

    );
};

export default App;

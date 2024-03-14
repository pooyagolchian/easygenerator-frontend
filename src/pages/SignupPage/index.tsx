import React from 'react';
import {SignupFormValues} from "../../components/Signup/types";
import Signup from "../../components/Signup";
import SignupService from "../../services/SignupServices";
import {useNavigate} from "react-router-dom";

const SignupPage = () => {
    const navigate = useNavigate()
    const handleSubmit = async (data: SignupFormValues) => {
        const response = (await SignupService.SignupRequest(data))?.data
        console.log('response',response)
        if (response?.token) {
            localStorage.setItem('token', response?.token)
            navigate('/auth/login')
        }
    };

    return (
        <div>
            <Signup onSubmit={handleSubmit} />
        </div>
    );
};

export default SignupPage;

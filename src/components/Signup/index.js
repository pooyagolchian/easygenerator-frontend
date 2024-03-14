import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { signupSchema } from './validation.schema';
import styles from './Signup.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
const Signup = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(signupSchema),
        mode: 'all'
    });
    const handleFormSubmit = (data) => {
        onSubmit(data);
    };
    return (_jsx("div", { className: styles.container, children: _jsxs("form", { onSubmit: handleSubmit(handleFormSubmit), className: styles.form, children: [_jsx("div", { className: "flex flex-col my-3", children: _jsx(TextField, { fullWidth: true, ...register('email'), label: "Email", variant: "standard", error: !!errors.email, helperText: errors.email?.message }) }), _jsx("div", { className: "flex flex-col my-3", children: _jsx(TextField, { fullWidth: true, ...register('name'), label: "Name", variant: "standard", error: !!errors.name, helperText: errors.name?.message }) }), _jsx("div", { className: "flex flex-col my-3", children: _jsx(TextField, { fullWidth: true, ...register('password'), label: "Password", variant: "standard", type: "password", error: !!errors.password, helperText: errors.password?.message }) }), _jsx("div", { className: "flex justify-center mt-10", children: _jsx(Button, { type: "submit", variant: "contained", color: "primary", disabled: !isValid, children: "Sign Up" }) }), _jsx("hr", { className: 'divide-lime-400 my-5' }), _jsxs("div", { children: [_jsx("h3", { className: 'font-bold text-lg', children: "Login Now!" }), _jsx(Link, { className: 'text-sm text-blue-400 text-left block underline', to: '/auth/login', children: "Welcome back!" })] })] }) }));
};
export default Signup;

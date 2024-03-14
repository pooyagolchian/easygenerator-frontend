// Login.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { loginSchema } from './validation';
import { LoginFormValues } from './types';
import styles from './Login.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';

interface LoginProps {
    onSubmit: (data: LoginFormValues) => void;
}

const Login = ({ onSubmit }:LoginProps) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
        mode: 'all'
    });

    const handleFormSubmit = (data: LoginFormValues) => {
        onSubmit(data);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
                <div className="flex flex-col mt-10">
                    <TextField
                        className={'my-10'}
                        fullWidth
                        {...register('username')}
                        label="Username"
                        variant="standard"
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                </div>
                <div className="flex flex-col mt-10">
                    <TextField
                        className={'my-10'}
                        fullWidth
                        {...register('password')}
                        label="Password"
                        variant="standard"
                        type="password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </div>
                <div className="flex justify-center mt-10">
                    <Button type="submit" variant="contained" color="primary" disabled={!isValid}>Login</Button>
                </div>
            </form>
        </div>
    );
};

export default Login;

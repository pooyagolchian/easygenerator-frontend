import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { loginSchema } from './validation.schema';
import { LoginFormValues } from './types';
import styles from './Login.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import {Link} from "react-router-dom";

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
                <div className="flex flex-col my-3">
                    <TextField
                        className={'my-10'}
                        fullWidth
                        {...register('email')}
                        label="Email"
                        variant="standard"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </div>
                <div className="flex flex-col my-3">
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
                <hr className={'divide-lime-400 my-5'}/>

                <div >
                    <h3 className={'font-bold text-lg'}>Signup Now!</h3>
                    <Link className={'text-sm text-blue-400 text-left underline'} to={'/auth/signup'} >Join our community today!</Link>
                </div>


            </form>
        </div>
    );
};

export default Login;

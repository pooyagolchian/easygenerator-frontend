import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { signupSchema } from './validation.schema';
import { SignupFormValues } from './types';
import styles from './Signup.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import {Link} from "react-router-dom";

interface SignupProps {
    onSubmit: (data: SignupFormValues) => void;
}

const Signup: React.FC<SignupProps> = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<SignupFormValues>({
        resolver: yupResolver(signupSchema),
        mode: 'all'
    });

    const handleFormSubmit = (data: SignupFormValues) => {
        onSubmit(data);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
                <div className="flex flex-col my-3">
                    <TextField
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
                        fullWidth
                        {...register('name')}
                        label="Name"
                        variant="standard"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </div>
                <div className="flex flex-col my-3">
                    <TextField
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
                    <Button type="submit" variant="contained" color="primary" disabled={!isValid}>Sign Up</Button>
                </div>
                <hr className={'divide-lime-400 my-5'}/>
                <div>
                    <h3 className={'font-bold text-lg'}>Login Now!</h3>
                    <Link className={'text-sm text-blue-400 text-left block underline'} to={'/auth/login'} >
                        Welcome back!</Link>
                </div>
            </form>
        </div>
    );
};

export default Signup;

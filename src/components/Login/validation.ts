
import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    username: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least one letter, one number, and one special character'
        )
        .required('Password is required'),
});

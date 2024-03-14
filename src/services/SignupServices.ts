import { AxiosResponse } from 'axios'
import http from "../utils/Http";
import {SignupFormValues} from "../components/Signup/types";

const SignupRequest = async (data:SignupFormValues): Promise<AxiosResponse> => {
    return await http.post<SignupFormValues>('auth/signup', data)
}

const SignupService = {
    SignupRequest,
}

export default SignupService

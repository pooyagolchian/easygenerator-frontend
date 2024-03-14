import http from '../utils/Http';
const LoginRequest = async (data) => {
    return await http.post('auth/login', data);
};
const LoginService = {
    LoginRequest
};
export default LoginService;

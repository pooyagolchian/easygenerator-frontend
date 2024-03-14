import Login from "../../components/Login";
import {LoginFormValues} from "../../components/Login/types";
import LoginService from "../../services/LoginService";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const handleLogin = async (data: LoginFormValues) => {
        try {
            const response = (await LoginService.LoginRequest(data))?.data
            if (response?.token) {
                localStorage.setItem('token', response?.token)
                navigate('/overview')
            }
        }catch (e) {
            console.log(e)
        }
    };

    return(
        <Login onSubmit={handleLogin} />
    )
}
export  default  LoginPage

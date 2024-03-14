import Login from "../../components/Login";
import {LoginFormValues} from "../../components/Login/types";

const LoginPage = () => {
    const handleLogin = (data: LoginFormValues) => {
        console.log('Login data:', data);
    };

    return(
        <Login onSubmit={handleLogin} />
    )
}
export  default  LoginPage

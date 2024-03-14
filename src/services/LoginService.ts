import { AxiosResponse } from 'axios'
import { LoginFormValues } from '../components/Login/types'
import http from '../utils/Http'

const LoginRequest = async (data: LoginFormValues): Promise<AxiosResponse> => {
  return await http.post<LoginFormValues>('auth/login', data)
}

const LoginService = {
  LoginRequest
}

export default LoginService

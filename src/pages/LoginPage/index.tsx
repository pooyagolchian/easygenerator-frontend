import Login from '../../components/Login'
import { LoginFormValues } from '../../components/Login/types'
import LoginService from '../../services/LoginService'
import { useNavigate } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { useDispatch } from 'react-redux'
import { userAction } from '../../store/users'

const LoginPage = () => {
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const dispatch = useDispatch()
  const handleLogin = async (data: LoginFormValues) => {
    try {
      const response = (await LoginService.LoginRequest(data))?.data
      if (response?.token) {
        localStorage.setItem('token', response?.token)
        navigate('/overview')
        addToast('Login Successfully', { appearance: 'success' })
        dispatch(userAction.setUser(data.email))
      }
    } catch (error: any) {
      addToast(error?.response?.data?.message, { appearance: 'error' })
    }
  }

  // eslint-disable-next-line react/react-in-jsx-scope
  return <Login onSubmit={handleLogin} />
}
export default LoginPage

import { jsx as _jsx } from 'react/jsx-runtime'
import Signup from '../../components/Signup'
import SignupService from '../../services/SignupServices'
import { useNavigate } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
const SignupPage = () => {
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const handleSubmit = async (data) => {
    try {
      const response = (await SignupService.SignupRequest(data))?.data
      if (response?.token) {
        localStorage.setItem('token', response?.token)
        navigate('/auth/login')
      }
    } catch (error) {
      addToast(error?.response?.data?.message, { appearance: 'error' })
    }
  }
  return _jsx(Signup, { onSubmit: handleSubmit })
}
export default SignupPage

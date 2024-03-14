import http from '../utils/Http'
const SignupRequest = async (data) => {
  return await http.post('auth/signup', data)
}
const SignupService = {
  SignupRequest
}
export default SignupService

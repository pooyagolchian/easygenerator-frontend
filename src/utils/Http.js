import axios from 'axios'
const token = localStorage ? localStorage.getItem('token') : ''
// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `${token}` : ''
  }
})

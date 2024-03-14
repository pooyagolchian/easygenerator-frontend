import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const OverviewPage = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate('/auth/login')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      localStorage.removeItem('token')
      navigate('/auth/login')
    }
  }, [navigate])

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center bg-white p-4 shadow-md">
        <div>
          <h1 className="text-xl font-semibold">Easygenerator</h1>{' '}
          {/* Style the title */}
        </div>
        <div>
          <button
            onClick={handleLogOut}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="pt-5 text-center">
        <h3 className="text-2xl font-medium">Welcome to the application.</h3>{' '}
        {/* Style the welcome message */}
      </div>
    </div>
  )
}

export default OverviewPage

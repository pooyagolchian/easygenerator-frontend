import { Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Navigate replace to="/login" />} />
            </Routes>
        </div>
    )
}

export default App

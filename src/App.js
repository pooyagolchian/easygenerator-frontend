import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import AuthLayout from './components/AuthLayout'
import LoginPage from './pages/LoginPage'
import OverviewPage from './pages/OverviewPage'
const App = () => {
  return _jsxs(Routes, {
    children: [
      _jsxs(Route, {
        path: '/auth',
        element: _jsx(AuthLayout, {}),
        children: [
          _jsx(Route, { path: 'login', element: _jsx(LoginPage, {}) }),
          _jsx(Route, { path: 'signup', element: _jsx(SignupPage, {}) })
        ]
      }),
      _jsx(Route, { path: '/overview', element: _jsx(OverviewPage, {}) }),
      _jsx(Route, {
        path: '/',
        element: _jsx(Navigate, { replace: true, to: '/auth/login' })
      })
    ]
  })
}
export default App

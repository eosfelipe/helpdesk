import { Routes, Route } from 'react-router-dom'
import Add from './components/Add'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './components/Register'
import { AuthProvider } from './context/authContext'
export default function App() {
  return (
    <div className="flex items-center justify-center flex-col">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navbar />
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <Navbar />
                <Add />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

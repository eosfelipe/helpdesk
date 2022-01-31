import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import Alert from './Alert'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { login, loginWithGoogle, resetPassword } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      navigate('/')
    } catch (error) {
      console.log(error.code)
      if (error.code === 'auth/invalid-email') {
        setError('Invalid email')
      }
      // setError(error.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  const handleResetPassword = async () => {
    if (!user.email) return setError('Please enter your email')
    try {
      await resetPassword(user.email)
      setError('We sent you an email with link to reset your password')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
          <a
            href="#!"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            onClick={handleResetPassword}
          >
            Forgot password?
          </a>
        </div>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an Account?{' '}
        <Link className="text-blue-500 font-bold" to="/register">
          Register
        </Link>
      </p>
      <button
        className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
        onClick={handleGoogleLogin}
      >
        Login with Google
      </button>
    </div>
  )
}

export default Login
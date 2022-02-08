import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className="bg-white shadow w-full absolute top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link
                className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
                to="/"
              >
                CEDIS AMID
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
                onClick={(e) => setIsOpen(!isOpen)}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}
          >
            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
              <Link
                className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0"
                to="/"
                onClick={() => setIsOpen(!isOpen)}
              >
                Inicio
              </Link>
            </div>
            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
              <Link
                className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0"
                to="/reports"
                onClick={() => setIsOpen(!isOpen)}
              >
                Reportes
              </Link>
            </div>
            <div className="flex-shrink-0 h-10 w-10 mr-4">
              {user && (
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              )}
            </div>
            <div className="flex items-center py-2 -mx-1 md:mx-0">
              <Link
                className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-gray-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-2 md:w-auto"
                to="/add"
                onClick={() => setIsOpen(!isOpen)}
              >
                New ticket
              </Link>
              <button
                className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-red-500 font-medium text-white leading-5 hover:bg-red-600 md:mx-0 md:w-auto"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

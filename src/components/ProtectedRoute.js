import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()
  if (loading)
    return (
      <HashLoader
        color={'#007ab4'}
        css={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)'
        }}
      />
    )
  if (!user) return <Navigate to="/login" />
  return <>{children}</>
}

export default ProtectedRoute


import { AuthProvider } from './context/authProvider'
import AuthRoutes from './routes/authRoutes'

function App() {

  return (
    <AuthProvider>
      <AuthRoutes />
    </AuthProvider>
  )
}

export default App

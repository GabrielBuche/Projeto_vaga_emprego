
import { AuthProvider } from './context/authProvider'
// import { useAuth } from './context/authProvider/useAuth';
// import AuthRoutes from './routes/authRoutes'
import Routes from './routes/Routes'
import './styles/styles.css'






function App() {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}


export default App

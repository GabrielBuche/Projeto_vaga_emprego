
import { AuthProvider } from './context/authProvider'
import Routes from './routes'
import './styles/styles.css'


function App() {

  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}


export default App

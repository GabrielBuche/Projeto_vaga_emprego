
import { AuthProvider } from './context/authProvider'
import { ProductsProvider } from './context/ProducstProvider';
import Routes from './routes'
import './styles/styles.css'


function App() {

  return (
    <>
      <AuthProvider>
        <ProductsProvider>
          <Routes />
        </ProductsProvider>
      </AuthProvider>
    </>
  );
}


export default App

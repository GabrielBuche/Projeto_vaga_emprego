import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authProvider/useAuth';

interface RoutesProps{
    children: any;
}

export default function AuthRoutes({children}: RoutesProps) {
    const { token  } = useAuth()
    return token ? children : <Navigate to='/'/>
}

import { Navigate } from 'react-router-dom';
import { getUserLocalStorage } from '../context/authProvider/utils';

interface RoutesProps{
    children: any;
}

export default function AuthRoutes({children}: RoutesProps) {
    const token = getUserLocalStorage().token;
    return token ? children : <Navigate to='/'/>
}

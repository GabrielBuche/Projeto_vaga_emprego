import { createContext, useState } from 'react';
import { IAuthProvider, IContext, IUser } from '../../types';
import { LoginRequest, RegisterRequest, setUserLocalStorage } from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    async function Authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);
        const payload = { token: response.token, email, name: response.name }

        setUserLocalStorage(payload)
        setUser(payload)
      
    }

    function Logout() {
        setUser(null)
    }


    
    async function Register(name: string, email: string, password: string, password_confirmation: string) {
        const response = await RegisterRequest(name, email, password, password_confirmation);
        return response

    }

    return (
        <AuthContext.Provider value={{
            ...user,
            Authenticate,
            Logout,
            Register
        }}>
            {children}
        </AuthContext.Provider>
    )
}
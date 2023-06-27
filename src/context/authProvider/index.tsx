import { createContext, useState } from 'react';
import { IAuthProvider, IAuthContext, IUser } from '../../types';
import { LoginRequest, RegisterRequest, clearUserLocalStorage, setUserLocalStorage } from './utils';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    async function Authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);
        
        const payload = { token: response.token, user: response.user };
        
        setUserLocalStorage(payload)
        setUser(payload)
        
    }

    function Logout() {
        setUser(null)
        clearUserLocalStorage()
    }


    
    async function Register(name: string, email: string, password: string, password_confirmation: string) {
        const response = await RegisterRequest(name, email, password, password_confirmation);
        const payload = { token: response.token, email }
        
        setUserLocalStorage(payload)
        setUser(payload)

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
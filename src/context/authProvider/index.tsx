import React, { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from '../../types';
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    async function Authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);
        const payload = { token: response.token, email }

        useEffect(() => {
            const user = getUserLocalStorage()
            if (user) {
                setUser(user)
            }
        }, []);

        setUserLocalStorage(payload)

        setUser(payload)
    }

    function Logout() {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            ...user,
            Authenticate,
            Logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
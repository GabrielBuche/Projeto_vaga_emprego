import { createContext, useState } from 'react';
import { IAuthProvider, IProductContext, IUser } from '../../types';
import { listProducts } from './utils';

export const AuthContext = createContext<IProductContext>({} as IProductContext);

export const ProductsProvider = ({ children }: IAuthProvider) => {
   
    async function ListProducts() {
        const response = await listProducts();
        return response;
    }


    return (
        <AuthContext.Provider value={{
            ListProducts,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
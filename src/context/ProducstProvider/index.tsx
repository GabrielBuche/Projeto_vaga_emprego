import { createContext } from 'react';
import { IAuthProvider, IProductContext } from '../../types';
import { listProducts, registerProduct, approveProduct } from './utils';

export const ProductsContext = createContext<IProductContext>({} as IProductContext);

export const ProductsProvider = ({ children }: IAuthProvider) => {
  async function ListProducts() {
    const response = await listProducts();
    return response;
  }

  async function RegisterProducts(products: any) {
    const response = await registerProduct(products);
    return response;
  }

  async function ApproveProduct(productId: string) {
    const response = await approveProduct(productId);
    return response;
  }

  return (
    <ProductsContext.Provider
      value={{
        ListProducts,
        RegisterProducts,
        ApproveProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

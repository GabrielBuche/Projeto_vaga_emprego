export interface IUser {
    email?: string;
    token?: string;
}

export interface IAuthContext extends IUser {
    Authenticate: (
        email: string,
        password: string,
    ) => Promise<void>

    Register: (
        name: string,
        email: string,
        password: string,
        password_confirmation: string
    ) => Promise<void>
    
    Logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element;
}

export interface IProductContext {
    ListProducts: () => Promise<any>;
}

export interface IProductProvider {
    children: JSX.Element;
}
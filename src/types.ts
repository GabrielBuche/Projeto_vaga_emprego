export interface IUser {
    email?: string;
    token?: string;
}

export interface IContext extends IUser {
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
import { notification } from "antd";
import { api } from "../../services/api"
import { IUser } from "../../types";

export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage() {
    const json = localStorage.getItem('u')

    if (!json) {
        return null
    }
    const user = JSON.parse(json)

    return user ?? null
}

export function clearUserLocalStorage() {
    localStorage.removeItem('u');
}

export async function LoginRequest(email: string, password: string) {
    try {
        const response = await api.post('login', { email, password })
        return response.data;

    } catch (error) {

        const errormsg = 'erro ao realizar login';

        const config = {
            message: 'Erro',
            description: errormsg,
        };

        notification.error(config)
        return error
    }
}

export async function RegisterRequest(name: string, email: string, password: string, password_confirmation: string) {
    try {
        const response = await api.post('register',
            {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            })

        return response.data;

    } catch (error) {
        const errormsg = 'erro ao realizar cadastro';

        const config = {
            message: 'Erro',
            description: errormsg,
        };

        notification.error(config)
        return error
    }
}
export async function Logout() {
    try {
        const response = await api.post('logout', {
            headers: {
                'Authorization': `Bearer ${getUserLocalStorage().token}`
            }
        })

        clearUserLocalStorage()
        return response;

    } catch (error) {
        const errormsg = 'erro ao limpar o asyncStorage';

        const config = {
            message: 'Erro',
            description: errormsg,
        };

        notification.error(config)

        return error
    }
}
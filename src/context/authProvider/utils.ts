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
        return error
    }
}
export async function Logout() {
    try {
        const response = await api.post('logout')
        clearUserLocalStorage()
        return response;

    } catch (error) {
        return error
    }
}
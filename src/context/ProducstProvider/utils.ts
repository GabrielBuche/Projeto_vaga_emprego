import { api } from "../../services/api"
import { getUserLocalStorage } from "../authProvider/utils";


export async function listProducts() {
    try {
        const response = await api.get('products', {
            headers: {
                'Authorization': `Bearer ${getUserLocalStorage().token}`
            }
        })
        return response.data;

    } catch (error) {
        return error
    }
}
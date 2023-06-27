import { notification } from "antd";
import { api } from "../../services/api"
import { ProductType } from "../../types";
import { getUserLocalStorage } from "../authProvider/utils";

export async function listProducts() {
  try {
    const response = await api.get('products', {
      headers: {
        'Authorization': `Bearer ${getUserLocalStorage().token}`
      }
    });
    return response.data;
  } catch (error) {
    
    const errormsg = 'erro ao listar produtos';
    const config = {
      message: 'Erro',
      description: errormsg,
    };
    notification.error(config)

    return error;
  }
}

export async function registerProduct(products: ProductType) {
  try {
    const response = await api.post('products', products, {
      headers: {
        'Authorization': `Bearer ${getUserLocalStorage().token}`
      }
    });
    return response.data;
  } catch (error) {

    const errormsg = 'erro ao registrar produtos';
    const config = {
      message: 'Erro',
      description: errormsg,
    };
    notification.error(config)
    return error;
  }
}

export async function approveProduct(productId: string) {
  try {
    const response = await api.patch(`products/${productId}`, { approved: true }, {
      headers: {
        'Authorization': `Bearer ${getUserLocalStorage().token}`
      }
    });

    const succesmsg = 'aprovado com sucesso';
    const config = {
      message: 'sucesso',
      description: succesmsg,
    };
    notification.success(config)

    return response.data;
  } catch (error) {

    const errormsg = 'erro ao registrar aprovar produto';
    const config = {
      message: 'Erro',
      description: errormsg,
    };
    notification.error(config)

    return error;
  }
}

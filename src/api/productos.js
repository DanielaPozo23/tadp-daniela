import { ENV } from "../utils/Constants";
import Axios from "axios";

export class Producto {
    baseApi = ENV.BASE_API;

    async createProduct(data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            if (data.imagenFile) {
                formData.append("imagep", data.imagenFile);
            }

            const response = await Axios.post(`${this.baseApi}/${ENV.API_ROUTES.CREATEPRODUCTO}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Se agregó el producto correctamente");
            return response.data; // Devuelve el producto creado
        } catch (error) {
            console.error("Error al crear producto:", error);
            throw error;
        }
    }

    async buscaProducto() {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.GETPRODUCTO}`;
            const response = await Axios.get(url);
            return response.data; // Devuelve los productos correctamente
        } catch (error) {
            console.error("Error al obtener productos:", error);
            return []; // Devuelve un array vacío en caso de error
        }
    }

    async deleteProduct(id) {
        if (!id) {
            console.error(" ID inválido:", id);
            throw new Error("El ID no puede ser null, undefined o vacío");
        }
    
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.DELPRODUCTO}/${id}`;
            console.log("Intentando eliminar producto con ID:", id);
            console.log(" URL:", url);
    
            const response = await Axios.delete(url);
            console.log("Producto eliminado correctamente:", response.data);
    
            return response.data;
        } catch (error) {
            console.error("Error al eliminar producto:", error.response?.data || error.message);
            throw error;
        }
    }
    
    
      

    async updateProduct(id, data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                if (key === "imagen" && typeof data[key] === "string") {
                    // No agregar la imagen si es solo una URL
                    return;
                }
                formData.append(key, data[key]);
            });

            const response = await Axios.patch(`${this.baseApi}/${ENV.API_ROUTES.UPDATEPRODUCTO}/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Producto actualizado correctamente");
            return response.data;
        } catch (error) {
            console.error("Error al actualizar producto:", error);
            throw error;
        }
    }
}
import axios from "axios";

const API_URL = "https://www.wendys.com.sv/appwdsv/ws/data/getData";

export async function getData() {
  try {
    const response = await axios.post(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos de Wendy's:", error);
    return null;
  }
}

// Obtener productos
export async function getProducts() {
  const data = await getData();
  return data?.menu || []; 
}

// Obtener categorías
export async function getCategories() {
  const data = await getData();
  return data?.menuPpal || [];
}

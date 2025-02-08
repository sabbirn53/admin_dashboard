import axios from "axios";

const API_USERS = "https://jsonplaceholder.typicode.com/users";
const API_PRODUCTS = "https://api.restful-api.dev/objects";

// Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(API_USERS);
  return response.data;
};

// Fetch all products
export const fetchProducts = async () => {
  const response = await axios.get(API_PRODUCTS);
  return response.data;
};

// Add a new product
export const addProduct = async (productData) => {
  const response = await axios.post(API_PRODUCTS, productData);
  return response.data;
};

// Get a single product by ID
export const getProductById = async (id) => {
  const response = await axios.get(`${API_PRODUCTS}/${id}`);
  return response.data;
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_PRODUCTS}/${id}`);
  return response.data;
};

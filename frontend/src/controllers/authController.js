import { login, register } from '../services/authService';

export const loginUser = async (credentials) => {
  try {
    const response = await login(credentials);
    return response;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await register(userData);
    return response;
  } catch (error) {
    throw error;
  }
};
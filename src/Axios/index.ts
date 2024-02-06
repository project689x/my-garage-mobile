import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {store} from '../Store';

const baseURL = 'http://192.168.0.110:8000/';

const commonHeaders = {
  'Content-Type': 'application/json',
};

const API = axios.create({
  baseURL: baseURL,
  headers: commonHeaders,
});

const getTokens = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const refreshToken = await AsyncStorage.getItem('refreshToken');

    return {accessToken, refreshToken};
  } catch (error) {
    throw error;
  }
};

API.interceptors.request.use(async config => {
  try {
    const {accessToken, refreshToken} = await getTokens();

    config.headers['Authorization'] = `Bearer ${accessToken}`;
    config.headers['x-refresh-key'] = refreshToken;

    return config;
  } catch (error) {
    throw error;
  }
});

API.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    if (error.response && error.response.status === 405) {
      // Access Token Expired
      try {
        const newAccessToken = error.response.data.accessToken;

        // Update the tokens in AsyncStorage
        await AsyncStorage.setItem('accessToken', newAccessToken);

        // Retry the original request with the new access token
        const originalRequest = error.config;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return axios(originalRequest);
      } catch (refreshError) {
        await AsyncStorage.removeItem('refreshToken');
        await AsyncStorage.removeItem('accessToken');
        // Handle token update error, for example, log out the user
        // You may also redirect to the login page or perform other actions
        throw refreshError;
      }
    } else if (error.response && error.response.status === 420) {
    }

    return Promise.reject(error);
  },
);

export const LoginAPI = axios.create({
  baseURL: baseURL,
});

export default API;

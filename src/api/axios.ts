import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import process from 'process';

axios.defaults.timeout = 360000;

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return config;
}
const onRequestError = (error: AxiosError): Promise<AxiosError> => {

  return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {

  return response;
}
const onResponseError = (error: AxiosError): Promise<AxiosError> => {

  return Promise.reject(error);
}

const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
console.log(process.env.API_URL)
// const api = axios.create({ baseURL: process.env.API_URL});
const api = axios.create({ baseURL: "http://localhost:5000"});
setupInterceptorsTo(api);

export default api;

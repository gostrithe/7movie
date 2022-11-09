/* 最底层，实例层 */
import axios from 'axios';

// 可以多个实例，不同实例访问不同服务器
export const apiInstance = axios.create({
    baseURL: 'http://localhost:9000',
    timeout: 3000
});

apiInstance.interceptors.request.use(
    (config) => {  // AxiosRequestConfig => another AxiosRequestConfig
        // 发送请求前带上token
        // config.headers['Authorization'] = `Bearer ${getToken()}`;
        return config;
    },
    (error) => {
        // 请求错误
        return Promise.reject(error);
    }
);

apiInstance.interceptors.response.use(
    (response) => {  // AxiosResponse => another AxiosResponse
        // 提取响应数据的data
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiInstance;
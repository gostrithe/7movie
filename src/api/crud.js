/* 通用的增删改查方法 */

import instance from './instance';

// 通用的POST请求
export async function doPost(url, data, config) {
    try {
        const result = await instance.post(url, data, config);  // 返回Promise<AxiosResponse>
        return result;
    } catch (error) {
        console.log('doPost: error=', error);
    }
}

// 通用的GET请求
export async function doGet(url, data, config) {
    try {
        if (data) {
            // url添加查询参数
            const params = new URLSearchParams();
            for (const key in data) {
                params.append(key, data[key]);
            }
            url += `?${params.toString()}`;  // URLSearchParams对象记得转字符串
        }
        const result = await instance.get(url, config);
        return result;
    } catch (error) {
        console.log('doGet: error=', error);
    }
}

// 通用的PUT请求
export async function doPut(url, data, config) {
    try {
        const result = await instance.put(url, data, config);
        return result;
    } catch (error) {
        console.log('doPut: error=', error);
    }
}

// 通用的DELETE请求
export async function doDelete(url, config) {
    try {
        const result = await instance.delete(url, config);
        return result;
    } catch (error) {
        console.log('doDelete: error=', error);
    }
}
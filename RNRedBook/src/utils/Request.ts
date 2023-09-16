import axios, { AxiosResponse } from "axios";
import ApiConfig from "../api/Apis";

const instance = axios.create({
    baseURL: "http://192.168.31.82:7001",
    timeout: 10 * 1000,
});

const get = (url: string, params: any): Promise<AxiosResponse<any, any>> => {
    return instance.get(url, {
        params: params,
    });
}

const post = (url: string, params: any): Promise<AxiosResponse<any, any>> => {
    return instance.post(url, params);
}

export const request = (name: string, params: any) => {
    const config = (ApiConfig as any)[name];
    if (!config) {
        const msg = `${name} 没有添加到 ApiConfig 中`
        console.log(msg);
        return Promise.reject(msg);
    }
    const { url, method } = config;
    if (method === "get") {
        return get(url, params);
    } else if (method === "post") {
        return post(url, params);
    }
    const msg = `尚不支持 ${method} 方法`;
    console.log(msg);
    return Promise.reject(msg);
}
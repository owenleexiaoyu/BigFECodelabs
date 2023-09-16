import axios, { AxiosResponse } from "axios";
import ApiConfig from "../api/Apis";

const instance = axios.create({
    baseURL: "http://192.168.31.82:7001",
    timeout: 10 * 1000,
});

// 对网络请求的 Response 进行通用的拦截处理
instance.interceptors.response.use(
    response => response, 
    error => {
        const { response } = error;
        if (response) {
            const { status } = response;
            if (status >= 500) {
                // 服务端报错
                console.log("Axios Interceptor ===> 服务端报错");
            } else if (status === 400) {
                // 接口参数异常
                console.log("Axios Interceptor ===> 接口参数异常");
            } else if (status === 401) {
                // 登录信息过期，需要重新登录
                console.log("Axios Interceptor ===> 登录信息过期，需要重新登录");
            } else {
                // 其他错误类型，统一按照接口报错处理
                console.log("Axios Interceptor ===> 其他错误类型，统一按照接口报错处理");
            }
        } else {
            // 网络异常
            console.log("Axios Interceptor ===> 网络异常");
        }
        return Promise.reject(error);
    }
);

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
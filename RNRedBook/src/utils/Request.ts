import axios from "axios";

const instance = axios.create({
    baseURL: "http://192.168.31.82:7001",
    timeout: 10 * 1000,
});

export const get = (url: string, params: any) => {
    return instance.get(url, {
        params: params,
    });
}

export const post = (url: string, params: any) => {
    return instance.post(url, params);
}
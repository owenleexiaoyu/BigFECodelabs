import { request } from "../utils/Request"
import { action, flow, makeObservable, observable } from "mobx";
import { load, save } from "../utils/Storage";
import Loading from "../components/widget/Loading";

const KEY_USER_INFO = "user_info"

class UserStore {

    userInfo: any = {};

    setUserInfo = (userInfo: any) => {
        console.log("UserStore ===> setUserInfo");
        this.userInfo = userInfo;
    }

    constructor() {
        makeObservable(this, {
            userInfo: observable,
            setUserInfo: action,
        });
    }

    // 不使用 mobx 的写法
    // requestLogin = async (
    //     phone: string, 
    //     pwd: string, 
    //     callback?: (success: boolean) => void
    // ) => {
    //     const params = {
    //         name: phone,
    //         pwd: pwd,
    //     }
    //     try {
    //         const { data } = await request("login", params);
    //         console.log(`UserStore ===> login result: ${data}`);
    //         if (data) {
    //             this.userInfo = data;
    //             callback?.(true);
    //         } else {
    //             this.userInfo = null;
    //             callback?.(false);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         callback?.(false);
    //     }
    // }

    // 使用 mobx 的 flow 的写法
    requestLogin = flow(function* (
            this: UserStore,
            phone: string, 
            pwd: string, 
            callback?: (success: boolean) => void) {
        const params = {
            name: phone,
            pwd: pwd,
        }
        try {
            Loading.show();
            const { data } = yield request("login", params);
            console.log(`UserStore ===> login result: ${JSON.stringify(data)}`);
            if (data) {
                this.setUserInfo(data);
                save(KEY_USER_INFO, JSON.stringify(data));
                callback?.(true);
            } else {
                this.userInfo = null;
                callback?.(false);
            }
        } catch (error) {
            console.log(error);
            callback?.(false);
        } finally {
            Loading.hide();
        }
    });


    /**
     * 获取用户信息
     * @returns 
     */
    getUserInfo = async () => {
        if (this.userInfo) {
            return this.userInfo;
        } else {
            const cacheUserInfo = await load(KEY_USER_INFO);
            if (cacheUserInfo) {
                this.setUserInfo(JSON.parse(cacheUserInfo));
                return this.userInfo;
            }
        }
        return null;
    }

}

// ESM 单例导出
// UserStore 这个类不导出，外界访问不到
export default new UserStore();
import { action, makeObservable, observable } from "mobx";
import { request } from "../utils/Request";

const PAGE_SIZE = 10;

export default class HomeStore {

    page: number = 1;

    homeList: ArticleSimple[] = [];

    refreshing: boolean = false;

    setHomeList = (list: ArticleSimple[]) => {
        this.homeList = list;
    }

    setRefreshing = (refreshing: boolean) => {
        this.refreshing = refreshing;
    }

    constructor() {
        makeObservable(this, {
            homeList: observable,
            refreshing: observable,
            setHomeList: action,
            setRefreshing: action,
        });
    }


    refreshHomeList = async () => {
        this.page = 1;
        this.requestHomeList();
    }

    loadMoreHomeList =async () => {
        this.requestHomeList();
    }

    private requestHomeList = async () => {
        if (this.refreshing) {
            return;
        }
        try {
            this.setRefreshing(true);
            const params = {
                page: this.page,
                size: PAGE_SIZE,
            }
            const { data } = await request("homeList", params);
            console.log(`HomeStore ===> getHomeList result: ${JSON.stringify(data)}`);
            if (data?.length) {
                // data 有值
                if (this.page === 1) {
                    // 当前是第一页，刷新数据
                    this.setHomeList(data);
                } else {
                    // 当前不是第一页，将结果追加到 homeList 中
                    this.setHomeList([...this.homeList, ...data]);
                }
                this.page = this.page + 1;
            } else {
                // data 没有值
                if (this.page === 1) {
                    // 当前是第一页，将数据清空
                    this.setHomeList([]);
                } else {
                    // 已经加载完了，没有更多数据
                }
            }
        } catch (error) {
            console.log(`HomeStore ===> getHomeList error: ${error}`);
        } finally {
            this.setRefreshing(false);
        }
    }
}
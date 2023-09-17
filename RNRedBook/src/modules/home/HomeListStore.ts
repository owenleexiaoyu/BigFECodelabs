import { action, makeObservable, observable } from "mobx";
import { request } from "../../utils/Request";

const PAGE_SIZE = 10;

export default class HomeListStore {

    page: number = 1;

    homeList: ArticleSimple[] = [];

    refreshing: boolean = false;

    loadingMore: boolean = false;

    setHomeList = (list: ArticleSimple[]) => {
        this.homeList = list;
    }

    setRefreshing = (refreshing: boolean) => {
        this.refreshing = refreshing;
    }

    setLoadingMore = (loadingMore: boolean) => {
        this.loadingMore = loadingMore;
    }

    constructor() {
        makeObservable(this, {
            homeList: observable,
            refreshing: observable,
            loadingMore: observable,
            setHomeList: action,
            setRefreshing: action,
            setLoadingMore: action,
        });
    }


    refreshHomeList = async () => {
        this.page = 1;
        if (this.refreshing) {
            return;
        }
        try {
            this.setRefreshing(true);
            const { data } = await this.requestHomeList();
            console.log(`HomeStore ===> refreshHomeList: ${JSON.stringify(data)}`);
            if (data?.length) {
                // 刷新数据
                this.setHomeList(data);
            } else {
                // 将数据清空
                this.setHomeList([]);
            }
            this.page = this.page + 1;
        } catch (error) {
            console.log(`HomeStore ===> refreshHomeList: error: ${error}`);
        } finally {
            this.setRefreshing(false);
        }
    }

    loadMoreHomeList = async () => {
        if (this.refreshing || this.loadingMore) {
            return;
        }
        try {
            this.setLoadingMore(true);
            const { data } = await this.requestHomeList();
            console.log(`HomeStore ===> loadMoreHomeList: ${JSON.stringify(data)}`);
            if (data?.length) {
                // 将结果追加到 homeList 中
                this.setHomeList([...this.homeList, ...data]);
            } else {
                // 已经加载完了，没有更多数据
            }
            this.page = this.page + 1;
        } catch (error) {
            console.log(`HomeStore ===> loadMoreHomeList: error: ${error}`);
        } finally {
            this.setLoadingMore(false);
        }
    }

    private requestHomeList = async () => {
        const params = {
            page: this.page,
            size: PAGE_SIZE,
        }
        return request("homeList", params);   
    }
}
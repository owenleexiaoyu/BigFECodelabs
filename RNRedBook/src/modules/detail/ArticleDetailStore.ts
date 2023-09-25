import { action, makeObservable, observable } from "mobx";
import Loading from "../../components/widget/Loading";
import { request } from "../../utils/Request";

export default class ArticleDetailStore {


    articleDetail: Article = {} as Article;

    setArticleDetail = (detail: Article) => {
        this.articleDetail = detail;
    }

    constructor() {
        makeObservable(this, {
            articleDetail: observable,
            setArticleDetail: action,
        });
    }

    requestArticleDetail = async (id: number) => {
        Loading.show();
        const params = {
            id: id,
        }
        try {
            const { data } = await request("articleDetail", params);
            console.log(`ArticleDetailStore ===> data: ${JSON.stringify(data)}`);
            this.setArticleDetail(data || {});
        } catch (error) {
            console.log(error);
        } finally {
            Loading.hide();
        }
    }

}
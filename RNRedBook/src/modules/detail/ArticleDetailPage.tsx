import { observer, useLocalObservable } from "mobx-react";
import React, { useEffect } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import ArticleDetailStore from "./ArticleDetailStore";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import DetailNavBar from "./components/DetailNavBar";
import { StackNavigationProp } from "@react-navigation/stack";

import icon_nice_goods from "../../assets/icon_nice_goods.png";
import icon_heart_empty from "../../assets/icon_heart_empty.png";
import icon_heart from "../../assets/icon_heart.png";
import UserStore from "../../stores/UserStore";
import DetailImageSlider from "./components/DetailImageSlider";

type RouteParams = {
    ArticleDetail: {
        id: number;
    }
}

export default observer(() => {

    const store = useLocalObservable(() => new ArticleDetailStore());
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { params } = useRoute<RouteProp<RouteParams, "ArticleDetail">>();
    console.log(`param=${JSON.stringify(params)}`);

    useEffect(() => {
        store.requestArticleDetail(params.id);
    }, []);

    const renderInfo = () => {
        const { articleDetail } = store;
        const tags = articleDetail.tag?.map(i => `# ${i}`).join(' ');
        return (
            <View className="mx-4">
            <Text className="text-lg text-black font-bold">
                {articleDetail.title}
            </Text>
            <Text className="text-base text-black mt-1.5">
                {articleDetail.desc}
            </Text>
            <Text className="text-base text-blue-500 mt-1.5">
                {tags}
            </Text>
            <Text className="text-sm text-gray-400 mt-2">
                {`${articleDetail.dateTime} ${articleDetail.location}`}
            </Text>
            <View className="w-full h-px bg-gray-200 my-3" />
            </View>
        );
    };

    const renderCommentItem = (comment: ArticleComment, showChildren: boolean) => {
        return (
            <View className="w-full flex-col">
                <View className="w-full flex-row py-2">
                <Image 
                    className="w-9 h-9 rounded-full mt-1"
                    source={{uri: comment.avatarUrl}} />
                <View className="flex-1 flex-col ml-2 mr-4">
                    <Text className="text-sm text-gray-500">{comment.userName}</Text>
                    <Text className="text-base text-black mt-0.5">
                        {comment.message}
                        <Text className="text-sm text-gray-300">{`  ${comment.dateTime} ${comment.location}`}</Text>
                    </Text>
                </View>
                <TouchableOpacity className="w-8 items-center pt-2">
                    <Image 
                        className="w-5 h-5"
                        source={comment.isFavorite ? icon_heart : icon_heart_empty} />
                    <Text className="text-sm text-gray-400">{comment.favoriteCount || ""}</Text>
                </TouchableOpacity>
            </View>
            { (comment.children?.length && showChildren) && 
                <View className="w-full pl-11">
                    { renderCommentItem(comment.children[0], false) }
                    { comment.children?.length > 1 && <Text className="ml-11 text-base text-blue-500 font-bold">{`展开 ${comment.children.length} 条回复`}</Text> }
                </View>
            }
            <View className="flex-1 ml-11 h-px bg-gray-100"/>
            </View>
            
        );
    };

    const renderCommentArea = (articleDetail: Article) => {
        
        const count = articleDetail.comments?.length || 0;
        const { userInfo } = UserStore;

        return (
            <View className="mx-4">
            <Text className="text-base text-gray-600 font-bold">
                { count ? `共 ${count} 条评论` : '暂无评论' }
            </Text>
            <View className="flex-row w-full h-10 my-3 items-center">
                <Image 
                    className="h-8 w-8"
                    // source={{ uri: userInfo.avatar }}
                    source={icon_nice_goods}
                    />
                <TextInput 
                    className="flex-1 h-full bg-gray-100 rounded-full ml-3 px-4"
                    placeholder="说点什么吧，万一火了呢？"
                    />
            </View>
            { !!count && 
                    <View className="w-full">
                        {articleDetail.comments?.map((i: ArticleComment, index: number) => {
                            return renderCommentItem(i, true);
                        })}
                    </View>
                }
            </View>
        );
    };

    return store.articleDetail ? (
        <View className="flex-col w-full h-full bg-white">
            <DetailNavBar 
                avatar={store.articleDetail.avatarUrl}
                title={store.articleDetail.userName}
                onBackPress={() => {
                    navigation.pop();
                }}
                />
            <ScrollView
                className="flex-1 w-full"
                showsVerticalScrollIndicator={false}>
                { store.articleDetail?.images?.length && 
                    <DetailImageSlider 
                        images={store.articleDetail?.images}
                        />
                }
                { renderInfo() }
                { renderCommentArea(store.articleDetail) }
            </ScrollView>
        </View>
    ) : null;
});
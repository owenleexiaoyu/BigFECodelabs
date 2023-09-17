import { observer, useLocalObservable } from "mobx-react";
import React, { useEffect } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import HomeStore from "../../stores/HomeStore";
import { Dimensions } from "react-native";
import FlowList from "../../components/flowlist/FlowList";
import ResizeImage from "../../components/ResizeImage";
import Heart from "../../components/Heart";
import TopBar from "../../components/TopBar";


const SCREEN_WIDTH = Dimensions.get("screen").width;

export default observer(() => {

    const store = useLocalObservable(() => new HomeStore());

    useEffect(() => {
        store.refreshHomeList();
    }, []);

    const renderItem = ({item, index}: {item: ArticleSimple, index: number}) => {
        return (
            <View 
                className="flex-col bg-white ml-1.5 mb-1.5 rounded-lg overflow-hidden "
                style={{ 
                    width: (SCREEN_WIDTH - 18) / 2,
                }}
                >
                <ResizeImage uri={item.image}/>
                <Text className="text-black text-base font-bold px-2 py-2">{item.title}</Text>
                <View className="w-full flex-row px-2 pb-2 items-center">
                    <Image 
                        className="w-6 h-6 rounded-full"
                        source={{ uri: item.avatarUrl }}
                        />
                    <Text className="text-sm text-gray-300 ml-1">{item.userName}</Text>
                    <View className="flex-1"/>
                    <Heart
                        favorite={item.isFavorite} />
                    <Text className="text-sm text-gray-300 ml-1">{item.favoriteCount}</Text>
                </View>
            </View>
        );
    }

    const LoadingMoreFooter = () => {
        return (
            <Text className="w-full text-base my-4 text-gray-500 text-center align-center">正在加载更多数据...</Text>
        );
    }

    const NoMoreDataFooter = () => {
        return (
            <Text className="w-full text-base my-4 text-gray-500 text-center align-center">没有更多数据了</Text>
        );
    }

    return (
        <View className="w-full h-full flex-col">
            <StatusBar 
                backgroundColor={"white"}
                />
            <TopBar />
            <FlowList 
                data={store.homeList}
                keyExtractor={(item: ArticleSimple, index: number) => `${item.id}-${item.title}-${index}`}
                renderItem={renderItem}
                numColumns={2}
                refreshing={store.refreshing}
                onRefresh={store.refreshHomeList}
                onEndReached={store.loadMoreHomeList}
                ListFooterComponent={ store.loadingMore ? <LoadingMoreFooter /> : <NoMoreDataFooter /> }
                />
        </View>
    );
});
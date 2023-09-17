import { observer, useLocalObservable } from "mobx-react";
import React, { useEffect } from "react";
import { View, Text, FlatList, StatusBar, Image } from "react-native";
import HomeStore from "../../stores/HomeStore";
import { Dimensions } from "react-native";
import icon_heart_empty from "../../assets/icon_heart_empty.png"

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
                <Image 
                    className="w-full h-60"
                    source={{ uri: item.image }}/>
                <Text className="text-black text-base font-bold px-2 py-2">{item.title}</Text>
                <View className="w-full flex-row px-2 pb-2 items-center">
                    <Image 
                        className="w-6 h-6 rounded-full"
                        source={{ uri: item.avatarUrl }}
                        />
                    <Text className="text-sm text-gray-300 ml-1">{item.userName}</Text>
                    <View className="flex-1"/>
                    <Image 
                        className="w-4 h-4"
                        source={icon_heart_empty} />
                    <Text className="text-sm text-gray-300 ml-1">{item.favoriteCount}</Text>
                </View>
            </View>
        );
    }

    const Footer = () => {
        return (
            <Text className="w-full text-base my-4 text-gray-500 text-center align-center">没有更多数据</Text>
        );
    }

    return (
        <View className="w-full h-full flex-col pt-1.5">
            <StatusBar 
                backgroundColor={"#F0F0F0"}
                />
            <FlatList 
                data={store.homeList}
                keyExtractor={(item, index) => `${item.id}-${item.title}-${index}`}
                renderItem={renderItem}
                numColumns={2}
                refreshing={store.refreshing}
                onRefresh={store.refreshHomeList}
                onEndReachedThreshold={0.1}
                onEndReached={store.loadMoreHomeList}
                ListFooterComponent={<Footer />}
            />
        </View>
    );
});
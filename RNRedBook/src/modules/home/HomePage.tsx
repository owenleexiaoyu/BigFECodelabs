import { observer, useLocalObservable } from "mobx-react";
import React, { useCallback, useEffect, useRef } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import HomeListStore from "./HomeListStore";
import { Dimensions } from "react-native";
import FlowList from "../../components/flowlist/FlowList";
import ResizeImage from "../../components/ResizeImage";
import Heart from "../../components/Heart";
import TopBar from "./components/TopBar";
import { ChannelStore } from "./ChannelStore";
import ChannelList from "./components/ChannelList";
import ChannelModal, { ChannelModalRef } from "./components/ChannelModal";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";


const SCREEN_WIDTH = Dimensions.get("screen").width;
const ITEM_IMG_SHOW_WIDTH = (SCREEN_WIDTH - 18) / 2;

export default observer(() => {

    const listStore = useLocalObservable(() => new HomeListStore());
    const channelStore = useLocalObservable(() => new ChannelStore());

    const channelModalRef = useRef<ChannelModalRef>(null);

    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        listStore.refreshHomeList();
        channelStore.getChannelList();
    }, []);

    const onArticlePress = useCallback((article: ArticleSimple) => () => {
        navigation.push("detail", {id: article.id});
    }, []);

    const renderItem = ({item, index}: {item: ArticleSimple, index: number}) => {
        return (
            <TouchableOpacity 
                className="flex-col bg-white ml-1.5 mb-1.5 rounded-lg overflow-hidden "
                style={{ 
                    width: (SCREEN_WIDTH - 18) / 2,
                }}
                onPress={onArticlePress(item)}
                activeOpacity={0.7}
                >
                <ResizeImage 
                    uri={item.image}
                    targetWidth={ITEM_IMG_SHOW_WIDTH}
                    defaultHeight={200}
                    />
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
            </TouchableOpacity>
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

    const myChannelList = channelStore.channelList.filter(item => item.isAdd);

    return (
        <View className="w-full h-full flex-col">
            <StatusBar 
                backgroundColor={"white"}
                />
            <TopBar />
            <FlowList 
                data={listStore.homeList}
                keyExtractor={(item: ArticleSimple, index: number) => `${item.id}-${item.title}-${index}`}
                renderItem={renderItem}
                numColumns={2}
                refreshing={listStore.refreshing}
                onRefresh={listStore.refreshHomeList}
                onEndReached={listStore.loadMoreHomeList}
                ListFooterComponent={ listStore.loadingMore ? <LoadingMoreFooter /> : <NoMoreDataFooter /> }
                ListHeaderComponent={<ChannelList 
                    channelList={myChannelList} 
                    onArrowPress={() => {
                        channelModalRef.current?.show();
                    }}
                    />}
                />
            <ChannelModal
                ref={channelModalRef}
                channelList={channelStore.channelList}
                onSaveChannel={(channelList) => {
                    channelStore.saveChannelList(channelList);
                }}
                />
        </View>
    );
});
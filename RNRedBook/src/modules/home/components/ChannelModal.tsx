import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FlatList, Image, Modal, Text, TouchableOpacity, View, Dimensions, ScrollView } from "react-native";


import icon_arrow from "../../../assets/icon_arrow.png";
import icon_close_modal from "../../../assets/icon_close_modal.png";
import icon_delete from "../../../assets/icon_delete.png";


const SCREEN_WIDTH = Dimensions.get("screen").width;
const ITEM_WIDTH = (SCREEN_WIDTH - 60) / 4;

type Props = {
    channelList: Channel[];
    onSaveChannel?: (channelList: Channel[]) => void;
}

export interface ChannelModalRef {
    show: () => void;
    hide: () => void;
}

export default forwardRef((props: Props, ref) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [myList, setMyList] = useState<Channel[]>([]);
    const [recommendList, setRecommendList] = useState<Channel[]>([]);
    const [edit, setEdit] = useState<boolean>(false);

    const show = () => {
        setVisible(true);
    }

    const hide = () => {
        setVisible(false);
    }

    useImperativeHandle(ref, () => {
        return {
            show, hide,
        }
    });

    useEffect(() => {
        const list = props.channelList;
        setMyList(list.filter(item => item.isAdd));
        setRecommendList(list.filter(item => !item.isAdd));
    }, []);

    const onMyItemPress = (item: Channel) => {
        if (!edit) {
            return;
        }
        const newMyList = myList.filter(i => i.name !== item.name);
        const newRecommendList = [...recommendList, {...item, isAdd: false}];
        setMyList(newMyList);
        setRecommendList(newRecommendList);
    }

    const onRecommendItemPress = (item: Channel) => {
        if (!edit) {
            return;
        }
        const newRecommendList = recommendList.filter(i => i.name !== item.name);
        const newMyList = [...myList, {...item, isAdd: true}];
        setMyList(newMyList);
        setRecommendList(newRecommendList);
    }

    const renderMyChannelLayout = () => {
        return (
            <View className="w-full h-16 flex-row px-3 items-center">
                <Text className="text-black text-lg font-bold">我的频道</Text>
                <Text className="text-gray-500 text-base ml-2">点击进入频道</Text>
                <View className="flex-1" />
                <TouchableOpacity
                    className="px-3 py-1 bg-gray-100 rounded-full justify-center items-center"
                    onPress={() => {
                        setEdit((data => {
                            if (data) {
                                props.onSaveChannel?.([...myList, ...recommendList]);
                                return false;
                            } else {
                                return true;
                            }
                        }));
                    }}
                    >
                    <Text className="text-blue-400 text-base">{edit ? "完成编辑" : "进入编辑"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="w-8 w-8 items-center justify-center"
                    onPress={hide}
                >
                    <Image
                        className="w-4 h-4 rotate-90"
                        source={icon_arrow} />
                </TouchableOpacity>
            </View>
        );
    }

    const renderRecommendChannelLayout = () => {
        return (
            <View className="w-full h-16 flex-row px-3 items-center">
                <Text className="text-black text-lg font-bold">推荐频道</Text>
                <Text className="text-gray-500 text-base ml-2">点击添加频道</Text>
            </View>
        );
    }

    const renderChannelItem = ({item, index}: {item: Channel, index: number}) => {
        return (
            <TouchableOpacity 
                className={
                    `h-10 bg-red-100 ml-3 mb-2 rounded flex-row justify-center items-center
                    ${item.default ? "bg-gray-100" : "bg-white border border-gray-200"}
                    `
                }
                style={{ width: ITEM_WIDTH }}
                disabled={item.default}
                onPress={() => {
                    if (item.isAdd) {
                        onMyItemPress(item);
                    } else {
                        onRecommendItemPress(item);
                    }
                }}
                >
                { (!item.isAdd && edit) && 
                    <Image 
                        className="w-3.5 h-3.5 mr-1 rotate-45"
                        source={icon_close_modal} />
                }
                <Text className="text-gray-500">{item.name}</Text>
                { (item.isAdd && !item.default && edit) && <Image 
                    className="w-4 h-4 absolute -top-1.5 -right-1.5"
                    source={icon_delete} />
                }
            </TouchableOpacity>
        );
    }
    
    const renderChannelGrad = (channelList: Channel[]) => {
        
        return (
            <FlatList
                contentContainerStyle={{
                    paddingVertical: 8,
                }}
                data={channelList}
                renderItem={renderChannelItem}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                numColumns={4}
                nestedScrollEnabled={false}
                />
        );
    }

    return (
        <Modal
            transparent={true}
            visible={visible}
            statusBarTranslucent={false}
            animationType="fade"
            onRequestClose={hide}
        >
            <View className="w-full h-full flex-col">
                <ScrollView className="w-full h-5/6 bg-white mt-12" >
                    {renderMyChannelLayout()}
                    {renderChannelGrad(myList)}
                    {renderRecommendChannelLayout()}
                    {renderChannelGrad(recommendList)}
                </ScrollView>
                <View className="w-full flex-1 bg-black/50" />
            </View>
        </Modal>
    );
});
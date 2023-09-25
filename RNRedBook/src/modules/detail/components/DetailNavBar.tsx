import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import icon_arrow from "../../../assets/icon_arrow.png";
import icon_share from "../../../assets/icon_share.png";


type DetailNavBarProps = {
    avatar: string;
    title: string;
    onBackPress?: () => void;
    onFollowPress?: () => void;
    onSharePress?: () => void;
}

export default (props: DetailNavBarProps) => {
    return (
        <View className="w-full h-16 flex-row items-center bg-white border-b border-b-gray-300 px-3">
            <TouchableOpacity
                className="w-7 h-full justify-center items-center"
                onPress={() => {
                    props.onBackPress?.();
                }}
                >
                <Image 
                    className="w-7 h-7"
                    source={icon_arrow} />
            </TouchableOpacity>
            <Image 
                className="w-10 h-10 rounded-full ml-2"
                source={{ uri: props.avatar }} />
            <Text className="text-lg text-black ml-2">{props.title}</Text>
            <View className="flex-1" />
            <TouchableOpacity 
                className="border border-red-600 rounded-full px-4 py-1.5 mx-2"
                onPress={() => {
                    props.onFollowPress?.();
                }}
                >
                <Text className="text-base text-red-600 font-bold">关注</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="w-8 h-full justify-center items-center"
                onPress={() => {
                    props.onSharePress?.();
                }}
                >
                <Image 
                    className="w-8 h-8"
                    source={icon_share} />
            </TouchableOpacity>
        </View>
    );
}
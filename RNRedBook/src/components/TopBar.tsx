import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import icon_daily from "../assets/icon_daily.png";
import icon_search from "../assets/icon_search.png";

type SelectRange = 0 | 1 | 2;

export default () => {


    const [tabIndex, setTabIndex] = useState<SelectRange>(1);

    return (
        <View className="w-full h-12 flex-row items-center bg-white mb-1.5">
            <TouchableOpacity 
                className="w-12 h-12 flex-row justify-center items-center mx-2"
                activeOpacity={0.5}
                >
                <Image 
                    className="w-8 h-8"
                    source={icon_daily}/>
            </TouchableOpacity>
            <View className="flex-row h-full flex-1 justify-center">
                <TouchableOpacity 
                    className="flex-col justify-center items-center mx-4"
                    activeOpacity={0.5}
                    onPress={() => {
                        setTabIndex(0);
                    }}
                    >
                    <Text className={`text-lg 
                        ${tabIndex === 0 ? "text-black" : "text-gray-500"}
                        ${tabIndex === 0 ? "font-bold" : "font-normal"}`}>关注</Text>
                    <View className={`w-10 h-1 mt-1 
                        ${tabIndex === 0 ? "rounded bg-red-500" : ""}`} />
                </TouchableOpacity>
                <TouchableOpacity 
                    className="flex-col justify-center items-center mx-4"
                    activeOpacity={0.5}
                    onPress={() => {
                        setTabIndex(1);
                    }}
                    >
                    <Text className={`text-lg 
                        ${tabIndex === 1 ? "text-black" : "text-gray-500"}
                        ${tabIndex === 1 ? "font-bold" : "font-normal"}`}>推荐</Text>
                    <View className={`w-10 h-1 mt-1 
                        ${tabIndex === 1 ? "rounded bg-red-500" : ""}`} />
                </TouchableOpacity>
                <TouchableOpacity 
                    className="flex-col justify-center items-center mx-4"
                    activeOpacity={0.5}
                    onPress={() => {
                        setTabIndex(2);
                    }}
                    >
                    <Text className={`text-lg 
                        ${tabIndex === 2 ? "text-black" : "text-gray-500"}
                        ${tabIndex === 2 ? "font-bold" : "font-normal"}`}>上海</Text>
                    <View className={`w-10 h-1 mt-1 
                        ${tabIndex === 2 ? "rounded bg-red-500" : ""}`} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                className="w-12 h-12 flex-row justify-center items-center  mx-2"
                activeOpacity={0.5}
                >
                <Image 
                    className="w-8 h-8"
                    source={icon_search}/>
            </TouchableOpacity>
        </View>
    );
};
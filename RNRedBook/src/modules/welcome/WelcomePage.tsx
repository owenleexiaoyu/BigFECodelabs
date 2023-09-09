import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import icon_main_logo from "../../assets/icon_main_logo.png";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export default () => {

    const navigation = useNavigation<StackNavigationProp<any>>();

    const [countDown, setCountDown] = useState(3);

    // 开启一个倒计时计数
    useEffect(() => {
        const interval = setInterval(() => {
            // 这里不能使用 setCountDown(countDown - 1)
            setCountDown((preData) => {
                return preData - 1;
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    // 监听 countDown 的变化，如果 countDown 到 0，跳转到 Login 页面
    useEffect(() => {
        if (countDown == 0) {
            navigation.replace("login");
        }
    }, [countDown]);

    return (
        <View className="w-full h-full bg-white flex-col items-center">
            <Image 
                source={icon_main_logo}
                className="w-60 h-32 mt-40 object-contain"
            />
            <View
                className="px-6 py-2 bg-gray-100 rounded-3xl absolute top-4 right-4">
                <Text className="text-base text-gray-700">{`${countDown}s`}</Text>
            </View>
        </View>
    );
}
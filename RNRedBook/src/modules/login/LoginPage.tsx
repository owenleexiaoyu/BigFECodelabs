import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import icon_main_logo from "../../assets/icon_main_logo.png";
import icon_wx_small from "../../assets/icon_wx_small.png";
import icon_arrow from "../../assets/icon_arrow.png";
import icon_selected from "../../assets/icon_selected.png";
import icon_unselected from "../../assets/icon_unselected.png";
import icon_close_modal from "../../assets/icon_close_modal.png";
import icon_triangle from "../../assets/icon_triangle.png";
import icon_eye_close from "../../assets/icon_eye_close.png";
import icon_eye_open from "../../assets/icon_eye_open.png";
import icon_exchange from "../../assets/icon_exchange.png";
import icon_qq from "../../assets/icon_qq.webp";
import icon_wx from "../../assets/icon_wx.png";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextInput } from "react-native-gesture-handler";

export default () => {

    const [type, setType] = useState<"quick" | "password">("quick");
    const [consented, setConsented] = useState(false);


    const renderConsentLayout = () => {
        return (
            <View className="flex-row">
                    <TouchableOpacity
                        onPress={() => {
                            setConsented(!consented);
                        }}
                    >
                        <Image
                            source={consented ? icon_selected : icon_unselected}
                            className="w-5 h-5 mt-0.5"
                        />
                    </TouchableOpacity>
                    <Text className="ml-1">
                        我已阅读并同意
                        <Text className="text-blue-500">
                            《用户协议》《隐私政策》《儿童/青少年个人信息保护规则》
                        </Text>
                    </Text>
                </View>
        );
    }

    const renderQuickLogin = () => {
        return (
            <View className="w-full h-full flex-col justify-end bg-white px-12 py-8 items-center">
                <Image
                    source={icon_main_logo}
                    className="absolute top-20 w-48 h-24"
                    style={{ resizeMode: "contain" }}
                />
                <TouchableOpacity
                    className="w-full h-14 bg-red-500 rounded-full justify-center items-center mb-4"
                    activeOpacity={0.7}
                >
                    <Text className="text-lg text-white">一键登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="w-full h-14 flex-row bg-green-500 rounded-full justify-center items-center mb-5"
                    activeOpacity={0.7}
                >
                    <Image
                        source={icon_wx_small}
                        className="w-10 h-10"
                    />
                    <Text className="text-lg text-white ml-1">微信登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="flex-row items-center mb-20"
                    onPress={() => {
                        if (type === "quick") {
                            setType("password");
                        }
                    }}
                >
                    <Text className="text-base text-black vertical-align-center">其他登录方式</Text>
                    <Image
                        source={icon_arrow}
                        className="w-4 h-4 ml-2 rotate-180"
                    />
                </TouchableOpacity>
                { renderConsentLayout() }
            </View>
        );
    }

    const renderPasswordLogin = () => {
        return (
            <View className="w-full h-full flex-col bg-white px-12 py-8 items-center">
                <TouchableOpacity
                    className="absolute top-6 left-6"
                    onPress={() => {
                        if (type === "password") {
                            setType("quick");
                        }
                    }}
                    >
                    <Image 
                        source={icon_close_modal}
                        className="w-8 h-8"
                        />
                </TouchableOpacity>
                <Text className="text-2xl text-black font-bold">密码登录</Text>
                <Text className="text-base text-gray-300 mt-2">未注册的手机号登录成功后将自动注册</Text>
                <View className="w-full h-16 flex-row items-center border-b border-gray-300 mt-6">
                    <Text className="text-2xl text-gray-300">+86</Text>
                    <Image 
                        source={icon_triangle}
                        className="w-3 h-1.5 ml-1"
                        />
                    <TextInput 
                        className="w-full h-16 ml-4 text-2xl"
                        placeholder="请输入手机号码"
                        placeholderTextColor={"#D0D0D0"}
                        />
                </View>
                <View className="w-full h-16 flex-row items-center border-b border-gray-300 mt-2">
                    <TextInput 
                        className="flex-1 h-16 text-2xl"
                        placeholder="输入密码"
                        placeholderTextColor={"#D0D0D0"}
                        />
                    <Image 
                        source={icon_eye_close}
                        className="w-8 h-8 ml-2"
                        tintColor={"#D0D0D0"}
                        />
                </View>
                <View className="w-full flex-row mt-4 justify-between">
                    <TouchableOpacity className="h-6 flex-row items-center">
                        <Image 
                            source={icon_exchange}
                            className="w-5 h-5"
                            />
                        <Text className="text-base text-blue-700 ml-1">验证码登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="h-6 flex-row items-center">
                        <Text className="text-base text-blue-700 ml-1">忘记密码？</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    className="w-full h-14 flex-row rounded-full bg-gray-200 items-center justify-center mt-6 mb-4"
                    activeOpacity={0.5}
                    >
                    <Text className="text-xl text-white">登录</Text>
                </TouchableOpacity>
                {renderConsentLayout()}
                <View className="w-full flex-row justify-around mt-16">
                    <Image 
                        source={icon_wx} 
                        className="w-14 h-14"
                        />
                    <Image 
                        source={icon_qq} 
                        className="w-14 h-14"
                        />
                </View>
            </View>
        );
    }

    return type === "quick" ? renderQuickLogin() : renderPasswordLogin();
}
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import HomePage from "../home/HomePage";
import ShopPage from "../shop/ShopPage";
import MessagePage from "../message/MessagePage";
import MyProfilePage from "../mine/MyProfilePage";
import PublishEmptyBottomTab from "../publish/PublishEmptyBottomTab";
import icon_tab_publish from "../../assets/icon_tab_publish.png";
import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";

const BottomTab = createBottomTabNavigator();


export default () => {

    const onPublishPress = () => {
        launchImageLibrary({
            mediaType: "photo",
            quality: 1,
            includeBase64: true,
        }, (res: ImagePickerResponse) => {
            const { assets } = res;
            if (!assets?.length) {
                return;
            }
            const first = assets[0];
            const { width, height, fileName, fileSize, uri } = first;
            console.log(`width=${width}, height=${height}, fileSize=${fileSize}, fileName=${fileName}`);
            console.log(`uri=${uri}`);
        });
    }

    const RedBookBottomTab = (props: BottomTabBarProps) => {
        const { state, descriptors, navigation } = props;
        const { routes, index } = state;
        return <View className="w-full h-14 bg-white flex-row items-center">
            {routes.map((route, i) => {
                const { options } = descriptors[route.key];
                const title = options.title;
                const isFocused = index === i;
                if (i === 2) {
                    return (
                        <TouchableOpacity 
                            className="h-full flex-1 justify-center items-center"
                            activeOpacity={0.5}
                            onPress={onPublishPress}
                            key={`${title}-${i}`}
                            >
                            <Image 
                                className="w-14 h-10"
                                source={icon_tab_publish}
                                style={{resizeMode: "contain"}}
                             />
                    </TouchableOpacity>
                    );
                }
                return (
                    <TouchableOpacity 
                        className="h-full flex-1 justify-center items-center"
                        activeOpacity={0.5}
                        onPress={() => {
                            navigation.navigate(route.name);
                        }}
                        key={`${title}-${i}`}
                        >
                        <Text 
                            className={
                                `${isFocused ? "text-lg" : "text-base"} 
                                ${isFocused ? "text-black": "text-gray-500"}
                                ${isFocused ? "font-bold" : "font-normal"}
                                `}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    }

    return (
        <View className="w-full h-full">
            <BottomTab.Navigator
                tabBar={props => <RedBookBottomTab {...props}/>}
                >
                <BottomTab.Screen 
                    name="main_home"
                    component={HomePage}
                    options={{
                        headerShown: false,
                        title: "首页",
                    }}
                    />
                <BottomTab.Screen 
                    name="main_shop"
                    component={ShopPage}
                    options={{
                        headerShown: false,
                        title: "购物",
                    }}
                    />
                <BottomTab.Screen 
                    name="main_publish"
                    component={PublishEmptyBottomTab}
                    />
                <BottomTab.Screen 
                    name="main_message"
                    component={MessagePage}
                    options={{
                        headerShown: false,
                        title: "消息",
                    }}
                    />
                <BottomTab.Screen 
                    name="main_mine"
                    component={MyProfilePage}
                    options={{
                        headerShown: false,
                        title: "我",
                    }}
                    />
            </BottomTab.Navigator>
        </View>
    );
}
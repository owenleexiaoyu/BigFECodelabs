import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import HomePage from "../home/HomePage";
import ShopPage from "../shop/ShopPage";
import MessagePage from "../message/MessagePage";
import MyProfilePage from "../mine/MyProfilePage";
import PublishEmptyBottomTab from "../publish/PublishEmptyBottomTab";
// import icon_tab_home_normal from "../../assets/icon_tab_home_normal.png";
// import icon_tab_home_selected from "../../assets/icon_tab_home_selected.png";
// import icon_tab_shop_normal from "../../assets/icon_tab_shop_normal.png";
// import icon_tab_shop_selected from "../../assets/icon_tab_shop_selected.png";
// import icon_tab_message_normal from "../../assets/icon_tab_message_normal.png";
// import icon_tab_message_selected from "../../assets/icon_tab_message_selected.png";
// import icon_tab_mine_normal from "../../assets/icon_tab_mine_normal.png";
// import icon_tab_mine_selected from "../../assets/icon_tab_mine_selected.png";
import icon_tab_publish from "../../assets/icon_tab_publish.png";

const BottomTab = createBottomTabNavigator();


export default () => {

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
                            onPress={() => {
                                // TODO 发布
                            }}
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
                        // tabBarIcon: ({focused}) => {
                        //     return (
                        //         <Image 
                        //             className="w-6 h-6"
                        //             source={focused ? icon_tab_home_selected : icon_tab_home_normal} 
                        //             />
                        //         );
                        // },
                    }}
                    />
                <BottomTab.Screen 
                    name="main_shop"
                    component={ShopPage}
                    options={{
                        headerShown: false,
                        title: "购物",
                        // tabBarIcon: ({focused}) => {
                        //     return (
                        //         <Image 
                        //             className="w-6 h-6"
                        //             source={focused ? icon_tab_shop_selected : icon_tab_shop_normal} 
                        //             />
                        //         );
                        // },
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
                        // tabBarIcon: ({focused}) => {
                        //     return (
                        //         <Image 
                        //             className="w-6 h-6"
                        //             source={focused ? icon_tab_message_selected : icon_tab_message_normal} 
                        //             />
                        //         );
                        // },
                    }}
                    />
                <BottomTab.Screen 
                    name="main_mine"
                    component={MyProfilePage}
                    options={{
                        headerShown: false,
                        title: "我",
                        // tabBarIcon: ({focused}) => {
                        //     return (
                        //         <Image 
                        //             className="w-6 h-6"
                        //             source={focused ? icon_tab_mine_selected : icon_tab_mine_normal} 
                        //             />
                        //         );
                        // },
                    }}
                    />
            </BottomTab.Navigator>
        </View>
    );
}
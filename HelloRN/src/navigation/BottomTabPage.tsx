import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, View } from "react-native";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import MessagePage from "./MessagePage";
import MyProfilePage from "./MyProfilePage";


import icon_tab_home_normal from "../assets/images/icon_tab_home_normal.png";
import icon_tab_home_selected from "../assets/images/icon_tab_home_selected.png";
import icon_tab_shop_normal from "../assets/images/icon_tab_shop_normal.png";
import icon_tab_shop_selected from "../assets/images/icon_tab_shop_selected.png";
import icon_tab_message_normal from "../assets/images/icon_tab_message_normal.png";
import icon_tab_message_selected from "../assets/images/icon_tab_message_selected.png";
import icon_tab_mine_normal from "../assets/images/icon_tab_mine_normal.png";
import icon_tab_mine_selected from "../assets/images/icon_tab_mine_selected.png";

const BottomTab = createBottomTabNavigator();

export default () => {
    return (
        <View className="w-full h-full">
            <BottomTab.Navigator>
                <BottomTab.Screen 
                    name="main_home"
                    component={HomePage}
                    options={{
                        headerShown: false,
                        title: "首页",
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image 
                                    className="w-6 h-6"
                                    source={focused ? icon_tab_home_selected : icon_tab_home_normal} 
                                    />
                                );
                        },
                    }}
                    />
                <BottomTab.Screen 
                    name="main_shop"
                    component={ShopPage}
                    options={{
                        headerShown: false,
                        title: "购物",
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image 
                                    className="w-6 h-6"
                                    source={focused ? icon_tab_shop_selected : icon_tab_shop_normal} 
                                    />
                                );
                        },
                    }}
                    />
                <BottomTab.Screen 
                    name="main_message"
                    component={MessagePage}
                    options={{
                        headerShown: false,
                        title: "消息",
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image 
                                    className="w-6 h-6"
                                    source={focused ? icon_tab_message_selected : icon_tab_message_normal} 
                                    />
                                );
                        },
                    }}
                    />
                <BottomTab.Screen 
                    name="main_mine"
                    component={MyProfilePage}
                    options={{
                        headerShown: false,
                        title: "我",
                        tabBarIcon: ({focused}) => {
                            return (
                                <Image 
                                    className="w-6 h-6"
                                    source={focused ? icon_tab_mine_selected : icon_tab_mine_normal} 
                                    />
                                );
                        },
                    }}
                    />
            </BottomTab.Navigator>
        </View>
    );
}
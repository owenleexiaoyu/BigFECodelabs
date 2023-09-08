import React from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TestAlertConsole from "./TestAlertConsole";
import TestBackHander from "./TestBackHander";
import TestDimensions from "./TestDimensions";
import TestKeyboard from "./TestKeyboard";
import TestLinking from "./TestLinking";
import TestPermissionsAndroid from "./TestPermissionsAndroid";
import TestPixelRatio from "./TestPixelRatio";
import TestPlatform from "./TestPlatform";
import TestStyleSheet from "./TestStyleSheet";
import TestToastAndroid from "./TestToastAndroid";
import TestTransform from "./TestTransform";
import TestVibration from "./TestVibration";

const Stack = createStackNavigator();

const dataList = [
    {
        "name": "Alert Console",
        "route": "api_alert_console"
    },
    {
        "name": "BackHander",
        "route": "api_backhandler"
    },
    {
        "name": "Dimensions",
        "route": "api_dimensions"
    },
    {
        "name": "Keyboard",
        "route": "api_keyboard"
    },
    {
        "name": "Linking",
        "route": "api_linking"
    },
    {
        "name": "PermissionAndroid",
        "route": "api_permission_android"
    },
    {
        "name": "PixelRatio",
        "route": "api_pixelratio"
    },
    {
        "name": "Platform",
        "route": "api_platform"
    },
    {
        "name": "StyleSheet",
        "route": "api_stylesheet"
    },
    {
        "name": "ToastAndroid",
        "route": "api_toast_android"
    },
    {
        "name": "Transform",
        "route": "api_transform"
    },
    {
        "name": "Vibration",
        "route": "api_vibration"
    }
];

const RNApisHomePage = () => {

    const navigation = useNavigation();

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity 
                style={{ 
                    width: "100%", 
                    height: 60, 
                    paddingHorizontal: "5%", 
                    flexDirection: "column",
                    justifyContent: "center",
                }}
                onPress={() => {
                    navigation.push(item.route);
                }}
                >
                <Text style={{ fontSize: 16, color: "#333" }}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    const Divider = () => {
        return (
            <View style={{ width: "90%", height: 1, marginStart: "5%", backgroundColor: "#C0C0C0"}}></View>
        );
    }

    return (
        <View style={styles.root}>
            <FlatList 
                data={dataList}
                keyExtractor={(item, index) => `${item.route}-${index}`}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}
            />
        </View>
    );
}

export default () => {

    return (
        <View style={styles.root}>
            <NavigationContainer
                independent={true}>
                <Stack.Navigator initialRouteName="rn_apis_home">
                    <Stack.Screen 
                        name="rn_apis_home" 
                        component={RNApisHomePage}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen 
                        name="api_alert_console" 
                        component={TestAlertConsole}
                    />
                    <Stack.Screen 
                        name="api_backhandler" 
                        component={TestBackHander}
                    />
                    <Stack.Screen 
                        name="api_dimensions" 
                        component={TestDimensions}
                    />
                    <Stack.Screen 
                        name="api_keyboard" 
                        component={TestKeyboard}
                    />
                    <Stack.Screen 
                        name="api_linking" 
                        component={TestLinking}
                    />
                    <Stack.Screen 
                        name="api_permission_android" 
                        component={TestPermissionsAndroid}
                    />
                    <Stack.Screen 
                        name="api_pixelratio" 
                        component={TestPixelRatio}
                    />
                    <Stack.Screen 
                        name="api_platform" 
                        component={TestPlatform}
                    />
                    <Stack.Screen 
                        name="api_stylesheet" 
                        component={TestStyleSheet}
                    />
                    <Stack.Screen 
                        name="api_toast_android" 
                        component={TestToastAndroid}
                    />
                    <Stack.Screen 
                        name="api_transform" 
                        component={TestTransform}
                    />
                    <Stack.Screen 
                        name="api_vibration" 
                        component={TestVibration}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    }
});
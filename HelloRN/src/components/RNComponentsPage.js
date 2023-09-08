import React from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import ViewDemo from "./ViewDemo";
import TextDemo from "./TextDemo";
import ImageDemo from "./ImageDemo";
import ClassView from "./ClassView";
import FunctionView from "./FunctionView";
import ImageBackgroundDemo from "./ImageBackgroundDemo";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TextInputDemo from "./TextInputDemo";
import TouchableOpacityDemo from "./TouchableOpacityDemo";
import TouchableHighlightDemo from "./TouchableHighlightDemo";
import TouchableWithoutFeedbackDemo from "./TouchableWithoutFeedbackDemo";
import ButtonDemo from "./ButtonDemo";
import PressableDemo from "./PressableDemo";
import ScrollViewDemo from "./ScrollViewDemo";
import FlatListDemo from "./FlatListDemo";
import SectionListDemo from "./SectionListDemo";
import StatusBarDemo from "./StatusBarDemo";
import ModalDemo from "./ModalDemo";
import SwitchDemo from "./SwitchDemo";

const Stack = createStackNavigator();

const dataList = [
    {
        "name": "View",
        "route": "component_view"
    },
    {
        "name": "Text",
        "route": "component_text"
    },
    {
        "name": "Image",
        "route": "component_image"
    },
    {
        "name": "Class Component",
        "route": "class_component"
    },
    {
        "name": "Function Component",
        "route": "function_component"
    },
    {
        "name": "TextInput",
        "route": "component_textinput"
    },
    {
        "name": "ImageBackground",
        "route": "component_image_background"
    },
    {
        "name": "TouchableOpacity",
        "route": "component_touchable_opacity"
    },
    {
        "name": "TouchableHighlight",
        "route": "component_touchable_highlight"
    },
    {
        "name": "TouchableWithoutFeedback",
        "route": "component_touchable_without_feedback"
    },
    {
        "name": "Button",
        "route": "component_button"
    },
    {
        "name": "Pressable",
        "route": "component_pressable"
    },
    {
        "name": "ScrollView",
        "route": "component_scrollview"
    },
    {
        "name": "FlatList",
        "route": "component_flatlist"
    },
    {
        "name": "SectionList",
        "route": "component_sectionlist"
    },
    {
        "name": "StatusBar",
        "route": "component_statusbar"
    },
    {
        "name": "Modal",
        "route": "component_modal"
    },
    {
        "name": "Switch",
        "route": "component_switch"
    },
];

const RNComponentsHomePage = () => {

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
                <Stack.Navigator initialRouteName="rn_components_home">
                    <Stack.Screen 
                        name="rn_components_home" 
                        component={RNComponentsHomePage}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen 
                        name="component_view" 
                        component={ViewDemo}
                    />
                    <Stack.Screen 
                        name="component_text" 
                        component={TextDemo}
                    />
                    <Stack.Screen 
                        name="component_image" 
                        component={ImageDemo}
                    />
                    <Stack.Screen 
                        name="class_component" 
                        component={ClassView}
                    />
                    <Stack.Screen 
                        name="function_component" 
                        component={FunctionView}
                    />
                    <Stack.Screen 
                        name="component_textinput" 
                        component={TextInputDemo}
                    />
                    <Stack.Screen 
                        name="component_image_background" 
                        component={ImageBackgroundDemo}
                    />
                    <Stack.Screen 
                        name="component_touchable_opacity" 
                        component={TouchableOpacityDemo}
                    />
                    <Stack.Screen 
                        name="component_touchable_highlight" 
                        component={TouchableHighlightDemo}
                    />
                    <Stack.Screen 
                        name="component_touchable_without_feedback" 
                        component={TouchableWithoutFeedbackDemo}
                    />
                    <Stack.Screen 
                        name="component_button" 
                        component={ButtonDemo}
                    />
                    <Stack.Screen 
                        name="component_pressable" 
                        component={PressableDemo}
                    />
                    <Stack.Screen 
                        name="component_scrollview" 
                        component={ScrollViewDemo}
                    />
                    <Stack.Screen 
                        name="component_flatlist" 
                        component={FlatListDemo}
                    />
                    <Stack.Screen 
                        name="component_sectionlist" 
                        component={SectionListDemo}
                    />
                    <Stack.Screen 
                        name="component_statusbar" 
                        component={StatusBarDemo}
                    />
                    <Stack.Screen 
                        name="component_modal" 
                        component={ModalDemo}
                    />
                    <Stack.Screen 
                        name="component_switch" 
                        component={SwitchDemo}
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
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import PageA from "./PageA";
import PageB from "./PageB";

const Stack = createStackNavigator();

export default () => {

    return (
        <View style={styles.root}>
            <NavigationContainer
                independent={true}>
                <Stack.Navigator initialRouteName="page_a">
                    <Stack.Screen 
                        name="page_a" 
                        component={PageA}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen 
                        name="page_b" 
                        component={PageB}
                        options={{
                            headerShown: false,
                            ...TransitionPresets.SlideFromRightIOS,
                        }}
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
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
    },
});
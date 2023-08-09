import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <StatusBar
                // barStyle="light-content"
                // backgroundColor="blue" 
                // hidden={true}
                translucent={true}
                backgroundColor="transparent"
                />
            <View style={styles.toolbar}>
                <Text style={styles.title}>ToolBar</Text>
            </View>
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
    toolbar: {
        width: "100%",
        height: 52,
        backgroundColor: "blue",
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
    }
});
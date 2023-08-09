import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.7}
                onPress={(event) => {
                    console.log("onPress ...");
                    console.log(event.nativeEvent);
                }}
                onLongPress={(event) => {
                    console.log("onLongPress ...");
                    console.log(event.nativeEvent);
                }}
                delayLongPress={2000}
                onPressIn={(event) => {
                    console.log("onPressIn ...");
                    console.log(event.nativeEvent);
                }}
                onPressOut={(event) => {
                    console.log("onPressOut ...");
                    console.log(event.nativeEvent);
                }}
            >
                <Text style={styles.txt}>按钮</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
        padding: 5,
    },
    button: {
        width: 200,
        height: 60,
        backgroundColor: "blue",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    txt: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    }
});
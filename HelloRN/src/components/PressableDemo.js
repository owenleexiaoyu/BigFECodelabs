import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <Pressable
                style={({ pressed })=> {
                    return {
                        width: 200,
                        height: 60,
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: pressed ? "white" : "blue",
                    }
                }}>
                    {({ pressed }) => {
                        return (
                            <Text style={ pressed ? styles.txtPressed : styles.txtNormal}>
                                按钮
                            </Text>
                        );
                    }}
                </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
        padding: 50,
    },
    txtNormal: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    txtPressed: {
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
    }
});
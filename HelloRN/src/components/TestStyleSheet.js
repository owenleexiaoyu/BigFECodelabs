import React from "react";
import { View, StyleSheet, Button, Dimensions } from "react-native";

const s1 = {
    fontSize: 10,
}

const s2 = {
    fontSize: 20,
    color: "red",
}

export default () => {
    const composedStyle = StyleSheet.compose(s1, s2);
    console.log(composedStyle);
    const flattenStyle = StyleSheet.flatten([s1, s2]);
    console.log(flattenStyle);
    console.log(StyleSheet.absoluteFill);
    console.log(StyleSheet.hairlineWidth);
    console.log(1 / Dimensions.get("window").scale);
    return (
        <View style={styles.root}>
            <Button title="按钮"/>
            {/* <View style={styles.mask}></View> */}
            <View style={styles.divider}></View>
            <Button title="按钮"/>
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
    mask: {
        ...StyleSheet.absoluteFill,
        backgroundColor: "#FF000030",
    },
    divider: {
        backgroundColor: "#A0A0A0",
        marginVertical: 20,
        width: "100%",
        height: StyleSheet.hairlineWidth,
    }
});
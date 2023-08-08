import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import chandler from "../assets/images/chandler.png"

export default (props) => {

    return (
        <View style={styles.root}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        flexDirection: "column",
        paddingVertical: 2,
        marginVertical: 5,
        backgroundColor: "#B0B0B0",
    },
    title: {
        fontSize: 16,
    },
});
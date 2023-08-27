import React, { useContext } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import icon_avatar from "../assets/images/default_avatar.png";
import { ThemeContext } from "./ThemeContext";

export default () => {
    const theme = useContext(ThemeContext);
    console.log(`theme = ${theme}`);
    const styles = theme === "dark" ? darkStyles : lightStyles;
    return (
        <View style={styles.content}>
            <Image source={icon_avatar} style={styles.img} />
            <Text style={styles.txt}>个人信息介绍</Text>
            <View style={styles.infoLayout}>
                <Text style={styles.infoTxt}>
                    各位产品经理大家好，我是个人开发者张三，我学习 RN 两年半了，我喜欢安卓、RN 和 Flutter。
                </Text>
            </View>
        </View>
    );
};

const darkStyles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#666666",
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 64,
    },
    img: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 4,
        borderColor: "#FFFFFFF0",
    },
    txt: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginTop: 32,
    },
    infoLayout: {
        width: "90%",
        padding: 20,
        backgroundColor: "#808080",
        marginTop: 32,
        borderRadius: 12,
    },
    infoTxt: {
        fontSize: 16,
        color: "white",
    }
});

const lightStyles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FAFAFA",
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 64,
    },
    img: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 4,
        borderColor: "#00000080",
    },
    txt: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        marginTop: 32,
    },
    infoLayout: {
        width: "90%",
        padding: 20,
        backgroundColor: "#F0F0F0",
        marginTop: 32,
        borderRadius: 12,
    },
    infoTxt: {
        fontSize: 16,
        color: "#808080",
    }
});
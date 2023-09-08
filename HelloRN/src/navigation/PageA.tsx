import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

export default () => {

    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <View style={styles.root}>
            <Text style={styles.txt}>页面A</Text>
            <Button title="跳转页面B"
                onPress={() => {
                    navigation.push("page_b");
                    // navigation.replace("page_b");
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0",
    },
    txt: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#333",
    }
});
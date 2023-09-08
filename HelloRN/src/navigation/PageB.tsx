import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export default () => {
    
    const navigation = useNavigation<StackNavigationProp<any>>();
    
    return (
        <View style={styles.root}>
            <Text style={styles.txt}>页面B</Text>
            <Button title="跳转页面"
                onPress={() => {
                    // navigation.push("page_b");
                    // navigation.navigate("page_b");
                    // if (navigation.canGoBack()) {
                    //     navigation.goBack();
                    // }
                    navigation.pop();
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
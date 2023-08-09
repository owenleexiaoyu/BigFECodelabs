import React from "react";
import { View, StyleSheet, Button } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <Button
                title="按钮" />

            <Button
                title="按钮"
                color="red"
                onPress={() => {
                    console.log("onPress ...");
                }} />

            <Button
                title="按钮"
                color="red"
                disabled={true}
                onPress={() => {
                    console.log("onPress ...");
                }} />
            {/* <Button style={styles.smallButton}
                title="按钮" /> */}
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
    smallButton: {
        width: 120,
        height: 40,
    }
});
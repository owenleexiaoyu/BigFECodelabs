import React, { useEffect } from "react";
import { View, StyleSheet, Keyboard, TextInput, Button } from "react-native";

export default () => {

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", onKeyboardShow);
        const hideSubscription = Keyboard.addListener("keyboardDidHide", onKeyboardHide);
        return () => {
           showSubscription.remove(); 
           hideSubscription.remove();
        }
    }, []);

    return (
        <View style={styles.root}>
            <TextInput style={{ width: "100%", height: 56, backgroundColor: "#A0A0A0"}}/>
            <Button title="隐藏键盘" onPress={() => {
                Keyboard.dismiss();
            }} />
        </View>
    );
}

const onKeyboardShow = () => {
    console.log("键盘出现...")
}

const onKeyboardHide = () => {
    console.log("键盘隐藏...")
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
    },
});
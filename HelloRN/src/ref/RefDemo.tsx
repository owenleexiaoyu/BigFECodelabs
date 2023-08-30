import React, { useRef } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import CustomInput from "./CustomInput";

export default () => {

    const inputRef = useRef<TextInput>(null);

    return (
        <View style={styles.root}>
            <Button title="CustomInput 获取焦点"
                onPress={() => {
                    inputRef.current?.focus();
                }}
            />
            <CustomInput ref={inputRef} />
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
});
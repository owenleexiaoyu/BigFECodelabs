import React, { useRef } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import CustomInput from "./CustomInput";
import CustomInput2 from "./CustomInput2";
import CustomInput3 from "./CustomInput3";

export default () => {

    // const inputRef = useRef<CustomInput2>(null);
    const inputRef = useRef<CustomInput3>(null);

    return (
        <View style={styles.root}>
            {/* <Button title="CustomInput 获取焦点"
                onPress={() => {
                    inputRef.current?.focus();
                }}
            />
            <CustomInput ref={inputRef} /> */}
            <Button title="CustomInput 获取焦点"
                onPress={() => {
                    inputRef.current?.customFocus();
                }} />
            <View style={{ height: 10 }}/>
            <Button title="CustomInput 失去焦点"
                onPress={() => {
                    inputRef.current?.customBlur();
                    // inputRef.current?.test();
                }} />
            {/* <CustomInput2 ref={inputRef} /> */}
            <CustomInput3 ref={inputRef} />
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
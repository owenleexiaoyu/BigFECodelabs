import React, { useEffect, useRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default (props) => {

    const inputRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            // inputRef.current.focus();
            // inputRef.current.blur();
        }, 2000);
    }, []);

    return (
        <View style={styles.root}>
            <TextInput 
                style={styles.txtInput}
                autoFocus={true}
                // defaultValue="默认内容"
                // editable={true}
                // keyboardType='phone-pad'
                // returnKeyType='search'
                // returnKeyLabel="Search"
                // maxLength={15}
                // multiline={true}
                // numberOfLines={2}
                // onFocus={() => {
                //     console.log("onFocus ...");
                // }}
                // onBlur={() => {
                //     console.log("onBlur ...");
                // }}
                // onChange={(event) => {
                //     console.log(event.nativeEvent);
                // }}
                // onChangeText={(text) => {
                //     console.log(text);
                // }}
                // selection={{ start: 1, end: 3 }}
                // selectionColor="red"
                // selectTextOnFocus={true}
                secureTextEntry={true}
            >
            </TextInput>
            {/* <TextInput
                ref={inputRef}
                style={styles.txtInput2}
                blurOnSubmit={false}
                caretHidden={true}
            >

            </TextInput> */}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
    },
    txtInput: {
        fontSize: 16,
        backgroundColor: "#A0A0A0",
        // color: "red",
        fontSize: 24,
        fontWeight: "bold",
        // textAlign: "center",
    },
    txtInput2: {
        fontSize: 16,
        backgroundColor: "#181818",
    },
});
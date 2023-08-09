import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
           <TouchableHighlight 
            style={styles.button}
            onPress={()=> {

            }}
            activeOpacity={0.7}
            underlayColor="green"
            // onLongPress={() => {

            // }}
            // onPressIn={()=>{

            // }}
            // onPressOut={()=>{

            // }}
            >
           <Text style={styles.txt}>按钮</Text>
           </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
        padding: 50,
    },
    button: {
        width: 200,
        height: 60,
        backgroundColor: "blue",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    txt: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    }
});
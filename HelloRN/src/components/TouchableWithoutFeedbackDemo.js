import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";

export default () => {
    const [showBorder, setShowBorder] = useState(false);
    return (
        <View style={styles.root}>
            <TouchableWithoutFeedback
                onPress={() => {
                    setShowBorder(!showBorder)
                }}>
                <View style={ showBorder ? styles.viewWithBorder : styles.viewNoBorder }>
                    <Text style={styles.txt}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
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
    viewNoBorder: {
        width: 200,
        height: 60,
    }, 
    viewWithBorder: {
        width: 200,
        height: 60,
        borderWidth: 0.5,
        borderColor: "#FF0025"
    }, 
    txt: {
        fontSize: 20,
        fontWeight: "bold",
    }
});
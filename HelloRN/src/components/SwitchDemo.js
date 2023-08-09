import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";

export default () => {
    const [switchValue, setSwitchValue] = useState(false);

    return (
        <View style={styles.root}>
            <Switch
                value={switchValue}
                onValueChange={(value) => {
                    setSwitchValue(value);
                }} />
            <Switch
                disabled={true}
                value={true} />
            <Switch
                value={switchValue}
                onValueChange={(value) => {
                    setSwitchValue(value);
                }}
                trackColor={{ true: "blue", false: "gray" }}
                thumbColor={ switchValue ? "green" : "#A0A0A0"} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
        alignItems: "center",
        justifyContent: "center",
    },
});
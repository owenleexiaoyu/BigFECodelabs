import React from "react";
import { View, StyleSheet, Platform, Button } from "react-native";

export default () => {
    const marginTop = Platform.select({
        ios: {
            marginTop: 0,
        },
        android: {
            marginTop: 20,
        },
        default: {
            marginTop: 10,
        }
    });
    console.log(marginTop);

    return (
        <View style={styles.root}>
            <Button 
                title="Platform 信息"
                onPress={() =>{
                    console.log(`OS: ${Platform.OS}`);
                    console.log(`Version: ${Platform.Version}`);
                    console.log(`constants: ${JSON.stringify(Platform.constants)}`);
                    console.log(`isPad: ${Platform.isPad}`);
                    console.log(`isTV: ${Platform.isTV}`);
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
        paddingTop: Platform.select({
            ios: 0,
            android: 20,
            default: 10
        }),
        ...Platform.select({
            ios: {
                backgroundColor: "red",
            },
            android: {
                backgroundColor: "green",
            },
            default: {
                backgroundColor: "white",
            }
        })
    },
});
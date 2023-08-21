import React, { useEffect } from "react";
import { View, StyleSheet, BackHandler, Button } from "react-native";
import { useBackHandler } from '@react-native-community/hooks';

export default () => {

    // useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', backForAndroid);
    //     return () => {
    //         BackHandler.removeEventListener('hardwareBackPress', backForAndroid);
    //     }
    // }, []);

    useBackHandler(backForAndroid);

    return (
        <View style={styles.root}>
            <Button 
                title="BackHandler.exitApp()"
                onPress={() => {
                    BackHandler.exitApp();
                }}
            />
        </View>
    );
}

let lastPressBackTime = 0;


const backForAndroid = () => {
    const currentPressBackTime = Date.now();
    console.log(`currentPressBackTime = ${currentPressBackTime}`);
    console.log(`lastPressBackTime = ${lastPressBackTime}`);
    console.log(`pressGap = ${currentPressBackTime - lastPressBackTime}`);
    if (currentPressBackTime - lastPressBackTime > 2000) {
        console.log("2s内再按一次退出应用");
        lastPressBackTime = currentPressBackTime;
        return true;
    } else {
        lastPressBackTime = currentPressBackTime;
        return false;
    }
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
    },
});
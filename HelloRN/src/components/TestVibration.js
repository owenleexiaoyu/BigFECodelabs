import React from "react";
import { View, StyleSheet, Button, Vibration } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <Button 
                title="Vibration.vibrate"
                onPress={() =>{
                    // 默认震动 400ms
                    Vibration.vibrate();
                    // 传入震动时长，单位是 ms，只对 Android 有效，iOS 每次震动时间是固定的
                    Vibration.vibrate(1000); 
                    // 取消震动
                    Vibration.cancel();
                    // Android 设置时间模式，停 100ms，震 500ms，停200ms，震 500ms
                    Vibration.vibrate([100, 500, 200, 500]);
                    // iOS 设置时间模式， 指定每次震动之间的停顿
                    Vibration.vibrate([100, 200, 300, 400]);
                    // 循环震动
                    Vibration.vibrate([100, 200, 300, 400], true);
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
        backgroundColor: "#F0F0F0",
    },
});
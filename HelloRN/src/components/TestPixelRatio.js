import React from "react";
import { View, StyleSheet, Button, PixelRatio, Dimensions } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <Button title="PixelRatio.get() 获取屏幕像素密度" 
                onPress={() => {
                    console.log(PixelRatio.get());
                    console.log(Dimensions.get("screen").scale);
                }}
            />
            <Button title="PixelRatio.getFontScale() 获取字体缩放比例" 
                onPress={() => {
                    console.log(PixelRatio.getFontScale());
                    console.log(Dimensions.get("screen").fontScale);
                }}
            />
            <Button title="PixelRatio.getPixelSizeForLayoutSize() 获取布局大小" 
                onPress={() => {
                    console.log(PixelRatio.getPixelSizeForLayoutSize(200));
                    console.log(200 * PixelRatio.get());
                }}
            />
            <View style={styles.view}>
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
                <View style={styles.subView} />
            </View>
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
    view: {
        width: "100%",
        backgroundColor: "red",
    },
    subView: {
        width: "100%",
        backgroundColor: "green",
        height: PixelRatio.roundToNearestPixel(32.1),
    }
});
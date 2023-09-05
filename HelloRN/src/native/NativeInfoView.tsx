import React from "react";
import { StyleSheet, View, ViewProps, requireNativeComponent } from "react-native";
import { largeImageUrl } from "../constants/Url"

const NativeInfoView = requireNativeComponent<NativeInfoViewType>("NativeInfoView");

type NativeInfoViewType = ViewProps | {
    // 这部分是自定义的属性
    avatar: string;
    name: string;
    desc: string;
    onShapeChange: (e: any) => void;
}

export default () => {
    return (
        <NativeInfoView 
            style={styles.infoView}
            avatar={largeImageUrl}
            name="张三"
            desc="唱跳 RAP 篮球"
            onShapeChange={(e) => {
                console.log(e.nativeEvent.shape);
            }}
        />
    );
}

const styles = StyleSheet.create({
    infoView: {
        width: "100%",
        height: "100%",
    }
});
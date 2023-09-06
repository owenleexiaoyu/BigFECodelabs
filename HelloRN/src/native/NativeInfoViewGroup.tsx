import React from "react";
import { StyleSheet, View, ViewProps, requireNativeComponent, findNodeHandle, UIManager } from "react-native";
import { largeImageUrl } from "../constants/Url"

const NativeInfoViewGroup = requireNativeComponent<NativeInfoViewGroupType>("NativeInfoViewGroup");

type NativeInfoViewGroupType = ViewProps | {
    // 这部分是自定义的属性
}

export default () => {
    return (
        <NativeInfoViewGroup
        >
            <View style={{ width: 100, height: 100, backgroundColor: "red" }}/>
            <View style={{ width: 100, height: 100, backgroundColor: "blue" }}/>
        </NativeInfoViewGroup>
    );
}

const styles = StyleSheet.create({
    infoViewGroup: {
        width: "100%",
        height: "100%",
    }
});
import React from "react";
import { StyleSheet, View, ViewProps, requireNativeComponent } from "react-native";

const NativeInfoView = requireNativeComponent<NativeInfoViewType>("NativeInfoView");

type NativeInfoViewType = ViewProps | {
    // 这部分是自定义的属性
}

export default () => {
    return (
        <NativeInfoView 
            style={styles.infoView}
        />
    );
}

const styles = StyleSheet.create({
    infoView: {
        width: "100%",
        height: "100%",
    }
});
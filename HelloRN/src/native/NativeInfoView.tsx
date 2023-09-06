import React, { useEffect, useRef } from "react";
import { StyleSheet, View, ViewProps, requireNativeComponent, findNodeHandle, UIManager } from "react-native";
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

    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            sendCommand("setShape", ["round"]);
        }, 3000);
    }, []);

    const sendCommand = (command: string, params: any[]) => {
        const viewId = findNodeHandle(ref.current);
        // @ts-ignore
        const commands = UIManager.NativeInfoView.Commands[command].toString();
        UIManager.dispatchViewManagerCommand(viewId, commands, params);
    }

    return (
        <NativeInfoView
            ref={ref} 
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
import React, { useEffect } from "react";
import { View } from "react-native";
import Header from "../context/Header";
import withFloatButton from "./withFloatButton";

export default withFloatButton(() => {

    useEffect(() => {
        console.log("原始组件加载完成");
        // reportDeviceInfo();
    }, []);

    // const reportDeviceInfo = () => {
    //     console.log("上报设备信息");
    // }

    return (
        <View style={{ width: "100%" }}>
            <Header />
        </View>
    );
}, "InfoView");
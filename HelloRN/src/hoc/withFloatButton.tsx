import React, { useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import icon_add from "../assets/images/icon_add.png"

type IReactComponent = React.ClassicComponentClass |
    React.ComponentClass |
    React.FunctionComponent | 
    React.ForwardRefExoticComponent<any> // Ref 转发的组件

export default <T extends IReactComponent>(OriginView: T, type: string): T => {
    console.log(`type = ${type}`);
    const HOCView = (props: any) => {

        useEffect(() => {
            console.log("高阶组件加载完成");
            reportDeviceInfo();
        }, []);

        const reportDeviceInfo = () => {
            console.log("在高阶组件中上报设备信息");
        }

        return (
            <>
                <OriginView {...props} />
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={() => {
                        console.log("onPress...");
                    }}
                    >
                    <Image source={icon_add} style={styles.addImg}/>
                </TouchableOpacity>
            </>
        );
    };
    return HOCView as T;
}

const styles = StyleSheet.create({
    addButton: {
        position: "absolute",
        bottom: 80,
        end: 30,
    },
    addImg: {
        width: 56,
        height: 56,
        resizeMode: "contain",
    },
});
import React from "react";
import { View, StyleSheet } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <View
                style={[
                    {
                        width: 100,
                        height: 100,
                        backgroundColor: "#3050FF",
                    },
                    {
                        transform: [
                            // 平移
                            // { translateX: 200 },
                            // { translateY: 100 },
                            // 缩放
                            // { scaleX: 2 },
                            // { scaleY: 2 },
                            // { scale: 2 }
                            // 旋转
                            // { rotateX: "45deg" }
                            // { rotateY: "45deg" }
                            { rotateZ: "45deg" }
                        ]
                    }
                ]}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
        alignItems: "center",
        justifyContent: "center",
    },
});
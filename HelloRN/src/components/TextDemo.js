import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            {/* <Text 
                style={styles.txtNormal}
                // numberOfLines={1}
                // ellipsizeMode="middle"
                // selectable={true}
                // selectionColor="red"
                // onPress={() => {
                //     console.log("onPress ...");
                // }}
                // onLongPress={() => {
                //     console.log("onLongPress ...");
                // }}
                // allowFontScaling={false}
            >
                君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。
            </Text> */}
            {/* <Text style={styles.txtNormal}>
                本次考试不及格的人数是
                <Text style={styles.innerTxt}>8</Text>
                人
            </Text> */}
            <Text style={styles.txtNormal}>你好，世界。</Text>
            {/* <Text style={styles.txt}>你好，世界。</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#F0F0F0",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        padding: 20,
    },
    txtNormal: {
        width: "100%",
        height: 100,
        backgroundColor: "#C0C0C0",
        color: "black",
        fontSize: 36,
        textAlign: "center",
        textAlignVertical: "center",
        // textDecorationStyle: "solid",
        // textDecorationLine: "underline line-through",
        // textDecorationColor: "#00FF00"
        textShadowColor: "#808080",
        textShadowOffset: { width: 2, height: 4},
        textShadowRadius: 8,
    },
    innerTxt: {
        color: "red",
        fontSize: 36,
        fontWeight: "bold",
    }
    // txt: {
    //     color: "black",
    //     fontSize: 20,
    //     fontFamily: "GuDianMingChaoTi"
    // }
    
});
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";

export default () => {

    // const [height, setHeight] = useState(100);
    // const viewRef = useRef(null);
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         // setHeight(200);
    //         viewRef.current.setNativeProps({
    //             style: {
    //                 backgroundColor: "blue",
    //                 width: 200,
    //             }
    //         });
    //     }, 2000);
    // }, []);

    return (
        <View style={styles.root}>
            {/* <View 
                ref={viewRef}
                style={styles.subView}
                onLayout={event => {
                    console.log(event.nativeEvent);
                }}
            /> */}
            <View style={styles.subView1} />
            <View style={styles.subView2} />
            <View style={styles.subView3} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#C0C0C0",
        width: "100%",
        height: "100%",
        flexDirection: "row",
        // alignItems: "center",
        // paddingStart: "10%",
    },
    subView: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        // position: "absolute",
        // left: 40,
        marginLeft: 30,
        marginTop: 50,
    },
    subView1: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        flex: 1,
    },
    subView2: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
        // borderColor: "white",
        // borderWidth: 10,
        // marginStart: "20%",
        flex: 2,
    },
    subView3: {
        width: 100,
        height: 100,
        backgroundColor: "yellow",
        flex: 3,
    },
});
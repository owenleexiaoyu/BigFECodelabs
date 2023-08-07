import React, { useState, useEffect }from "react";
import { View, Text, StyleSheet } from "react-native";

export default () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(`interval count=${count}`);
            // setCount(count + 1);
            
            setCount((data) => {
                console.log(`interval count=${data}`);
                return data + 1;
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <View style={styles.root}>
            <Text style={styles.title}>RN 计数器</Text>
            <Text style={styles.counter}>{count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "#222222",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        marginTop: 100,
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
    },
    counter: {
        marginTop: 100,
        fontSize: 100,
        color: "blue",
        fontWeight: "bold",
    }
});
import React from "react";
import { View, StyleSheet, Button, ToastAndroid } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <Button 
                title="Show Toast on Android(Short)"
                onPress={() =>{
                    ToastAndroid.show("This is a toast", ToastAndroid.SHORT);
                }}
            />
            <Button 
                title="Show Toast on Android(Long)"
                onPress={() =>{
                    ToastAndroid.show("This is a toast", ToastAndroid.LONG);
                }}
            />
            <Button 
                title="Show Toast on Android(Top)"
                onPress={() =>{
                    ToastAndroid.showWithGravity("This is a toast", ToastAndroid.SHORT, ToastAndroid.TOP);
                }}
            />
            <Button 
                title="Show Toast on Android(Center)"
                onPress={() =>{
                    ToastAndroid.showWithGravity("This is a toast", ToastAndroid.SHORT, ToastAndroid.CENTER);
                }}
            />
            <Button 
                title="Show Toast on Android(Center & Offset)"
                onPress={() =>{
                    ToastAndroid.showWithGravityAndOffset("This is a toast", ToastAndroid.SHORT, ToastAndroid.CENTER, 100, 200);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
    },
});
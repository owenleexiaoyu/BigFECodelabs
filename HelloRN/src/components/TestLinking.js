import React from "react";
import { View, StyleSheet, Button, Linking, Platform } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <Button 
                title="Linking.openURL(Web)"
                onPress={() =>{
                    if (Linking.canOpenURL("https://www.baidu.com")) {
                        Linking.openURL("https://www.baidu.com");
                    }
                }}
            />
            <Button 
                title="Linking.openURL(Map)"
                onPress={() =>{
                    Linking.openURL("geo:123.3243,34.566");
                }}
            />
            <Button 
                title="Linking.openURL(TEL)"
                onPress={() =>{
                    Linking.openURL("tel:10086");
                }}
            />
            <Button 
                title="Linking.openURL(SMS)"
                onPress={() =>{
                    Linking.openURL("smsto:10086");
                }}
            />
            <Button 
                title="Linking.openURL(Email)"
                onPress={() =>{
                    Linking.openURL("mailto:10086@qq.com");
                }}
            />
            <Button 
                title="Linking.openURL(App)"
                onPress={() =>{
                    Linking.openURL("hellorn://welcome?name=zhangsan");
                }}
            />
            <Button 
                title="Linking.openSettings"
                onPress={() =>{
                    Linking.openSettings();
                }}
            />
            <Button 
                title="Linking.sendIntent(For Android)"
                onPress={() =>{
                    if (Platform.OS === 'android') {
                        Linking.sendIntent("com.hellorn.welcome", 
                        [{ key: "name", value: "lisi"}]
                        );
                    }
                    
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
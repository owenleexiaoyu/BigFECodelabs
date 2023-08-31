import React from "react";
import { View, StyleSheet, Button, NativeModules } from "react-native";
import App from "./AppModule";

export default () => {

    return (
        <View style={styles.root}>
            <Button 
            title="调用原生方法"
            onPress={() => {
                // const { App } = NativeModules;
                // App?.openGallery();
                // App?.getVersionName().then(data => {
                //     console.log(`versionName = ${data}`);
                // }).catch(e => {
                //     console.log(e);
                // });
                // App?.openGallery();
                const { version_name, version_code, debug } = App;
                console.log(`version_name = ${version_name}, version_code = ${version_code}, debug = ${debug}`);
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